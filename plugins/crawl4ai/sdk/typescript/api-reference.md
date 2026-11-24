# Reference

> Source: [Crawl4AiClient](src/client.ts)

<details>
<summary><code>getCrawlJob(request: Crawl4AiClient.GetCrawlJobRequest, options?: RequestOptions): ApiPromise&lt;undefined, Crawl4AiClient.GetCrawlJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status and results of a crawl job

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.getCrawlJob({ jobId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Crawl4AiClient.GetCrawlJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getCrawlJob({ jobId: "some example string" }).asApiResult();
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
| <code>jobId</code> | <code>string</code> | Job ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getCrawlJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Crawl4AiClient.GetCrawlJobError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getCrawlJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Crawl4AiClient.GetCrawlJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Crawl4AiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitCrawlJob(request: Crawl4AiClient.SubmitCrawlJobRequest, options?: RequestOptions): ApiPromise&lt;undefined, Crawl4AiClient.SubmitCrawlJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a new web crawling job

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.submitCrawlJob({ body: { urls: ["some example string"] } });
} catch (err) {
  // TODO: Handle 'err' of type Crawl4AiClient.SubmitCrawlJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.submitCrawlJob({ body: { urls: ["some example string"] } }).asApiResult();
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
| <code>body</code> | <code>[CrawlJobRequest](src/models/crawl-job-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.submitCrawlJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Crawl4AiClient.SubmitCrawlJobError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.submitCrawlJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Crawl4AiClient.SubmitCrawlJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Crawl4AiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

