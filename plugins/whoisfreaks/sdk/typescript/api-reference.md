# Reference

> Source: [WhoisFreaksClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>accountUsage(options?: RequestOptions): ApiPromise&lt;AccountUsageResponse, Account.AccountUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Account Usage. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.accountUsage();
  // TODO: Handle 'response' of type AccountUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.AccountUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.accountUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountUsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.accountUsage()`

- **OnSuccess**: <code>[AccountUsageResponse](src/models/account-usage-response.ts)</code>
- **OnError**: throws <code>[Account.AccountUsageError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.accountUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountUsageResponse, Account.AccountUsageError&gt;</code>, with `result.value` of type <code>[AccountUsageResponse](src/models/account-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>databaseFileStatus(options?: RequestOptions): ApiPromise&lt;DatabaseFileStatus, Account.DatabaseFileStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

No API key required. Returns freshness of all downloadable files.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.databaseFileStatus();
  // TODO: Handle 'response' of type DatabaseFileStatus
} catch (err) {
  // TODO: Handle 'err' of type Account.DatabaseFileStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.databaseFileStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatabaseFileStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.databaseFileStatus()`

- **OnSuccess**: <code>[DatabaseFileStatus](src/models/database-file-status.ts)</code>
- **OnError**: throws <code>[Account.DatabaseFileStatusError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.databaseFileStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatabaseFileStatus, Account.DatabaseFileStatusError&gt;</code>, with `result.value` of type <code>[DatabaseFileStatus](src/models/database-file-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rotateApiKey(options?: RequestOptions): ApiPromise&lt;string, Account.RotateApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rotate API Key. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.rotateApiKey();
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Account.RotateApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.rotateApiKey().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.rotateApiKey()`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Account.RotateApiKeyError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.rotateApiKey().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Account.RotateApiKeyError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AsnWhois

> Source: [AsnWhois](src/resources/asn-whois.ts)

<details>
<summary><code>asnWhois(request: AsnWhois.AsnWhoisRequest, options?: RequestOptions): ApiPromise&lt;AsnWhoisResponse, AsnWhois.AsnWhoisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WHOIS for an ASN. 1 credit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.asnWhois.asnWhois({ asn: "as15169" });
  // TODO: Handle 'response' of type AsnWhoisResponse
} catch (err) {
  // TODO: Handle 'err' of type AsnWhois.AsnWhoisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.asnWhois.asnWhois({ asn: "as15169" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsnWhoisResponse
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
| <code>asn</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.asnWhois.asnWhois(request)`

- **OnSuccess**: <code>[AsnWhoisResponse](src/models/asn-whois-response.ts)</code>
- **OnError**: throws <code>[AsnWhois.AsnWhoisError](src/resources/asn-whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.asnWhois.asnWhois(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsnWhoisResponse, AsnWhois.AsnWhoisError&gt;</code>, with `result.value` of type <code>[AsnWhoisResponse](src/models/asn-whois-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesAsnWhois

> Source: [DatabasesAsnWhois](src/resources/databases-asn-whois.ts)

<details>
<summary><code>dbAsnWhois(request: DatabasesAsnWhois.DbAsnWhoisRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesAsnWhois.DbAsnWhoisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ASN WHOIS Snapshot. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesAsnWhois.dbAsnWhois({ date: "2024-01-15" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesAsnWhois.DbAsnWhoisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesAsnWhois.dbAsnWhois({ date: "2024-01-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date</code> | <code>string</code> (date) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesAsnWhois.dbAsnWhois(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesAsnWhois.DbAsnWhoisError](src/resources/databases-asn-whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesAsnWhois.dbAsnWhois(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesAsnWhois.DbAsnWhoisError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbAsnWhoisStatus(options?: RequestOptions): ApiPromise&lt;SnapshotStatus, DatabasesAsnWhois.DbAsnWhoisStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ASN WHOIS Snapshot Status. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesAsnWhois.dbAsnWhoisStatus();
  // TODO: Handle 'response' of type SnapshotStatus
} catch (err) {
  // TODO: Handle 'err' of type DatabasesAsnWhois.DbAsnWhoisStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesAsnWhois.dbAsnWhoisStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SnapshotStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesAsnWhois.dbAsnWhoisStatus()`

- **OnSuccess**: <code>[SnapshotStatus](src/models/snapshot-status.ts)</code>
- **OnError**: throws <code>[DatabasesAsnWhois.DbAsnWhoisStatusError](src/resources/databases-asn-whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesAsnWhois.dbAsnWhoisStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SnapshotStatus, DatabasesAsnWhois.DbAsnWhoisStatusError&gt;</code>, with `result.value` of type <code>[SnapshotStatus](src/models/snapshot-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesDns

> Source: [DatabasesDns](src/resources/databases-dns.ts)

<details>
<summary><code>dbDnsDaily(request?: DatabasesDns.DbDnsDailyRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesDns.DbDnsDailyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DNS Database Daily. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesDns.dbDnsDaily();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesDns.DbDnsDailyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesDns.dbDnsDaily().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesDns.dbDnsDaily(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesDns.DbDnsDailyError](src/resources/databases-dns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesDns.dbDnsDaily(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesDns.DbDnsDailyError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbDnsMonthly(request?: DatabasesDns.DbDnsMonthlyRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesDns.DbDnsMonthlyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DNS Database Monthly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesDns.dbDnsMonthly();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesDns.DbDnsMonthlyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesDns.dbDnsMonthly().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesDns.dbDnsMonthly(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesDns.DbDnsMonthlyError](src/resources/databases-dns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesDns.dbDnsMonthly(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesDns.DbDnsMonthlyError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbDnsWeekly(request?: DatabasesDns.DbDnsWeeklyRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesDns.DbDnsWeeklyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DNS Database Weekly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesDns.dbDnsWeekly();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesDns.DbDnsWeeklyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesDns.dbDnsWeekly().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesDns.dbDnsWeekly(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesDns.DbDnsWeeklyError](src/resources/databases-dns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesDns.dbDnsWeekly(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesDns.DbDnsWeeklyError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesExpiringDropped

> Source: [DatabasesExpiringDropped](src/resources/databases-expiring-dropped.ts)

<details>
<summary><code>dbDropped(request: DatabasesExpiringDropped.DbDroppedRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesExpiringDropped.DbDroppedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dropped Domains. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesExpiringDropped.dbDropped({ whois: true });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesExpiringDropped.DbDroppedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesExpiringDropped.dbDropped({ whois: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>whois</code> | <code>boolean</code> | - |
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesExpiringDropped.dbDropped(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesExpiringDropped.DbDroppedError](src/resources/databases-expiring-dropped.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesExpiringDropped.dbDropped(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesExpiringDropped.DbDroppedError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbDroppedBacklinks(request?: DatabasesExpiringDropped.DbDroppedBacklinksRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesExpiringDropped.DbDroppedBacklinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dropped With Backlinks. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesExpiringDropped.dbDroppedBacklinks();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesExpiringDropped.DbDroppedBacklinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesExpiringDropped.dbDroppedBacklinks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>whois?</code> | <code>boolean</code> | - |
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesExpiringDropped.dbDroppedBacklinks(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesExpiringDropped.DbDroppedBacklinksError](src/resources/databases-expiring-dropped.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesExpiringDropped.dbDroppedBacklinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesExpiringDropped.DbDroppedBacklinksError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbDroppedJson(request?: DatabasesExpiringDropped.DbDroppedJsonRequest, options?: RequestOptions): ApiPromise&lt;string[], DatabasesExpiringDropped.DbDroppedJsonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dropped Domains (JSON). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesExpiringDropped.dbDroppedJson();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type DatabasesExpiringDropped.DbDroppedJsonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesExpiringDropped.dbDroppedJson().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |
| <code>tlds?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesExpiringDropped.dbDroppedJson(request)`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[DatabasesExpiringDropped.DbDroppedJsonError](src/resources/databases-expiring-dropped.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesExpiringDropped.dbDroppedJson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], DatabasesExpiringDropped.DbDroppedJsonError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbExpired(request: DatabasesExpiringDropped.DbExpiredRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesExpiringDropped.DbExpiredError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expiring Domains. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesExpiringDropped.dbExpired({ whois: true });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesExpiringDropped.DbExpiredError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesExpiringDropped.dbExpired({ whois: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>whois</code> | <code>boolean</code> | - |
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesExpiringDropped.dbExpired(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesExpiringDropped.DbExpiredError](src/resources/databases-expiring-dropped.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesExpiringDropped.dbExpired(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesExpiringDropped.DbExpiredError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbExpiredCleaned(request?: DatabasesExpiringDropped.DbExpiredCleanedRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesExpiringDropped.DbExpiredCleanedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expiring Cleaned WHOIS. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesExpiringDropped.dbExpiredCleaned();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesExpiringDropped.DbExpiredCleanedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesExpiringDropped.dbExpiredCleaned().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesExpiringDropped.dbExpiredCleaned(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesExpiringDropped.DbExpiredCleanedError](src/resources/databases-expiring-dropped.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesExpiringDropped.dbExpiredCleaned(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesExpiringDropped.DbExpiredCleanedError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesIpGeolocation

> Source: [DatabasesIpGeolocation](src/resources/databases-ip-geolocation.ts)

<details>
<summary><code>dbIpCity(request: DatabasesIpGeolocation.DbIpCityRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesIpGeolocation.DbIpCityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP to City Snapshot. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesIpGeolocation.dbIpCity({ date: "2024-01-15" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesIpGeolocation.DbIpCityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesIpGeolocation.dbIpCity({ date: "2024-01-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date</code> | <code>string</code> (date) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesIpGeolocation.dbIpCity(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesIpGeolocation.DbIpCityError](src/resources/databases-ip-geolocation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesIpGeolocation.dbIpCity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesIpGeolocation.DbIpCityError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbIpCityStatus(options?: RequestOptions): ApiPromise&lt;SnapshotStatus, DatabasesIpGeolocation.DbIpCityStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP to City Snapshot Status. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesIpGeolocation.dbIpCityStatus();
  // TODO: Handle 'response' of type SnapshotStatus
} catch (err) {
  // TODO: Handle 'err' of type DatabasesIpGeolocation.DbIpCityStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesIpGeolocation.dbIpCityStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SnapshotStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesIpGeolocation.dbIpCityStatus()`

- **OnSuccess**: <code>[SnapshotStatus](src/models/snapshot-status.ts)</code>
- **OnError**: throws <code>[DatabasesIpGeolocation.DbIpCityStatusError](src/resources/databases-ip-geolocation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesIpGeolocation.dbIpCityStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SnapshotStatus, DatabasesIpGeolocation.DbIpCityStatusError&gt;</code>, with `result.value` of type <code>[SnapshotStatus](src/models/snapshot-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbIpCountry(request: DatabasesIpGeolocation.DbIpCountryRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesIpGeolocation.DbIpCountryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP to Country Snapshot. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesIpGeolocation.dbIpCountry({ date: "2024-01-15" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesIpGeolocation.DbIpCountryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesIpGeolocation.dbIpCountry({ date: "2024-01-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date</code> | <code>string</code> (date) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesIpGeolocation.dbIpCountry(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesIpGeolocation.DbIpCountryError](src/resources/databases-ip-geolocation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesIpGeolocation.dbIpCountry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesIpGeolocation.DbIpCountryError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbIpCountryStatus(options?: RequestOptions): ApiPromise&lt;SnapshotStatus, DatabasesIpGeolocation.DbIpCountryStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP to Country Snapshot Status. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesIpGeolocation.dbIpCountryStatus();
  // TODO: Handle 'response' of type SnapshotStatus
} catch (err) {
  // TODO: Handle 'err' of type DatabasesIpGeolocation.DbIpCountryStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesIpGeolocation.dbIpCountryStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SnapshotStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesIpGeolocation.dbIpCountryStatus()`

- **OnSuccess**: <code>[SnapshotStatus](src/models/snapshot-status.ts)</code>
- **OnError**: throws <code>[DatabasesIpGeolocation.DbIpCountryStatusError](src/resources/databases-ip-geolocation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesIpGeolocation.dbIpCountryStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SnapshotStatus, DatabasesIpGeolocation.DbIpCountryStatusError&gt;</code>, with `result.value` of type <code>[SnapshotStatus](src/models/snapshot-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesIpSecurity

> Source: [DatabasesIpSecurity](src/resources/databases-ip-security.ts)

<details>
<summary><code>dbIpSecurity(request: DatabasesIpSecurity.DbIpSecurityRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesIpSecurity.DbIpSecurityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP Security Snapshot. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesIpSecurity.dbIpSecurity({ date: "2024-01-15" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesIpSecurity.DbIpSecurityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesIpSecurity.dbIpSecurity({ date: "2024-01-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date</code> | <code>string</code> (date) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesIpSecurity.dbIpSecurity(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesIpSecurity.DbIpSecurityError](src/resources/databases-ip-security.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesIpSecurity.dbIpSecurity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesIpSecurity.DbIpSecurityError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbIpSecurityStatus(options?: RequestOptions): ApiPromise&lt;SnapshotStatus, DatabasesIpSecurity.DbIpSecurityStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP Security Snapshot Status. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesIpSecurity.dbIpSecurityStatus();
  // TODO: Handle 'response' of type SnapshotStatus
} catch (err) {
  // TODO: Handle 'err' of type DatabasesIpSecurity.DbIpSecurityStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesIpSecurity.dbIpSecurityStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SnapshotStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesIpSecurity.dbIpSecurityStatus()`

- **OnSuccess**: <code>[SnapshotStatus](src/models/snapshot-status.ts)</code>
- **OnError**: throws <code>[DatabasesIpSecurity.DbIpSecurityStatusError](src/resources/databases-ip-security.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesIpSecurity.dbIpSecurityStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SnapshotStatus, DatabasesIpSecurity.DbIpSecurityStatusError&gt;</code>, with `result.value` of type <code>[SnapshotStatus](src/models/snapshot-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesIpWhois

> Source: [DatabasesIpWhois](src/resources/databases-ip-whois.ts)

<details>
<summary><code>dbIpWhois(request: DatabasesIpWhois.DbIpWhoisRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesIpWhois.DbIpWhoisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP WHOIS Snapshot. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesIpWhois.dbIpWhois({ date: "2024-01-15" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesIpWhois.DbIpWhoisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesIpWhois.dbIpWhois({ date: "2024-01-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date</code> | <code>string</code> (date) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesIpWhois.dbIpWhois(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesIpWhois.DbIpWhoisError](src/resources/databases-ip-whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesIpWhois.dbIpWhois(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesIpWhois.DbIpWhoisError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbIpWhoisStatus(options?: RequestOptions): ApiPromise&lt;SnapshotStatus, DatabasesIpWhois.DbIpWhoisStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP WHOIS Snapshot Status. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesIpWhois.dbIpWhoisStatus();
  // TODO: Handle 'response' of type SnapshotStatus
} catch (err) {
  // TODO: Handle 'err' of type DatabasesIpWhois.DbIpWhoisStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesIpWhois.dbIpWhoisStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SnapshotStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesIpWhois.dbIpWhoisStatus()`

- **OnSuccess**: <code>[SnapshotStatus](src/models/snapshot-status.ts)</code>
- **OnError**: throws <code>[DatabasesIpWhois.DbIpWhoisStatusError](src/resources/databases-ip-whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesIpWhois.dbIpWhoisStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SnapshotStatus, DatabasesIpWhois.DbIpWhoisStatusError&gt;</code>, with `result.value` of type <code>[SnapshotStatus](src/models/snapshot-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesNewlyRegistered

> Source: [DatabasesNewlyRegistered](src/resources/databases-newly-registered.ts)

<details>
<summary><code>dbNewlyCctld(request: DatabasesNewlyRegistered.DbNewlyCctldRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesNewlyRegistered.DbNewlyCctldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered ccTLD (CSV). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesNewlyRegistered.dbNewlyCctld({ whois: true });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesNewlyRegistered.DbNewlyCctldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesNewlyRegistered.dbNewlyCctld({ whois: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>whois</code> | <code>boolean</code> | - |
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |
| <code>tlds?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesNewlyRegistered.dbNewlyCctld(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesNewlyRegistered.DbNewlyCctldError](src/resources/databases-newly-registered.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesNewlyRegistered.dbNewlyCctld(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesNewlyRegistered.DbNewlyCctldError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbNewlyCctldCleaned(request?: DatabasesNewlyRegistered.DbNewlyCctldCleanedRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesNewlyRegistered.DbNewlyCctldCleanedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered ccTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesNewlyRegistered.dbNewlyCctldCleaned();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesNewlyRegistered.DbNewlyCctldCleanedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesNewlyRegistered.dbNewlyCctldCleaned().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesNewlyRegistered.dbNewlyCctldCleaned(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesNewlyRegistered.DbNewlyCctldCleanedError](src/resources/databases-newly-registered.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesNewlyRegistered.dbNewlyCctldCleaned(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesNewlyRegistered.DbNewlyCctldCleanedError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbNewlyCctldJson(request?: DatabasesNewlyRegistered.DbNewlyCctldJsonRequest, options?: RequestOptions): ApiPromise&lt;string[], DatabasesNewlyRegistered.DbNewlyCctldJsonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered ccTLD (JSON). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesNewlyRegistered.dbNewlyCctldJson();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type DatabasesNewlyRegistered.DbNewlyCctldJsonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesNewlyRegistered.dbNewlyCctldJson().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |
| <code>tlds?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesNewlyRegistered.dbNewlyCctldJson(request)`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[DatabasesNewlyRegistered.DbNewlyCctldJsonError](src/resources/databases-newly-registered.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesNewlyRegistered.dbNewlyCctldJson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], DatabasesNewlyRegistered.DbNewlyCctldJsonError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbNewlyDns(request?: DatabasesNewlyRegistered.DbNewlyDnsRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesNewlyRegistered.DbNewlyDnsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered With DNS. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesNewlyRegistered.dbNewlyDns();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesNewlyRegistered.DbNewlyDnsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesNewlyRegistered.dbNewlyDns().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesNewlyRegistered.dbNewlyDns(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesNewlyRegistered.DbNewlyDnsError](src/resources/databases-newly-registered.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesNewlyRegistered.dbNewlyDns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesNewlyRegistered.DbNewlyDnsError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbNewlyGtld(request: DatabasesNewlyRegistered.DbNewlyGtldRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesNewlyRegistered.DbNewlyGtldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered gTLD (CSV). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesNewlyRegistered.dbNewlyGtld({ whois: true });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesNewlyRegistered.DbNewlyGtldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesNewlyRegistered.dbNewlyGtld({ whois: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>whois</code> | <code>boolean</code> | - |
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |
| <code>tlds?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesNewlyRegistered.dbNewlyGtld(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesNewlyRegistered.DbNewlyGtldError](src/resources/databases-newly-registered.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesNewlyRegistered.dbNewlyGtld(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesNewlyRegistered.DbNewlyGtldError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbNewlyGtldCleaned(request?: DatabasesNewlyRegistered.DbNewlyGtldCleanedRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesNewlyRegistered.DbNewlyGtldCleanedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered gTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesNewlyRegistered.dbNewlyGtldCleaned();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesNewlyRegistered.DbNewlyGtldCleanedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesNewlyRegistered.dbNewlyGtldCleaned().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesNewlyRegistered.dbNewlyGtldCleaned(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesNewlyRegistered.DbNewlyGtldCleanedError](src/resources/databases-newly-registered.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesNewlyRegistered.dbNewlyGtldCleaned(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesNewlyRegistered.DbNewlyGtldCleanedError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbNewlyGtldJson(request?: DatabasesNewlyRegistered.DbNewlyGtldJsonRequest, options?: RequestOptions): ApiPromise&lt;string[], DatabasesNewlyRegistered.DbNewlyGtldJsonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered gTLD (JSON). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesNewlyRegistered.dbNewlyGtldJson();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type DatabasesNewlyRegistered.DbNewlyGtldJsonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesNewlyRegistered.dbNewlyGtldJson().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |
| <code>tlds?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesNewlyRegistered.dbNewlyGtldJson(request)`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[DatabasesNewlyRegistered.DbNewlyGtldJsonError](src/resources/databases-newly-registered.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesNewlyRegistered.dbNewlyGtldJson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], DatabasesNewlyRegistered.DbNewlyGtldJsonError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesSubdomains

> Source: [DatabasesSubdomains](src/resources/databases-subdomains.ts)

<details>
<summary><code>dbSubdomainsDaily(request?: DatabasesSubdomains.DbSubdomainsDailyRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesSubdomains.DbSubdomainsDailyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subdomains Daily. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesSubdomains.dbSubdomainsDaily();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesSubdomains.DbSubdomainsDailyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesSubdomains.dbSubdomainsDaily().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesSubdomains.dbSubdomainsDaily(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesSubdomains.DbSubdomainsDailyError](src/resources/databases-subdomains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesSubdomains.dbSubdomainsDaily(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesSubdomains.DbSubdomainsDailyError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbSubdomainsMonthly(request?: DatabasesSubdomains.DbSubdomainsMonthlyRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesSubdomains.DbSubdomainsMonthlyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subdomains Monthly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesSubdomains.dbSubdomainsMonthly();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesSubdomains.DbSubdomainsMonthlyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesSubdomains.dbSubdomainsMonthly().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesSubdomains.dbSubdomainsMonthly(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesSubdomains.DbSubdomainsMonthlyError](src/resources/databases-subdomains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesSubdomains.dbSubdomainsMonthly(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesSubdomains.DbSubdomainsMonthlyError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbSubdomainsWeekly(request?: DatabasesSubdomains.DbSubdomainsWeeklyRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesSubdomains.DbSubdomainsWeeklyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subdomains Weekly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesSubdomains.dbSubdomainsWeekly();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesSubdomains.DbSubdomainsWeeklyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesSubdomains.dbSubdomainsWeekly().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesSubdomains.dbSubdomainsWeekly(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesSubdomains.DbSubdomainsWeeklyError](src/resources/databases-subdomains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesSubdomains.dbSubdomainsWeekly(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesSubdomains.DbSubdomainsWeeklyError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesThreatFeed

> Source: [DatabasesThreatFeed](src/resources/databases-threat-feed.ts)

<details>
<summary><code>downloadThreatFeedMalware(request?: DatabasesThreatFeed.DownloadThreatFeedMalwareRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesThreatFeed.downloadThreatFeedMalware();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesThreatFeed.downloadThreatFeedMalware().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date?</code> | <code>string</code> | Feed date (yyyy-MM-dd); defaults to latest available |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesThreatFeed.downloadThreatFeedMalware(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.databasesThreatFeed.downloadThreatFeedMalware(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ApiError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadThreatFeedMalwareSample(options?: RequestOptions): ApiPromise&lt;BinaryContent, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesThreatFeed.downloadThreatFeedMalwareSample();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesThreatFeed.downloadThreatFeedMalwareSample().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesThreatFeed.downloadThreatFeedMalwareSample()`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.databasesThreatFeed.downloadThreatFeedMalwareSample().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ApiError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadThreatFeedPhishing(request?: DatabasesThreatFeed.DownloadThreatFeedPhishingRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesThreatFeed.downloadThreatFeedPhishing();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesThreatFeed.downloadThreatFeedPhishing().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date?</code> | <code>string</code> | Feed date (yyyy-MM-dd); defaults to latest available |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesThreatFeed.downloadThreatFeedPhishing(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.databasesThreatFeed.downloadThreatFeedPhishing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ApiError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadThreatFeedPhishingSample(options?: RequestOptions): ApiPromise&lt;BinaryContent, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesThreatFeed.downloadThreatFeedPhishingSample();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesThreatFeed.downloadThreatFeedPhishingSample().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesThreatFeed.downloadThreatFeedPhishingSample()`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.databasesThreatFeed.downloadThreatFeedPhishingSample().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ApiError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadThreatFeedSpam(request?: DatabasesThreatFeed.DownloadThreatFeedSpamRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesThreatFeed.downloadThreatFeedSpam();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesThreatFeed.downloadThreatFeedSpam().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date?</code> | <code>string</code> | Feed date (yyyy-MM-dd); defaults to latest available |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesThreatFeed.downloadThreatFeedSpam(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.databasesThreatFeed.downloadThreatFeedSpam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ApiError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadThreatFeedSpamSample(options?: RequestOptions): ApiPromise&lt;BinaryContent, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesThreatFeed.downloadThreatFeedSpamSample();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesThreatFeed.downloadThreatFeedSpamSample().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesThreatFeed.downloadThreatFeedSpamSample()`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.databasesThreatFeed.downloadThreatFeedSpamSample().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ApiError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesWhois

> Source: [DatabasesWhois](src/resources/databases-whois.ts)

<details>
<summary><code>dbWhoisDaily(request?: DatabasesWhois.DbWhoisDailyRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesWhois.DbWhoisDailyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WHOIS Database Daily. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesWhois.dbWhoisDaily();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesWhois.DbWhoisDailyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesWhois.dbWhoisDaily().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesWhois.dbWhoisDaily(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesWhois.DbWhoisDailyError](src/resources/databases-whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesWhois.dbWhoisDaily(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesWhois.DbWhoisDailyError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbWhoisMonthly(request?: DatabasesWhois.DbWhoisMonthlyRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesWhois.DbWhoisMonthlyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WHOIS Database Monthly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesWhois.dbWhoisMonthly();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesWhois.DbWhoisMonthlyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesWhois.dbWhoisMonthly().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesWhois.dbWhoisMonthly(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesWhois.DbWhoisMonthlyError](src/resources/databases-whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesWhois.dbWhoisMonthly(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesWhois.DbWhoisMonthlyError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dbWhoisWeekly(request?: DatabasesWhois.DbWhoisWeeklyRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, DatabasesWhois.DbWhoisWeeklyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WHOIS Database Weekly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databasesWhois.dbWhoisWeekly();
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type DatabasesWhois.DbWhoisWeeklyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databasesWhois.dbWhoisWeekly().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>date?</code> | <code>string</code> (date) | yyyy-MM-dd; omit for latest |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databasesWhois.dbWhoisWeekly(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[DatabasesWhois.DbWhoisWeeklyError](src/resources/databases-whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databasesWhois.dbWhoisWeekly(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, DatabasesWhois.DbWhoisWeeklyError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Dns

> Source: [Dns](src/resources/dns.ts)

<details>
<summary><code>dnsBulk(request: Dns.DnsBulkRequest, options?: RequestOptions): ApiPromise&lt;BulkDnsResponse, Dns.DnsBulkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Up to 100 domains + 100 IPs in one request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dns.dnsBulk({ type: "some example string", body: {} });
  // TODO: Handle 'response' of type BulkDnsResponse
} catch (err) {
  // TODO: Handle 'err' of type Dns.DnsBulkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dns.dnsBulk({ type: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkDnsResponse
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
| <code>type?</code> | <code>string</code> | -<br>**Default**: "all" |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |
| <code>body</code> | <code>[V20DnsBulkLiveRequest](src/models/v20-dns-bulk-live-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dns.dnsBulk(request)`

- **OnSuccess**: <code>[BulkDnsResponse](src/models/bulk-dns-response.ts)</code>
- **OnError**: throws <code>[Dns.DnsBulkError](src/resources/dns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dns.dnsBulk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkDnsResponse, Dns.DnsBulkError&gt;</code>, with `result.value` of type <code>[BulkDnsResponse](src/models/bulk-dns-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dnsHistorical(request: Dns.DnsHistoricalRequest, options?: RequestOptions): ApiPromise&lt;HistoricalDnsResponse, Dns.DnsHistoricalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

All historical DNS records. 2 credits per page (100 records/page).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dns.dnsHistorical({
    domainName: "some example string",
    type: "some example string",
  });
  // TODO: Handle 'response' of type HistoricalDnsResponse
} catch (err) {
  // TODO: Handle 'err' of type Dns.DnsHistoricalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dns
  .dnsHistorical({ domainName: "some example string", type: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HistoricalDnsResponse
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
| <code>domainName</code> | <code>string</code> | - |
| <code>type?</code> | <code>string</code> | -<br>**Default**: "all" |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dns.dnsHistorical(request)`

- **OnSuccess**: <code>[HistoricalDnsResponse](src/models/historical-dns-response.ts)</code>
- **OnError**: throws <code>[Dns.DnsHistoricalError](src/resources/dns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dns.dnsHistorical(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HistoricalDnsResponse, Dns.DnsHistoricalError&gt;</code>, with `result.value` of type <code>[HistoricalDnsResponse](src/models/historical-dns-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dnsLive(request?: Dns.DnsLiveRequest, options?: RequestOptions): ApiPromise&lt;DnsResponse, Dns.DnsLiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real-time DNS record lookup. 1 credit per query.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dns.dnsLive({ type: "some example string" });
  // TODO: Handle 'response' of type DnsResponse
} catch (err) {
  // TODO: Handle 'err' of type Dns.DnsLiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dns.dnsLive({ type: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DnsResponse
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
| <code>type?</code> | <code>string</code> | all or comma-separated: A,MX,NS,TXT,SOA,SPF,AAAA,CNAME<br>**Default**: "all" |
| <code>domainName?</code> | <code>string</code> | - |
| <code>ipAddress?</code> | <code>string</code> | Use for PTR lookups |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dns.dnsLive(request)`

- **OnSuccess**: <code>[DnsResponse](src/models/dns-response.ts)</code>
- **OnError**: throws <code>[Dns.DnsLiveError](src/resources/dns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dns.dnsLive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DnsResponse, Dns.DnsLiveError&gt;</code>, with `result.value` of type <code>[DnsResponse](src/models/dns-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dnsReverse(request: Dns.DnsReverseRequest, options?: RequestOptions): ApiPromise&lt;ReverseDnsResponse, Dns.DnsReverseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search domains by IP or DNS value. 5 credits per page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dns.dnsReverse({ value: "some example string", type: Type.A });
  // TODO: Handle 'response' of type ReverseDnsResponse
} catch (err) {
  // TODO: Handle 'err' of type Dns.DnsReverseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dns.dnsReverse({ value: "some example string", type: Type.A }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReverseDnsResponse
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
| <code>value</code> | <code>string</code> | IP, CIDR, or record value |
| <code>type</code> | <code>[Type](src/models/type.ts)</code> | - |
| <code>exact?</code> | <code>boolean</code> | -<br>**Default**: true |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dns.dnsReverse(request)`

- **OnSuccess**: <code>[ReverseDnsResponse](src/models/reverse-dns-response.ts)</code>
- **OnError**: throws <code>[Dns.DnsReverseError](src/resources/dns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dns.dnsReverse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReverseDnsResponse, Dns.DnsReverseError&gt;</code>, with `result.value` of type <code>[ReverseDnsResponse](src/models/reverse-dns-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DomainAvailability

> Source: [DomainAvailability](src/resources/domain-availability.ts)

<details>
<summary><code>bulkDomainAvailabilityV2(request: DomainAvailability.BulkDomainAvailabilityV2Request, options?: RequestOptions): ApiPromise&lt;BulkDomainAvailabilityResponse, DomainAvailability.BulkDomainAvailabilityV2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Two bulk modes. Mode 1: POST domainNames array. Mode 2: POST tld array plus domain query param. Max 100 domains per request. 1 credit per domain checked.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainAvailability.bulkDomainAvailabilityV2({
    domain: "google.com",
    body: {},
  });
  // TODO: Handle 'response' of type BulkDomainAvailabilityResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainAvailability.BulkDomainAvailabilityV2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainAvailability
  .bulkDomainAvailabilityV2({ domain: "google.com", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkDomainAvailabilityResponse
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
| <code>domain?</code> | <code>string</code> | Required for TLD-mode bulk check (base domain). |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |
| <code>body</code> | <code>[BulkDomainAvailabilityRequest](src/models/bulk-domain-availability-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainAvailability.bulkDomainAvailabilityV2(request)`

- **OnSuccess**: <code>[BulkDomainAvailabilityResponse](src/models/bulk-domain-availability-response.ts)</code>
- **OnError**: throws <code>[DomainAvailability.BulkDomainAvailabilityV2Error](src/resources/domain-availability.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainAvailability.bulkDomainAvailabilityV2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkDomainAvailabilityResponse, DomainAvailability.BulkDomainAvailabilityV2Error&gt;</code>, with `result.value` of type <code>[BulkDomainAvailabilityResponse](src/models/bulk-domain-availability-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>domainAvailabilityV2(request: DomainAvailability.DomainAvailabilityV2Request, options?: RequestOptions): ApiPromise&lt;DomainAvailabilityResponse, DomainAvailability.DomainAvailabilityV2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check availability of a single domain and optionally get suggestions across multiple TLDs. 1 credit per domain checked. sug=false checks only the queried domain; sug=true returns up to `count` (max 100) TLD suggestions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainAvailability.domainAvailabilityV2({ domain: "google.com" });
  // TODO: Handle 'response' of type DomainAvailabilityResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainAvailability.DomainAvailabilityV2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainAvailability.domainAvailabilityV2({ domain: "google.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DomainAvailabilityResponse
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
| <code>domain</code> | <code>string</code> | The domain name to check |
| <code>sug?</code> | <code>boolean</code> | Whether to return TLD suggestions alongside the queried domain.<br>**Default**: false |
| <code>count?</code> | <code>number</code> | Number of TLD suggestions to return when sug=true. Maximum is 100.<br>**Default**: 5 |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainAvailability.domainAvailabilityV2(request)`

- **OnSuccess**: <code>[DomainAvailabilityResponse](src/models/domain-availability-response.ts)</code>
- **OnError**: throws <code>[DomainAvailability.DomainAvailabilityV2Error](src/resources/domain-availability.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainAvailability.domainAvailabilityV2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DomainAvailabilityResponse, DomainAvailability.DomainAvailabilityV2Error&gt;</code>, with `result.value` of type <code>[DomainAvailabilityResponse](src/models/domain-availability-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DomainReputation

> Source: [DomainReputation](src/resources/domain-reputation.ts)

<details>
<summary><code>domainReputation(request: DomainReputation.DomainReputationRequest, options?: RequestOptions): ApiPromise&lt;DomainReputationResponse, DomainReputation.DomainReputationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real-time domain threat assessment. Returns risk verdict, trust score, DGA analysis, threat intelligence matches, and security signals. 1 credit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainReputation.domainReputation({ domainName: "amazon.com" });
  // TODO: Handle 'response' of type DomainReputationResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainReputation.DomainReputationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainReputation.domainReputation({ domainName: "amazon.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DomainReputationResponse
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
| <code>domainName</code> | <code>string</code> | The domain name to assess |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainReputation.domainReputation(request)`

- **OnSuccess**: <code>[DomainReputationResponse](src/models/domain-reputation-response.ts)</code>
- **OnError**: throws <code>[DomainReputation.DomainReputationError](src/resources/domain-reputation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainReputation.domainReputation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DomainReputationResponse, DomainReputation.DomainReputationError&gt;</code>, with `result.value` of type <code>[DomainReputationResponse](src/models/domain-reputation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Geolocation

> Source: [Geolocation](src/resources/geolocation.ts)

<details>
<summary><code>bulkGeolocation(request: Geolocation.BulkGeolocationRequest, options?: RequestOptions): ApiPromise&lt;GeolocationResponse[], Geolocation.BulkGeolocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Up to 100 IPs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geolocation.bulkGeolocation({ body: { ips: ["some example string"] } });
  // TODO: Handle 'response' of type GeolocationResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Geolocation.BulkGeolocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geolocation
  .bulkGeolocation({ body: { ips: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeolocationResponse[]
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
| <code>body</code> | <code>[V10GeolocationRequest](src/models/v10-geolocation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geolocation.bulkGeolocation(request)`

- **OnSuccess**: <code>[GeolocationResponse](src/models/geolocation-response.ts)[]</code>
- **OnError**: throws <code>[Geolocation.BulkGeolocationError](src/resources/geolocation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geolocation.bulkGeolocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeolocationResponse[], Geolocation.BulkGeolocationError&gt;</code>, with `result.value` of type <code>[GeolocationResponse](src/models/geolocation-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>geolocation(request: Geolocation.GeolocationRequest, options?: RequestOptions): ApiPromise&lt;GeolocationResponse, Geolocation.GeolocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get location, ASN, currency for an IP. 1 credit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geolocation.geolocation({ ip: "some example string" });
  // TODO: Handle 'response' of type GeolocationResponse
} catch (err) {
  // TODO: Handle 'err' of type Geolocation.GeolocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geolocation.geolocation({ ip: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeolocationResponse
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
| <code>ip</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geolocation.geolocation(request)`

- **OnSuccess**: <code>[GeolocationResponse](src/models/geolocation-response.ts)</code>
- **OnError**: throws <code>[Geolocation.GeolocationError](src/resources/geolocation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geolocation.geolocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeolocationResponse, Geolocation.GeolocationError&gt;</code>, with `result.value` of type <code>[GeolocationResponse](src/models/geolocation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IpReputation

> Source: [IpReputation](src/resources/ip-reputation.ts)

<details>
<summary><code>bulkIpReputation(request: IpReputation.BulkIpReputationRequest, options?: RequestOptions): ApiPromise&lt;IpReputationResponse[], IpReputation.BulkIpReputationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Up to 100 IPs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ipReputation.bulkIpReputation({ body: { ips: ["some example string"] } });
  // TODO: Handle 'response' of type IpReputationResponse[]
} catch (err) {
  // TODO: Handle 'err' of type IpReputation.BulkIpReputationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ipReputation
  .bulkIpReputation({ body: { ips: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpReputationResponse[]
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
| <code>body</code> | <code>[V10SecurityRequest](src/models/v10-security-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ipReputation.bulkIpReputation(request)`

- **OnSuccess**: <code>[IpReputationResponse](src/models/ip-reputation-response.ts)[]</code>
- **OnError**: throws <code>[IpReputation.BulkIpReputationError](src/resources/ip-reputation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ipReputation.bulkIpReputation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpReputationResponse[], IpReputation.BulkIpReputationError&gt;</code>, with `result.value` of type <code>[IpReputationResponse](src/models/ip-reputation-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ipReputation(request: IpReputation.IpReputationRequest, options?: RequestOptions): ApiPromise&lt;IpReputationResponse, IpReputation.IpReputationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Threat intel for IP — VPN, proxy, Tor, bots. 1 credit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ipReputation.ipReputation({ ip: "some example string" });
  // TODO: Handle 'response' of type IpReputationResponse
} catch (err) {
  // TODO: Handle 'err' of type IpReputation.IpReputationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ipReputation.ipReputation({ ip: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpReputationResponse
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
| <code>ip</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ipReputation.ipReputation(request)`

- **OnSuccess**: <code>[IpReputationResponse](src/models/ip-reputation-response.ts)</code>
- **OnError**: throws <code>[IpReputation.IpReputationError](src/resources/ip-reputation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ipReputation.ipReputation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpReputationResponse, IpReputation.IpReputationError&gt;</code>, with `result.value` of type <code>[IpReputationResponse](src/models/ip-reputation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IpWhois

> Source: [IpWhois](src/resources/ip-whois.ts)

<details>
<summary><code>ipWhois(request: IpWhois.IpWhoisRequest, options?: RequestOptions): ApiPromise&lt;IpWhoisResponse, IpWhois.IpWhoisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WHOIS for an IP address. 1 credit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ipWhois.ipWhois({ ip: "some example string" });
  // TODO: Handle 'response' of type IpWhoisResponse
} catch (err) {
  // TODO: Handle 'err' of type IpWhois.IpWhoisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ipWhois.ipWhois({ ip: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpWhoisResponse
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
| <code>ip</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ipWhois.ipWhois(request)`

- **OnSuccess**: <code>[IpWhoisResponse](src/models/ip-whois-response.ts)</code>
- **OnError**: throws <code>[IpWhois.IpWhoisError](src/resources/ip-whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ipWhois.ipWhois(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpWhoisResponse, IpWhois.IpWhoisError&gt;</code>, with `result.value` of type <code>[IpWhoisResponse](src/models/ip-whois-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Ssl

> Source: [Ssl](src/resources/ssl.ts)

<details>
<summary><code>sslLookup(request: Ssl.SslLookupRequest, options?: RequestOptions): ApiPromise&lt;SslResponse, Ssl.SslLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real-time SSL cert with optional chain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ssl.sslLookup({ domainName: "some example string" });
  // TODO: Handle 'response' of type SslResponse
} catch (err) {
  // TODO: Handle 'err' of type Ssl.SslLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ssl.sslLookup({ domainName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SslResponse
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
| <code>domainName</code> | <code>string</code> | - |
| <code>chain?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>sslRaw?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ssl.sslLookup(request)`

- **OnSuccess**: <code>[SslResponse](src/models/ssl-response.ts)</code>
- **OnError**: throws <code>[Ssl.SslLookupError](src/resources/ssl.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ssl.sslLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SslResponse, Ssl.SslLookupError&gt;</code>, with `result.value` of type <code>[SslResponse](src/models/ssl-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Subdomains

> Source: [Subdomains](src/resources/subdomains.ts)

<details>
<summary><code>subdomains(request: Subdomains.SubdomainsRequest, options?: RequestOptions): ApiPromise&lt;SubdomainsResponse, Subdomains.SubdomainsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

All subdomains including nested. 2 credits per query.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subdomains.subdomains({ domain: "some example string" });
  // TODO: Handle 'response' of type SubdomainsResponse
} catch (err) {
  // TODO: Handle 'err' of type Subdomains.SubdomainsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subdomains.subdomains({ domain: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubdomainsResponse
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
| <code>domain</code> | <code>string</code> | - |
| <code>after?</code> | <code>string</code> (date) | - |
| <code>before?</code> | <code>string</code> (date) | - |
| <code>status?</code> | <code>[Status](src/models/status.ts)</code> | - |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subdomains.subdomains(request)`

- **OnSuccess**: <code>[SubdomainsResponse](src/models/subdomains-response.ts)</code>
- **OnError**: throws <code>[Subdomains.SubdomainsError](src/resources/subdomains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subdomains.subdomains(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubdomainsResponse, Subdomains.SubdomainsError&gt;</code>, with `result.value` of type <code>[SubdomainsResponse](src/models/subdomains-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Typosquatting

> Source: [Typosquatting](src/resources/typosquatting.ts)

<details>
<summary><code>typosquatting(request?: Typosquatting.TyposquattingRequest, options?: RequestOptions): ApiPromise&lt;TyposquattingResponse, Typosquatting.TyposquattingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find typo variants of a brand. 5 credits per page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.typosquatting.typosquatting();
  // TODO: Handle 'response' of type TyposquattingResponse
} catch (err) {
  // TODO: Handle 'err' of type Typosquatting.TyposquattingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.typosquatting.typosquatting().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TyposquattingResponse
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
| <code>keyword?</code> | <code>string</code> | - |
| <code>pattern?</code> | <code>string</code> | - |
| <code>pageToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.typosquatting.typosquatting(request)`

- **OnSuccess**: <code>[TyposquattingResponse](src/models/typosquatting-response.ts)</code>
- **OnError**: throws <code>[Typosquatting.TyposquattingError](src/resources/typosquatting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.typosquatting.typosquatting(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TyposquattingResponse, Typosquatting.TyposquattingError&gt;</code>, with `result.value` of type <code>[TyposquattingResponse](src/models/typosquatting-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Whois

> Source: [Whois](src/resources/whois.ts)

<details>
<summary><code>bulkWhois(request: Whois.BulkWhoisRequest, options?: RequestOptions): ApiPromise&lt;BulkWhoisResponse, Whois.BulkWhoisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Up to 100 domains in one request. 1 credit per successful domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.whois.bulkWhois({ body: { domainNames: ["some example string"] } });
  // TODO: Handle 'response' of type BulkWhoisResponse
} catch (err) {
  // TODO: Handle 'err' of type Whois.BulkWhoisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whois.bulkWhois({ body: { domainNames: ["some example string"] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkWhoisResponse
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
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |
| <code>body</code> | <code>[V20BulkwhoisLiveRequest](src/models/v20-bulkwhois-live-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whois.bulkWhois(request)`

- **OnSuccess**: <code>[BulkWhoisResponse](src/models/bulk-whois-response.ts)</code>
- **OnError**: throws <code>[Whois.BulkWhoisError](src/resources/whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whois.bulkWhois(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkWhoisResponse, Whois.BulkWhoisError&gt;</code>, with `result.value` of type <code>[BulkWhoisResponse](src/models/bulk-whois-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>whoisHistory(request: Whois.WhoisHistoryRequest, options?: RequestOptions): ApiPromise&lt;WhoisHistoricalResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.whois.whoisHistory({ domainName: "some example string" });
  // TODO: Handle 'response' of type WhoisHistoricalResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whois.whoisHistory({ domainName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WhoisHistoricalResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domainName</code> | <code>string</code> | Domain to fetch historical WHOIS records for |
| <code>page?</code> | <code>number</code> | Page number |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whois.whoisHistory(request)`

- **OnSuccess**: <code>[WhoisHistoricalResponse](src/models/whois-historical-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.whois.whoisHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WhoisHistoricalResponse, ApiError&gt;</code>, with `result.value` of type <code>[WhoisHistoricalResponse](src/models/whois-historical-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>whoisLive(request: Whois.WhoisLiveRequest, options?: RequestOptions): ApiPromise&lt;WhoisResponse, Whois.WhoisLiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real-time WHOIS lookup from authoritative servers. Cost 1 credit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.whois.whoisLive({ domainName: "whoisfreaks.com" });
  // TODO: Handle 'response' of type WhoisResponse
} catch (err) {
  // TODO: Handle 'err' of type Whois.WhoisLiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whois.whoisLive({ domainName: "whoisfreaks.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WhoisResponse
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
| <code>domainName</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whois.whoisLive(request)`

- **OnSuccess**: <code>[WhoisResponse](src/models/whois-response.ts)</code>
- **OnError**: throws <code>[Whois.WhoisLiveError](src/resources/whois.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whois.whoisLive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WhoisResponse, Whois.WhoisLiveError&gt;</code>, with `result.value` of type <code>[WhoisResponse](src/models/whois-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>whoisReverse(request: Whois.WhoisReverseRequest, options?: RequestOptions): ApiPromise&lt;ReverseWhoisResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.whois.whoisReverse({ keyword: "some example string" });
  // TODO: Handle 'response' of type ReverseWhoisResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whois.whoisReverse({ keyword: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReverseWhoisResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>string</code> | Keyword to search across WHOIS records |
| <code>page?</code> | <code>number</code> | Page number |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whois.whoisReverse(request)`

- **OnSuccess**: <code>[ReverseWhoisResponse](src/models/reverse-whois-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.whois.whoisReverse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReverseWhoisResponse, ApiError&gt;</code>, with `result.value` of type <code>[ReverseWhoisResponse](src/models/reverse-whois-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WhoisFreaksError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

