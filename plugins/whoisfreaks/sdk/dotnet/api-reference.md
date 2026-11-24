# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [WhoisFreaksClient](src/WhoisFreaks/WhoisFreaksClient.cs)

## AsnWhois

> Source: [AsnWhois](src/WhoisFreaks/Api/AsnWhois.cs)

<details>
<summary><code>Task&lt;AsnWhoisResponse&gt; AsnWhoisInvoke(AsnWhoisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AsnWhois.AsnWhoisInvoke(new AsnWhoisRequest { Asn = "as15169" });
    // TODO: Handle 'response' of type AsnWhoisResponse
}
catch (ApiException<AsnWhoisError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AsnWhoisRequest](src/WhoisFreaks/Requests/AsnWhois/AsnWhoisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsnWhoisResponse](src/WhoisFreaks/Models/AsnWhoisResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[AsnWhoisError](src/WhoisFreaks/Errors/AsnWhoisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Account

> Source: [Account](src/WhoisFreaks/Api/Account.cs)

<details>
<summary><code>Task&lt;AccountUsageResponse&gt; AccountUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Account.AccountUsage();
    // TODO: Handle 'response' of type AccountUsageResponse
}
catch (ApiException<AccountUsageError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountUsageResponse](src/WhoisFreaks/Models/AccountUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[AccountUsageError](src/WhoisFreaks/Errors/AccountUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatabaseFileStatus&gt; DatabaseFileStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Account.DatabaseFileStatus();
    // TODO: Handle 'response' of type DatabaseFileStatus
}
catch (ApiException<DatabaseFileStatusError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatabaseFileStatus](src/WhoisFreaks/Models/DatabaseFileStatus.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DatabaseFileStatusError](src/WhoisFreaks/Errors/DatabaseFileStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; RotateApiKey(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Account.RotateApiKey();
    // TODO: Handle 'response' of type string
}
catch (ApiException<RotateApiKeyError> ex)
{
    if (ex.Error.TryGetString(out var error))
    {
        // TODO: Handle 'error' of type string
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[RotateApiKeyError](src/WhoisFreaks/Errors/RotateApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Dns

> Source: [Dns](src/WhoisFreaks/Api/Dns.cs)

<details>
<summary><code>Task&lt;BulkDnsResponse&gt; DnsBulk(DnsBulkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Dns.DnsBulk(new DnsBulkRequest
    {
        Type = "some example string",
        Body = new V20DnsBulkLiveRequest(),
    });
    // TODO: Handle 'response' of type BulkDnsResponse
}
catch (ApiException<DnsBulkError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DnsBulkRequest](src/WhoisFreaks/Requests/Dns/DnsBulkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkDnsResponse](src/WhoisFreaks/Models/BulkDnsResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DnsBulkError](src/WhoisFreaks/Errors/DnsBulkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;HistoricalDnsResponse&gt; DnsHistorical(DnsHistoricalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Dns.DnsHistorical(new DnsHistoricalRequest
    {
        DomainName = "some example string",
        Type = "some example string",
    });
    // TODO: Handle 'response' of type HistoricalDnsResponse
}
catch (ApiException<DnsHistoricalError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DnsHistoricalRequest](src/WhoisFreaks/Requests/Dns/DnsHistoricalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HistoricalDnsResponse](src/WhoisFreaks/Models/HistoricalDnsResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DnsHistoricalError](src/WhoisFreaks/Errors/DnsHistoricalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DnsResponse&gt; DnsLive(DnsLiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Dns.DnsLive(new DnsLiveRequest { Type = "some example string" });
    // TODO: Handle 'response' of type DnsResponse
}
catch (ApiException<DnsLiveError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DnsLiveRequest](src/WhoisFreaks/Requests/Dns/DnsLiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DnsResponse](src/WhoisFreaks/Models/DnsResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DnsLiveError](src/WhoisFreaks/Errors/DnsLiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReverseDnsResponse&gt; DnsReverse(DnsReverseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Dns.DnsReverse(new DnsReverseRequest
    {
        Value = "some example string",
        Type = TypeEnum.A,
    });
    // TODO: Handle 'response' of type ReverseDnsResponse
}
catch (ApiException<DnsReverseError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DnsReverseRequest](src/WhoisFreaks/Requests/Dns/DnsReverseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReverseDnsResponse](src/WhoisFreaks/Models/ReverseDnsResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DnsReverseError](src/WhoisFreaks/Errors/DnsReverseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesAsnWhois

> Source: [DatabasesAsnWhois](src/WhoisFreaks/Api/DatabasesAsnWhois.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DbAsnWhois(DbAsnWhoisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesAsnWhois.DbAsnWhois(new DbAsnWhoisRequest
    {
        Date = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbAsnWhoisError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbAsnWhoisRequest](src/WhoisFreaks/Requests/DatabasesAsnWhois/DbAsnWhoisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbAsnWhoisError](src/WhoisFreaks/Errors/DbAsnWhoisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SnapshotStatus&gt; DbAsnWhoisStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesAsnWhois.DbAsnWhoisStatus();
    // TODO: Handle 'response' of type SnapshotStatus
}
catch (ApiException<DbAsnWhoisStatusError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotStatus](src/WhoisFreaks/Models/SnapshotStatus.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbAsnWhoisStatusError](src/WhoisFreaks/Errors/DbAsnWhoisStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesDns

> Source: [DatabasesDns](src/WhoisFreaks/Api/DatabasesDns.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DbDnsDaily(DbDnsDailyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesDns.DbDnsDaily(new DbDnsDailyRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbDnsDailyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbDnsDailyRequest](src/WhoisFreaks/Requests/DatabasesDns/DbDnsDailyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbDnsDailyError](src/WhoisFreaks/Errors/DbDnsDailyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbDnsMonthly(DbDnsMonthlyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesDns.DbDnsMonthly(new DbDnsMonthlyRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbDnsMonthlyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbDnsMonthlyRequest](src/WhoisFreaks/Requests/DatabasesDns/DbDnsMonthlyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbDnsMonthlyError](src/WhoisFreaks/Errors/DbDnsMonthlyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbDnsWeekly(DbDnsWeeklyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesDns.DbDnsWeekly(new DbDnsWeeklyRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbDnsWeeklyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbDnsWeeklyRequest](src/WhoisFreaks/Requests/DatabasesDns/DbDnsWeeklyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbDnsWeeklyError](src/WhoisFreaks/Errors/DbDnsWeeklyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesExpiringDropped

> Source: [DatabasesExpiringDropped](src/WhoisFreaks/Api/DatabasesExpiringDropped.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DbDropped(DbDroppedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesExpiringDropped.DbDropped(new DbDroppedRequest { Whois = true });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbDroppedError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbDroppedRequest](src/WhoisFreaks/Requests/DatabasesExpiringDropped/DbDroppedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbDroppedError](src/WhoisFreaks/Errors/DbDroppedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbDroppedBacklinks(DbDroppedBacklinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesExpiringDropped.DbDroppedBacklinks(new DbDroppedBacklinksRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbDroppedBacklinksError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbDroppedBacklinksRequest](src/WhoisFreaks/Requests/DatabasesExpiringDropped/DbDroppedBacklinksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbDroppedBacklinksError](src/WhoisFreaks/Errors/DbDroppedBacklinksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;string&gt;&gt; DbDroppedJson(DbDroppedJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesExpiringDropped.DbDroppedJson(new DbDroppedJsonRequest());
    // TODO: Handle 'response' of type IReadOnlyList<string>
}
catch (ApiException<DbDroppedJsonError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbDroppedJsonRequest](src/WhoisFreaks/Requests/DatabasesExpiringDropped/DbDroppedJsonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbDroppedJsonError](src/WhoisFreaks/Errors/DbDroppedJsonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbExpired(DbExpiredRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesExpiringDropped.DbExpired(new DbExpiredRequest { Whois = true });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbExpiredError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbExpiredRequest](src/WhoisFreaks/Requests/DatabasesExpiringDropped/DbExpiredRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbExpiredError](src/WhoisFreaks/Errors/DbExpiredError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbExpiredCleaned(DbExpiredCleanedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesExpiringDropped.DbExpiredCleaned(new DbExpiredCleanedRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbExpiredCleanedError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbExpiredCleanedRequest](src/WhoisFreaks/Requests/DatabasesExpiringDropped/DbExpiredCleanedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbExpiredCleanedError](src/WhoisFreaks/Errors/DbExpiredCleanedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesIpGeolocation

> Source: [DatabasesIpGeolocation](src/WhoisFreaks/Api/DatabasesIpGeolocation.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DbIpCity(DbIpCityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesIpGeolocation.DbIpCity(new DbIpCityRequest
    {
        Date = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbIpCityError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbIpCityRequest](src/WhoisFreaks/Requests/DatabasesIpGeolocation/DbIpCityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbIpCityError](src/WhoisFreaks/Errors/DbIpCityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SnapshotStatus&gt; DbIpCityStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesIpGeolocation.DbIpCityStatus();
    // TODO: Handle 'response' of type SnapshotStatus
}
catch (ApiException<DbIpCityStatusError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotStatus](src/WhoisFreaks/Models/SnapshotStatus.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbIpCityStatusError](src/WhoisFreaks/Errors/DbIpCityStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbIpCountry(DbIpCountryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesIpGeolocation.DbIpCountry(new DbIpCountryRequest
    {
        Date = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbIpCountryError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbIpCountryRequest](src/WhoisFreaks/Requests/DatabasesIpGeolocation/DbIpCountryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbIpCountryError](src/WhoisFreaks/Errors/DbIpCountryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SnapshotStatus&gt; DbIpCountryStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesIpGeolocation.DbIpCountryStatus();
    // TODO: Handle 'response' of type SnapshotStatus
}
catch (ApiException<DbIpCountryStatusError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotStatus](src/WhoisFreaks/Models/SnapshotStatus.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbIpCountryStatusError](src/WhoisFreaks/Errors/DbIpCountryStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesIpSecurity

> Source: [DatabasesIpSecurity](src/WhoisFreaks/Api/DatabasesIpSecurity.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DbIpSecurity(DbIpSecurityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesIpSecurity.DbIpSecurity(new DbIpSecurityRequest
    {
        Date = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbIpSecurityError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbIpSecurityRequest](src/WhoisFreaks/Requests/DatabasesIpSecurity/DbIpSecurityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbIpSecurityError](src/WhoisFreaks/Errors/DbIpSecurityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SnapshotStatus&gt; DbIpSecurityStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesIpSecurity.DbIpSecurityStatus();
    // TODO: Handle 'response' of type SnapshotStatus
}
catch (ApiException<DbIpSecurityStatusError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotStatus](src/WhoisFreaks/Models/SnapshotStatus.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbIpSecurityStatusError](src/WhoisFreaks/Errors/DbIpSecurityStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesIpWhois

> Source: [DatabasesIpWhois](src/WhoisFreaks/Api/DatabasesIpWhois.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DbIpWhois(DbIpWhoisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesIpWhois.DbIpWhois(new DbIpWhoisRequest
    {
        Date = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbIpWhoisError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbIpWhoisRequest](src/WhoisFreaks/Requests/DatabasesIpWhois/DbIpWhoisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbIpWhoisError](src/WhoisFreaks/Errors/DbIpWhoisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SnapshotStatus&gt; DbIpWhoisStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesIpWhois.DbIpWhoisStatus();
    // TODO: Handle 'response' of type SnapshotStatus
}
catch (ApiException<DbIpWhoisStatusError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotStatus](src/WhoisFreaks/Models/SnapshotStatus.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbIpWhoisStatusError](src/WhoisFreaks/Errors/DbIpWhoisStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesNewlyRegistered

> Source: [DatabasesNewlyRegistered](src/WhoisFreaks/Api/DatabasesNewlyRegistered.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DbNewlyCctld(DbNewlyCctldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesNewlyRegistered.DbNewlyCctld(new DbNewlyCctldRequest { Whois = true });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbNewlyCctldError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbNewlyCctldRequest](src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyCctldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbNewlyCctldError](src/WhoisFreaks/Errors/DbNewlyCctldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbNewlyCctldCleaned(DbNewlyCctldCleanedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesNewlyRegistered.DbNewlyCctldCleaned(new DbNewlyCctldCleanedRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbNewlyCctldCleanedError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbNewlyCctldCleanedRequest](src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyCctldCleanedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbNewlyCctldCleanedError](src/WhoisFreaks/Errors/DbNewlyCctldCleanedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;string&gt;&gt; DbNewlyCctldJson(DbNewlyCctldJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesNewlyRegistered.DbNewlyCctldJson(new DbNewlyCctldJsonRequest());
    // TODO: Handle 'response' of type IReadOnlyList<string>
}
catch (ApiException<DbNewlyCctldJsonError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbNewlyCctldJsonRequest](src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyCctldJsonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbNewlyCctldJsonError](src/WhoisFreaks/Errors/DbNewlyCctldJsonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbNewlyDns(DbNewlyDnsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesNewlyRegistered.DbNewlyDns(new DbNewlyDnsRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbNewlyDnsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbNewlyDnsRequest](src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyDnsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbNewlyDnsError](src/WhoisFreaks/Errors/DbNewlyDnsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbNewlyGtld(DbNewlyGtldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesNewlyRegistered.DbNewlyGtld(new DbNewlyGtldRequest { Whois = true });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbNewlyGtldError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbNewlyGtldRequest](src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyGtldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbNewlyGtldError](src/WhoisFreaks/Errors/DbNewlyGtldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbNewlyGtldCleaned(DbNewlyGtldCleanedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesNewlyRegistered.DbNewlyGtldCleaned(new DbNewlyGtldCleanedRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbNewlyGtldCleanedError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbNewlyGtldCleanedRequest](src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyGtldCleanedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbNewlyGtldCleanedError](src/WhoisFreaks/Errors/DbNewlyGtldCleanedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;string&gt;&gt; DbNewlyGtldJson(DbNewlyGtldJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesNewlyRegistered.DbNewlyGtldJson(new DbNewlyGtldJsonRequest());
    // TODO: Handle 'response' of type IReadOnlyList<string>
}
catch (ApiException<DbNewlyGtldJsonError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbNewlyGtldJsonRequest](src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyGtldJsonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbNewlyGtldJsonError](src/WhoisFreaks/Errors/DbNewlyGtldJsonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesSubdomains

> Source: [DatabasesSubdomains](src/WhoisFreaks/Api/DatabasesSubdomains.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DbSubdomainsDaily(DbSubdomainsDailyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesSubdomains.DbSubdomainsDaily(new DbSubdomainsDailyRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbSubdomainsDailyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbSubdomainsDailyRequest](src/WhoisFreaks/Requests/DatabasesSubdomains/DbSubdomainsDailyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbSubdomainsDailyError](src/WhoisFreaks/Errors/DbSubdomainsDailyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbSubdomainsMonthly(DbSubdomainsMonthlyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesSubdomains.DbSubdomainsMonthly(new DbSubdomainsMonthlyRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbSubdomainsMonthlyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbSubdomainsMonthlyRequest](src/WhoisFreaks/Requests/DatabasesSubdomains/DbSubdomainsMonthlyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbSubdomainsMonthlyError](src/WhoisFreaks/Errors/DbSubdomainsMonthlyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbSubdomainsWeekly(DbSubdomainsWeeklyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesSubdomains.DbSubdomainsWeekly(new DbSubdomainsWeeklyRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbSubdomainsWeeklyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbSubdomainsWeeklyRequest](src/WhoisFreaks/Requests/DatabasesSubdomains/DbSubdomainsWeeklyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbSubdomainsWeeklyError](src/WhoisFreaks/Errors/DbSubdomainsWeeklyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesThreatFeed

> Source: [DatabasesThreatFeed](src/WhoisFreaks/Api/DatabasesThreatFeed.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadThreatFeedMalware(DownloadThreatFeedMalwareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatabasesThreatFeed.DownloadThreatFeedMalware(new DownloadThreatFeedMalwareRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DownloadThreatFeedMalwareRequest](src/WhoisFreaks/Requests/DatabasesThreatFeed/DownloadThreatFeedMalwareRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[RawError](src/WhoisFreaks/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadThreatFeedMalwareSample(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatabasesThreatFeed.DownloadThreatFeedMalwareSample();
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[RawError](src/WhoisFreaks/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadThreatFeedPhishing(DownloadThreatFeedPhishingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatabasesThreatFeed.DownloadThreatFeedPhishing(new DownloadThreatFeedPhishingRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DownloadThreatFeedPhishingRequest](src/WhoisFreaks/Requests/DatabasesThreatFeed/DownloadThreatFeedPhishingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[RawError](src/WhoisFreaks/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadThreatFeedPhishingSample(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatabasesThreatFeed.DownloadThreatFeedPhishingSample();
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[RawError](src/WhoisFreaks/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadThreatFeedSpam(DownloadThreatFeedSpamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatabasesThreatFeed.DownloadThreatFeedSpam(new DownloadThreatFeedSpamRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DownloadThreatFeedSpamRequest](src/WhoisFreaks/Requests/DatabasesThreatFeed/DownloadThreatFeedSpamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[RawError](src/WhoisFreaks/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadThreatFeedSpamSample(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatabasesThreatFeed.DownloadThreatFeedSpamSample();
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[RawError](src/WhoisFreaks/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesWhois

> Source: [DatabasesWhois](src/WhoisFreaks/Api/DatabasesWhois.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; DbWhoisDaily(DbWhoisDailyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesWhois.DbWhoisDaily(new DbWhoisDailyRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbWhoisDailyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbWhoisDailyRequest](src/WhoisFreaks/Requests/DatabasesWhois/DbWhoisDailyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbWhoisDailyError](src/WhoisFreaks/Errors/DbWhoisDailyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbWhoisMonthly(DbWhoisMonthlyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesWhois.DbWhoisMonthly(new DbWhoisMonthlyRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbWhoisMonthlyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbWhoisMonthlyRequest](src/WhoisFreaks/Requests/DatabasesWhois/DbWhoisMonthlyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbWhoisMonthlyError](src/WhoisFreaks/Errors/DbWhoisMonthlyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DbWhoisWeekly(DbWhoisWeeklyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DatabasesWhois.DbWhoisWeekly(new DbWhoisWeeklyRequest());
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DbWhoisWeeklyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DbWhoisWeeklyRequest](src/WhoisFreaks/Requests/DatabasesWhois/DbWhoisWeeklyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DbWhoisWeeklyError](src/WhoisFreaks/Errors/DbWhoisWeeklyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DomainAvailability

> Source: [DomainAvailability](src/WhoisFreaks/Api/DomainAvailability.cs)

<details>
<summary><code>Task&lt;BulkDomainAvailabilityResponse&gt; BulkDomainAvailabilityV2(BulkDomainAvailabilityV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DomainAvailability.BulkDomainAvailabilityV2(new BulkDomainAvailabilityV2Request
    {
        Domain = "google.com",
        Body = new BulkDomainAvailabilityRequest(),
    });
    // TODO: Handle 'response' of type BulkDomainAvailabilityResponse
}
catch (ApiException<BulkDomainAvailabilityV2Error> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkDomainAvailabilityV2Request](src/WhoisFreaks/Requests/DomainAvailability/BulkDomainAvailabilityV2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkDomainAvailabilityResponse](src/WhoisFreaks/Models/BulkDomainAvailabilityResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[BulkDomainAvailabilityV2Error](src/WhoisFreaks/Errors/BulkDomainAvailabilityV2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DomainAvailabilityResponse&gt; DomainAvailabilityV2(DomainAvailabilityV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DomainAvailability.DomainAvailabilityV2(new DomainAvailabilityV2Request
    {
        Domain = "google.com",
    });
    // TODO: Handle 'response' of type DomainAvailabilityResponse
}
catch (ApiException<DomainAvailabilityV2Error> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DomainAvailabilityV2Request](src/WhoisFreaks/Requests/DomainAvailability/DomainAvailabilityV2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainAvailabilityResponse](src/WhoisFreaks/Models/DomainAvailabilityResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DomainAvailabilityV2Error](src/WhoisFreaks/Errors/DomainAvailabilityV2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DomainReputation

> Source: [DomainReputation](src/WhoisFreaks/Api/DomainReputation.cs)

<details>
<summary><code>Task&lt;DomainReputationResponse&gt; DomainReputationInvoke(DomainReputationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DomainReputation.DomainReputationInvoke(new DomainReputationRequest
    {
        DomainName = "amazon.com",
    });
    // TODO: Handle 'response' of type DomainReputationResponse
}
catch (ApiException<DomainReputationError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DomainReputationRequest](src/WhoisFreaks/Requests/DomainReputation/DomainReputationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainReputationResponse](src/WhoisFreaks/Models/DomainReputationResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[DomainReputationError](src/WhoisFreaks/Errors/DomainReputationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Geolocation

> Source: [Geolocation](src/WhoisFreaks/Api/Geolocation.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;GeolocationResponse&gt;&gt; BulkGeolocation(BulkGeolocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Geolocation.BulkGeolocation(new BulkGeolocationRequest
    {
        Body = new V10GeolocationRequest { Ips = ["some example string"] },
    });
    // TODO: Handle 'response' of type IReadOnlyList<GeolocationResponse>
}
catch (ApiException<BulkGeolocationError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkGeolocationRequest](src/WhoisFreaks/Requests/Geolocation/BulkGeolocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[GeolocationResponse](src/WhoisFreaks/Models/GeolocationResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[BulkGeolocationError](src/WhoisFreaks/Errors/BulkGeolocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeolocationResponse&gt; GeolocationInvoke(GeolocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Geolocation.GeolocationInvoke(new GeolocationRequest { Ip = "some example string" });
    // TODO: Handle 'response' of type GeolocationResponse
}
catch (ApiException<GeolocationError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GeolocationRequest](src/WhoisFreaks/Requests/Geolocation/GeolocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeolocationResponse](src/WhoisFreaks/Models/GeolocationResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[GeolocationError](src/WhoisFreaks/Errors/GeolocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IpReputation

> Source: [IpReputation](src/WhoisFreaks/Api/IpReputation.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;IpReputationResponse&gt;&gt; BulkIpReputation(BulkIpReputationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.IpReputation.BulkIpReputation(new BulkIpReputationRequest
    {
        Body = new V10SecurityRequest { Ips = ["some example string"] },
    });
    // TODO: Handle 'response' of type IReadOnlyList<IpReputationResponse>
}
catch (ApiException<BulkIpReputationError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkIpReputationRequest](src/WhoisFreaks/Requests/IpReputation/BulkIpReputationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[IpReputationResponse](src/WhoisFreaks/Models/IpReputationResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[BulkIpReputationError](src/WhoisFreaks/Errors/BulkIpReputationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IpReputationResponse&gt; IpReputationInvoke(IpReputationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.IpReputation.IpReputationInvoke(new IpReputationRequest { Ip = "some example string" });
    // TODO: Handle 'response' of type IpReputationResponse
}
catch (ApiException<IpReputationError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IpReputationRequest](src/WhoisFreaks/Requests/IpReputation/IpReputationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpReputationResponse](src/WhoisFreaks/Models/IpReputationResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[IpReputationError](src/WhoisFreaks/Errors/IpReputationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IpWhois

> Source: [IpWhois](src/WhoisFreaks/Api/IpWhois.cs)

<details>
<summary><code>Task&lt;IpWhoisResponse&gt; IpWhoisInvoke(IpWhoisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.IpWhois.IpWhoisInvoke(new IpWhoisRequest { Ip = "some example string" });
    // TODO: Handle 'response' of type IpWhoisResponse
}
catch (ApiException<IpWhoisError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IpWhoisRequest](src/WhoisFreaks/Requests/IpWhois/IpWhoisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpWhoisResponse](src/WhoisFreaks/Models/IpWhoisResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[IpWhoisError](src/WhoisFreaks/Errors/IpWhoisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Ssl

> Source: [Ssl](src/WhoisFreaks/Api/Ssl.cs)

<details>
<summary><code>Task&lt;SslResponse&gt; SslLookup(SslLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Ssl.SslLookup(new SslLookupRequest { DomainName = "some example string" });
    // TODO: Handle 'response' of type SslResponse
}
catch (ApiException<SslLookupError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SslLookupRequest](src/WhoisFreaks/Requests/Ssl/SslLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SslResponse](src/WhoisFreaks/Models/SslResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[SslLookupError](src/WhoisFreaks/Errors/SslLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subdomains

> Source: [Subdomains](src/WhoisFreaks/Api/Subdomains.cs)

<details>
<summary><code>Task&lt;SubdomainsResponse&gt; SubdomainsInvoke(SubdomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Subdomains.SubdomainsInvoke(new SubdomainsRequest { Domain = "some example string" });
    // TODO: Handle 'response' of type SubdomainsResponse
}
catch (ApiException<SubdomainsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SubdomainsRequest](src/WhoisFreaks/Requests/Subdomains/SubdomainsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubdomainsResponse](src/WhoisFreaks/Models/SubdomainsResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[SubdomainsError](src/WhoisFreaks/Errors/SubdomainsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Typosquatting

> Source: [Typosquatting](src/WhoisFreaks/Api/Typosquatting.cs)

<details>
<summary><code>Task&lt;TyposquattingResponse&gt; TyposquattingInvoke(TyposquattingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Typosquatting.TyposquattingInvoke(new TyposquattingRequest());
    // TODO: Handle 'response' of type TyposquattingResponse
}
catch (ApiException<TyposquattingError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TyposquattingRequest](src/WhoisFreaks/Requests/Typosquatting/TyposquattingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TyposquattingResponse](src/WhoisFreaks/Models/TyposquattingResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[TyposquattingError](src/WhoisFreaks/Errors/TyposquattingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Whois

> Source: [Whois](src/WhoisFreaks/Api/Whois.cs)

<details>
<summary><code>Task&lt;BulkWhoisResponse&gt; BulkWhois(BulkWhoisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Whois.BulkWhois(new BulkWhoisRequest
    {
        Body = new V20BulkwhoisLiveRequest { DomainNames = ["some example string"] },
    });
    // TODO: Handle 'response' of type BulkWhoisResponse
}
catch (ApiException<BulkWhoisError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkWhoisRequest](src/WhoisFreaks/Requests/Whois/BulkWhoisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkWhoisResponse](src/WhoisFreaks/Models/BulkWhoisResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[BulkWhoisError](src/WhoisFreaks/Errors/BulkWhoisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WhoisHistoricalResponse&gt; WhoisHistory(WhoisHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Whois.WhoisHistory(new WhoisHistoryRequest { DomainName = "some example string" });
    // TODO: Handle 'response' of type WhoisHistoricalResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WhoisHistoryRequest](src/WhoisFreaks/Requests/Whois/WhoisHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WhoisHistoricalResponse](src/WhoisFreaks/Models/WhoisHistoricalResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[RawError](src/WhoisFreaks/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WhoisResponse&gt; WhoisLive(WhoisLiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Whois.WhoisLive(new WhoisLiveRequest { DomainName = "whoisfreaks.com" });
    // TODO: Handle 'response' of type WhoisResponse
}
catch (ApiException<WhoisLiveError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WhoisLiveRequest](src/WhoisFreaks/Requests/Whois/WhoisLiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WhoisResponse](src/WhoisFreaks/Models/WhoisResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[WhoisLiveError](src/WhoisFreaks/Errors/WhoisLiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReverseWhoisResponse&gt; WhoisReverse(WhoisReverseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Whois.WhoisReverse(new WhoisReverseRequest { Keyword = "some example string" });
    // TODO: Handle 'response' of type ReverseWhoisResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WhoisReverseRequest](src/WhoisFreaks/Requests/Whois/WhoisReverseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReverseWhoisResponse](src/WhoisFreaks/Models/ReverseWhoisResponse.cs)</code>

**OnError**: <code>[ApiException](src/WhoisFreaks/Core/Exceptions/ApiException.cs)&lt;[RawError](src/WhoisFreaks/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

