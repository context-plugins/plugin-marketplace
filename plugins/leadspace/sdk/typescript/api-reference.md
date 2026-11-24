# Reference

> Source: [LeadspaceClient](src/client.ts)

## Authorization

> Source: [Authorization](src/resources/authorization.ts)

<details>
<summary><code>createAuthorizationToken(request: Authorization.CreateAuthorizationTokenRequest, options?: RequestOptions): ApiPromise&lt;AuthorizationResponse, Authorization.CreateAuthorizationTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges the Program ID and authentication secret supplied by Leadspace for a bearer token. Tokens expire every 24 hours.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorization.createAuthorizationToken({
    body: { user: "some example string", pass: "some example string", audience: "some example string" },
  });
  // TODO: Handle 'response' of type AuthorizationResponse
} catch (err) {
  // TODO: Handle 'err' of type Authorization.CreateAuthorizationTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization
  .createAuthorizationToken({
    body: { user: "some example string", pass: "some example string", audience: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorizationResponse
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
| <code>body</code> | <code>[AuthorizationRequest](src/models/authorization-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.createAuthorizationToken(request)`

- **OnSuccess**: <code>[AuthorizationResponse](src/models/authorization-response.ts)</code>
- **OnError**: throws <code>[Authorization.CreateAuthorizationTokenError](src/resources/authorization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorization.createAuthorizationToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorizationResponse, Authorization.CreateAuthorizationTokenError&gt;</code>, with `result.value` of type <code>[AuthorizationResponse](src/models/authorization-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LeadspaceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshAuthorizationToken(request: Authorization.RefreshAuthorizationTokenRequest, options?: RequestOptions): ApiPromise&lt;AuthorizationResponse, Authorization.RefreshAuthorizationTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges a refreshToken for a new bearer token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorization.refreshAuthorizationToken({
    body: { user: "some example string", refreshToken: "some example string" },
  });
  // TODO: Handle 'response' of type AuthorizationResponse
} catch (err) {
  // TODO: Handle 'err' of type Authorization.RefreshAuthorizationTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization
  .refreshAuthorizationToken({ body: { user: "some example string", refreshToken: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorizationResponse
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
| <code>body</code> | <code>[RefreshRequest](src/models/refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.refreshAuthorizationToken(request)`

- **OnSuccess**: <code>[AuthorizationResponse](src/models/authorization-response.ts)</code>
- **OnError**: throws <code>[Authorization.RefreshAuthorizationTokenError](src/resources/authorization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorization.refreshAuthorizationToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorizationResponse, Authorization.RefreshAuthorizationTokenError&gt;</code>, with `result.value` of type <code>[AuthorizationResponse](src/models/authorization-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LeadspaceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](src/resources/discovery.ts)

<details>
<summary><code>discoverCompanyContacts(request: Discovery.DiscoverCompanyContactsRequest, options?: RequestOptions): ApiPromise&lt;DiscoveryAccepted, Discovery.DiscoverCompanyContactsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expands up to 500 accounts into ranked contacts. Either companyName or companyWebsite is mandatory for each account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discovery.discoverCompanyContacts({ body: { data: [{}] } });
  // TODO: Handle 'response' of type DiscoveryAccepted
} catch (err) {
  // TODO: Handle 'err' of type Discovery.DiscoverCompanyContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discovery.discoverCompanyContacts({ body: { data: [{}] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscoveryAccepted
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
| <code>body</code> | <code>[DiscoveryRequest](src/models/discovery-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discovery.discoverCompanyContacts(request)`

- **OnSuccess**: <code>[DiscoveryAccepted](src/models/discovery-accepted.ts)</code>
- **OnError**: throws <code>[Discovery.DiscoverCompanyContactsError](src/resources/discovery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discovery.discoverCompanyContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscoveryAccepted, Discovery.DiscoverCompanyContactsError&gt;</code>, with `result.value` of type <code>[DiscoveryAccepted](src/models/discovery-accepted.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LeadspaceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Enrichment

> Source: [Enrichment](src/resources/enrichment.ts)

<details>
<summary><code>enrichBulkRecords(request: Enrichment.EnrichBulkRecordsRequest, options?: RequestOptions): ApiPromise&lt;BulkAccepted, Enrichment.EnrichBulkRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts up to 500 records per request and returns a polling URI. An optional callbackUrl receives a notification when processing completes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrichment.enrichBulkRecords({ body: { data: [{}] } });
  // TODO: Handle 'response' of type BulkAccepted
} catch (err) {
  // TODO: Handle 'err' of type Enrichment.EnrichBulkRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrichment.enrichBulkRecords({ body: { data: [{}] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkAccepted
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
| <code>body</code> | <code>[BulkEnrichmentRequest](src/models/bulk-enrichment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrichment.enrichBulkRecords(request)`

- **OnSuccess**: <code>[BulkAccepted](src/models/bulk-accepted.ts)</code>
- **OnError**: throws <code>[Enrichment.EnrichBulkRecordsError](src/resources/enrichment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrichment.enrichBulkRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkAccepted, Enrichment.EnrichBulkRecordsError&gt;</code>, with `result.value` of type <code>[BulkAccepted](src/models/bulk-accepted.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LeadspaceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enrichSingleRecord(request: Enrichment.EnrichSingleRecordRequest, options?: RequestOptions): ApiPromise&lt;EnrichmentResult, Enrichment.EnrichSingleRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Synchronously enriches one record. Account enrichment requires a company name. Person enrichment requires first name, last name, and one of company name, email address, or website.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrichment.enrichSingleRecord({ body: {} });
  // TODO: Handle 'response' of type EnrichmentResult
} catch (err) {
  // TODO: Handle 'err' of type Enrichment.EnrichSingleRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrichment.enrichSingleRecord({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnrichmentResult
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
| <code>body</code> | <code>[SingleEnrichmentRequest](src/models/single-enrichment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrichment.enrichSingleRecord(request)`

- **OnSuccess**: <code>[EnrichmentResult](src/models/enrichment-result.ts)</code>
- **OnError**: throws <code>[Enrichment.EnrichSingleRecordError](src/resources/enrichment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrichment.enrichSingleRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnrichmentResult, Enrichment.EnrichSingleRecordError&gt;</code>, with `result.value` of type <code>[EnrichmentResult](src/models/enrichment-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LeadspaceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Intent

> Source: [Intent](src/resources/intent.ts)

<details>
<summary><code>scoreCompanyIntent(request: Intent.ScoreCompanyIntentRequest, options?: RequestOptions): ApiPromise&lt;IntentAccepted, Intent.ScoreCompanyIntentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a bulk of companies for intent refresh. Company name is required. Returns a polling URI.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.intent.scoreCompanyIntent({ body: { data: [{}] } });
  // TODO: Handle 'response' of type IntentAccepted
} catch (err) {
  // TODO: Handle 'err' of type Intent.ScoreCompanyIntentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.intent.scoreCompanyIntent({ body: { data: [{}] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IntentAccepted
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
| <code>body</code> | <code>[IntentRequest](src/models/intent-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.intent.scoreCompanyIntent(request)`

- **OnSuccess**: <code>[IntentAccepted](src/models/intent-accepted.ts)</code>
- **OnError**: throws <code>[Intent.ScoreCompanyIntentError](src/resources/intent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.intent.scoreCompanyIntent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IntentAccepted, Intent.ScoreCompanyIntentError&gt;</code>, with `result.value` of type <code>[IntentAccepted](src/models/intent-accepted.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LeadspaceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Results

> Source: [Results](src/resources/results.ts)

<details>
<summary><code>getBulkEnrichmentResults(request: Results.GetBulkEnrichmentResultsRequest, options?: RequestOptions): ApiPromise&lt;BulkResults, Results.GetBulkEnrichmentResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the results of a previously submitted bulk enrichment job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.results.getBulkEnrichmentResults({ bulkId: "some example string" });
  // TODO: Handle 'response' of type BulkResults
} catch (err) {
  // TODO: Handle 'err' of type Results.GetBulkEnrichmentResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.results.getBulkEnrichmentResults({ bulkId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkResults
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
| <code>bulkId</code> | <code>string</code> | The Leadspace bulk identifier returned when the job was accepted |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.results.getBulkEnrichmentResults(request)`

- **OnSuccess**: <code>[BulkResults](src/models/bulk-results.ts)</code>
- **OnError**: throws <code>[Results.GetBulkEnrichmentResultsError](src/resources/results.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.results.getBulkEnrichmentResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkResults, Results.GetBulkEnrichmentResultsError&gt;</code>, with `result.value` of type <code>[BulkResults](src/models/bulk-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LeadspaceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDiscoveryResults(request: Results.GetDiscoveryResultsRequest, options?: RequestOptions): ApiPromise&lt;DiscoveryResults, Results.GetDiscoveryResultsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.results.getDiscoveryResults({ bulkId: "some example string" });
  // TODO: Handle 'response' of type DiscoveryResults
} catch (err) {
  // TODO: Handle 'err' of type Results.GetDiscoveryResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.results.getDiscoveryResults({ bulkId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscoveryResults
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
| <code>bulkId</code> | <code>string</code> | The Leadspace bulk identifier returned when the job was accepted |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.results.getDiscoveryResults(request)`

- **OnSuccess**: <code>[DiscoveryResults](src/models/discovery-results.ts)</code>
- **OnError**: throws <code>[Results.GetDiscoveryResultsError](src/resources/results.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.results.getDiscoveryResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscoveryResults, Results.GetDiscoveryResultsError&gt;</code>, with `result.value` of type <code>[DiscoveryResults](src/models/discovery-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LeadspaceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIntentResults(request: Results.GetIntentResultsRequest, options?: RequestOptions): ApiPromise&lt;IntentResults, Results.GetIntentResultsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.results.getIntentResults({ jobId: "some example string" });
  // TODO: Handle 'response' of type IntentResults
} catch (err) {
  // TODO: Handle 'err' of type Results.GetIntentResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.results.getIntentResults({ jobId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IntentResults
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
| <code>jobId</code> | <code>string</code> | The Leadspace bulk identifier returned when the job was accepted |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.results.getIntentResults(request)`

- **OnSuccess**: <code>[IntentResults](src/models/intent-results.ts)</code>
- **OnError**: throws <code>[Results.GetIntentResultsError](src/resources/results.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.results.getIntentResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IntentResults, Results.GetIntentResultsError&gt;</code>, with `result.value` of type <code>[IntentResults](src/models/intent-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LeadspaceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

