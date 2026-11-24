# Reference

> Source: [ParallelClient](src/client.ts)

## ChatApiBeta

> Source: [ChatApiBeta](src/resources/chat-api-beta.ts)

<details>
<summary><code>chatCompletionsV1BetaChatCompletionsPost(request: ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostRequest, options?: RequestOptions): ApiPromise&lt;ChatCompletion, ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Chat completions.

This endpoint can be used to get realtime chat completions. It can also be used
with the Task API processors to get structured, research outputs via a chat
interface.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chatApiBeta.chatCompletionsV1BetaChatCompletionsPost({
    body: {
      model: "some example string",
      messages: [{ role: Role1.System, content: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type ChatCompletion
} catch (err) {
  // TODO: Handle 'err' of type ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApiBeta
  .chatCompletionsV1BetaChatCompletionsPost({
    body: {
      model: "some example string",
      messages: [{ role: Role1.System, content: "some example string" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatCompletion
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
| <code>body</code> | <code>[ChatCompletionRequest](src/models/chat-completion-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApiBeta.chatCompletionsV1BetaChatCompletionsPost(request)`

- **OnSuccess**: <code>[ChatCompletion](src/models/chat-completion.ts)</code>
- **OnError**: throws <code>[ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostError](src/resources/chat-api-beta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApiBeta.chatCompletionsV1BetaChatCompletionsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatCompletion, ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostError&gt;</code>, with `result.value` of type <code>[ChatCompletion](src/models/chat-completion.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Extract

> Source: [Extract](src/resources/extract.ts)

<details>
<summary><code>extractV1ExtractPost(request: Extract.ExtractV1ExtractPostRequest, options?: RequestOptions): ApiPromise&lt;V1ExtractResponse, Extract.ExtractV1ExtractPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extracts relevant content from specific web URLs.

The legacy Extract API reference (`/v1beta/extract` endpoint) is available
here, and
migration guide is here.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.extract.extractV1ExtractPost({ body: { urls: ["some example string"] } });
  // TODO: Handle 'response' of type V1ExtractResponse
} catch (err) {
  // TODO: Handle 'err' of type Extract.ExtractV1ExtractPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extract
  .extractV1ExtractPost({ body: { urls: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ExtractResponse
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
| <code>body</code> | <code>[V1ExtractRequest](src/models/v1-extract-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extract.extractV1ExtractPost(request)`

- **OnSuccess**: <code>[V1ExtractResponse](src/models/v1-extract-response.ts)</code>
- **OnError**: throws <code>[Extract.ExtractV1ExtractPostError](src/resources/extract.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extract.extractV1ExtractPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ExtractResponse, Extract.ExtractV1ExtractPostError&gt;</code>, with `result.value` of type <code>[V1ExtractResponse](src/models/v1-extract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FindAll

> Source: [FindAll](src/resources/find-all.ts)

<details>
<summary><code>cancelFindallRunV1BetaFindallRunsFindallIdCancelPost(request: FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest, options?: RequestOptions): ApiPromise&lt;undefined, FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a FindAll run.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.findAll.cancelFindallRunV1BetaFindallRunsFindallIdCancelPost({
    findallId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.findAll
  .cancelFindallRunV1BetaFindallRunsFindallIdCancelPost({ findallId: "some example string" })
  .asApiResult();
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
| <code>findallId</code> | <code>string</code> | - |
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.findAll.cancelFindallRunV1BetaFindallRunsFindallIdCancelPost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError](src/resources/find-all.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.findAll.cancelFindallRunV1BetaFindallRunsFindallIdCancelPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enrichFindallRunV1BetaFindallRunsFindallIdEnrichPost(request: FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest, options?: RequestOptions): ApiPromise&lt;FindAllSchema, FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an enrichment to a FindAll run.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.findAll.enrichFindallRunV1BetaFindallRunsFindallIdEnrichPost({
    findallId: "some example string",
    body: { outputSchema: { jsonSchema: {} } },
  });
  // TODO: Handle 'response' of type FindAllSchema
} catch (err) {
  // TODO: Handle 'err' of type FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.findAll
  .enrichFindallRunV1BetaFindallRunsFindallIdEnrichPost({
    findallId: "some example string",
    body: { outputSchema: { jsonSchema: {} } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FindAllSchema
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
| <code>findallId</code> | <code>string</code> | - |
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |
| <code>body</code> | <code>[FindAllEnrichInput](src/models/find-all-enrich-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.findAll.enrichFindallRunV1BetaFindallRunsFindallIdEnrichPost(request)`

- **OnSuccess**: <code>[FindAllSchema](src/models/find-all-schema.ts)</code>
- **OnError**: throws <code>[FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError](src/resources/find-all.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.findAll.enrichFindallRunV1BetaFindallRunsFindallIdEnrichPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FindAllSchema, FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError&gt;</code>, with `result.value` of type <code>[FindAllSchema](src/models/find-all-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>extendFindallRunV1BetaFindallRunsFindallIdExtendPost(request: FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest, options?: RequestOptions): ApiPromise&lt;FindAllSchema, FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extend a FindAll run by adding additional matches to the current match limit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.findAll.extendFindallRunV1BetaFindallRunsFindallIdExtendPost({
    findallId: "some example string",
    body: { additionalMatchLimit: 1 },
  });
  // TODO: Handle 'response' of type FindAllSchema
} catch (err) {
  // TODO: Handle 'err' of type FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.findAll
  .extendFindallRunV1BetaFindallRunsFindallIdExtendPost({
    findallId: "some example string",
    body: { additionalMatchLimit: 1 },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FindAllSchema
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
| <code>findallId</code> | <code>string</code> | - |
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |
| <code>body</code> | <code>[FindAllExtendInput](src/models/find-all-extend-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.findAll.extendFindallRunV1BetaFindallRunsFindallIdExtendPost(request)`

- **OnSuccess**: <code>[FindAllSchema](src/models/find-all-schema.ts)</code>
- **OnError**: throws <code>[FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError](src/resources/find-all.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.findAll.extendFindallRunV1BetaFindallRunsFindallIdExtendPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FindAllSchema, FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError&gt;</code>, with `result.value` of type <code>[FindAllSchema](src/models/find-all-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findallEntitySearchV1BetaFindallEntitySearchPost(request: FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostRequest, options?: RequestOptions): ApiPromise&lt;FindAllEntitySearchResponse, FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return ranked entities matching a natural language objective.

This endpoint performs a best-effort search optimized for low latency. To keep
responses fast, it returns a fixed set of attributes and supports queries of
limited complexity.

For comprehensive match evaluation and enrichment, use the
FindAll API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.findAll.findallEntitySearchV1BetaFindallEntitySearchPost({
    body: { entityType: EntityType.People, objective: "some example string" },
  });
  // TODO: Handle 'response' of type FindAllEntitySearchResponse
} catch (err) {
  // TODO: Handle 'err' of type FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.findAll
  .findallEntitySearchV1BetaFindallEntitySearchPost({
    body: { entityType: EntityType.People, objective: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FindAllEntitySearchResponse
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
| <code>body</code> | <code>[FindAllEntitySearchRequest](src/models/find-all-entity-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.findAll.findallEntitySearchV1BetaFindallEntitySearchPost(request)`

- **OnSuccess**: <code>[FindAllEntitySearchResponse](src/models/find-all-entity-search-response.ts)</code>
- **OnError**: throws <code>[FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostError](src/resources/find-all.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.findAll.findallEntitySearchV1BetaFindallEntitySearchPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FindAllEntitySearchResponse, FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostError&gt;</code>, with `result.value` of type <code>[FindAllEntitySearchResponse](src/models/find-all-entity-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findallRunsV1GetV1BetaFindallRunsFindallIdGet(request: FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest, options?: RequestOptions): ApiPromise&lt;FindAllRun, FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a FindAll run.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.findAll.findallRunsV1GetV1BetaFindallRunsFindallIdGet({
    findallId: "some example string",
  });
  // TODO: Handle 'response' of type FindAllRun
} catch (err) {
  // TODO: Handle 'err' of type FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.findAll
  .findallRunsV1GetV1BetaFindallRunsFindallIdGet({ findallId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FindAllRun
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
| <code>findallId</code> | <code>string</code> | - |
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.findAll.findallRunsV1GetV1BetaFindallRunsFindallIdGet(request)`

- **OnSuccess**: <code>[FindAllRun](src/models/find-all-run.ts)</code>
- **OnError**: throws <code>[FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetError](src/resources/find-all.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.findAll.findallRunsV1GetV1BetaFindallRunsFindallIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FindAllRun, FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetError&gt;</code>, with `result.value` of type <code>[FindAllRun](src/models/find-all-run.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findallRunsV1V1BetaFindallRunsPost(request: FindAll.FindallRunsV1V1BetaFindallRunsPostRequest, options?: RequestOptions): ApiPromise&lt;FindAllRun, FindAll.FindallRunsV1V1BetaFindallRunsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a FindAll run.

This endpoint immediately returns a FindAll run object with status set to 'queued'.
You can get the run result snapshot using the GET /v1beta/findall/runs/{findall_id}/result endpoint.
You can track the progress of the run by:
- Polling the status using the GET /v1beta/findall/runs/{findall_id} endpoint,
- Subscribing to real-time updates via the /v1beta/findall/runs/{findall_id}/events
endpoint,
- Or specifying a webhook with relevant event types during run creation to receive
notifications.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.findAll.findallRunsV1V1BetaFindallRunsPost({
    body: {
      objective: "some example string",
      entityType: "some example string",
      matchConditions: [{ name: "some example string", description: "some example string" }],
      generator: Generator2.Base,
      matchLimit: 1,
    },
  });
  // TODO: Handle 'response' of type FindAllRun
} catch (err) {
  // TODO: Handle 'err' of type FindAll.FindallRunsV1V1BetaFindallRunsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.findAll
  .findallRunsV1V1BetaFindallRunsPost({
    body: {
      objective: "some example string",
      entityType: "some example string",
      matchConditions: [{ name: "some example string", description: "some example string" }],
      generator: Generator2.Base,
      matchLimit: 1,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FindAllRun
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
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |
| <code>body</code> | <code>[FindAllRunInput](src/models/find-all-run-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.findAll.findallRunsV1V1BetaFindallRunsPost(request)`

- **OnSuccess**: <code>[FindAllRun](src/models/find-all-run.ts)</code>
- **OnError**: throws <code>[FindAll.FindallRunsV1V1BetaFindallRunsPostError](src/resources/find-all.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.findAll.findallRunsV1V1BetaFindallRunsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FindAllRun, FindAll.FindallRunsV1V1BetaFindallRunsPostError&gt;</code>, with `result.value` of type <code>[FindAllRun](src/models/find-all-run.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFindallEventsV1BetaFindallRunsFindallIdEventsGet(request: FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet&gt;, FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stream events from a FindAll run.

Args:
request: The Shapi request
findall_id: The FindAll run ID
last_event_id: Optional event ID to resume from.
timeout: Optional timeout in seconds. If None, keep connection alive
as long as the run is going. If set, stop after specified duration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.findAll.getFindallEventsV1BetaFindallRunsFindallIdEventsGet({
    findallId: "some example string",
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError, discriminated with 'err.payload.kind'
  // The loop's failures are ParallelError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.findAll
  .getFindallEventsV1BetaFindallRunsFindallIdEventsGet({ findallId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet>
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
| <code>findallId</code> | <code>string</code> | - |
| <code>lastEventId?</code> | <code>[LastEventId1](src/models/unions/last-event-id1.ts)</code> | - |
| <code>timeout?</code> | <code>[Timeout](src/models/unions/timeout.ts)</code> | - |
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.findAll.getFindallEventsV1BetaFindallRunsFindallIdEventsGet(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet](src/models/unions/response200-get-findall-events-v1-beta-findall-runs-findall-id-events-get.ts)&gt;</code>
- **OnError**: throws <code>[FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError](src/resources/find-all.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.findAll.getFindallEventsV1BetaFindallRunsFindallIdEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet&gt;, FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet](src/models/unions/response200-get-findall-events-v1-beta-findall-runs-findall-id-events-get.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFindallResultV1BetaFindallRunsFindallIdResultGet(request: FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest, options?: RequestOptions): ApiPromise&lt;FindAllRunResult, FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the FindAll run result at the time of the request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.findAll.getFindallResultV1BetaFindallRunsFindallIdResultGet({
    findallId: "some example string",
  });
  // TODO: Handle 'response' of type FindAllRunResult
} catch (err) {
  // TODO: Handle 'err' of type FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.findAll
  .getFindallResultV1BetaFindallRunsFindallIdResultGet({ findallId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FindAllRunResult
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
| <code>findallId</code> | <code>string</code> | - |
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.findAll.getFindallResultV1BetaFindallRunsFindallIdResultGet(request)`

- **OnSuccess**: <code>[FindAllRunResult](src/models/find-all-run-result.ts)</code>
- **OnError**: throws <code>[FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetError](src/resources/find-all.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.findAll.getFindallResultV1BetaFindallRunsFindallIdResultGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FindAllRunResult, FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetError&gt;</code>, with `result.value` of type <code>[FindAllRunResult](src/models/find-all-run-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFindallSchemaV1BetaFindallRunsFindallIdSchemaGet(request: FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest, options?: RequestOptions): ApiPromise&lt;FindAllSchema, FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.findAll.getFindallSchemaV1BetaFindallRunsFindallIdSchemaGet({
    findallId: "some example string",
  });
  // TODO: Handle 'response' of type FindAllSchema
} catch (err) {
  // TODO: Handle 'err' of type FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.findAll
  .getFindallSchemaV1BetaFindallRunsFindallIdSchemaGet({ findallId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FindAllSchema
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
| <code>findallId</code> | <code>string</code> | - |
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.findAll.getFindallSchemaV1BetaFindallRunsFindallIdSchemaGet(request)`

- **OnSuccess**: <code>[FindAllSchema](src/models/find-all-schema.ts)</code>
- **OnError**: throws <code>[FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError](src/resources/find-all.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.findAll.getFindallSchemaV1BetaFindallRunsFindallIdSchemaGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FindAllSchema, FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError&gt;</code>, with `result.value` of type <code>[FindAllSchema](src/models/find-all-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ingestFindallRunV1BetaFindallIngestPost(request: FindAll.IngestFindallRunV1BetaFindallIngestPostRequest, options?: RequestOptions): ApiPromise&lt;FindAllSchema, FindAll.IngestFindallRunV1BetaFindallIngestPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transforms a natural language search objective into a structured FindAll spec.

The generated specification serves as a suggested starting point and can be further
customized by the user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.findAll.ingestFindallRunV1BetaFindallIngestPost({
    body: { objective: "some example string" },
  });
  // TODO: Handle 'response' of type FindAllSchema
} catch (err) {
  // TODO: Handle 'err' of type FindAll.IngestFindallRunV1BetaFindallIngestPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.findAll
  .ingestFindallRunV1BetaFindallIngestPost({ body: { objective: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FindAllSchema
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
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |
| <code>body</code> | <code>[IngestInput](src/models/ingest-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.findAll.ingestFindallRunV1BetaFindallIngestPost(request)`

- **OnSuccess**: <code>[FindAllSchema](src/models/find-all-schema.ts)</code>
- **OnError**: throws <code>[FindAll.IngestFindallRunV1BetaFindallIngestPostError](src/resources/find-all.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.findAll.ingestFindallRunV1BetaFindallIngestPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FindAllSchema, FindAll.IngestFindallRunV1BetaFindallIngestPostError&gt;</code>, with `result.value` of type <code>[FindAllSchema](src/models/find-all-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Memory

> Source: [Memory](src/resources/memory.ts)

<details>
<summary><code>clearMemoryV1BetaMemoryClearPost(request: Memory.ClearMemoryV1BetaMemoryClearPostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Memory.ClearMemoryV1BetaMemoryClearPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clears all entries from the selected memory without deleting the underlying tasks, monitors, or FindAll runs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.memory.clearMemoryV1BetaMemoryClearPost({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Memory.ClearMemoryV1BetaMemoryClearPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.memory.clearMemoryV1BetaMemoryClearPost({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[MemoryClearRequest](src/models/memory-clear-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.memory.clearMemoryV1BetaMemoryClearPost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Memory.ClearMemoryV1BetaMemoryClearPostError](src/resources/memory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.memory.clearMemoryV1BetaMemoryClearPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Memory.ClearMemoryV1BetaMemoryClearPostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>evictMemorySourceV1BetaMemoryEvictPost(request: Memory.EvictMemorySourceV1BetaMemoryEvictPostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Memory.EvictMemorySourceV1BetaMemoryEvictPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a task run, monitor, or FindAll run from the selected memory without deleting the original resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.memory.evictMemorySourceV1BetaMemoryEvictPost({
    body: { kind: Kind3.Task, id: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type Memory.EvictMemorySourceV1BetaMemoryEvictPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.memory
  .evictMemorySourceV1BetaMemoryEvictPost({ body: { kind: Kind3.Task, id: "some example string" } })
  .asApiResult();
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
| <code>body</code> | <code>[MemoryEvictRequest](src/models/memory-evict-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.memory.evictMemorySourceV1BetaMemoryEvictPost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Memory.EvictMemorySourceV1BetaMemoryEvictPostError](src/resources/memory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.memory.evictMemorySourceV1BetaMemoryEvictPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Memory.EvictMemorySourceV1BetaMemoryEvictPostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveMemoryV1BetaMemoryRetrievePost(request: Memory.RetrieveMemoryV1BetaMemoryRetrievePostRequest, options?: RequestOptions): ApiPromise&lt;MemoryRetrieveResponse, Memory.RetrieveMemoryV1BetaMemoryRetrievePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves relevant or recent runs from the selected memory. Provide a query to rank results by relevance; leave it empty to return the most recent runs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.memory.retrieveMemoryV1BetaMemoryRetrievePost({ body: {} });
  // TODO: Handle 'response' of type MemoryRetrieveResponse
} catch (err) {
  // TODO: Handle 'err' of type Memory.RetrieveMemoryV1BetaMemoryRetrievePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.memory.retrieveMemoryV1BetaMemoryRetrievePost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MemoryRetrieveResponse
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
| <code>body</code> | <code>[MemoryRetrieveRequest](src/models/memory-retrieve-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.memory.retrieveMemoryV1BetaMemoryRetrievePost(request)`

- **OnSuccess**: <code>[MemoryRetrieveResponse](src/models/memory-retrieve-response.ts)</code>
- **OnError**: throws <code>[Memory.RetrieveMemoryV1BetaMemoryRetrievePostError](src/resources/memory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.memory.retrieveMemoryV1BetaMemoryRetrievePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MemoryRetrieveResponse, Memory.RetrieveMemoryV1BetaMemoryRetrievePostError&gt;</code>, with `result.value` of type <code>[MemoryRetrieveResponse](src/models/memory-retrieve-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Monitor

> Source: [Monitor](src/resources/monitor.ts)

<details>
<summary><code>cancelMonitorV1MonitorsMonitorIdCancelPost(request: Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostRequest, options?: RequestOptions): ApiPromise&lt;MonitorResponse, Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a monitor.

Permanently stops the monitor from running. Cancellation is irreversible —
create a new monitor to resume monitoring. Cancelling an already-cancelled
monitor is a no-op.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.cancelMonitorV1MonitorsMonitorIdCancelPost({
    monitorId: "some example string",
  });
  // TODO: Handle 'response' of type MonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .cancelMonitorV1MonitorsMonitorIdCancelPost({ monitorId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorResponse
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
| <code>monitorId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.cancelMonitorV1MonitorsMonitorIdCancelPost(request)`

- **OnSuccess**: <code>[MonitorResponse](src/models/monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.cancelMonitorV1MonitorsMonitorIdCancelPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorResponse, Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostError&gt;</code>, with `result.value` of type <code>[MonitorResponse](src/models/monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMonitorV1MonitorsPost(request: Monitor.CreateMonitorV1MonitorsPostRequest, options?: RequestOptions): ApiPromise&lt;MonitorResponse, Monitor.CreateMonitorV1MonitorsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a monitor.

Monitors run on a fixed frequency to detect material changes in web content.
Set `type=event_stream` to monitor a search query, or `type=snapshot` to
monitor a specific task run's output. The monitor runs once immediately at
creation, then continues on the configured schedule.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.createMonitorV1MonitorsPost({
    body: {
      type: Type2ParallelAiMonitorApi.EventStream,
      frequency: "some example string",
      settings: { query: "some example string" },
    },
  });
  // TODO: Handle 'response' of type MonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.CreateMonitorV1MonitorsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .createMonitorV1MonitorsPost({
    body: {
      type: Type2ParallelAiMonitorApi.EventStream,
      frequency: "some example string",
      settings: { query: "some example string" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorResponse
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
| <code>body</code> | <code>[CreateMonitorRequest](src/models/create-monitor-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.createMonitorV1MonitorsPost(request)`

- **OnSuccess**: <code>[MonitorResponse](src/models/monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.CreateMonitorV1MonitorsPostError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.createMonitorV1MonitorsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorResponse, Monitor.CreateMonitorV1MonitorsPostError&gt;</code>, with `result.value` of type <code>[MonitorResponse](src/models/monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitorEventsV1MonitorsMonitorIdEventsGet(request: Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedMonitorEvents, Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List events for a monitor, newest first.

Pass `event_group_id` to narrow results to a single execution. Otherwise
returns all executions newest-first; use `next_cursor` to paginate.
Set `include_completions=true` to also include no-change executions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.listMonitorEventsV1MonitorsMonitorIdEventsGet({
    monitorId: "some example string",
  });
  // TODO: Handle 'response' of type PaginatedMonitorEvents
} catch (err) {
  // TODO: Handle 'err' of type Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .listMonitorEventsV1MonitorsMonitorIdEventsGet({ monitorId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedMonitorEvents
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
| <code>monitorId</code> | <code>string</code> | - |
| <code>eventGroupId?</code> | <code>[EventGroupId](src/models/unions/event-group-id.ts)</code> | Filter to a single execution. Values come from `event_group_id` in webhook events and listed events. Pagination params are ignored when set. |
| <code>cursor?</code> | <code>[Cursor1](src/models/unions/cursor1.ts)</code> | Pass `next_cursor` from a previous response to retrieve more events. |
| <code>limit?</code> | <code>[Limit1](src/models/unions/limit1.ts)</code> | Maximum number of events to return. Defaults to 20. Between 1 and 100. |
| <code>includeCompletions?</code> | <code>boolean</code> | When true, include completion events for executions that ran but detected no material changes. Useful for auditing execution history.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.listMonitorEventsV1MonitorsMonitorIdEventsGet(request)`

- **OnSuccess**: <code>[PaginatedMonitorEvents](src/models/paginated-monitor-events.ts)</code>
- **OnError**: throws <code>[Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.listMonitorEventsV1MonitorsMonitorIdEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedMonitorEvents, Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetError&gt;</code>, with `result.value` of type <code>[PaginatedMonitorEvents](src/models/paginated-monitor-events.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitorsV1MonitorsGet(request?: Monitor.ListMonitorsV1MonitorsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedMonitorResponse, Monitor.ListMonitorsV1MonitorsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List monitors ordered by creation time, newest first.

Monitors are sorted by `created_at` descending. `limit` defaults to 100.
Use `next_cursor` from the response and pass it as `cursor` to fetch the
next page. Pagination ends when `next_cursor` is absent.

By default only `active` monitors are returned. Pass `status=cancelled`
or both values to include cancelled monitors.

The legacy Monitor API (`/v1alpha/monitors` endpoints) is documented under
the `Monitor (Alpha)` tag.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.listMonitorsV1MonitorsGet();
  // TODO: Handle 'response' of type PaginatedMonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.ListMonitorsV1MonitorsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor.listMonitorsV1MonitorsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedMonitorResponse
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
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | Pagination token from `next_cursor` in a previous response. Omit to start from the most recently created monitor. |
| <code>limit?</code> | <code>[Limit](src/models/unions/limit.ts)</code> | Maximum number of monitors to return. Defaults to 100. Between 1 and 10000. |
| <code>type?</code> | <code>[Type5VariantCchzdo](src/models/unions/type5-variant-cchzdo.ts)</code> | Filter by monitor type. Pass multiple times to filter by multiple values. Omit to return all types. |
| <code>status?</code> | <code>[Status11](src/models/unions/status11.ts)</code> | Filter by monitor status. Pass multiple times to filter by multiple values. Defaults to `active` only. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.listMonitorsV1MonitorsGet(request)`

- **OnSuccess**: <code>[PaginatedMonitorResponse](src/models/paginated-monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.ListMonitorsV1MonitorsGetError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.listMonitorsV1MonitorsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedMonitorResponse, Monitor.ListMonitorsV1MonitorsGetError&gt;</code>, with `result.value` of type <code>[PaginatedMonitorResponse](src/models/paginated-monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveMonitorV1MonitorsMonitorIdGet(request: Monitor.RetrieveMonitorV1MonitorsMonitorIdGetRequest, options?: RequestOptions): ApiPromise&lt;MonitorResponse, Monitor.RetrieveMonitorV1MonitorsMonitorIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a monitor.

Retrieves a specific monitor by `monitor_id`. Returns the monitor
configuration including status, frequency, query, and webhook settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.retrieveMonitorV1MonitorsMonitorIdGet({
    monitorId: "some example string",
  });
  // TODO: Handle 'response' of type MonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.RetrieveMonitorV1MonitorsMonitorIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .retrieveMonitorV1MonitorsMonitorIdGet({ monitorId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorResponse
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
| <code>monitorId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.retrieveMonitorV1MonitorsMonitorIdGet(request)`

- **OnSuccess**: <code>[MonitorResponse](src/models/monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.RetrieveMonitorV1MonitorsMonitorIdGetError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.retrieveMonitorV1MonitorsMonitorIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorResponse, Monitor.RetrieveMonitorV1MonitorsMonitorIdGetError&gt;</code>, with `result.value` of type <code>[MonitorResponse](src/models/monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerMonitorRunV1MonitorsMonitorIdTriggerPost(request: Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an immediate monitor run.

Enqueues a one-off execution of the monitor outside its normal schedule.
The monitor's regular schedule is not affected. An event is only emitted
if the execution detects a material change. Cancelled monitors cannot be
triggered.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.monitor.triggerMonitorRunV1MonitorsMonitorIdTriggerPost({ monitorId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .triggerMonitorRunV1MonitorsMonitorIdTriggerPost({ monitorId: "some example string" })
  .asApiResult();
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
| <code>monitorId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.triggerMonitorRunV1MonitorsMonitorIdTriggerPost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.triggerMonitorRunV1MonitorsMonitorIdTriggerPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMonitorV1MonitorsMonitorIdUpdatePost(request: Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest, options?: RequestOptions): ApiPromise&lt;MonitorResponse, Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a monitor.

Only fields explicitly included in the request body are changed. Pass
`null` for `webhook` or `metadata` to clear those fields. Pass `type` and
`settings` to update type-specific settings on an `event_stream` monitor.
At least one field must be provided. Cancelled monitors cannot be updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitor.updateMonitorV1MonitorsMonitorIdUpdatePost({
    monitorId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type MonitorResponse
} catch (err) {
  // TODO: Handle 'err' of type Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .updateMonitorV1MonitorsMonitorIdUpdatePost({ monitorId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorResponse
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
| <code>monitorId</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateMonitorRequest](src/models/update-monitor-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.updateMonitorV1MonitorsMonitorIdUpdatePost(request)`

- **OnSuccess**: <code>[MonitorResponse](src/models/monitor-response.ts)</code>
- **OnError**: throws <code>[Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.updateMonitorV1MonitorsMonitorIdUpdatePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorResponse, Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostError&gt;</code>, with `result.value` of type <code>[MonitorResponse](src/models/monitor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ResponsesApi

> Source: [ResponsesApi](src/resources/responses-api.ts)

<details>
<summary><code>createResponseV1ResponsesPost(request: ResponsesApi.CreateResponseV1ResponsesPostRequest, options?: RequestOptions): ApiPromise&lt;Response, ResponsesApi.CreateResponseV1ResponsesPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a response.

Generates an answer to the given input, grounded in live web research and
annotated with URL citations. Set `model` to `parallel`; `reasoning.effort`
(`low`/`medium`/`high`) controls how much research is performed, trading
response time for answer quality. Returns an OpenAI-format `Response` as
`application/json`, or a `text/event-stream` of OpenAI Responses SSE
events when `stream=true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.responsesApi.createResponseV1ResponsesPost({
    body: { model: "some example string", input: "some example string" },
  });
  // TODO: Handle 'response' of type Response
} catch (err) {
  // TODO: Handle 'err' of type ResponsesApi.CreateResponseV1ResponsesPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.responsesApi
  .createResponseV1ResponsesPost({ body: { model: "some example string", input: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Response
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
| <code>body</code> | <code>[ResponseCreateRequest](src/models/response-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.responsesApi.createResponseV1ResponsesPost(request)`

- **OnSuccess**: <code>[Response](src/models/response.ts)</code>
- **OnError**: throws <code>[ResponsesApi.CreateResponseV1ResponsesPostError](src/resources/responses-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.responsesApi.createResponseV1ResponsesPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Response, ResponsesApi.CreateResponseV1ResponsesPostError&gt;</code>, with `result.value` of type <code>[Response](src/models/response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>v1SearchV1SearchPost(request: Search.V1SearchV1SearchPostRequest, options?: RequestOptions): ApiPromise&lt;V1SearchResponse, Search.V1SearchV1SearchPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the web.

The legacy Search API reference (`/v1beta/search` endpoint) is available
here, and
migration guide is here.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.v1SearchV1SearchPost({
    body: { searchQueries: ["some example string"] },
  });
  // TODO: Handle 'response' of type V1SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.V1SearchV1SearchPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search
  .v1SearchV1SearchPost({ body: { searchQueries: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SearchResponse
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
| <code>body</code> | <code>[V1SearchRequest](src/models/v1-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.v1SearchV1SearchPost(request)`

- **OnSuccess**: <code>[V1SearchResponse](src/models/v1-search-response.ts)</code>
- **OnError**: throws <code>[Search.V1SearchV1SearchPostError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.v1SearchV1SearchPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SearchResponse, Search.V1SearchV1SearchPostError&gt;</code>, with `result.value` of type <code>[V1SearchResponse](src/models/v1-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/resources/tasks.ts)

<details>
<summary><code>tasksRunsEventsGetV1TasksRunsRunIdEventsGet(request: Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet&gt;, Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Streams events for a task run.

Returns a stream of events showing progress updates and state changes for the task
run.

For task runs that did not have enable_events set to true during creation, the
frequency of events will be reduced.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.tasks.tasksRunsEventsGetV1TasksRunsRunIdEventsGet({
    runId: "some example string",
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetError, discriminated with 'err.payload.kind'
  // The loop's failures are ParallelError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksRunsEventsGetV1TasksRunsRunIdEventsGet({ runId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>
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
| <code>runId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksRunsEventsGetV1TasksRunsRunIdEventsGet(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet](src/models/unions/response200-tasks-runs-events-get-v1-tasks-runs-run-id-events-get.ts)&gt;</code>
- **OnError**: throws <code>[Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksRunsEventsGetV1TasksRunsRunIdEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet&gt;, Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet](src/models/unions/response200-tasks-runs-events-get-v1-tasks-runs-run-id-events-get.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet(request: Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet&gt;, Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Streams events for a task run.

Returns a stream of events showing progress updates and state changes for the task
run.

For task runs that did not have enable_events set to true during creation, the
frequency of events will be reduced.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.tasks.tasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet({
    runId: "some example string",
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError, discriminated with 'err.payload.kind'
  // The loop's failures are ParallelError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet({ runId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet>
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
| <code>runId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet](src/models/unions/response200-tasks-runs-events-get-v1-beta-tasks-runs-run-id-events-get.ts)&gt;</code>
- **OnError**: throws <code>[Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet&gt;, Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet](src/models/unions/response200-tasks-runs-events-get-v1-beta-tasks-runs-run-id-events-get.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksRunsGetV1TasksRunsRunIdGet(request: Tasks.TasksRunsGetV1TasksRunsRunIdGetRequest, options?: RequestOptions): ApiPromise&lt;TaskRun, Tasks.TasksRunsGetV1TasksRunsRunIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves run status by run_id.

The run result is available from the `/result` endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.tasksRunsGetV1TasksRunsRunIdGet({ runId: "some example string" });
  // TODO: Handle 'response' of type TaskRun
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksRunsGetV1TasksRunsRunIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksRunsGetV1TasksRunsRunIdGet({ runId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskRun
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
| <code>runId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksRunsGetV1TasksRunsRunIdGet(request)`

- **OnSuccess**: <code>[TaskRun](src/models/task-run.ts)</code>
- **OnError**: throws <code>[Tasks.TasksRunsGetV1TasksRunsRunIdGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksRunsGetV1TasksRunsRunIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskRun, Tasks.TasksRunsGetV1TasksRunsRunIdGetError&gt;</code>, with `result.value` of type <code>[TaskRun](src/models/task-run.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksRunsInputGetV1TasksRunsRunIdInputGet(request: Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetRequest, options?: RequestOptions): ApiPromise&lt;TaskRunInput, Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the input of a run by run_id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.tasksRunsInputGetV1TasksRunsRunIdInputGet({
    runId: "some example string",
  });
  // TODO: Handle 'response' of type TaskRunInput
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksRunsInputGetV1TasksRunsRunIdInputGet({ runId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskRunInput
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
| <code>runId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksRunsInputGetV1TasksRunsRunIdInputGet(request)`

- **OnSuccess**: <code>[TaskRunInput](src/models/task-run-input.ts)</code>
- **OnError**: throws <code>[Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksRunsInputGetV1TasksRunsRunIdInputGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskRunInput, Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetError&gt;</code>, with `result.value` of type <code>[TaskRunInput](src/models/task-run-input.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksRunsPostV1TasksRunsPost(request: Tasks.TasksRunsPostV1TasksRunsPostRequest, options?: RequestOptions): ApiPromise&lt;TaskRun, Tasks.TasksRunsPostV1TasksRunsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a task run.

Returns immediately with a run object in status 'queued'.

Beta features can be enabled by setting the 'parallel-beta' header.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.tasksRunsPostV1TasksRunsPost({
    body: { processor: "some example string", input: "some example string" },
  });
  // TODO: Handle 'response' of type TaskRun
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksRunsPostV1TasksRunsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksRunsPostV1TasksRunsPost({ body: { processor: "some example string", input: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskRun
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
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |
| <code>body</code> | <code>[TaskRunInput](src/models/task-run-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksRunsPostV1TasksRunsPost(request)`

- **OnSuccess**: <code>[TaskRun](src/models/task-run.ts)</code>
- **OnError**: throws <code>[Tasks.TasksRunsPostV1TasksRunsPostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksRunsPostV1TasksRunsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskRun, Tasks.TasksRunsPostV1TasksRunsPostError&gt;</code>, with `result.value` of type <code>[TaskRun](src/models/task-run.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksRunsResultGetV1TasksRunsRunIdResultGet(request: Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetRequest, options?: RequestOptions): ApiPromise&lt;TaskRunResult, Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a run result by run_id, blocking until the run is completed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.tasksRunsResultGetV1TasksRunsRunIdResultGet({
    runId: "some example string",
  });
  // TODO: Handle 'response' of type TaskRunResult
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksRunsResultGetV1TasksRunsRunIdResultGet({ runId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskRunResult
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
| <code>runId</code> | <code>string</code> | - |
| <code>timeout?</code> | <code>number</code> | -<br>**Default**: 600 |
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksRunsResultGetV1TasksRunsRunIdResultGet(request)`

- **OnSuccess**: <code>[TaskRunResult](src/models/task-run-result.ts)</code>
- **OnError**: throws <code>[Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksRunsResultGetV1TasksRunsRunIdResultGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskRunResult, Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetError&gt;</code>, with `result.value` of type <code>[TaskRunResult](src/models/task-run-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(request: Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet&gt;, Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Streams events from a TaskGroup: status updates and run completions.

The connection will remain open for up to an hour as long as at least one run in the
group is still active.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.tasks.tasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet({
    taskgroupId: "some example string",
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError, discriminated with 'err.payload.kind'
  // The loop's failures are ParallelError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet({ taskgroupId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>
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
| <code>taskgroupId</code> | <code>string</code> | - |
| <code>lastEventId?</code> | <code>[LastEventId](src/models/unions/last-event-id.ts)</code> | - |
| <code>timeout?</code> | <code>[Timeout](src/models/unions/timeout.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet](src/models/unions/response200-tasks-sessions-events-get-v1-tasks-groups-taskgroup-id-events-get.ts)&gt;</code>
- **OnError**: throws <code>[Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet&gt;, Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet](src/models/unions/response200-tasks-sessions-events-get-v1-tasks-groups-taskgroup-id-events-get.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet(request: Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest, options?: RequestOptions): ApiPromise&lt;TaskGroupResponse, Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves aggregated status across runs in a TaskGroup.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.tasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet({
    taskgroupId: "some example string",
  });
  // TODO: Handle 'response' of type TaskGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet({ taskgroupId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskGroupResponse
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
| <code>taskgroupId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet(request)`

- **OnSuccess**: <code>[TaskGroupResponse](src/models/task-group-response.ts)</code>
- **OnError**: throws <code>[Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskGroupResponse, Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError&gt;</code>, with `result.value` of type <code>[TaskGroupResponse](src/models/task-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksTaskgroupsPostV1TasksGroupsPost(request: Tasks.TasksTaskgroupsPostV1TasksGroupsPostRequest, options?: RequestOptions): ApiPromise&lt;TaskGroupResponse, Tasks.TasksTaskgroupsPostV1TasksGroupsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a TaskGroup to group and track multiple runs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.tasksTaskgroupsPostV1TasksGroupsPost({ body: {} });
  // TODO: Handle 'response' of type TaskGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksTaskgroupsPostV1TasksGroupsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks.tasksTaskgroupsPostV1TasksGroupsPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskGroupResponse
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
| <code>body</code> | <code>[CreateTaskGroupRequest](src/models/create-task-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksTaskgroupsPostV1TasksGroupsPost(request)`

- **OnSuccess**: <code>[TaskGroupResponse](src/models/task-group-response.ts)</code>
- **OnError**: throws <code>[Tasks.TasksTaskgroupsPostV1TasksGroupsPostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksTaskgroupsPostV1TasksGroupsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskGroupResponse, Tasks.TasksTaskgroupsPostV1TasksGroupsPostError&gt;</code>, with `result.value` of type <code>[TaskGroupResponse](src/models/task-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(request: Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet&gt;, Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves task runs in a TaskGroup and optionally their inputs and outputs.

All runs within a TaskGroup are returned as a stream. To get the inputs and/or
outputs back in the stream, set the corresponding `include_input` and
`include_output` parameters to `true`.

The stream is resumable using the `event_id` as the cursor. To resume a stream,
specify the `last_event_id` parameter with the `event_id` of the last event in the
stream. The stream will resume from the next event after the `last_event_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.tasks.tasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet({
    taskgroupId: "some example string",
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError, discriminated with 'err.payload.kind'
  // The loop's failures are ParallelError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet({ taskgroupId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>
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
| <code>taskgroupId</code> | <code>string</code> | - |
| <code>lastEventId?</code> | <code>[LastEventId](src/models/unions/last-event-id.ts)</code> | - |
| <code>status?</code> | <code>[Status11ParallelAiTasksApi](src/models/unions/status11-parallel-ai-tasks-api.ts)</code> | - |
| <code>includeInput?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>includeOutput?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet](src/models/unions/response200-tasks-taskgroups-runs-get-v1-tasks-groups-taskgroup-id-runs-get.ts)&gt;</code>
- **OnError**: throws <code>[Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet&gt;, Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet](src/models/unions/response200-tasks-taskgroups-runs-get-v1-tasks-groups-taskgroup-id-runs-get.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet(request: Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest, options?: RequestOptions): ApiPromise&lt;TaskRun, Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves run status by run_id.

This endpoint is equivalent to fetching run status directly using the
`retrieve()` method or the `tasks/runs` GET endpoint.

The run result is available from the `/result` endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.tasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet({
    taskgroupId: "some example string",
    runId: "some example string",
  });
  // TODO: Handle 'response' of type TaskRun
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet({
    taskgroupId: "some example string",
    runId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskRun
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
| <code>taskgroupId</code> | <code>string</code> | - |
| <code>runId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet(request)`

- **OnSuccess**: <code>[TaskRun](src/models/task-run.ts)</code>
- **OnError**: throws <code>[Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskRun, Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError&gt;</code>, with `result.value` of type <code>[TaskRun](src/models/task-run.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost(request: Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest, options?: RequestOptions): ApiPromise&lt;TaskGroupRunResponse, Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates multiple task runs within a TaskGroup.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.tasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost({
    taskgroupId: "some example string",
    body: { inputs: [{ processor: "some example string", input: "some example string" }] },
  });
  // TODO: Handle 'response' of type TaskGroupRunResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .tasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost({
    taskgroupId: "some example string",
    body: { inputs: [{ processor: "some example string", input: "some example string" }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskGroupRunResponse
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
| <code>taskgroupId</code> | <code>string</code> | - |
| <code>refreshStatus?</code> | <code>boolean</code> | -<br>**Default**: true |
| <code>parallelBeta?</code> | <code>[ParallelBeta1](src/models/unions/parallel-beta1.ts)</code> | - |
| <code>body</code> | <code>[TaskGroupRunRequest](src/models/task-group-run-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.tasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost(request)`

- **OnSuccess**: <code>[TaskGroupRunResponse](src/models/task-group-run-response.ts)</code>
- **OnError**: throws <code>[Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.tasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskGroupRunResponse, Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError&gt;</code>, with `result.value` of type <code>[TaskGroupRunResponse](src/models/task-group-run-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ParallelError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

