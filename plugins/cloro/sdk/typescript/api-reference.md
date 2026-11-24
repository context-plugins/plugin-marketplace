# Reference

> Source: [CloroClient](src/client.ts)

## Async

> Source: [Async](src/resources/async.ts)

<details>
<summary><code>clearAsyncQueue(options?: RequestOptions): ApiPromise&lt;ClearQueueResponse, Async.ClearAsyncQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes every task still in the `QUEUED` state for the authenticated organization, letting you drain a pending backlog in one call instead of opening a support request. Tasks that are already `PROCESSING` are in-flight on a worker and are left untouched, as are `COMPLETED` and `FAILED` tasks. Queued tasks have not been charged, so clearing them does not affect your credit balance. The call is safe to repeat — if the queue is already empty it simply returns `cleared: 0`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.async.clearAsyncQueue();
  // TODO: Handle 'response' of type ClearQueueResponse
} catch (err) {
  // TODO: Handle 'err' of type Async.ClearAsyncQueueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.async.clearAsyncQueue().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClearQueueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.async.clearAsyncQueue()`

- **OnSuccess**: <code>[ClearQueueResponse](src/models/clear-queue-response.ts)</code>
- **OnError**: throws <code>[Async.ClearAsyncQueueError](src/resources/async.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.async.clearAsyncQueue().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClearQueueResponse, Async.ClearAsyncQueueError&gt;</code>, with `result.value` of type <code>[ClearQueueResponse](src/models/clear-queue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createAsyncTask(request: Async.CreateAsyncTaskRequest, options?: RequestOptions): ApiPromise&lt;AsyncTaskCreateResponse, Async.CreateAsyncTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit an asynchronous task for background processing. Returns a task ID that you can use to poll for results or receive via webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.async.createAsyncTask({
    body: {
      taskType: TaskType.Chatgpt,
      payload: {},
      priority: 5,
      idempotencyKey: "your-custom-identifier-123",
      webhook: { url: "https://your-app.com/webhook-handler" },
    },
  });
  // TODO: Handle 'response' of type AsyncTaskCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Async.CreateAsyncTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.async
  .createAsyncTask({
    body: {
      taskType: TaskType.Chatgpt,
      payload: {},
      priority: 5,
      idempotencyKey: "your-custom-identifier-123",
      webhook: { url: "https://your-app.com/webhook-handler" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsyncTaskCreateResponse
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
| <code>body</code> | <code>[BatchTaskRequest](src/models/batch-task-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.async.createAsyncTask(request)`

- **OnSuccess**: <code>[AsyncTaskCreateResponse](src/models/async-task-create-response.ts)</code>
- **OnError**: throws <code>[Async.CreateAsyncTaskError](src/resources/async.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.async.createAsyncTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsyncTaskCreateResponse, Async.CreateAsyncTaskError&gt;</code>, with `result.value` of type <code>[AsyncTaskCreateResponse](src/models/async-task-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBatchAsyncTasks(request: Async.CreateBatchAsyncTasksRequest, options?: RequestOptions): ApiPromise&lt;BatchTaskResponse, Async.CreateBatchAsyncTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit up to 500 async tasks in one request. Each task is validated independently, so one invalid task does not block the rest. Returns per-task results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.async.createBatchAsyncTasks({
    body: [
      {
        taskType: TaskType.Chatgpt,
        payload: {},
        priority: 5,
        idempotencyKey: "batch-chatgpt-001",
        webhook: { url: "https://your-app.com/webhook-handler" },
      },
      { taskType: TaskType.Perplexity, payload: {}, priority: 3, idempotencyKey: "batch-perplexity-001" },
    ],
  });
  // TODO: Handle 'response' of type BatchTaskResponse
} catch (err) {
  // TODO: Handle 'err' of type Async.CreateBatchAsyncTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.async
  .createBatchAsyncTasks({
    body: [
      {
        taskType: TaskType.Chatgpt,
        payload: {},
        priority: 5,
        idempotencyKey: "batch-chatgpt-001",
        webhook: { url: "https://your-app.com/webhook-handler" },
      },
      { taskType: TaskType.Perplexity, payload: {}, priority: 3, idempotencyKey: "batch-perplexity-001" },
    ],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchTaskResponse
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
| <code>body</code> | <code>[BatchTaskRequest](src/models/batch-task-request.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.async.createBatchAsyncTasks(request)`

- **OnSuccess**: <code>[BatchTaskResponse](src/models/batch-task-response.ts)</code>
- **OnError**: throws <code>[Async.CreateBatchAsyncTasksError](src/resources/async.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.async.createBatchAsyncTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchTaskResponse, Async.CreateBatchAsyncTasksError&gt;</code>, with `result.value` of type <code>[BatchTaskResponse](src/models/batch-task-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAsyncStatus(options?: RequestOptions): ApiPromise&lt;AsyncStatusResponse, Async.GetAsyncStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get organization-wide async queue metrics including queued and processing task counts, and concurrency usage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.async.getAsyncStatus();
  // TODO: Handle 'response' of type AsyncStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Async.GetAsyncStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.async.getAsyncStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsyncStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.async.getAsyncStatus()`

- **OnSuccess**: <code>[AsyncStatusResponse](src/models/async-status-response.ts)</code>
- **OnError**: throws <code>[Async.GetAsyncStatusError](src/resources/async.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.async.getAsyncStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsyncStatusResponse, Async.GetAsyncStatusError&gt;</code>, with `result.value` of type <code>[AsyncStatusResponse](src/models/async-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTaskStatus(request: Async.GetTaskStatusRequest, options?: RequestOptions): ApiPromise&lt;TaskStatusResponse, Async.GetTaskStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Poll the status and result of an asynchronous task by ID. Returns the task state and, once complete, the full structured result payload.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.async.getTaskStatus({ taskId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type TaskStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Async.GetTaskStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.async
  .getTaskStatus({ taskId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskStatusResponse
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
| <code>taskId</code> | <code>string</code> | The ID of the task to fetch. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.async.getTaskStatus(request)`

- **OnSuccess**: <code>[TaskStatusResponse](src/models/task-status-response.ts)</code>
- **OnError**: throws <code>[Async.GetTaskStatusError](src/resources/async.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.async.getTaskStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskStatusResponse, Async.GetTaskStatusError&gt;</code>, with `result.value` of type <code>[TaskStatusResponse](src/models/task-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Countries

> Source: [Countries](src/resources/countries.ts)

<details>
<summary><code>getCountries(request?: Countries.GetCountriesRequest, options?: RequestOptions): ApiPromise&lt;string[], Countries.GetCountriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all supported ISO 3166-1 alpha-2 country codes. Can be filtered by model to get countries available for specific AI providers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.countries.getCountries({ model: Model.Chatgpt });
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type Countries.GetCountriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.countries.getCountries({ model: Model.Chatgpt }).asApiResult();
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
| <code>model?</code> | <code>[Model](src/models/model.ts)</code> | Filter countries available for a specific model. Omit to return all supported countries. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.countries.getCountries(request)`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[Countries.GetCountriesError](src/resources/countries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.countries.getCountries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], Countries.GetCountriesError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Credits

> Source: [Credits](src/resources/credits.ts)

<details>
<summary><code>getCredits(options?: RequestOptions): ApiPromise&lt;CreditsResponse, Credits.GetCreditsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read your organization's current credit balance and billing cycle. Lets you observe your balance programmatically — including from async-only workloads — without making a sync /v1/monitor/* request just to inspect the X-Credits-Remaining header. The balance is cached and can lag by up to 60 seconds. Queued async tasks are re-checked against your live balance when the scheduler picks them up.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credits.getCredits();
  // TODO: Handle 'response' of type CreditsResponse
} catch (err) {
  // TODO: Handle 'err' of type Credits.GetCreditsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.credits.getCredits().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.credits.getCredits()`

- **OnSuccess**: <code>[CreditsResponse](src/models/credits-response.ts)</code>
- **OnError**: throws <code>[Credits.GetCreditsError](src/resources/credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.credits.getCredits().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditsResponse, Credits.GetCreditsError&gt;</code>, with `result.value` of type <code>[CreditsResponse](src/models/credits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Monitor

> Source: [Monitor](src/resources/monitor.ts)

<details>
<summary><code>getGoogleProduct(request: Monitor.GetGoogleProductRequest, options?: RequestOptions): ApiPromise&lt;GoogleProductResponse, Monitor.GetGoogleProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the product panel that a Google Search shopping card or a Google AI Mode product opens: merchant offers, description, specifications, reviews, images and related products. Send the `productResultToken` from a Google Search `result.shoppingCards` card, or from a Google AI Mode `result.shoppingCards` or `result.inlineProducts` entry.

Costs 1 credit, plus the 2-credit sync surcharge, and only when the request succeeds. A token expires five minutes after the scrape that issued it. If you send the request async, set a high `priority`, so that the token does not expire in the queue.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.getGoogleProduct({
    body: { productResultToken: "some example string" },
  });
  // TODO: Handle 'response' of type GoogleProductResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.GetGoogleProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .getGoogleProduct({ body: { productResultToken: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleProductResponse
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
| <code>body</code> | <code>[GoogleProductRequest](src/models/google-product-request.ts)</code> | The token from a Google Search shopping card |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.getGoogleProduct(request)`

- **OnSuccess**: <code>[GoogleProductResponse](src/models/google-product-response.ts)</code>
- **OnError**: throws <code>[Monitor.GetGoogleProductError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.getGoogleProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleProductResponse, Monitor.GetGoogleProductError&gt;</code>, with `result.value` of type <code>[GoogleProductResponse](src/models/google-product-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>monitorAiMode(request: Monitor.MonitorAiModeRequest, options?: RequestOptions): ApiPromise&lt;AiModeMonitorResponse, Monitor.MonitorAiModeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from AI Mode about your brand, products, or any topic across various regions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.monitorAiMode({ body: { country: CountryCode2.Ad } });
  // TODO: Handle 'response' of type AiModeMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.MonitorAiModeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor.monitorAiMode({ body: { country: CountryCode2.Ad } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AiModeMonitorResponse
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
| <code>body</code> | <code>[AiModeMonitorRequest2](src/models/unions/ai-mode-monitor-request2.ts)</code> | Request parameters for monitoring AI Mode responses |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.monitorAiMode(request)`

- **OnSuccess**: <code>[AiModeMonitorResponse](src/models/ai-mode-monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.MonitorAiModeError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.monitorAiMode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AiModeMonitorResponse, Monitor.MonitorAiModeError&gt;</code>, with `result.value` of type <code>[AiModeMonitorResponse](src/models/ai-mode-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>monitorBingAiMode(request: Monitor.MonitorBingAiModeRequest, options?: RequestOptions): ApiPromise&lt;BingAiModeMonitorResponse, Monitor.MonitorBingAiModeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract the answer, sources and citation pills from Bing AI Mode (bing.com/copilotsearch) for a prompt, in the country you select.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.monitorBingAiMode({
    body: { prompt: "some example string", country: CountryCode13.Ad },
  });
  // TODO: Handle 'response' of type BingAiModeMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.MonitorBingAiModeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .monitorBingAiMode({ body: { prompt: "some example string", country: CountryCode13.Ad } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BingAiModeMonitorResponse
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
| <code>body</code> | <code>[BingAiModeMonitorRequest](src/models/bing-ai-mode-monitor-request.ts)</code> | Request parameters for monitoring Bing AI Mode responses |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.monitorBingAiMode(request)`

- **OnSuccess**: <code>[BingAiModeMonitorResponse](src/models/bing-ai-mode-monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.MonitorBingAiModeError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.monitorBingAiMode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BingAiModeMonitorResponse, Monitor.MonitorBingAiModeError&gt;</code>, with `result.value` of type <code>[BingAiModeMonitorResponse](src/models/bing-ai-mode-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>monitorChatgpt(request: Monitor.MonitorChatgptRequest, options?: RequestOptions): ApiPromise&lt;ChatGptMonitorResponse, Monitor.MonitorChatgptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from ChatGPT — answer text, cited sources, shopping cards, brand entities, and ads — for any prompt across supported regions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.monitorChatgpt({
    body: { prompt: "some example string", country: CountryCode2.Ad },
  });
  // TODO: Handle 'response' of type ChatGptMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.MonitorChatgptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .monitorChatgpt({ body: { prompt: "some example string", country: CountryCode2.Ad } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatGptMonitorResponse
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
| <code>body</code> | <code>[ChatGptMonitorRequest](src/models/chat-gpt-monitor-request.ts)</code> | Request parameters for monitoring ChatGPT responses |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.monitorChatgpt(request)`

- **OnSuccess**: <code>[ChatGptMonitorResponse](src/models/chat-gpt-monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.MonitorChatgptError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.monitorChatgpt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatGptMonitorResponse, Monitor.MonitorChatgptError&gt;</code>, with `result.value` of type <code>[ChatGptMonitorResponse](src/models/chat-gpt-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>monitorCopilot(request: Monitor.MonitorCopilotRequest, options?: RequestOptions): ApiPromise&lt;CopilotMonitorResponse, Monitor.MonitorCopilotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Microsoft Copilot about your brand, products, or any topic across various regions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.monitorCopilot({
    body: { prompt: "some example string", country: CountryCode2.Ad },
  });
  // TODO: Handle 'response' of type CopilotMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.MonitorCopilotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .monitorCopilot({ body: { prompt: "some example string", country: CountryCode2.Ad } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CopilotMonitorResponse
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
| <code>body</code> | <code>[CopilotMonitorRequest](src/models/copilot-monitor-request.ts)</code> | Request parameters for monitoring Copilot responses |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.monitorCopilot(request)`

- **OnSuccess**: <code>[CopilotMonitorResponse](src/models/copilot-monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.MonitorCopilotError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.monitorCopilot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CopilotMonitorResponse, Monitor.MonitorCopilotError&gt;</code>, with `result.value` of type <code>[CopilotMonitorResponse](src/models/copilot-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>monitorGemini(request: Monitor.MonitorGeminiRequest, options?: RequestOptions): ApiPromise&lt;GeminiMonitorResponse, Monitor.MonitorGeminiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Google Gemini — generated answer text and cited sources for any prompt, with Markdown and HTML export formats

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.monitorGemini({
    body: { prompt: "some example string", country: CountryCode2.Ad },
  });
  // TODO: Handle 'response' of type GeminiMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.MonitorGeminiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .monitorGemini({ body: { prompt: "some example string", country: CountryCode2.Ad } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeminiMonitorResponse
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
| <code>body</code> | <code>[GeminiMonitorRequest](src/models/gemini-monitor-request.ts)</code> | Request parameters for monitoring Gemini responses |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.monitorGemini(request)`

- **OnSuccess**: <code>[GeminiMonitorResponse](src/models/gemini-monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.MonitorGeminiError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.monitorGemini(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeminiMonitorResponse, Monitor.MonitorGeminiError&gt;</code>, with `result.value` of type <code>[GeminiMonitorResponse](src/models/gemini-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>monitorGoogle(request: Monitor.MonitorGoogleRequest, options?: RequestOptions): ApiPromise&lt;GoogleMonitorResponse, Monitor.MonitorGoogleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Google Search including organic results, People Also Ask, related searches, and optional AI Overview

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.monitorGoogle({
    body: { query: "some example string", country: CountryCode8.Ad },
  });
  // TODO: Handle 'response' of type GoogleMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.MonitorGoogleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .monitorGoogle({ body: { query: "some example string", country: CountryCode8.Ad } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleMonitorResponse
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
| <code>body</code> | <code>[GoogleMonitorRequest3](src/models/unions/google-monitor-request3.ts)</code> | Request parameters for monitoring Google search results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.monitorGoogle(request)`

- **OnSuccess**: <code>[GoogleMonitorResponse](src/models/google-monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.MonitorGoogleError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.monitorGoogle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleMonitorResponse, Monitor.MonitorGoogleError&gt;</code>, with `result.value` of type <code>[GoogleMonitorResponse](src/models/google-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>monitorGoogleNews(request: Monitor.MonitorGoogleNewsRequest, options?: RequestOptions): ApiPromise&lt;GoogleNewsMonitorResponse, Monitor.MonitorGoogleNewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured news articles from Google News including titles, links, snippets, sources, dates, and thumbnails

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.monitorGoogleNews({ body: { country: CountryCode1.Ad } });
  // TODO: Handle 'response' of type GoogleNewsMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.MonitorGoogleNewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor.monitorGoogleNews({ body: { country: CountryCode1.Ad } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleNewsMonitorResponse
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
| <code>body</code> | <code>[GoogleNewsMonitorRequest2](src/models/unions/google-news-monitor-request2.ts)</code> | Request parameters for monitoring Google News results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.monitorGoogleNews(request)`

- **OnSuccess**: <code>[GoogleNewsMonitorResponse](src/models/google-news-monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.MonitorGoogleNewsError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.monitorGoogleNews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleNewsMonitorResponse, Monitor.MonitorGoogleNewsError&gt;</code>, with `result.value` of type <code>[GoogleNewsMonitorResponse](src/models/google-news-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>monitorGrok(request: Monitor.MonitorGrokRequest, options?: RequestOptions): ApiPromise&lt;GrokMonitorResponse, Monitor.MonitorGrokError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Grok — answer text and cited sources, including X/Twitter references — for any prompt across supported regions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.monitorGrok({
    body: { prompt: "some example string", country: CountryCode2.Ad },
  });
  // TODO: Handle 'response' of type GrokMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.MonitorGrokError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .monitorGrok({ body: { prompt: "some example string", country: CountryCode2.Ad } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GrokMonitorResponse
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
| <code>body</code> | <code>[GrokMonitorRequest](src/models/grok-monitor-request.ts)</code> | Request parameters for monitoring Grok responses |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.monitorGrok(request)`

- **OnSuccess**: <code>[GrokMonitorResponse](src/models/grok-monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.MonitorGrokError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.monitorGrok(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GrokMonitorResponse, Monitor.MonitorGrokError&gt;</code>, with `result.value` of type <code>[GrokMonitorResponse](src/models/grok-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>monitorPerplexity(request: Monitor.MonitorPerplexityRequest, options?: RequestOptions): ApiPromise&lt;PerplexityMonitorResponse, Monitor.MonitorPerplexityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Perplexity AI about your brand, products, or any topic across various regions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.monitorPerplexity({
    body: { prompt: "some example string", country: CountryCode2.Ad },
  });
  // TODO: Handle 'response' of type PerplexityMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.MonitorPerplexityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .monitorPerplexity({ body: { prompt: "some example string", country: CountryCode2.Ad } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PerplexityMonitorResponse
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
| <code>body</code> | <code>[PerplexityMonitorRequest](src/models/perplexity-monitor-request.ts)</code> | Request parameters for monitoring Perplexity responses |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.monitorPerplexity(request)`

- **OnSuccess**: <code>[PerplexityMonitorResponse](src/models/perplexity-monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.MonitorPerplexityError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.monitorPerplexity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PerplexityMonitorResponse, Monitor.MonitorPerplexityError&gt;</code>, with `result.value` of type <code>[PerplexityMonitorResponse](src/models/perplexity-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resolveGoogleGoto(request: Monitor.ResolveGoogleGotoRequest, options?: RequestOptions): ApiPromise&lt;GoogleGotoResponse, Monitor.ResolveGoogleGotoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve one Google redirect link to its destination URL. Send the `redirectLink` that ships beside every resolved link on a Google Search, Google News, or AI Mode response, and the response gives you the URL it points to.

Charges no credits, does not use a concurrency slot, and counts against the per-second rate limit like any other call. Each request resolves one link, and Google gets at most 10 seconds to answer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.resolveGoogleGoto({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type GoogleGotoResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.ResolveGoogleGotoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor.resolveGoogleGoto({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoogleGotoResponse
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
| <code>body</code> | <code>[GoogleGotoRequest](src/models/google-goto-request.ts)</code> | The Google redirect link to resolve |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.resolveGoogleGoto(request)`

- **OnSuccess**: <code>[GoogleGotoResponse](src/models/google-goto-response.ts)</code>
- **OnError**: throws <code>[Monitor.ResolveGoogleGotoError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.resolveGoogleGoto(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoogleGotoResponse, Monitor.ResolveGoogleGotoError&gt;</code>, with `result.value` of type <code>[GoogleGotoResponse](src/models/google-goto-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## States

> Source: [States](src/resources/states.ts)

<details>
<summary><code>getStates(request: States.GetStatesRequest, options?: RequestOptions): ApiPromise&lt;V1StatesResponse[], States.GetStatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of US states supported for state-level geo-targeting. Only US is currently supported — other country values return an empty array.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.states.getStates({ country: "US" });
  // TODO: Handle 'response' of type V1StatesResponse[]
} catch (err) {
  // TODO: Handle 'err' of type States.GetStatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.states.getStates({ country: "US" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1StatesResponse[]
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
| <code>country</code> | <code>string</code> | ISO 3166-1 alpha-2 country code. Only "US" returns results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.states.getStates(request)`

- **OnSuccess**: <code>[V1StatesResponse](src/models/v1-states-response.ts)[]</code>
- **OnError**: throws <code>[States.GetStatesError](src/resources/states.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.states.getStates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1StatesResponse[], States.GetStatesError&gt;</code>, with `result.value` of type <code>[V1StatesResponse](src/models/v1-states-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloroError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

