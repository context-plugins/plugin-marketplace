# Reference

> Source: [MrScraperClient](src/client.ts)

## Analytic

> Source: [Analytic](src/resources/analytic.ts)

<details>
<summary><code>getApiV1AnalyticStatuses(request?: Analytic.GetApiV1AnalyticStatusesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.analytic.getApiV1AnalyticStatuses();
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
const result = await client.analytic.getApiV1AnalyticStatuses().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>apiTokenName?</code> | <code>string</code> | - |
| <code>domain?</code> | <code>string</code> | - |
| <code>endDate?</code> | <code>string</code> | - |
| <code>startDate?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytic.getApiV1AnalyticStatuses(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.analytic.getApiV1AnalyticStatuses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Auth

> Source: [Auth](src/resources/auth.ts)

<details>
<summary><code>getSubscriptionAccounts(request?: Auth.GetSubscriptionAccountsRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionAccountsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auth2.getSubscriptionAccounts();
  // TODO: Handle 'response' of type SubscriptionAccountsResponse
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
const result = await client.auth2.getSubscriptionAccounts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionAccountsResponse
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
| <code>xBackofficeToken?</code> | <code>string</code> | Backoffice token to include database connection string |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auth2.getSubscriptionAccounts(request)`

- **OnSuccess**: <code>[SubscriptionAccountsResponse](src/models/subscription-accounts-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.auth2.getSubscriptionAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionAccountsResponse, ApiError&gt;</code>, with `result.value` of type <code>[SubscriptionAccountsResponse](src/models/subscription-accounts-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Gateway

> Source: [Gateway](src/resources/gateway.ts)

<details>
<summary><code>getRoot(request: Gateway.GetRootRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gateway.getRoot({ url: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
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
const result = await client.gateway.getRoot({ url: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>url</code> | <code>string</code> | Target URL to forward to (URL encoded) |
| <code>token?</code> | <code>string</code> | atk_example_not_a_real_token |
| <code>async?</code> | <code>boolean</code> | Queue the scrape and return a task ID immediately |
| <code>beta?</code> | <code>boolean</code> | Use the sync scraper upstream via the beta flag (async, callbacks and stream are not supported yet) |
| <code>detectedJson?</code> | <code>boolean</code> | Extract JSON from <script> tags and metadata from <meta> tags in HTML response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gateway.getRoot(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.gateway.getRoot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postRoot(request: Gateway.PostRootRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gateway.postRoot({ body: {} });
  // TODO: Handle 'response' of type Record<string, unknown>
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
const result = await client.gateway.postRoot({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>async?</code> | <code>boolean</code> | Queue the scrape and return a task ID immediately |
| <code>beta?</code> | <code>boolean</code> | Use the sync scraper upstream via the beta flag; alternatively set beta: true in the JSON body |
| <code>body</code> | <code>[GatewayRequestBody](src/models/gateway-request-body.ts)</code> | Request body with domain, action, and task details |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gateway.postRoot(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.gateway.postRoot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/resources/jobs.ts)

<details>
<summary><code>getJobs(request?: Jobs.GetJobsRequest, options?: RequestOptions): ApiPromise&lt;JobsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJobs();
  // TODO: Handle 'response' of type JobsResponse
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
const result = await client.jobs.getJobs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobsResponse
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
| <code>pageSize?</code> | <code>number</code> | Page size |
| <code>page?</code> | <code>number</code> | Page number |
| <code>sortField?</code> | <code>string</code> | Sort field |
| <code>sortOrder?</code> | <code>string</code> | Sort order (ASC/DESC) |
| <code>search?</code> | <code>string</code> | Search term |
| <code>startAt?</code> | <code>string</code> | Start date for created_at filter |
| <code>endAt?</code> | <code>string</code> | End date for created_at filter |
| <code>dateRangeColumn?</code> | <code>string</code> | Custom date range column |
| <code>name?</code> | <code>string</code> | Filter by name |
| <code>status?</code> | <code>string</code> | Filter by status |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJobs(request)`

- **OnSuccess**: <code>[JobsResponse](src/models/jobs-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.jobs.getJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobsResponse, ApiError&gt;</code>, with `result.value` of type <code>[JobsResponse](src/models/jobs-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getJobsById(request: Jobs.GetJobsByIdRequest, options?: RequestOptions): ApiPromise&lt;JobsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJobsById({ id: 1 });
  // TODO: Handle 'response' of type JobsResponse1
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
const result = await client.jobs.getJobsById({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobsResponse1
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
| <code>id</code> | <code>number</code> | Job ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJobsById(request)`

- **OnSuccess**: <code>[JobsResponse1](src/models/jobs-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.jobs.getJobsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[JobsResponse1](src/models/jobs-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postJobs(request: Jobs.PostJobsRequest, options?: RequestOptions): ApiPromise&lt;JobsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.postJobs({ body: {} });
  // TODO: Handle 'response' of type JobsResponse1
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
const result = await client.jobs.postJobs({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobsResponse1
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
| <code>body</code> | <code>[JobJob](src/models/job-job.ts)</code> | Job object (ID will be auto-generated, do not include) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.postJobs(request)`

- **OnSuccess**: <code>[JobsResponse1](src/models/jobs-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.jobs.postJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[JobsResponse1](src/models/jobs-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putJobsById(request: Jobs.PutJobsByIdRequest, options?: RequestOptions): ApiPromise&lt;JobsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.putJobsById({ id: 1, body: {} });
  // TODO: Handle 'response' of type JobsResponse1
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
const result = await client.jobs.putJobsById({ id: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobsResponse1
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
| <code>id</code> | <code>number</code> | Job ID |
| <code>body</code> | <code>[JobJob](src/models/job-job.ts)</code> | Job object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.putJobsById(request)`

- **OnSuccess**: <code>[JobsResponse1](src/models/jobs-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.jobs.putJobsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[JobsResponse1](src/models/jobs-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Proxies

> Source: [Proxies](src/resources/proxies.ts)

<details>
<summary><code>getApiV1ProxiesUserRequestsBandwidth(request?: Proxies.GetApiV1ProxiesUserRequestsBandwidthRequest, options?: RequestOptions): ApiPromise&lt;GetApiV1ProxiesUserRequestsBandwidthResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proxies.getApiV1ProxiesUserRequestsBandwidth();
  // TODO: Handle 'response' of type GetApiV1ProxiesUserRequestsBandwidthResponse
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
const result = await client.proxies.getApiV1ProxiesUserRequestsBandwidth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetApiV1ProxiesUserRequestsBandwidthResponse
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
| <code>endDate?</code> | <code>string</code> | - |
| <code>startDate?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proxies.getApiV1ProxiesUserRequestsBandwidth(request)`

- **OnSuccess**: <code>[GetApiV1ProxiesUserRequestsBandwidthResponse](src/models/get-api-v1-proxies-user-requests-bandwidth-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.proxies.getApiV1ProxiesUserRequestsBandwidth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetApiV1ProxiesUserRequestsBandwidthResponse, ApiError&gt;</code>, with `result.value` of type <code>[GetApiV1ProxiesUserRequestsBandwidthResponse](src/models/get-api-v1-proxies-user-requests-bandwidth-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Results

> Source: [Results](src/resources/results.ts)

<details>
<summary><code>getApiV1ResultsResultId(request: Results.GetApiV1ResultsResultIdRequest, options?: RequestOptions): ApiPromise&lt;GetApiV1ResultsResultidResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.results.getApiV1ResultsResultId({ resultId: "some example string" });
  // TODO: Handle 'response' of type GetApiV1ResultsResultidResponse
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
const result = await client.results
  .getApiV1ResultsResultId({ resultId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetApiV1ResultsResultidResponse
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
| <code>resultId</code> | <code>string</code> | - |
| <code>includeHtml?</code> | <code>boolean</code> | Includes stored HTML. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.results.getApiV1ResultsResultId(request)`

- **OnSuccess**: <code>[GetApiV1ResultsResultidResponse](src/models/get-api-v1-results-resultid-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.results.getApiV1ResultsResultId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetApiV1ResultsResultidResponse, ApiError&gt;</code>, with `result.value` of type <code>[GetApiV1ResultsResultidResponse](src/models/get-api-v1-results-resultid-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Storage

> Source: [Storage](src/resources/storage.ts)

<details>
<summary><code>getStorageByKey(request: Storage.GetStorageByKeyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Storage.GetStorageByKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the stored body directly with application/json content type, without a message/data envelope. The key may contain multiple path segments and must belong to the authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.storage.getStorageByKey({ key: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Storage.GetStorageByKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storage.getStorageByKey({ key: "some example string" }).asApiResult();
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
| <code>key</code> | <code>string</code> | Full storage key, for example results/<user-scope>/<uuid>.json |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storage.getStorageByKey(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Storage.GetStorageByKeyError](src/resources/storage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storage.getStorageByKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Storage.GetStorageByKeyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/resources/tasks.ts)

<details>
<summary><code>getTasks(request: Tasks.GetTasksRequest, options?: RequestOptions): ApiPromise&lt;TasksResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTasks({
    startAt: "some example string",
    endAt: "some example string",
  });
  // TODO: Handle 'response' of type TasksResponse
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
const result = await client.tasks
  .getTasks({ startAt: "some example string", endAt: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksResponse
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
| <code>startAt</code> | <code>string</code> | Start date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7 days) |
| <code>endAt</code> | <code>string</code> | End date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7 days) |
| <code>pageSize?</code> | <code>number</code> | Page size |
| <code>page?</code> | <code>number</code> | Page number |
| <code>sortField?</code> | <code>string</code> | Sort field |
| <code>sortOrder?</code> | <code>string</code> | Sort order (ASC/DESC) |
| <code>search?</code> | <code>string</code> | Search term |
| <code>dateRangeColumn?</code> | <code>string</code> | Custom date range column |
| <code>domain?</code> | <code>string</code> | Filter by domain |
| <code>action?</code> | <code>string</code> | Filter by action |
| <code>status?</code> | <code>string</code> | Filter by status |
| <code>jobId?</code> | <code>number</code> | Filter by jobId |
| <code>isParent?</code> | <code>boolean</code> | Filter tokenUsage batch parent tasks |
| <code>countOnly?</code> | <code>boolean</code> | Return only total count without loading task data |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTasks(request)`

- **OnSuccess**: <code>[TasksResponse](src/models/tasks-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.getTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksResponse, ApiError&gt;</code>, with `result.value` of type <code>[TasksResponse](src/models/tasks-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksById(request: Tasks.GetTasksByIdRequest, options?: RequestOptions): ApiPromise&lt;TasksResponse3, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTasksById({ id: 1 });
  // TODO: Handle 'response' of type TasksResponse3
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
const result = await client.tasks.getTasksById({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksResponse3
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
| <code>id</code> | <code>number</code> | Task ID |
| <code>result?</code> | <code>string</code> | Use json to decode the result body and include available callbackStatus/callbackError fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTasksById(request)`

- **OnSuccess**: <code>[TasksResponse3](src/models/tasks-response3.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.getTasksById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksResponse3, ApiError&gt;</code>, with `result.value` of type <code>[TasksResponse3](src/models/tasks-response3.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTasks(request: Tasks.PostTasksRequest, options?: RequestOptions): ApiPromise&lt;TasksResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postTasks({ body: {} });
  // TODO: Handle 'response' of type TasksResponse1
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
const result = await client.tasks.postTasks({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksResponse1
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
| <code>body</code> | <code>[TaskTaskSwagger](src/models/task-task-swagger.ts)</code> | Task object (ID will be auto-generated, do not include) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postTasks(request)`

- **OnSuccess**: <code>[TasksResponse1](src/models/tasks-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.postTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksResponse1, ApiError&gt;</code>, with `result.value` of type <code>[TasksResponse1](src/models/tasks-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postTasksBulk(request: Tasks.PostTasksBulkRequest, options?: RequestOptions): ApiPromise&lt;TasksBulkResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.postTasksBulk({ body: {} });
  // TODO: Handle 'response' of type TasksBulkResponse1
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
const result = await client.tasks.postTasksBulk({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksBulkResponse1
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
| <code>body</code> | <code>[TaskBatchCreateRequest](src/models/task-batch-create-request.ts)</code> | Array of tasks to create |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.postTasksBulk(request)`

- **OnSuccess**: <code>[TasksBulkResponse1](src/models/tasks-bulk-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.postTasksBulk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksBulkResponse1, ApiError&gt;</code>, with `result.value` of type <code>[TasksBulkResponse1](src/models/tasks-bulk-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putTasksBulk(request: Tasks.PutTasksBulkRequest, options?: RequestOptions): ApiPromise&lt;TasksBulkResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.putTasksBulk({ body: {} });
  // TODO: Handle 'response' of type TasksBulkResponse
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
const result = await client.tasks.putTasksBulk({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksBulkResponse
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
| <code>body</code> | <code>[TaskBatchUpdateRequest](src/models/task-batch-update-request.ts)</code> | Array of tasks to update; each task must include its ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.putTasksBulk(request)`

- **OnSuccess**: <code>[TasksBulkResponse](src/models/tasks-bulk-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.putTasksBulk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksBulkResponse, ApiError&gt;</code>, with `result.value` of type <code>[TasksBulkResponse](src/models/tasks-bulk-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putTasksById(request: Tasks.PutTasksByIdRequest, options?: RequestOptions): ApiPromise&lt;TasksResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.putTasksById({ id: 1, body: {} });
  // TODO: Handle 'response' of type TasksResponse1
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
const result = await client.tasks.putTasksById({ id: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksResponse1
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
| <code>id</code> | <code>number</code> | Task ID |
| <code>body</code> | <code>[TaskTaskSwagger](src/models/task-task-swagger.ts)</code> | Task object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.putTasksById(request)`

- **OnSuccess**: <code>[TasksResponse1](src/models/tasks-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.putTasksById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksResponse1, ApiError&gt;</code>, with `result.value` of type <code>[TasksResponse1](src/models/tasks-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putTasksByIdStatus(request: Tasks.PutTasksByIdStatusRequest, options?: RequestOptions): ApiPromise&lt;TasksStatusResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.putTasksByIdStatus({ id: 1, body: {} });
  // TODO: Handle 'response' of type TasksStatusResponse
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
const result = await client.tasks.putTasksByIdStatus({ id: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksStatusResponse
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
| <code>id</code> | <code>number</code> | Task ID |
| <code>body</code> | <code>[TaskUpdateTaskStatusRequest](src/models/task-update-task-status-request.ts)</code> | Task status update object |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.putTasksByIdStatus(request)`

- **OnSuccess**: <code>[TasksStatusResponse](src/models/tasks-status-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tasks.putTasksByIdStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksStatusResponse, ApiError&gt;</code>, with `result.value` of type <code>[TasksStatusResponse](src/models/tasks-status-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[MrScraperError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

