# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [WhoisFreaksClient](whois_freaks/client.py)

## AsnWhois

> Source: [AsnWhois](whois_freaks/apis/asn_whois.py)

<details>
<summary><code>def asn_whois(asn: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AsnWhoisResponse, AsnWhoisErrorBody]</code></summary>

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
result = client.asn_whois.with_raw_response.asn_whois("as15169")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsnWhoisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AsnWhoisErrorBody
```

**Async**

```python
result = await async_client.asn_whois.with_raw_response.asn_whois("as15169")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsnWhoisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AsnWhoisErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[AsnWhoisResponse](whois_freaks/models/asn_whois_response.py), [AsnWhoisErrorBody](whois_freaks/errors/asn_whois_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AsnWhoisResponse](whois_freaks/models/asn_whois_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AsnWhoisErrorBody](whois_freaks/errors/asn_whois_error.py)</code>

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
<summary><code>def account_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountUsageResponse, AccountUsageErrorBody]</code></summary>

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
result = client.account.with_raw_response.account_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AccountUsageErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.account_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AccountUsageErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[AccountUsageResponse](whois_freaks/models/account_usage_response.py), [AccountUsageErrorBody](whois_freaks/errors/account_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountUsageResponse](whois_freaks/models/account_usage_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AccountUsageErrorBody](whois_freaks/errors/account_usage_error.py)</code>

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
<summary><code>def database_file_status(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatabaseFileStatus, DatabaseFileStatusErrorBody]</code></summary>

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
result = client.account.with_raw_response.database_file_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatabaseFileStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatabaseFileStatusErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.database_file_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatabaseFileStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatabaseFileStatusErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[DatabaseFileStatus](whois_freaks/models/database_file_status.py), [DatabaseFileStatusErrorBody](whois_freaks/errors/database_file_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatabaseFileStatus](whois_freaks/models/database_file_status.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatabaseFileStatusErrorBody](whois_freaks/errors/database_file_status_error.py)</code>

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
<summary><code>def rotate_api_key(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, RotateApiKeyErrorBody]</code></summary>

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
result = client.account.with_raw_response.rotate_api_key()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RotateApiKeyErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.rotate_api_key()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RotateApiKeyErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;str, [RotateApiKeyErrorBody](whois_freaks/errors/rotate_api_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>str</code> -- Key rotated

**On `Failure`**: `error` is <code>[RotateApiKeyErrorBody](whois_freaks/errors/rotate_api_key_error.py)</code>

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
<summary><code>def dns_bulk(body: V20DnsBulkLiveRequest | V20DnsBulkLiveRequestDict, *, type_: str = "all", format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkDnsResponse, DnsBulkErrorBody]</code></summary>

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
result = client.dns.with_raw_response.dns_bulk(V20DnsBulkLiveRequest(), type_="some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkDnsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnsBulkErrorBody
```

**Async**

```python
result = await async_client.dns.with_raw_response.dns_bulk(V20DnsBulkLiveRequest(), type_="some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkDnsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnsBulkErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[BulkDnsResponse](whois_freaks/models/bulk_dns_response.py), [DnsBulkErrorBody](whois_freaks/errors/dns_bulk_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkDnsResponse](whois_freaks/models/bulk_dns_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DnsBulkErrorBody](whois_freaks/errors/dns_bulk_error.py)</code>

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
<summary><code>def dns_historical(domain_name: str, *, type_: str = "all", page: int | None = 1, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[HistoricalDnsResponse, DnsHistoricalErrorBody]</code></summary>

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
result = client.dns.with_raw_response.dns_historical("some example string", type_="some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HistoricalDnsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnsHistoricalErrorBody
```

**Async**

```python
result = await async_client.dns.with_raw_response.dns_historical("some example string", type_="some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HistoricalDnsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnsHistoricalErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[HistoricalDnsResponse](whois_freaks/models/historical_dns_response.py), [DnsHistoricalErrorBody](whois_freaks/errors/dns_historical_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[HistoricalDnsResponse](whois_freaks/models/historical_dns_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DnsHistoricalErrorBody](whois_freaks/errors/dns_historical_error.py)</code>

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
<summary><code>def dns_live(*, type_: str = "all", domain_name: str | None = None, ip_address: str | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DnsResponse, DnsLiveErrorBody]</code></summary>

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
result = client.dns.with_raw_response.dns_live(type_="some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DnsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnsLiveErrorBody
```

**Async**

```python
result = await async_client.dns.with_raw_response.dns_live(type_="some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DnsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnsLiveErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[DnsResponse](whois_freaks/models/dns_response.py), [DnsLiveErrorBody](whois_freaks/errors/dns_live_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DnsResponse](whois_freaks/models/dns_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DnsLiveErrorBody](whois_freaks/errors/dns_live_error.py)</code>

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
<summary><code>def dns_reverse(value: str, type_: TypeOrStr, *, exact: bool | None = True, page: int | None = 1, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReverseDnsResponse, DnsReverseErrorBody]</code></summary>

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
result = client.dns.with_raw_response.dns_reverse("some example string", Type.A)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReverseDnsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnsReverseErrorBody
```

**Async**

```python
result = await async_client.dns.with_raw_response.dns_reverse("some example string", Type.A)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReverseDnsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnsReverseErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[ReverseDnsResponse](whois_freaks/models/reverse_dns_response.py), [DnsReverseErrorBody](whois_freaks/errors/dns_reverse_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReverseDnsResponse](whois_freaks/models/reverse_dns_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DnsReverseErrorBody](whois_freaks/errors/dns_reverse_error.py)</code>

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
<summary><code>def db_asn_whois(date: Date, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbAsnWhoisErrorBody]</code></summary>

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
result = client.databases_asn_whois.with_raw_response.db_asn_whois(date(2024, 1, 15))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbAsnWhoisErrorBody
```

**Async**

```python
result = await async_client.databases_asn_whois.with_raw_response.db_asn_whois(date(2024, 1, 15))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbAsnWhoisErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbAsnWhoisErrorBody](whois_freaks/errors/db_asn_whois_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- JSON gzipped

**On `Failure`**: `error` is <code>[DbAsnWhoisErrorBody](whois_freaks/errors/db_asn_whois_error.py)</code>

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
<summary><code>def db_asn_whois_status(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SnapshotStatus, DbAsnWhoisStatusErrorBody]</code></summary>

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
result = client.databases_asn_whois.with_raw_response.db_asn_whois_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SnapshotStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbAsnWhoisStatusErrorBody
```

**Async**

```python
result = await async_client.databases_asn_whois.with_raw_response.db_asn_whois_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SnapshotStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbAsnWhoisStatusErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[SnapshotStatus](whois_freaks/models/snapshot_status.py), [DbAsnWhoisStatusErrorBody](whois_freaks/errors/db_asn_whois_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SnapshotStatus](whois_freaks/models/snapshot_status.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DbAsnWhoisStatusErrorBody](whois_freaks/errors/db_asn_whois_status_error.py)</code>

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
<summary><code>def db_dns_daily(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbDnsDailyErrorBody]</code></summary>

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
result = client.databases_dns.with_raw_response.db_dns_daily()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDnsDailyErrorBody
```

**Async**

```python
result = await async_client.databases_dns.with_raw_response.db_dns_daily()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDnsDailyErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbDnsDailyErrorBody](whois_freaks/errors/db_dns_daily_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbDnsDailyErrorBody](whois_freaks/errors/db_dns_daily_error.py)</code>

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
<summary><code>def db_dns_monthly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbDnsMonthlyErrorBody]</code></summary>

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
result = client.databases_dns.with_raw_response.db_dns_monthly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDnsMonthlyErrorBody
```

**Async**

```python
result = await async_client.databases_dns.with_raw_response.db_dns_monthly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDnsMonthlyErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbDnsMonthlyErrorBody](whois_freaks/errors/db_dns_monthly_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbDnsMonthlyErrorBody](whois_freaks/errors/db_dns_monthly_error.py)</code>

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
<summary><code>def db_dns_weekly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbDnsWeeklyErrorBody]</code></summary>

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
result = client.databases_dns.with_raw_response.db_dns_weekly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDnsWeeklyErrorBody
```

**Async**

```python
result = await async_client.databases_dns.with_raw_response.db_dns_weekly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDnsWeeklyErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbDnsWeeklyErrorBody](whois_freaks/errors/db_dns_weekly_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbDnsWeeklyErrorBody](whois_freaks/errors/db_dns_weekly_error.py)</code>

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
<summary><code>def db_dropped(whois: bool, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbDroppedErrorBody]</code></summary>

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
result = client.databases_expiring_dropped.with_raw_response.db_dropped(True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDroppedErrorBody
```

**Async**

```python
result = await async_client.databases_expiring_dropped.with_raw_response.db_dropped(True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDroppedErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbDroppedErrorBody](whois_freaks/errors/db_dropped_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbDroppedErrorBody](whois_freaks/errors/db_dropped_error.py)</code>

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
<summary><code>def db_dropped_backlinks(*, whois: bool | None = None, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbDroppedBacklinksErrorBody]</code></summary>

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
result = client.databases_expiring_dropped.with_raw_response.db_dropped_backlinks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDroppedBacklinksErrorBody
```

**Async**

```python
result = await async_client.databases_expiring_dropped.with_raw_response.db_dropped_backlinks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDroppedBacklinksErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbDroppedBacklinksErrorBody](whois_freaks/errors/db_dropped_backlinks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbDroppedBacklinksErrorBody](whois_freaks/errors/db_dropped_backlinks_error.py)</code>

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
<summary><code>def db_dropped_json(*, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[str], DbDroppedJsonErrorBody]</code></summary>

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
result = client.databases_expiring_dropped.with_raw_response.db_dropped_json()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDroppedJsonErrorBody
```

**Async**

```python
result = await async_client.databases_expiring_dropped.with_raw_response.db_dropped_json()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbDroppedJsonErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;list&#91;str&#93;, [DbDroppedJsonErrorBody](whois_freaks/errors/db_dropped_json_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;str&#93;</code> -- JSON array of domains

**On `Failure`**: `error` is <code>[DbDroppedJsonErrorBody](whois_freaks/errors/db_dropped_json_error.py)</code>

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
<summary><code>def db_expired(whois: bool, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbExpiredErrorBody]</code></summary>

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
result = client.databases_expiring_dropped.with_raw_response.db_expired(True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbExpiredErrorBody
```

**Async**

```python
result = await async_client.databases_expiring_dropped.with_raw_response.db_expired(True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbExpiredErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbExpiredErrorBody](whois_freaks/errors/db_expired_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbExpiredErrorBody](whois_freaks/errors/db_expired_error.py)</code>

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
<summary><code>def db_expired_cleaned(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbExpiredCleanedErrorBody]</code></summary>

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
result = client.databases_expiring_dropped.with_raw_response.db_expired_cleaned()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbExpiredCleanedErrorBody
```

**Async**

```python
result = await async_client.databases_expiring_dropped.with_raw_response.db_expired_cleaned()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbExpiredCleanedErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbExpiredCleanedErrorBody](whois_freaks/errors/db_expired_cleaned_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbExpiredCleanedErrorBody](whois_freaks/errors/db_expired_cleaned_error.py)</code>

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
<summary><code>def db_ip_city(date: Date, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbIpCityErrorBody]</code></summary>

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
result = client.databases_ip_geolocation.with_raw_response.db_ip_city(date(2024, 1, 15))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpCityErrorBody
```

**Async**

```python
result = await async_client.databases_ip_geolocation.with_raw_response.db_ip_city(date(2024, 1, 15))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpCityErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbIpCityErrorBody](whois_freaks/errors/db_ip_city_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- ZIP archive

**On `Failure`**: `error` is <code>[DbIpCityErrorBody](whois_freaks/errors/db_ip_city_error.py)</code>

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
<summary><code>def db_ip_city_status(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SnapshotStatus, DbIpCityStatusErrorBody]</code></summary>

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
result = client.databases_ip_geolocation.with_raw_response.db_ip_city_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SnapshotStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpCityStatusErrorBody
```

**Async**

```python
result = await async_client.databases_ip_geolocation.with_raw_response.db_ip_city_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SnapshotStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpCityStatusErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[SnapshotStatus](whois_freaks/models/snapshot_status.py), [DbIpCityStatusErrorBody](whois_freaks/errors/db_ip_city_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SnapshotStatus](whois_freaks/models/snapshot_status.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DbIpCityStatusErrorBody](whois_freaks/errors/db_ip_city_status_error.py)</code>

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
<summary><code>def db_ip_country(date: Date, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbIpCountryErrorBody]</code></summary>

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
result = client.databases_ip_geolocation.with_raw_response.db_ip_country(date(2024, 1, 15))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpCountryErrorBody
```

**Async**

```python
result = await async_client.databases_ip_geolocation.with_raw_response.db_ip_country(date(2024, 1, 15))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpCountryErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbIpCountryErrorBody](whois_freaks/errors/db_ip_country_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- ZIP archive

**On `Failure`**: `error` is <code>[DbIpCountryErrorBody](whois_freaks/errors/db_ip_country_error.py)</code>

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
<summary><code>def db_ip_country_status(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SnapshotStatus, DbIpCountryStatusErrorBody]</code></summary>

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
result = client.databases_ip_geolocation.with_raw_response.db_ip_country_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SnapshotStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpCountryStatusErrorBody
```

**Async**

```python
result = await async_client.databases_ip_geolocation.with_raw_response.db_ip_country_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SnapshotStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpCountryStatusErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[SnapshotStatus](whois_freaks/models/snapshot_status.py), [DbIpCountryStatusErrorBody](whois_freaks/errors/db_ip_country_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SnapshotStatus](whois_freaks/models/snapshot_status.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DbIpCountryStatusErrorBody](whois_freaks/errors/db_ip_country_status_error.py)</code>

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
<summary><code>def db_ip_security(date: Date, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbIpSecurityErrorBody]</code></summary>

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
result = client.databases_ip_security.with_raw_response.db_ip_security(date(2024, 1, 15))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpSecurityErrorBody
```

**Async**

```python
result = await async_client.databases_ip_security.with_raw_response.db_ip_security(date(2024, 1, 15))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpSecurityErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbIpSecurityErrorBody](whois_freaks/errors/db_ip_security_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbIpSecurityErrorBody](whois_freaks/errors/db_ip_security_error.py)</code>

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
<summary><code>def db_ip_security_status(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SnapshotStatus, DbIpSecurityStatusErrorBody]</code></summary>

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
result = client.databases_ip_security.with_raw_response.db_ip_security_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SnapshotStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpSecurityStatusErrorBody
```

**Async**

```python
result = await async_client.databases_ip_security.with_raw_response.db_ip_security_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SnapshotStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpSecurityStatusErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[SnapshotStatus](whois_freaks/models/snapshot_status.py), [DbIpSecurityStatusErrorBody](whois_freaks/errors/db_ip_security_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SnapshotStatus](whois_freaks/models/snapshot_status.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DbIpSecurityStatusErrorBody](whois_freaks/errors/db_ip_security_status_error.py)</code>

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
<summary><code>def db_ip_whois(date: Date, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbIpWhoisErrorBody]</code></summary>

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
result = client.databases_ip_whois.with_raw_response.db_ip_whois(date(2024, 1, 15))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpWhoisErrorBody
```

**Async**

```python
result = await async_client.databases_ip_whois.with_raw_response.db_ip_whois(date(2024, 1, 15))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpWhoisErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbIpWhoisErrorBody](whois_freaks/errors/db_ip_whois_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- JSON gzipped

**On `Failure`**: `error` is <code>[DbIpWhoisErrorBody](whois_freaks/errors/db_ip_whois_error.py)</code>

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
<summary><code>def db_ip_whois_status(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SnapshotStatus, DbIpWhoisStatusErrorBody]</code></summary>

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
result = client.databases_ip_whois.with_raw_response.db_ip_whois_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SnapshotStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpWhoisStatusErrorBody
```

**Async**

```python
result = await async_client.databases_ip_whois.with_raw_response.db_ip_whois_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SnapshotStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbIpWhoisStatusErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[SnapshotStatus](whois_freaks/models/snapshot_status.py), [DbIpWhoisStatusErrorBody](whois_freaks/errors/db_ip_whois_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SnapshotStatus](whois_freaks/models/snapshot_status.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DbIpWhoisStatusErrorBody](whois_freaks/errors/db_ip_whois_status_error.py)</code>

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
<summary><code>def db_newly_cctld(whois: bool, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbNewlyCctldErrorBody]</code></summary>

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
result = client.databases_newly_registered.with_raw_response.db_newly_cctld(True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyCctldErrorBody
```

**Async**

```python
result = await async_client.databases_newly_registered.with_raw_response.db_newly_cctld(True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyCctldErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbNewlyCctldErrorBody](whois_freaks/errors/db_newly_cctld_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbNewlyCctldErrorBody](whois_freaks/errors/db_newly_cctld_error.py)</code>

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
<summary><code>def db_newly_cctld_cleaned(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbNewlyCctldCleanedErrorBody]</code></summary>

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
result = client.databases_newly_registered.with_raw_response.db_newly_cctld_cleaned()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyCctldCleanedErrorBody
```

**Async**

```python
result = await async_client.databases_newly_registered.with_raw_response.db_newly_cctld_cleaned()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyCctldCleanedErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbNewlyCctldCleanedErrorBody](whois_freaks/errors/db_newly_cctld_cleaned_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbNewlyCctldCleanedErrorBody](whois_freaks/errors/db_newly_cctld_cleaned_error.py)</code>

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
<summary><code>def db_newly_cctld_json(*, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[str], DbNewlyCctldJsonErrorBody]</code></summary>

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
result = client.databases_newly_registered.with_raw_response.db_newly_cctld_json()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyCctldJsonErrorBody
```

**Async**

```python
result = await async_client.databases_newly_registered.with_raw_response.db_newly_cctld_json()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyCctldJsonErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;list&#91;str&#93;, [DbNewlyCctldJsonErrorBody](whois_freaks/errors/db_newly_cctld_json_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;str&#93;</code> -- JSON array of domains

**On `Failure`**: `error` is <code>[DbNewlyCctldJsonErrorBody](whois_freaks/errors/db_newly_cctld_json_error.py)</code>

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
<summary><code>def db_newly_dns(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbNewlyDnsErrorBody]</code></summary>

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
result = client.databases_newly_registered.with_raw_response.db_newly_dns()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyDnsErrorBody
```

**Async**

```python
result = await async_client.databases_newly_registered.with_raw_response.db_newly_dns()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyDnsErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbNewlyDnsErrorBody](whois_freaks/errors/db_newly_dns_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- JSON array of domains with DNS

**On `Failure`**: `error` is <code>[DbNewlyDnsErrorBody](whois_freaks/errors/db_newly_dns_error.py)</code>

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
<summary><code>def db_newly_gtld(whois: bool, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbNewlyGtldErrorBody]</code></summary>

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
result = client.databases_newly_registered.with_raw_response.db_newly_gtld(True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyGtldErrorBody
```

**Async**

```python
result = await async_client.databases_newly_registered.with_raw_response.db_newly_gtld(True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyGtldErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbNewlyGtldErrorBody](whois_freaks/errors/db_newly_gtld_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbNewlyGtldErrorBody](whois_freaks/errors/db_newly_gtld_error.py)</code>

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
<summary><code>def db_newly_gtld_cleaned(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbNewlyGtldCleanedErrorBody]</code></summary>

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
result = client.databases_newly_registered.with_raw_response.db_newly_gtld_cleaned()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyGtldCleanedErrorBody
```

**Async**

```python
result = await async_client.databases_newly_registered.with_raw_response.db_newly_gtld_cleaned()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyGtldCleanedErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbNewlyGtldCleanedErrorBody](whois_freaks/errors/db_newly_gtld_cleaned_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbNewlyGtldCleanedErrorBody](whois_freaks/errors/db_newly_gtld_cleaned_error.py)</code>

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
<summary><code>def db_newly_gtld_json(*, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[str], DbNewlyGtldJsonErrorBody]</code></summary>

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
result = client.databases_newly_registered.with_raw_response.db_newly_gtld_json()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyGtldJsonErrorBody
```

**Async**

```python
result = await async_client.databases_newly_registered.with_raw_response.db_newly_gtld_json()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[str]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbNewlyGtldJsonErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;list&#91;str&#93;, [DbNewlyGtldJsonErrorBody](whois_freaks/errors/db_newly_gtld_json_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;str&#93;</code> -- JSON array of domains

**On `Failure`**: `error` is <code>[DbNewlyGtldJsonErrorBody](whois_freaks/errors/db_newly_gtld_json_error.py)</code>

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
<summary><code>def db_subdomains_daily(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbSubdomainsDailyErrorBody]</code></summary>

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
result = client.databases_subdomains.with_raw_response.db_subdomains_daily()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbSubdomainsDailyErrorBody
```

**Async**

```python
result = await async_client.databases_subdomains.with_raw_response.db_subdomains_daily()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbSubdomainsDailyErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbSubdomainsDailyErrorBody](whois_freaks/errors/db_subdomains_daily_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbSubdomainsDailyErrorBody](whois_freaks/errors/db_subdomains_daily_error.py)</code>

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
<summary><code>def db_subdomains_monthly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbSubdomainsMonthlyErrorBody]</code></summary>

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
result = client.databases_subdomains.with_raw_response.db_subdomains_monthly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbSubdomainsMonthlyErrorBody
```

**Async**

```python
result = await async_client.databases_subdomains.with_raw_response.db_subdomains_monthly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbSubdomainsMonthlyErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbSubdomainsMonthlyErrorBody](whois_freaks/errors/db_subdomains_monthly_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbSubdomainsMonthlyErrorBody](whois_freaks/errors/db_subdomains_monthly_error.py)</code>

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
<summary><code>def db_subdomains_weekly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbSubdomainsWeeklyErrorBody]</code></summary>

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
result = client.databases_subdomains.with_raw_response.db_subdomains_weekly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbSubdomainsWeeklyErrorBody
```

**Async**

```python
result = await async_client.databases_subdomains.with_raw_response.db_subdomains_weekly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbSubdomainsWeeklyErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbSubdomainsWeeklyErrorBody](whois_freaks/errors/db_subdomains_weekly_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbSubdomainsWeeklyErrorBody](whois_freaks/errors/db_subdomains_weekly_error.py)</code>

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
<summary><code>def download_threat_feed_malware(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.databases_threat_feed.with_raw_response.download_threat_feed_malware()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.databases_threat_feed.with_raw_response.download_threat_feed_malware()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [RawError](whois_freaks/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Malware threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

**On `Failure`**: `error` is <code>[RawError](whois_freaks/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_threat_feed_malware_sample(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.databases_threat_feed.with_raw_response.download_threat_feed_malware_sample()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.databases_threat_feed.with_raw_response.download_threat_feed_malware_sample()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [RawError](whois_freaks/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Sample malware threat feed as CSV

**On `Failure`**: `error` is <code>[RawError](whois_freaks/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_threat_feed_phishing(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.databases_threat_feed.with_raw_response.download_threat_feed_phishing()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.databases_threat_feed.with_raw_response.download_threat_feed_phishing()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [RawError](whois_freaks/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Phishing threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

**On `Failure`**: `error` is <code>[RawError](whois_freaks/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_threat_feed_phishing_sample(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.databases_threat_feed.with_raw_response.download_threat_feed_phishing_sample()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.databases_threat_feed.with_raw_response.download_threat_feed_phishing_sample()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [RawError](whois_freaks/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Sample phishing threat feed as CSV

**On `Failure`**: `error` is <code>[RawError](whois_freaks/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_threat_feed_spam(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.databases_threat_feed.with_raw_response.download_threat_feed_spam()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.databases_threat_feed.with_raw_response.download_threat_feed_spam()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [RawError](whois_freaks/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Spam threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

**On `Failure`**: `error` is <code>[RawError](whois_freaks/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_threat_feed_spam_sample(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.databases_threat_feed.with_raw_response.download_threat_feed_spam_sample()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.databases_threat_feed.with_raw_response.download_threat_feed_spam_sample()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [RawError](whois_freaks/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Sample spam threat feed as CSV

**On `Failure`**: `error` is <code>[RawError](whois_freaks/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesWhois

> Source: [DatabasesWhois](whois_freaks/apis/databases_whois.py)

<details>
<summary><code>def db_whois_daily(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbWhoisDailyErrorBody]</code></summary>

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
result = client.databases_whois.with_raw_response.db_whois_daily()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbWhoisDailyErrorBody
```

**Async**

```python
result = await async_client.databases_whois.with_raw_response.db_whois_daily()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbWhoisDailyErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbWhoisDailyErrorBody](whois_freaks/errors/db_whois_daily_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbWhoisDailyErrorBody](whois_freaks/errors/db_whois_daily_error.py)</code>

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
<summary><code>def db_whois_monthly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbWhoisMonthlyErrorBody]</code></summary>

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
result = client.databases_whois.with_raw_response.db_whois_monthly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbWhoisMonthlyErrorBody
```

**Async**

```python
result = await async_client.databases_whois.with_raw_response.db_whois_monthly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbWhoisMonthlyErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbWhoisMonthlyErrorBody](whois_freaks/errors/db_whois_monthly_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbWhoisMonthlyErrorBody](whois_freaks/errors/db_whois_monthly_error.py)</code>

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
<summary><code>def db_whois_weekly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DbWhoisWeeklyErrorBody]</code></summary>

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
result = client.databases_whois.with_raw_response.db_whois_weekly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbWhoisWeeklyErrorBody
```

**Async**

```python
result = await async_client.databases_whois.with_raw_response.db_whois_weekly()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DbWhoisWeeklyErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;FileResponse, [DbWhoisWeeklyErrorBody](whois_freaks/errors/db_whois_weekly_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- CSV

**On `Failure`**: `error` is <code>[DbWhoisWeeklyErrorBody](whois_freaks/errors/db_whois_weekly_error.py)</code>

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
<summary><code>def bulk_domain_availability_v2(body: BulkDomainAvailabilityRequest | BulkDomainAvailabilityRequestDict, *, domain: str | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkDomainAvailabilityResponse, BulkDomainAvailabilityV2ErrorBody]</code></summary>

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
result = client.domain_availability.with_raw_response.bulk_domain_availability_v2(
    BulkDomainAvailabilityRequest(), domain="google.com"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkDomainAvailabilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkDomainAvailabilityV2ErrorBody
```

**Async**

```python
result = await async_client.domain_availability.with_raw_response.bulk_domain_availability_v2(
    BulkDomainAvailabilityRequest(), domain="google.com"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkDomainAvailabilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkDomainAvailabilityV2ErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[BulkDomainAvailabilityResponse](whois_freaks/models/bulk_domain_availability_response.py), [BulkDomainAvailabilityV2ErrorBody](whois_freaks/errors/bulk_domain_availability_v2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkDomainAvailabilityResponse](whois_freaks/models/bulk_domain_availability_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[BulkDomainAvailabilityV2ErrorBody](whois_freaks/errors/bulk_domain_availability_v2_error.py)</code>

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
<summary><code>def domain_availability_v2(domain: str, *, sug: bool | None = False, count: int | None = 5, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DomainAvailabilityResponse, DomainAvailabilityV2ErrorBody]</code></summary>

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
result = client.domain_availability.with_raw_response.domain_availability_v2("google.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DomainAvailabilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DomainAvailabilityV2ErrorBody
```

**Async**

```python
result = await async_client.domain_availability.with_raw_response.domain_availability_v2("google.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DomainAvailabilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DomainAvailabilityV2ErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[DomainAvailabilityResponse](whois_freaks/models/domain_availability_response.py), [DomainAvailabilityV2ErrorBody](whois_freaks/errors/domain_availability_v2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DomainAvailabilityResponse](whois_freaks/models/domain_availability_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DomainAvailabilityV2ErrorBody](whois_freaks/errors/domain_availability_v2_error.py)</code>

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
<summary><code>def domain_reputation(domain_name: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DomainReputationResponse, DomainReputationErrorBody]</code></summary>

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
result = client.domain_reputation.with_raw_response.domain_reputation("amazon.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DomainReputationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DomainReputationErrorBody
```

**Async**

```python
result = await async_client.domain_reputation.with_raw_response.domain_reputation("amazon.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DomainReputationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DomainReputationErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[DomainReputationResponse](whois_freaks/models/domain_reputation_response.py), [DomainReputationErrorBody](whois_freaks/errors/domain_reputation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DomainReputationResponse](whois_freaks/models/domain_reputation_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DomainReputationErrorBody](whois_freaks/errors/domain_reputation_error.py)</code>

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
<summary><code>def bulk_geolocation(body: V10GeolocationRequest | V10GeolocationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[GeolocationResponse], BulkGeolocationErrorBody]</code></summary>

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
result = client.geolocation.with_raw_response.bulk_geolocation(V10GeolocationRequest(ips=["some example string"]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[GeolocationResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkGeolocationErrorBody
```

**Async**

```python
result = await async_client.geolocation.with_raw_response.bulk_geolocation(
    V10GeolocationRequest(ips=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[GeolocationResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkGeolocationErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;list&#91;[GeolocationResponse](whois_freaks/models/geolocation_response.py)&#93;, [BulkGeolocationErrorBody](whois_freaks/errors/bulk_geolocation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[GeolocationResponse](whois_freaks/models/geolocation_response.py)&#93;</code> -- Successful response

**On `Failure`**: `error` is <code>[BulkGeolocationErrorBody](whois_freaks/errors/bulk_geolocation_error.py)</code>

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
<summary><code>def geolocation(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeolocationResponse, GeolocationErrorBody]</code></summary>

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
result = client.geolocation.with_raw_response.geolocation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeolocationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GeolocationErrorBody
```

**Async**

```python
result = await async_client.geolocation.with_raw_response.geolocation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeolocationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GeolocationErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[GeolocationResponse](whois_freaks/models/geolocation_response.py), [GeolocationErrorBody](whois_freaks/errors/geolocation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeolocationResponse](whois_freaks/models/geolocation_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GeolocationErrorBody](whois_freaks/errors/geolocation_error.py)</code>

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
<summary><code>def bulk_ip_reputation(body: V10SecurityRequest | V10SecurityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[IpReputationResponse], BulkIpReputationErrorBody]</code></summary>

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
result = client.ip_reputation.with_raw_response.bulk_ip_reputation(V10SecurityRequest(ips=["some example string"]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IpReputationResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkIpReputationErrorBody
```

**Async**

```python
result = await async_client.ip_reputation.with_raw_response.bulk_ip_reputation(
    V10SecurityRequest(ips=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IpReputationResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkIpReputationErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;list&#91;[IpReputationResponse](whois_freaks/models/ip_reputation_response.py)&#93;, [BulkIpReputationErrorBody](whois_freaks/errors/bulk_ip_reputation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[IpReputationResponse](whois_freaks/models/ip_reputation_response.py)&#93;</code> -- Successful response

**On `Failure`**: `error` is <code>[BulkIpReputationErrorBody](whois_freaks/errors/bulk_ip_reputation_error.py)</code>

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
<summary><code>def ip_reputation(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IpReputationResponse, IpReputationErrorBody]</code></summary>

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
result = client.ip_reputation.with_raw_response.ip_reputation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IpReputationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IpReputationErrorBody
```

**Async**

```python
result = await async_client.ip_reputation.with_raw_response.ip_reputation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IpReputationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IpReputationErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[IpReputationResponse](whois_freaks/models/ip_reputation_response.py), [IpReputationErrorBody](whois_freaks/errors/ip_reputation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IpReputationResponse](whois_freaks/models/ip_reputation_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[IpReputationErrorBody](whois_freaks/errors/ip_reputation_error.py)</code>

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
<summary><code>def ip_whois(ip: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IpWhoisResponse, IpWhoisErrorBody]</code></summary>

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
result = client.ip_whois.with_raw_response.ip_whois("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IpWhoisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IpWhoisErrorBody
```

**Async**

```python
result = await async_client.ip_whois.with_raw_response.ip_whois("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IpWhoisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IpWhoisErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[IpWhoisResponse](whois_freaks/models/ip_whois_response.py), [IpWhoisErrorBody](whois_freaks/errors/ip_whois_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IpWhoisResponse](whois_freaks/models/ip_whois_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[IpWhoisErrorBody](whois_freaks/errors/ip_whois_error.py)</code>

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
<summary><code>def ssl_lookup(domain_name: str, *, chain: bool | None = False, ssl_raw: bool | None = False, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SslResponse, SslLookupErrorBody]</code></summary>

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
result = client.ssl.with_raw_response.ssl_lookup("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SslResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SslLookupErrorBody
```

**Async**

```python
result = await async_client.ssl.with_raw_response.ssl_lookup("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SslResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SslLookupErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[SslResponse](whois_freaks/models/ssl_response.py), [SslLookupErrorBody](whois_freaks/errors/ssl_lookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SslResponse](whois_freaks/models/ssl_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SslLookupErrorBody](whois_freaks/errors/ssl_lookup_error.py)</code>

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
<summary><code>def subdomains(domain: str, *, after: Date | None = None, before: Date | None = None, status: StatusOrStr | None = None, page: int | None = 1, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SubdomainsResponse, SubdomainsErrorBody]</code></summary>

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
result = client.subdomains.with_raw_response.subdomains("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubdomainsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubdomainsErrorBody
```

**Async**

```python
result = await async_client.subdomains.with_raw_response.subdomains("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubdomainsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubdomainsErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[SubdomainsResponse](whois_freaks/models/subdomains_response.py), [SubdomainsErrorBody](whois_freaks/errors/subdomains_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SubdomainsResponse](whois_freaks/models/subdomains_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SubdomainsErrorBody](whois_freaks/errors/subdomains_error.py)</code>

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
<summary><code>def typosquatting(*, keyword: str | None = None, pattern: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TyposquattingResponse, TyposquattingErrorBody]</code></summary>

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
result = client.typosquatting.with_raw_response.typosquatting()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TyposquattingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TyposquattingErrorBody
```

**Async**

```python
result = await async_client.typosquatting.with_raw_response.typosquatting()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TyposquattingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TyposquattingErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[TyposquattingResponse](whois_freaks/models/typosquatting_response.py), [TyposquattingErrorBody](whois_freaks/errors/typosquatting_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TyposquattingResponse](whois_freaks/models/typosquatting_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TyposquattingErrorBody](whois_freaks/errors/typosquatting_error.py)</code>

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
<summary><code>def bulk_whois(body: V20BulkwhoisLiveRequest | V20BulkwhoisLiveRequestDict, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkWhoisResponse, BulkWhoisErrorBody]</code></summary>

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
result = client.whois.with_raw_response.bulk_whois(V20BulkwhoisLiveRequest(domain_names=["some example string"]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkWhoisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkWhoisErrorBody
```

**Async**

```python
result = await async_client.whois.with_raw_response.bulk_whois(
    V20BulkwhoisLiveRequest(domain_names=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkWhoisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkWhoisErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[BulkWhoisResponse](whois_freaks/models/bulk_whois_response.py), [BulkWhoisErrorBody](whois_freaks/errors/bulk_whois_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkWhoisResponse](whois_freaks/models/bulk_whois_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[BulkWhoisErrorBody](whois_freaks/errors/bulk_whois_error.py)</code>

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
<summary><code>def whois_history(domain_name: str, *, page: int | None = None, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WhoisHistoricalResponse, RawError]</code></summary>

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
result = client.whois.with_raw_response.whois_history("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WhoisHistoricalResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.whois.with_raw_response.whois_history("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WhoisHistoricalResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[WhoisHistoricalResponse](whois_freaks/models/whois_historical_response.py), [RawError](whois_freaks/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[WhoisHistoricalResponse](whois_freaks/models/whois_historical_response.py)</code> -- Historical WHOIS records

**On `Failure`**: `error` is <code>[RawError](whois_freaks/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def whois_live(domain_name: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WhoisResponse, WhoisLiveErrorBody]</code></summary>

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
result = client.whois.with_raw_response.whois_live("whoisfreaks.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WhoisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WhoisLiveErrorBody
```

**Async**

```python
result = await async_client.whois.with_raw_response.whois_live("whoisfreaks.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WhoisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WhoisLiveErrorBody
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[WhoisResponse](whois_freaks/models/whois_response.py), [WhoisLiveErrorBody](whois_freaks/errors/whois_live_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WhoisResponse](whois_freaks/models/whois_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[WhoisLiveErrorBody](whois_freaks/errors/whois_live_error.py)</code>

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
<summary><code>def whois_reverse(keyword: str, *, page: int | None = None, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReverseWhoisResponse, RawError]</code></summary>

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
result = client.whois.with_raw_response.whois_reverse("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReverseWhoisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.whois.with_raw_response.whois_reverse("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReverseWhoisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](whois_freaks/core/results.py)&#91;[ReverseWhoisResponse](whois_freaks/models/reverse_whois_response.py), [RawError](whois_freaks/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReverseWhoisResponse](whois_freaks/models/reverse_whois_response.py)</code> -- Reverse WHOIS results (paginated)

**On `Failure`**: `error` is <code>[RawError](whois_freaks/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

