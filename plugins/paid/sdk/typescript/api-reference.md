# Reference

> Source: [PaidClient](src/client.ts)

## Agents

> Source: [Agents](src/resources/agents.ts)

<details>
<summary><code>create(request: Agents.CreateRequest, options?: RequestOptions): ApiPromise&lt;Agent, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use POST /products instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.create({ authorization: "some example string" });
  // TODO: Handle 'response' of type Agent
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
const result = await client.agents.create({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Agent
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[AgentCreate](src/models/agent-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.create(request)`

- **OnSuccess**: <code>[Agent](src/models/agent.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.create(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Agent, ApiError&gt;</code>, with `result.value` of type <code>[Agent](src/models/agent.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete(request: Agents.DeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use DELETE /products/{productId} instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.delete({
    agentId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.agents
  .delete({ agentId: "some example string", authorization: "some example string" })
  .asApiResult();
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
| <code>agentId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.delete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.delete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteByExternalId(request: Agents.DeleteByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use DELETE /products/external/{externalId} instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.deleteByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.agents
  .deleteByExternalId({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.deleteByExternalId(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.deleteByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get(request: Agents.GetRequest, options?: RequestOptions): ApiPromise&lt;Agent, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use GET /products/{productId} instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.get({
    agentId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Agent
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
const result = await client.agents
  .get({ agentId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Agent
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
| <code>agentId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.get(request)`

- **OnSuccess**: <code>[Agent](src/models/agent.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.get(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Agent, ApiError&gt;</code>, with `result.value` of type <code>[Agent](src/models/agent.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getByExternalId(request: Agents.GetByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;Agent, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use GET /products/external/{externalId} instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.getByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Agent
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
const result = await client.agents
  .getByExternalId({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Agent
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.getByExternalId(request)`

- **OnSuccess**: <code>[Agent](src/models/agent.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.getByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Agent, ApiError&gt;</code>, with `result.value` of type <code>[Agent](src/models/agent.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list(request: Agents.ListRequest, options?: RequestOptions): ApiPromise&lt;Agent[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use /products instead. Agents are now products with type='agent'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.list({ authorization: "some example string" });
  // TODO: Handle 'response' of type Agent[]
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
const result = await client.agents.list({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Agent[]
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.list(request)`

- **OnSuccess**: <code>[Agent](src/models/agent.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.list(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Agent[], ApiError&gt;</code>, with `result.value` of type <code>[Agent](src/models/agent.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update(request: Agents.UpdateRequest, options?: RequestOptions): ApiPromise&lt;Agent, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use PUT /products/{productId} instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.update({
    agentId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Agent
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
const result = await client.agents
  .update({ agentId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Agent
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
| <code>agentId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[AgentUpdate](src/models/agent-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.update(request)`

- **OnSuccess**: <code>[Agent](src/models/agent.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.update(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Agent, ApiError&gt;</code>, with `result.value` of type <code>[Agent](src/models/agent.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateByExternalId(request: Agents.UpdateByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;Agent, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use PUT /products/external/{externalId} instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.updateByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Agent
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
const result = await client.agents
  .updateByExternalId({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Agent
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[AgentUpdate](src/models/agent-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.updateByExternalId(request)`

- **OnSuccess**: <code>[Agent](src/models/agent.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agents.updateByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Agent, ApiError&gt;</code>, with `result.value` of type <code>[Agent](src/models/agent.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AnalyticsExperimental

> Source: [AnalyticsExperimental](src/resources/analytics-experimental.ts)

<details>
<summary><code>executeAnalyticsQuery(request: AnalyticsExperimental.ExecuteAnalyticsQueryRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsQueryResponse, AnalyticsExperimental.ExecuteAnalyticsQueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Runs a single ClickHouse SELECT (or WITH … SELECT) against your organization's analytics views. Before writing a query, call `getAnalyticsSchema` (GET /schema) for the available views and columns, and `getSignalsMetadata` (GET /signals/metadata) for the JSON paths inside `fact_signal.data`. Results are automatically scoped to your organization — no org filter is needed or possible. Only SELECT/WITH statements are accepted.

Conventions: monetary amounts are minor units (cents — divide by 100 for the major unit); most are integers, but `fact_cost.cost_amount` is fractional cents (Decimal) since a single AI call usually costs less than a cent; 64-bit integers (counts, ids, amounts) are returned as JSON strings to preserve precision, so parse them client-side. Query signal payloads via JSON paths, e.g. `SELECT data.country::String AS country, count() FROM fact_signal GROUP BY country`.

Limits: 30 seconds of execution time and 10,000 result rows (truncation is flagged via `meta.truncated`). Prefer aggregates and a `created_at` date filter on large tables — this endpoint is for interactive analytics, not bulk export.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analyticsExperimental.executeAnalyticsQuery({
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AnalyticsQueryResponse
} catch (err) {
  // TODO: Handle 'err' of type AnalyticsExperimental.ExecuteAnalyticsQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analyticsExperimental
  .executeAnalyticsQuery({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsQueryResponse
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[AnalyticsQueryRequest](src/models/analytics-query-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analyticsExperimental.executeAnalyticsQuery(request)`

- **OnSuccess**: <code>[AnalyticsQueryResponse](src/models/analytics-query-response.ts)</code>
- **OnError**: throws <code>[AnalyticsExperimental.ExecuteAnalyticsQueryError](src/resources/analytics-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analyticsExperimental.executeAnalyticsQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsQueryResponse, AnalyticsExperimental.ExecuteAnalyticsQueryError&gt;</code>, with `result.value` of type <code>[AnalyticsQueryResponse](src/models/analytics-query-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnalyticsSchema(request: AnalyticsExperimental.GetAnalyticsSchemaRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsSchemaResponse, AnalyticsExperimental.GetAnalyticsSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Returns the analytics views available to POST /query, with column names, ClickHouse types, and descriptions. Dimensions (`dim_*`) describe entities; facts (`fact_*`) are event/transaction tables that join to dimensions via the `*_id` columns described in each comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analyticsExperimental.getAnalyticsSchema({
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AnalyticsSchemaResponse
} catch (err) {
  // TODO: Handle 'err' of type AnalyticsExperimental.GetAnalyticsSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analyticsExperimental
  .getAnalyticsSchema({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsSchemaResponse
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analyticsExperimental.getAnalyticsSchema(request)`

- **OnSuccess**: <code>[AnalyticsSchemaResponse](src/models/analytics-schema-response.ts)</code>
- **OnError**: throws <code>[AnalyticsExperimental.GetAnalyticsSchemaError](src/resources/analytics-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analyticsExperimental.getAnalyticsSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsSchemaResponse, AnalyticsExperimental.GetAnalyticsSchemaError&gt;</code>, with `result.value` of type <code>[AnalyticsSchemaResponse](src/models/analytics-schema-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignalsMetadata(request: AnalyticsExperimental.GetSignalsMetadataRequest, options?: RequestOptions): ApiPromise&lt;SignalsMetadataResponse, AnalyticsExperimental.GetSignalsMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Lists the JSON paths (and their observed types) present in the `data` payload of your signals within a time window (default: last 30 days), grouped by signal name. Use the returned paths in queries against `fact_signal`, e.g. `WHERE data.::String = '...'`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analyticsExperimental.getSignalsMetadata({
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SignalsMetadataResponse
} catch (err) {
  // TODO: Handle 'err' of type AnalyticsExperimental.GetSignalsMetadataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analyticsExperimental
  .getSignalsMetadata({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignalsMetadataResponse
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
| <code>signalName?</code> | <code>string</code> | Restrict discovery to a single signal name. |
| <code>fromDate?</code> | <code>Date</code> (date-time) | Start of the discovery window. Defaults to 30 days ago. |
| <code>toDate?</code> | <code>Date</code> (date-time) | End of the discovery window. Defaults to now. |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analyticsExperimental.getSignalsMetadata(request)`

- **OnSuccess**: <code>[SignalsMetadataResponse](src/models/signals-metadata-response.ts)</code>
- **OnError**: throws <code>[AnalyticsExperimental.GetSignalsMetadataError](src/resources/analytics-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analyticsExperimental.getSignalsMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignalsMetadataResponse, AnalyticsExperimental.GetSignalsMetadataError&gt;</code>, with `result.value` of type <code>[SignalsMetadataResponse](src/models/signals-metadata-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Checkouts

> Source: [Checkouts](src/resources/checkouts.ts)

<details>
<summary><code>archiveCheckout(request: Checkouts.ArchiveCheckoutRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Checkouts.ArchiveCheckoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a checkout by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkouts.archiveCheckout({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Checkouts.ArchiveCheckoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkouts
  .archiveCheckout({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkouts.archiveCheckout(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Checkouts.ArchiveCheckoutError](src/resources/checkouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkouts.archiveCheckout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Checkouts.ArchiveCheckoutError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCheckout(request: Checkouts.CreateCheckoutRequestParams, options?: RequestOptions): ApiPromise&lt;Checkout, Checkouts.CreateCheckoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a checkout link that generates a URL for a customer to complete a purchase

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkouts.createCheckout({ authorization: "some example string" });
  // TODO: Handle 'response' of type Checkout
} catch (err) {
  // TODO: Handle 'err' of type Checkouts.CreateCheckoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkouts.createCheckout({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Checkout
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreateCheckoutRequest](src/models/create-checkout-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkouts.createCheckout(request)`

- **OnSuccess**: <code>[Checkout](src/models/checkout.ts)</code>
- **OnError**: throws <code>[Checkouts.CreateCheckoutError](src/resources/checkouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkouts.createCheckout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Checkout, Checkouts.CreateCheckoutError&gt;</code>, with `result.value` of type <code>[Checkout](src/models/checkout.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCheckout(request: Checkouts.GetCheckoutRequest, options?: RequestOptions): ApiPromise&lt;CheckoutDetails, Checkouts.GetCheckoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a checkout by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkouts.getCheckout({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CheckoutDetails
} catch (err) {
  // TODO: Handle 'err' of type Checkouts.GetCheckoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkouts
  .getCheckout({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutDetails
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkouts.getCheckout(request)`

- **OnSuccess**: <code>[CheckoutDetails](src/models/checkout-details.ts)</code>
- **OnError**: throws <code>[Checkouts.GetCheckoutError](src/resources/checkouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkouts.getCheckout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutDetails, Checkouts.GetCheckoutError&gt;</code>, with `result.value` of type <code>[CheckoutDetails](src/models/checkout-details.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCheckouts(request: Checkouts.ListCheckoutsRequest, options?: RequestOptions): ApiPromise&lt;CheckoutListResponse, Checkouts.ListCheckoutsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of checkouts for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkouts.listCheckouts({ authorization: "some example string" });
  // TODO: Handle 'response' of type CheckoutListResponse
} catch (err) {
  // TODO: Handle 'err' of type Checkouts.ListCheckoutsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkouts.listCheckouts({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutListResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>status?</code> | <code>[CheckoutsGetParametersStatus](src/models/checkouts-get-parameters-status.ts)</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkouts.listCheckouts(request)`

- **OnSuccess**: <code>[CheckoutListResponse](src/models/checkout-list-response.ts)</code>
- **OnError**: throws <code>[Checkouts.ListCheckoutsError](src/resources/checkouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkouts.listCheckouts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutListResponse, Checkouts.ListCheckoutsError&gt;</code>, with `result.value` of type <code>[CheckoutListResponse](src/models/checkout-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Contacts

> Source: [Contacts](src/resources/contacts.ts)

<details>
<summary><code>createContact(request: Contacts.CreateContactRequestParams, options?: RequestOptions): ApiPromise&lt;Contact1, Contacts.CreateContactError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new contact for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.createContact({ authorization: "some example string" });
  // TODO: Handle 'response' of type Contact1
} catch (err) {
  // TODO: Handle 'err' of type Contacts.CreateContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts.createContact({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Contact1
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreateContactRequest](src/models/create-contact-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.createContact(request)`

- **OnSuccess**: <code>[Contact1](src/models/contact1.ts)</code>
- **OnError**: throws <code>[Contacts.CreateContactError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.createContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Contact1, Contacts.CreateContactError&gt;</code>, with `result.value` of type <code>[Contact1](src/models/contact1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>create2(request: Contacts.Create2Request, options?: RequestOptions): ApiPromise&lt;Contact, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.create2({ authorization: "some example string" });
  // TODO: Handle 'response' of type Contact
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
const result = await client.contacts.create2({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Contact
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[ContactCreate](src/models/contact-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.create2(request)`

- **OnSuccess**: <code>[Contact](src/models/contact.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.contacts.create2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Contact, ApiError&gt;</code>, with `result.value` of type <code>[Contact](src/models/contact.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteByExternalId2(request: Contacts.DeleteByExternalId2Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.deleteByExternalId2({
    externalId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.contacts
  .deleteByExternalId2({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.deleteByExternalId2(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.contacts.deleteByExternalId2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteContactById(request: Contacts.DeleteContactByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Contacts.DeleteContactByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a contact by its ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.deleteContactById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Contacts.DeleteContactByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts
  .deleteContactById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.deleteContactById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Contacts.DeleteContactByIdError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.deleteContactById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Contacts.DeleteContactByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete2(request: Contacts.Delete2Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.delete2({
    contactId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.contacts
  .delete2({ contactId: "some example string", authorization: "some example string" })
  .asApiResult();
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
| <code>contactId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.delete2(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.contacts.delete2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getByExternalId2(request: Contacts.GetByExternalId2Request, options?: RequestOptions): ApiPromise&lt;Contact, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.getByExternalId2({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Contact
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
const result = await client.contacts
  .getByExternalId2({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Contact
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.getByExternalId2(request)`

- **OnSuccess**: <code>[Contact](src/models/contact.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.contacts.getByExternalId2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Contact, ApiError&gt;</code>, with `result.value` of type <code>[Contact](src/models/contact.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactById(request: Contacts.GetContactByIdRequest, options?: RequestOptions): ApiPromise&lt;Contact1, Contacts.GetContactByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a contact by its ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.getContactById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Contact1
} catch (err) {
  // TODO: Handle 'err' of type Contacts.GetContactByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts
  .getContactById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Contact1
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.getContactById(request)`

- **OnSuccess**: <code>[Contact1](src/models/contact1.ts)</code>
- **OnError**: throws <code>[Contacts.GetContactByIdError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.getContactById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Contact1, Contacts.GetContactByIdError&gt;</code>, with `result.value` of type <code>[Contact1](src/models/contact1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get2(request: Contacts.Get2Request, options?: RequestOptions): ApiPromise&lt;Contact, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.get2({
    contactId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Contact
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
const result = await client.contacts
  .get2({ contactId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Contact
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
| <code>contactId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.get2(request)`

- **OnSuccess**: <code>[Contact](src/models/contact.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.contacts.get2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Contact, ApiError&gt;</code>, with `result.value` of type <code>[Contact](src/models/contact.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listContacts(request: Contacts.ListContactsRequest, options?: RequestOptions): ApiPromise&lt;ContactListResponse, Contacts.ListContactsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of contacts for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.listContacts({ authorization: "some example string" });
  // TODO: Handle 'response' of type ContactListResponse
} catch (err) {
  // TODO: Handle 'err' of type Contacts.ListContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts.listContacts({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactListResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.listContacts(request)`

- **OnSuccess**: <code>[ContactListResponse](src/models/contact-list-response.ts)</code>
- **OnError**: throws <code>[Contacts.ListContactsError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.listContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactListResponse, Contacts.ListContactsError&gt;</code>, with `result.value` of type <code>[ContactListResponse](src/models/contact-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list2(request: Contacts.List2Request, options?: RequestOptions): ApiPromise&lt;Contact[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.list2({ authorization: "some example string" });
  // TODO: Handle 'response' of type Contact[]
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
const result = await client.contacts.list2({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Contact[]
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.list2(request)`

- **OnSuccess**: <code>[Contact](src/models/contact.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.contacts.list2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Contact[], ApiError&gt;</code>, with `result.value` of type <code>[Contact](src/models/contact.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateContactByExternalId(request: Contacts.UpdateContactByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;Contact1, Contacts.UpdateContactByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a contact by its external ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.updateContactByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Contact1
} catch (err) {
  // TODO: Handle 'err' of type Contacts.UpdateContactByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts
  .updateContactByExternalId({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Contact1
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateContactRequest](src/models/update-contact-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.updateContactByExternalId(request)`

- **OnSuccess**: <code>[Contact1](src/models/contact1.ts)</code>
- **OnError**: throws <code>[Contacts.UpdateContactByExternalIdError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.updateContactByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Contact1, Contacts.UpdateContactByExternalIdError&gt;</code>, with `result.value` of type <code>[Contact1](src/models/contact1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateContactById(request: Contacts.UpdateContactByIdRequest, options?: RequestOptions): ApiPromise&lt;Contact1, Contacts.UpdateContactByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a contact by its ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contacts.updateContactById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Contact1
} catch (err) {
  // TODO: Handle 'err' of type Contacts.UpdateContactByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contacts
  .updateContactById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Contact1
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateContactRequest](src/models/update-contact-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contacts.updateContactById(request)`

- **OnSuccess**: <code>[Contact1](src/models/contact1.ts)</code>
- **OnError**: throws <code>[Contacts.UpdateContactByIdError](src/resources/contacts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contacts.updateContactById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Contact1, Contacts.UpdateContactByIdError&gt;</code>, with `result.value` of type <code>[Contact1](src/models/contact1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Costs

> Source: [Costs](src/resources/costs.ts)

<details>
<summary><code>createCosts(request: Costs.CreateCostsRequest, options?: RequestOptions): ApiPromise&lt;CostIngestResponse, Costs.CreateCostsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ingests a batch of cost records. Each record is either a pre-computed `cost` (caller supplies amount + currency) or a `usage` record (caller supplies vendor/model/token counts and Paid prices it server-side). The batch is all-or-nothing: if any record fails validation, the entire request is rejected with a 400 and nothing is persisted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.costs.createCosts({ authorization: "some example string" });
  // TODO: Handle 'response' of type CostIngestResponse
} catch (err) {
  // TODO: Handle 'err' of type Costs.CreateCostsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.costs.createCosts({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CostIngestResponse
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CostIngestRequest](src/models/cost-ingest-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.costs.createCosts(request)`

- **OnSuccess**: <code>[CostIngestResponse](src/models/cost-ingest-response.ts)</code>
- **OnError**: throws <code>[Costs.CreateCostsError](src/resources/costs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.costs.createCosts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CostIngestResponse, Costs.CreateCostsError&gt;</code>, with `result.value` of type <code>[CostIngestResponse](src/models/cost-ingest-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Credits

> Source: [Credits](src/resources/credits.ts)

<details>
<summary><code>createCreditCurrency(request: Credits.CreateCreditCurrencyRequestParams, options?: RequestOptions): ApiPromise&lt;CreditCurrency, Credits.CreateCreditCurrencyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a credit currency for the organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credits.createCreditCurrency({ authorization: "some example string" });
  // TODO: Handle 'response' of type CreditCurrency
} catch (err) {
  // TODO: Handle 'err' of type Credits.CreateCreditCurrencyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.credits
  .createCreditCurrency({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditCurrency
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreateCreditCurrencyRequest](src/models/create-credit-currency-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.credits.createCreditCurrency(request)`

- **OnSuccess**: <code>[CreditCurrency](src/models/credit-currency.ts)</code>
- **OnError**: throws <code>[Credits.CreateCreditCurrencyError](src/resources/credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.credits.createCreditCurrency(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditCurrency, Credits.CreateCreditCurrencyError&gt;</code>, with `result.value` of type <code>[CreditCurrency](src/models/credit-currency.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCreditCurrencies(request: Credits.ListCreditCurrenciesRequest, options?: RequestOptions): ApiPromise&lt;CreditCurrencyListResponse, Credits.ListCreditCurrenciesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List credit currencies for the organization. Includes active and archived currencies by default; use the status query parameter to filter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credits.listCreditCurrencies({ authorization: "some example string" });
  // TODO: Handle 'response' of type CreditCurrencyListResponse
} catch (err) {
  // TODO: Handle 'err' of type Credits.ListCreditCurrenciesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.credits
  .listCreditCurrencies({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditCurrencyListResponse
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
| <code>status?</code> | <code>[CreditsCurrenciesGetParametersStatus](src/models/credits-currencies-get-parameters-status.ts)</code> | Filter credit currencies by status. Defaults to `all` so archived currencies remain readable after they are archived.<br>**Default**: "all" |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.credits.listCreditCurrencies(request)`

- **OnSuccess**: <code>[CreditCurrencyListResponse](src/models/credit-currency-list-response.ts)</code>
- **OnError**: throws <code>[Credits.ListCreditCurrenciesError](src/resources/credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.credits.listCreditCurrencies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditCurrencyListResponse, Credits.ListCreditCurrenciesError&gt;</code>, with `result.value` of type <code>[CreditCurrencyListResponse](src/models/credit-currency-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCreditCurrencyById(request: Credits.UpdateCreditCurrencyByIdRequest, options?: RequestOptions): ApiPromise&lt;CreditCurrency, Credits.UpdateCreditCurrencyByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a credit currency description or set its active/archive status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credits.updateCreditCurrencyById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CreditCurrency
} catch (err) {
  // TODO: Handle 'err' of type Credits.UpdateCreditCurrencyByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.credits
  .updateCreditCurrencyById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditCurrency
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
| <code>id</code> | <code>string</code> | Credit currency ID. |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateCreditCurrencyRequest](src/models/update-credit-currency-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.credits.updateCreditCurrencyById(request)`

- **OnSuccess**: <code>[CreditCurrency](src/models/credit-currency.ts)</code>
- **OnError**: throws <code>[Credits.UpdateCreditCurrencyByIdError](src/resources/credits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.credits.updateCreditCurrencyById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditCurrency, Credits.UpdateCreditCurrencyByIdError&gt;</code>, with `result.value` of type <code>[CreditCurrency](src/models/credit-currency.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerGroups

> Source: [CustomerGroups](src/resources/customer-groups.ts)

<details>
<summary><code>createCustomerGroup(request: CustomerGroups.CreateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise&lt;CustomerGroupDetail, CustomerGroups.CreateCustomerGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer group. Names must be unique per org.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.createCustomerGroup({ authorization: "some example string" });
  // TODO: Handle 'response' of type CustomerGroupDetail
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.CreateCustomerGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .createCustomerGroup({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroupDetail
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreateCustomerGroupRequest](src/models/create-customer-group-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.createCustomerGroup(request)`

- **OnSuccess**: <code>[CustomerGroupDetail](src/models/customer-group-detail.ts)</code>
- **OnError**: throws <code>[CustomerGroups.CreateCustomerGroupError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.createCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroupDetail, CustomerGroups.CreateCustomerGroupError&gt;</code>, with `result.value` of type <code>[CustomerGroupDetail](src/models/customer-group-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerGroupMembers(request: CustomerGroups.CreateCustomerGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;AddMembersResponse, CustomerGroups.CreateCustomerGroupMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Additive. Adds customers to the group without removing existing members.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.createCustomerGroupMembers({
    id: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AddMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.CreateCustomerGroupMembersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .createCustomerGroupMembers({
    id: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AddMembersResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[MemberRequest](src/models/member-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.createCustomerGroupMembers(request)`

- **OnSuccess**: <code>[AddMembersResponse](src/models/add-members-response.ts)</code>
- **OnError**: throws <code>[CustomerGroups.CreateCustomerGroupMembersError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.createCustomerGroupMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AddMembersResponse, CustomerGroups.CreateCustomerGroupMembersError&gt;</code>, with `result.value` of type <code>[AddMembersResponse](src/models/add-members-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerGroup(request: CustomerGroups.DeleteCustomerGroupRequest, options?: RequestOptions): ApiPromise&lt;CustomerGroupDeleteResponse, CustomerGroups.DeleteCustomerGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the group and unbinds all members. Unbound customers fall back to the base value model config.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.deleteCustomerGroup({
    id: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerGroupDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.DeleteCustomerGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .deleteCustomerGroup({ id: "00000000-0000-0000-0000-000000000000", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroupDeleteResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.deleteCustomerGroup(request)`

- **OnSuccess**: <code>[CustomerGroupDeleteResponse](src/models/customer-group-delete-response.ts)</code>
- **OnError**: throws <code>[CustomerGroups.DeleteCustomerGroupError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.deleteCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroupDeleteResponse, CustomerGroups.DeleteCustomerGroupError&gt;</code>, with `result.value` of type <code>[CustomerGroupDeleteResponse](src/models/customer-group-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerGroupMembers(request: CustomerGroups.DeleteCustomerGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;RemoveMembersResponse, CustomerGroups.DeleteCustomerGroupMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes specific customers from the group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.deleteCustomerGroupMembers({
    id: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type RemoveMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.DeleteCustomerGroupMembersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .deleteCustomerGroupMembers({
    id: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RemoveMembersResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[MemberRequest](src/models/member-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.deleteCustomerGroupMembers(request)`

- **OnSuccess**: <code>[RemoveMembersResponse](src/models/remove-members-response.ts)</code>
- **OnError**: throws <code>[CustomerGroups.DeleteCustomerGroupMembersError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.deleteCustomerGroupMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RemoveMembersResponse, CustomerGroups.DeleteCustomerGroupMembersError&gt;</code>, with `result.value` of type <code>[RemoveMembersResponse](src/models/remove-members-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerGroup(request: CustomerGroups.GetCustomerGroupRequest, options?: RequestOptions): ApiPromise&lt;CustomerGroupDetail, CustomerGroups.GetCustomerGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns group details including member list (capped at 500).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.getCustomerGroup({
    id: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerGroupDetail
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.GetCustomerGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .getCustomerGroup({ id: "00000000-0000-0000-0000-000000000000", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroupDetail
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.getCustomerGroup(request)`

- **OnSuccess**: <code>[CustomerGroupDetail](src/models/customer-group-detail.ts)</code>
- **OnError**: throws <code>[CustomerGroups.GetCustomerGroupError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.getCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroupDetail, CustomerGroups.GetCustomerGroupError&gt;</code>, with `result.value` of type <code>[CustomerGroupDetail](src/models/customer-group-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerGroups(request: CustomerGroups.ListCustomerGroupsRequest, options?: RequestOptions): ApiPromise&lt;CustomerGroupListResponse, CustomerGroups.ListCustomerGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all customer groups for the organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.listCustomerGroups({ authorization: "some example string" });
  // TODO: Handle 'response' of type CustomerGroupListResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.ListCustomerGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .listCustomerGroups({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroupListResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.listCustomerGroups(request)`

- **OnSuccess**: <code>[CustomerGroupListResponse](src/models/customer-group-list-response.ts)</code>
- **OnError**: throws <code>[CustomerGroups.ListCustomerGroupsError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.listCustomerGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroupListResponse, CustomerGroups.ListCustomerGroupsError&gt;</code>, with `result.value` of type <code>[CustomerGroupListResponse](src/models/customer-group-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomerGroup(request: CustomerGroups.UpdateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise&lt;CustomerGroupDetail, CustomerGroups.UpdateCustomerGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a customer group's name or description.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.updateCustomerGroup({
    id: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerGroupDetail
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.UpdateCustomerGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .updateCustomerGroup({ id: "00000000-0000-0000-0000-000000000000", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroupDetail
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateCustomerGroupRequest](src/models/update-customer-group-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.updateCustomerGroup(request)`

- **OnSuccess**: <code>[CustomerGroupDetail](src/models/customer-group-detail.ts)</code>
- **OnError**: throws <code>[CustomerGroups.UpdateCustomerGroupError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.updateCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroupDetail, CustomerGroups.UpdateCustomerGroupError&gt;</code>, with `result.value` of type <code>[CustomerGroupDetail](src/models/customer-group-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomerGroupMembers(request: CustomerGroups.UpdateCustomerGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;SetMembersResponse, CustomerGroups.UpdateCustomerGroupMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reconcile membership. The provided list is the complete desired membership. Customers not in the list are removed. Customers in the list but not currently in the group are added.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.updateCustomerGroupMembers({
    id: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SetMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.UpdateCustomerGroupMembersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .updateCustomerGroupMembers({
    id: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SetMembersResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[MemberRequest](src/models/member-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.updateCustomerGroupMembers(request)`

- **OnSuccess**: <code>[SetMembersResponse](src/models/set-members-response.ts)</code>
- **OnError**: throws <code>[CustomerGroups.UpdateCustomerGroupMembersError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.updateCustomerGroupMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SetMembersResponse, CustomerGroups.UpdateCustomerGroupMembersError&gt;</code>, with `result.value` of type <code>[SetMembersResponse](src/models/set-members-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerPortals

> Source: [CustomerPortals](src/resources/customer-portals.ts)

<details>
<summary><code>createCustomerPortal(request: CustomerPortals.CreateCustomerPortalRequestParams, options?: RequestOptions): ApiPromise&lt;CustomerPortal, CustomerPortals.CreateCustomerPortalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a portal session for the customer. Returns a short-lived URL to the customer portal.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerPortals.createCustomerPortal({
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerPortal
} catch (err) {
  // TODO: Handle 'err' of type CustomerPortals.CreateCustomerPortalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerPortals
  .createCustomerPortal({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerPortal
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreateCustomerPortalRequest](src/models/create-customer-portal-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerPortals.createCustomerPortal(request)`

- **OnSuccess**: <code>[CustomerPortal](src/models/customer-portal.ts)</code>
- **OnError**: throws <code>[CustomerPortals.CreateCustomerPortalError](src/resources/customer-portals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerPortals.createCustomerPortal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerPortal, CustomerPortals.CreateCustomerPortalError&gt;</code>, with `result.value` of type <code>[CustomerPortal](src/models/customer-portal.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/resources/customers.ts)

<details>
<summary><code>checkEntitlement(request: Customers.CheckEntitlementRequest, options?: RequestOptions): ApiPromise&lt;CustomersCheckEntitlementResponse200, Customers.CheckEntitlementError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.checkEntitlement({
    customerId: "some example string",
    eventName: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomersCheckEntitlementResponse200
} catch (err) {
  // TODO: Handle 'err' of type Customers.CheckEntitlementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .checkEntitlement({
    customerId: "some example string",
    eventName: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersCheckEntitlementResponse200
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
| <code>customerId</code> | <code>string</code> | The customer ID |
| <code>eventName</code> | <code>string</code> | The name of the usage event to check entitlement for |
| <code>view?</code> | <code>[CustomersCustomerIdEntitlementGetParametersView](src/models/customers-customer-id-entitlement-get-parameters-view.ts)</code> | Filter view - 'all' returns all entitlements regardless of status, 'active_only' returns only currently active entitlements with available credits<br>**Default**: "active_only" |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.checkEntitlement(request)`

- **OnSuccess**: <code>[CustomersCheckEntitlementResponse200](src/models/customers-check-entitlement-response200.ts)</code>
- **OnError**: throws <code>[Customers.CheckEntitlementError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.checkEntitlement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersCheckEntitlementResponse200, Customers.CheckEntitlementError&gt;</code>, with `result.value` of type <code>[CustomersCheckEntitlementResponse200](src/models/customers-check-entitlement-response200.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomer(request: Customers.CreateCustomerRequestParams, options?: RequestOptions): ApiPromise&lt;Customer1, Customers.CreateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new customer for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomer({ authorization: "some example string" });
  // TODO: Handle 'response' of type Customer1
} catch (err) {
  // TODO: Handle 'err' of type Customers.CreateCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.createCustomer({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer1
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreateCustomerRequest](src/models/create-customer-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomer(request)`

- **OnSuccess**: <code>[Customer1](src/models/customer1.ts)</code>
- **OnError**: throws <code>[Customers.CreateCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.createCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer1, Customers.CreateCustomerError&gt;</code>, with `result.value` of type <code>[Customer1](src/models/customer1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerAlias(request: Customers.CreateCustomerAliasRequest, options?: RequestOptions): ApiPromise&lt;CustomerAlias, Customers.CreateCustomerAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an alternate external identifier for a customer by Paid display ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomerAlias({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerAlias
} catch (err) {
  // TODO: Handle 'err' of type Customers.CreateCustomerAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .createCustomerAlias({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerAlias
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
| <code>id</code> | <code>string</code> | Paid customer display id |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CustomerAliasCreateRequest](src/models/customer-alias-create-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomerAlias(request)`

- **OnSuccess**: <code>[CustomerAlias](src/models/customer-alias.ts)</code>
- **OnError**: throws <code>[Customers.CreateCustomerAliasError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.createCustomerAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerAlias, Customers.CreateCustomerAliasError&gt;</code>, with `result.value` of type <code>[CustomerAlias](src/models/customer-alias.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerAliasByExternalId(request: Customers.CreateCustomerAliasByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;CustomerAlias, Customers.CreateCustomerAliasByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an alternate external identifier for a customer by external ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomerAliasByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerAlias
} catch (err) {
  // TODO: Handle 'err' of type Customers.CreateCustomerAliasByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .createCustomerAliasByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerAlias
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
| <code>externalId</code> | <code>string</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CustomerAliasCreateRequest](src/models/customer-alias-create-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomerAliasByExternalId(request)`

- **OnSuccess**: <code>[CustomerAlias](src/models/customer-alias.ts)</code>
- **OnError**: throws <code>[Customers.CreateCustomerAliasByExternalIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.createCustomerAliasByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerAlias, Customers.CreateCustomerAliasByExternalIdError&gt;</code>, with `result.value` of type <code>[CustomerAlias](src/models/customer-alias.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPaymentMethod(request: Customers.CreatePaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethod, Customers.CreatePaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new payment method for a customer using a Stripe confirmation token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createPaymentMethod({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PaymentMethod
} catch (err) {
  // TODO: Handle 'err' of type Customers.CreatePaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .createPaymentMethod({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentMethod
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
| <code>externalId</code> | <code>string</code> | The external ID of the customer |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[CustomersExternalPaymentMethodsRequest](src/models/customers-external-payment-methods-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createPaymentMethod(request)`

- **OnSuccess**: <code>[PaymentMethod](src/models/payment-method.ts)</code>
- **OnError**: throws <code>[Customers.CreatePaymentMethodError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.createPaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentMethod, Customers.CreatePaymentMethodError&gt;</code>, with `result.value` of type <code>[PaymentMethod](src/models/payment-method.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>create3(request: Customers.Create3Request, options?: RequestOptions): ApiPromise&lt;Customer, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.create3({ authorization: "some example string" });
  // TODO: Handle 'response' of type Customer
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
const result = await client.customers.create3({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[CustomerCreate](src/models/customer-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.create3(request)`

- **OnSuccess**: <code>[Customer](src/models/customer.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.customers.create3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer, ApiError&gt;</code>, with `result.value` of type <code>[Customer](src/models/customer.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteByExternalId3(request: Customers.DeleteByExternalId3Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.deleteByExternalId3({
    externalId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.customers
  .deleteByExternalId3({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.deleteByExternalId3(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.customers.deleteByExternalId3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerAlias(request: Customers.DeleteCustomerAliasRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Customers.DeleteCustomerAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an alternate external identifier from a customer by Paid display ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.deleteCustomerAlias({
    id: "some example string",
    alias: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Customers.DeleteCustomerAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .deleteCustomerAlias({
    id: "some example string",
    alias: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>id</code> | <code>string</code> | Paid customer display id |
| <code>alias</code> | <code>string</code> | Customer alias value. |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.deleteCustomerAlias(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Customers.DeleteCustomerAliasError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.deleteCustomerAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Customers.DeleteCustomerAliasError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerAliasByExternalId(request: Customers.DeleteCustomerAliasByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Customers.DeleteCustomerAliasByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an alternate external identifier from a customer by external ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.deleteCustomerAliasByExternalId({
    externalId: "some example string",
    alias: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Customers.DeleteCustomerAliasByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .deleteCustomerAliasByExternalId({
    externalId: "some example string",
    alias: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>externalId</code> | <code>string</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>alias</code> | <code>string</code> | Customer alias value. |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.deleteCustomerAliasByExternalId(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Customers.DeleteCustomerAliasByExternalIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.deleteCustomerAliasByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Customers.DeleteCustomerAliasByExternalIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerById(request: Customers.DeleteCustomerByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Customers.DeleteCustomerByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a customer by Paid display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `DELETE /api/v2/customers/external/{externalId}`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.deleteCustomerById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Customers.DeleteCustomerByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .deleteCustomerById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>id</code> | <code>string</code> | Paid customer display id |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.deleteCustomerById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Customers.DeleteCustomerByIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.deleteCustomerById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Customers.DeleteCustomerByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePaymentMethod(request: Customers.DeletePaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Customers.DeletePaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific payment method from a customer's account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.deletePaymentMethod({
    externalId: "some example string",
    paymentMethodId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Customers.DeletePaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .deletePaymentMethod({
    externalId: "some example string",
    paymentMethodId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>externalId</code> | <code>string</code> | The external ID of the customer |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method to delete |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.deletePaymentMethod(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Customers.DeletePaymentMethodError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.deletePaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Customers.DeletePaymentMethodError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete3(request: Customers.Delete3Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.delete3({
    customerId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.customers
  .delete3({ customerId: "some example string", authorization: "some example string" })
  .asApiResult();
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
| <code>customerId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.delete3(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.customers.delete3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getByExternalId3(request: Customers.GetByExternalId3Request, options?: RequestOptions): ApiPromise&lt;Customer, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getByExternalId3({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Customer
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
const result = await client.customers
  .getByExternalId3({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getByExternalId3(request)`

- **OnSuccess**: <code>[Customer](src/models/customer.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.customers.getByExternalId3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer, ApiError&gt;</code>, with `result.value` of type <code>[Customer](src/models/customer.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCostsByExternalId(request: Customers.GetCostsByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;CostTracesResponse, Customers.GetCostsByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCostsByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CostTracesResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCostsByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getCostsByExternalId({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CostTracesResponse
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
| <code>externalId</code> | <code>string</code> | The external ID of the customer |
| <code>limit?</code> | <code>number</code> | Maximum number of traces to return (1-1000)<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | Number of traces to skip for pagination<br>**Default**: 0 |
| <code>startTime?</code> | <code>Date</code> (date-time) | Filter traces starting from this time (ISO 8601 format) |
| <code>endTime?</code> | <code>Date</code> (date-time) | Filter traces up to this time (ISO 8601 format) |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCostsByExternalId(request)`

- **OnSuccess**: <code>[CostTracesResponse](src/models/cost-traces-response.ts)</code>
- **OnError**: throws <code>[Customers.GetCostsByExternalIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCostsByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CostTracesResponse, Customers.GetCostsByExternalIdError&gt;</code>, with `result.value` of type <code>[CostTracesResponse](src/models/cost-traces-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerById(request: Customers.GetCustomerByIdRequest, options?: RequestOptions): ApiPromise&lt;Customer1, Customers.GetCustomerByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a customer by Paid display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `GET /api/v2/customers/external/{externalId}`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomerById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Customer1
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getCustomerById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer1
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
| <code>id</code> | <code>string</code> | Paid customer display id |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomerById(request)`

- **OnSuccess**: <code>[Customer1](src/models/customer1.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerByIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomerById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer1, Customers.GetCustomerByIdError&gt;</code>, with `result.value` of type <code>[Customer1](src/models/customer1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerCreditBalances(request: Customers.GetCustomerCreditBalancesRequest, options?: RequestOptions): ApiPromise&lt;CreditBalanceListResponse, Customers.GetCustomerCreditBalancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current customer credit balances grouped by currency for a Paid customer display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `/api/v2/customers/external/{externalId}/credits/balances`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomerCreditBalances({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CreditBalanceListResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerCreditBalancesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getCustomerCreditBalances({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditBalanceListResponse
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
| <code>id</code> | <code>string</code> | Paid customer display id |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomerCreditBalances(request)`

- **OnSuccess**: <code>[CreditBalanceListResponse](src/models/credit-balance-list-response.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerCreditBalancesError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomerCreditBalances(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditBalanceListResponse, Customers.GetCustomerCreditBalancesError&gt;</code>, with `result.value` of type <code>[CreditBalanceListResponse](src/models/credit-balance-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerCreditBalancesByExternalId(request: Customers.GetCustomerCreditBalancesByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;CreditBalanceListResponse, Customers.GetCustomerCreditBalancesByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current customer credit balances grouped by currency, looked up by external ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomerCreditBalancesByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CreditBalanceListResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerCreditBalancesByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getCustomerCreditBalancesByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditBalanceListResponse
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
| <code>externalId</code> | <code>string</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomerCreditBalancesByExternalId(request)`

- **OnSuccess**: <code>[CreditBalanceListResponse](src/models/credit-balance-list-response.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerCreditBalancesByExternalIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomerCreditBalancesByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditBalanceListResponse, Customers.GetCustomerCreditBalancesByExternalIdError&gt;</code>, with `result.value` of type <code>[CreditBalanceListResponse](src/models/credit-balance-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerStateByExternalId(request: Customers.GetCustomerStateByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;CustomerState, Customers.GetCustomerStateByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Primary integration endpoint for agents and programmatic clients using their own customer IDs. Use the value you stored on `customer.externalId`, for example `customer_123`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomerStateByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerState
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerStateByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getCustomerStateByExternalId({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerState
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
| <code>externalId</code> | <code>string</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomerStateByExternalId(request)`

- **OnSuccess**: <code>[CustomerState](src/models/customer-state.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerStateByExternalIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomerStateByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerState, Customers.GetCustomerStateByExternalIdError&gt;</code>, with `result.value` of type <code>[CustomerState](src/models/customer-state.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerStateById(request: Customers.GetCustomerStateByIdRequest, options?: RequestOptions): ApiPromise&lt;CustomerState, Customers.GetCustomerStateByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current customer state by Paid display ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomerStateById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerState
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerStateByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getCustomerStateById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerState
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
| <code>id</code> | <code>string</code> | Paid customer display id |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomerStateById(request)`

- **OnSuccess**: <code>[CustomerState](src/models/customer-state.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerStateByIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomerStateById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerState, Customers.GetCustomerStateByIdError&gt;</code>, with `result.value` of type <code>[CustomerState](src/models/customer-state.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEntitlements(request: Customers.GetEntitlementsRequest, options?: RequestOptions): ApiPromise&lt;EntitlementUsage[], Customers.GetEntitlementsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getEntitlements({
    customerId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type EntitlementUsage[]
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetEntitlementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getEntitlements({ customerId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntitlementUsage[]
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
| <code>customerId</code> | <code>string</code> | The customer ID |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getEntitlements(request)`

- **OnSuccess**: <code>[EntitlementUsage](src/models/entitlement-usage.ts)[]</code>
- **OnError**: throws <code>[Customers.GetEntitlementsError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getEntitlements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntitlementUsage[], Customers.GetEntitlementsError&gt;</code>, with `result.value` of type <code>[EntitlementUsage](src/models/entitlement-usage.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsageByExternalId(request: Customers.GetUsageByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;UsageSummariesResponse, Customers.GetUsageByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getUsageByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type UsageSummariesResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetUsageByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getUsageByExternalId({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageSummariesResponse
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
| <code>externalId</code> | <code>string</code> | The external ID of the customer |
| <code>limit?</code> | <code>number</code> | Maximum number of usage summaries to return (1-1000)<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | Number of usage summaries to skip for pagination<br>**Default**: 0 |
| <code>startTime?</code> | <code>Date</code> (date-time) | Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that overlap with the time range. |
| <code>endTime?</code> | <code>Date</code> (date-time) | Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with the time range. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getUsageByExternalId(request)`

- **OnSuccess**: <code>[UsageSummariesResponse](src/models/usage-summaries-response.ts)</code>
- **OnError**: throws <code>[Customers.GetUsageByExternalIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getUsageByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageSummariesResponse, Customers.GetUsageByExternalIdError&gt;</code>, with `result.value` of type <code>[UsageSummariesResponse](src/models/usage-summaries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get3(request: Customers.Get3Request, options?: RequestOptions): ApiPromise&lt;Customer, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.get3({
    customerId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Customer
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
const result = await client.customers
  .get3({ customerId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer
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
| <code>customerId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.get3(request)`

- **OnSuccess**: <code>[Customer](src/models/customer.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.customers.get3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer, ApiError&gt;</code>, with `result.value` of type <code>[Customer](src/models/customer.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>grantCustomerCredits(request: Customers.GrantCustomerCreditsRequest, options?: RequestOptions): ApiPromise&lt;GrantCustomerCreditsResponse, Customers.GrantCustomerCreditsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Immediately grant credits to a customer using an active credit currency key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.grantCustomerCredits({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type GrantCustomerCreditsResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.GrantCustomerCreditsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .grantCustomerCredits({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GrantCustomerCreditsResponse
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
| <code>id</code> | <code>string</code> | Paid customer display id |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreditGrantCreateRequest](src/models/credit-grant-create-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.grantCustomerCredits(request)`

- **OnSuccess**: <code>[GrantCustomerCreditsResponse](src/models/grant-customer-credits-response.ts)</code>
- **OnError**: throws <code>[Customers.GrantCustomerCreditsError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.grantCustomerCredits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GrantCustomerCreditsResponse, Customers.GrantCustomerCreditsError&gt;</code>, with `result.value` of type <code>[GrantCustomerCreditsResponse](src/models/grant-customer-credits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>grantCustomerCreditsByExternalId(request: Customers.GrantCustomerCreditsByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;GrantCustomerCreditsResponse, Customers.GrantCustomerCreditsByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Immediately grant credits to a customer looked up by external ID using an active credit currency key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.grantCustomerCreditsByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type GrantCustomerCreditsResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.GrantCustomerCreditsByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .grantCustomerCreditsByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GrantCustomerCreditsResponse
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
| <code>externalId</code> | <code>string</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreditGrantCreateRequest](src/models/credit-grant-create-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.grantCustomerCreditsByExternalId(request)`

- **OnSuccess**: <code>[GrantCustomerCreditsResponse](src/models/grant-customer-credits-response.ts)</code>
- **OnError**: throws <code>[Customers.GrantCustomerCreditsByExternalIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.grantCustomerCreditsByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GrantCustomerCreditsResponse, Customers.GrantCustomerCreditsByExternalIdError&gt;</code>, with `result.value` of type <code>[GrantCustomerCreditsResponse](src/models/grant-customer-credits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerAliases(request: Customers.ListCustomerAliasesRequest, options?: RequestOptions): ApiPromise&lt;CustomerAliasListResponse, Customers.ListCustomerAliasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List alternate external identifiers that resolve to a customer by Paid display ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomerAliases({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerAliasListResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.ListCustomerAliasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .listCustomerAliases({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerAliasListResponse
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
| <code>id</code> | <code>string</code> | Paid customer display id |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listCustomerAliases(request)`

- **OnSuccess**: <code>[CustomerAliasListResponse](src/models/customer-alias-list-response.ts)</code>
- **OnError**: throws <code>[Customers.ListCustomerAliasesError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.listCustomerAliases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerAliasListResponse, Customers.ListCustomerAliasesError&gt;</code>, with `result.value` of type <code>[CustomerAliasListResponse](src/models/customer-alias-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerAliasesByExternalId(request: Customers.ListCustomerAliasesByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;CustomerAliasListResponse, Customers.ListCustomerAliasesByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List alternate external identifiers that resolve to a customer by external ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomerAliasesByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerAliasListResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.ListCustomerAliasesByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .listCustomerAliasesByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerAliasListResponse
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
| <code>externalId</code> | <code>string</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listCustomerAliasesByExternalId(request)`

- **OnSuccess**: <code>[CustomerAliasListResponse](src/models/customer-alias-list-response.ts)</code>
- **OnError**: throws <code>[Customers.ListCustomerAliasesByExternalIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.listCustomerAliasesByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerAliasListResponse, Customers.ListCustomerAliasesByExternalIdError&gt;</code>, with `result.value` of type <code>[CustomerAliasListResponse](src/models/customer-alias-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomers(request: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise&lt;CustomerListResponse, Customers.ListCustomersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customers for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomers({ authorization: "some example string" });
  // TODO: Handle 'response' of type CustomerListResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.ListCustomersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.listCustomers({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerListResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>name?</code> | <code>string</code> | Search by customer name (case-insensitive, matches anywhere in the name). |
| <code>status?</code> | <code>[CustomersGetParametersStatus](src/models/customers-get-parameters-status.ts)</code> | Filter by customer status. churned: customers marked as churned. active: everyone else. |
| <code>creationState?</code> | <code>[CustomersGetParametersCreationState](src/models/customers-get-parameters-creation-state.ts)</code> | Filter by creation state: draft or active. |
| <code>createdAtFrom?</code> | <code>string</code> | Only customers created on or after this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters. |
| <code>createdAtTo?</code> | <code>string</code> | Only customers created on or before this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters. |
| <code>externalId?</code> | <code>string</code> | Filter by your external customer ID (exact match). |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listCustomers(request)`

- **OnSuccess**: <code>[CustomerListResponse](src/models/customer-list-response.ts)</code>
- **OnError**: throws <code>[Customers.ListCustomersError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.listCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerListResponse, Customers.ListCustomersError&gt;</code>, with `result.value` of type <code>[CustomerListResponse](src/models/customer-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentMethods(request: Customers.ListPaymentMethodsRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethod[], Customers.ListPaymentMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all payment methods associated with a customer identified by their external ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listPaymentMethods({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PaymentMethod[]
} catch (err) {
  // TODO: Handle 'err' of type Customers.ListPaymentMethodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .listPaymentMethods({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentMethod[]
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
| <code>externalId</code> | <code>string</code> | The external ID of the customer |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listPaymentMethods(request)`

- **OnSuccess**: <code>[PaymentMethod](src/models/payment-method.ts)[]</code>
- **OnError**: throws <code>[Customers.ListPaymentMethodsError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.listPaymentMethods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentMethod[], Customers.ListPaymentMethodsError&gt;</code>, with `result.value` of type <code>[PaymentMethod](src/models/payment-method.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list3(request: Customers.List3Request, options?: RequestOptions): ApiPromise&lt;Customer[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.list3({ authorization: "some example string" });
  // TODO: Handle 'response' of type Customer[]
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
const result = await client.customers.list3({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer[]
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.list3(request)`

- **OnSuccess**: <code>[Customer](src/models/customer.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.customers.list3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer[], ApiError&gt;</code>, with `result.value` of type <code>[Customer](src/models/customer.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateByExternalId2(request: Customers.UpdateByExternalId2Request, options?: RequestOptions): ApiPromise&lt;Customer, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.updateByExternalId2({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Customer
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
const result = await client.customers
  .updateByExternalId2({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[CustomerUpdate](src/models/customer-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.updateByExternalId2(request)`

- **OnSuccess**: <code>[Customer](src/models/customer.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.customers.updateByExternalId2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer, ApiError&gt;</code>, with `result.value` of type <code>[Customer](src/models/customer.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomerById(request: Customers.UpdateCustomerByIdRequest, options?: RequestOptions): ApiPromise&lt;Customer1, Customers.UpdateCustomerByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a customer by Paid display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `PUT /api/v2/customers/external/{externalId}`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.updateCustomerById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Customer1
} catch (err) {
  // TODO: Handle 'err' of type Customers.UpdateCustomerByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .updateCustomerById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer1
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
| <code>id</code> | <code>string</code> | Paid customer display id |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateCustomerRequest](src/models/update-customer-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.updateCustomerById(request)`

- **OnSuccess**: <code>[Customer1](src/models/customer1.ts)</code>
- **OnError**: throws <code>[Customers.UpdateCustomerByIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.updateCustomerById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer1, Customers.UpdateCustomerByIdError&gt;</code>, with `result.value` of type <code>[Customer1](src/models/customer1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update2(request: Customers.Update2Request, options?: RequestOptions): ApiPromise&lt;Customer, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.update2({
    customerId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Customer
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
const result = await client.customers
  .update2({ customerId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer
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
| <code>customerId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[CustomerUpdate](src/models/customer-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.update2(request)`

- **OnSuccess**: <code>[Customer](src/models/customer.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.customers.update2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer, ApiError&gt;</code>, with `result.value` of type <code>[Customer](src/models/customer.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertCustomerUserByExternalId(request: Customers.UpsertCustomerUserByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;CustomerUser, Customers.UpsertCustomerUserByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or update a customer user using customer and user external IDs

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.upsertCustomerUserByExternalId({
    customerExternalId: "some example string",
    userExternalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomerUser
} catch (err) {
  // TODO: Handle 'err' of type Customers.UpsertCustomerUserByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .upsertCustomerUserByExternalId({
    customerExternalId: "some example string",
    userExternalId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerUser
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
| <code>customerExternalId</code> | <code>string</code> | - |
| <code>userExternalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpsertCustomerUserRequest](src/models/upsert-customer-user-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.upsertCustomerUserByExternalId(request)`

- **OnSuccess**: <code>[CustomerUser](src/models/customer-user.ts)</code>
- **OnError**: throws <code>[Customers.UpsertCustomerUserByExternalIdError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.upsertCustomerUserByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerUser, Customers.UpsertCustomerUserByExternalIdError&gt;</code>, with `result.value` of type <code>[CustomerUser](src/models/customer-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomViewsExperimental

> Source: [CustomViewsExperimental](src/resources/custom-views-experimental.ts)

<details>
<summary><code>createCustomView(request: CustomViewsExperimental.CreateCustomViewRequestParams, options?: RequestOptions): ApiPromise&lt;CustomView, CustomViewsExperimental.CreateCustomViewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

⚠️ Only call this when the user has EXPLICITLY asked to save or create the view. After generating or previewing a dashboard, do NOT automatically save a draft — show it to the user and wait for them to ask you to save it. Creating saves a DRAFT only; it is NOT permission to publish — never chain a publish onto a create. After saving, hand the user the previewUrl and wait for their feedback before doing anything else. Saves named analytics queries + a self-contained HTML render bundle as a DRAFT custom view. **Call getCustomViewAuthoringGuide (GET /experimental/views/authoring-guide) first** — it returns the full guide and a copy-paste interactive template. Key rules: (1) Do NOT add a customer filter to the SQL — the database scopes every query to the viewing customer at embed time. (2) Each query's SQL must be SELECT-only; return clearly-named columns. Compute metric VALUES in SQL (e.g. (count()*2)/5 AS custom_metric) — derive a number in the render bundle only when it depends on user interaction (toggle/filter/hover) or is pure formatting of a value a query already returns. (3) The render bundle must be SELF-CONTAINED — inline all CSS/JS/charting, NO external loads or fetch (the sandbox has connect-src 'none'); it must listen for the `paid:data` message (data keyed by query id) and re-render on each one. (4) Make it INTERACTIVE — mousemove hover tooltips and at least one addEventListener-wired control that re-renders (a static chart feels broken). (5) The render bundle is the single source of truth — BEFORE saving, preview the EXACT bundle in the user's current client (call getCustomViewPreviewHarness with your bundle + sample data and render the HTML it returns) and show it to the user; that preview in the current client is how the user first sees the dashboard. Do NOT save a draft just to preview it in Paid — creating writes to the user's real account and is never a preview step. Do NOT build a separate chart, and only show numbers that come from a declared query. (6) A view is a FULL dashboard — include as many charts/KPIs as the analysis has. Keep every element derived from the single viewing customer (KPIs, trends, type mix); drop only cross-customer comparisons (rankings, share-of-total, 'N customers'). Don't simplify to one chart. (7) To make the date range adjustable (e.g. the user says 'last month'), write the date boundary as `{period_start:DateTime}` / `{period_end:DateTime}` placeholders in the SQL and pass a default `period` (relative like {kind:'relative',unit:'month',amount:1}, or absolute start/end). The org user can then change it in Paid without re-authoring. A query using the placeholders REQUIRES a period. Do NOT add your own date-range picker to the render bundle — Paid owns the timeframe and the bundle receives already-filtered data; a second in-bundle picker cannot re-run the SQL. (8) Check your draft with validateCustomView (POST /experimental/views/validate) BEFORE asking the user to save — it runs these same gates without persisting and reports every problem at once. The response returns a `previewUrl` — give it to the user so they can open the new view in Paid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customViewsExperimental.createCustomView({
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomView
} catch (err) {
  // TODO: Handle 'err' of type CustomViewsExperimental.CreateCustomViewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customViewsExperimental
  .createCustomView({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomView
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreateCustomViewRequest](src/models/create-custom-view-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customViewsExperimental.createCustomView(request)`

- **OnSuccess**: <code>[CustomView](src/models/custom-view.ts)</code>
- **OnError**: throws <code>[CustomViewsExperimental.CreateCustomViewError](src/resources/custom-views-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customViewsExperimental.createCustomView(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomView, CustomViewsExperimental.CreateCustomViewError&gt;</code>, with `result.value` of type <code>[CustomView](src/models/custom-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomView(request: CustomViewsExperimental.GetCustomViewRequest, options?: RequestOptions): ApiPromise&lt;CustomViewDetail, CustomViewsExperimental.GetCustomViewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Returns the view's name, status, query ids, and the author render bundle for the owning organization (DRAFT or PUBLISHED). Used by the trusted preview/embed frame to render the sandbox; the per-customer data is fetched separately via /:displayId/data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customViewsExperimental.getCustomView({
    displayId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomViewDetail
} catch (err) {
  // TODO: Handle 'err' of type CustomViewsExperimental.GetCustomViewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customViewsExperimental
  .getCustomView({ displayId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomViewDetail
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
| <code>displayId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customViewsExperimental.getCustomView(request)`

- **OnSuccess**: <code>[CustomViewDetail](src/models/custom-view-detail.ts)</code>
- **OnError**: throws <code>[CustomViewsExperimental.GetCustomViewError](src/resources/custom-views-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customViewsExperimental.getCustomView(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomViewDetail, CustomViewsExperimental.GetCustomViewError&gt;</code>, with `result.value` of type <code>[CustomViewDetail](src/models/custom-view-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomViewData(request: CustomViewsExperimental.GetCustomViewDataRequest, options?: RequestOptions): ApiPromise&lt;ViewDataResponse, CustomViewsExperimental.GetCustomViewDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Runs every stored query of the view on the read-only analytics database and returns the result sets keyed by query id. For a customer-scoped view (the default), the query is scoped to the caller's organization AND the given `customerId` (both enforced as ClickHouse row filters) — `customerId` is required. For an organization-scoped view, the data is org-wide (scoped only to the caller's organization) and `customerId` is ignored. The scope is enforced by the database — it cannot be widened by the stored SQL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customViewsExperimental.getCustomViewData({
    displayId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ViewDataResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomViewsExperimental.GetCustomViewDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customViewsExperimental
  .getCustomViewData({ displayId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ViewDataResponse
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
| <code>displayId</code> | <code>string</code> | - |
| <code>customerId?</code> | <code>string</code> | Customer to scope the data to (dev/preview only; the embed derives this from the verified token). Required for customer-scoped views; ignored for organization-scoped views (their data is org-wide). |
| <code>periodKind?</code> | <code>[ExperimentalViewsDisplayIdDataGetParametersPeriodKind](src/models/experimental-views-display-id-data-get-parameters-period-kind.ts)</code> | Override the view's default date range for this request only. 'relative' = rolling window (set periodUnit + periodAmount); 'absolute' = fixed range (set periodStart + periodEnd). |
| <code>periodUnit?</code> | <code>[ExperimentalViewsDisplayIdDataGetParametersPeriodUnit](src/models/experimental-views-display-id-data-get-parameters-period-unit.ts)</code> | relative override only: unit of the rolling window. |
| <code>periodAmount?</code> | <code>number</code> | relative override only: how many units back from today. |
| <code>periodStart?</code> | <code>string</code> | absolute override only: inclusive start date (YYYY-MM-DD). |
| <code>periodEnd?</code> | <code>string</code> | absolute override only: inclusive end date (YYYY-MM-DD). |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customViewsExperimental.getCustomViewData(request)`

- **OnSuccess**: <code>[ViewDataResponse](src/models/view-data-response.ts)</code>
- **OnError**: throws <code>[CustomViewsExperimental.GetCustomViewDataError](src/resources/custom-views-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customViewsExperimental.getCustomViewData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ViewDataResponse, CustomViewsExperimental.GetCustomViewDataError&gt;</code>, with `result.value` of type <code>[ViewDataResponse](src/models/view-data-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomViewEmbedToken(request: CustomViewsExperimental.GetCustomViewEmbedTokenRequest, options?: RequestOptions): ApiPromise&lt;CustomViewEmbedTokenResponse, CustomViewsExperimental.GetCustomViewEmbedTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Mints a short-lived, customer-scoped token for embedding a published custom view. Call this from your server with your API key, then pass the returned token to the embed SDK. Organization-scoped views cannot be embedded per-customer — this returns a 400 (`ORG_SCOPED_VIEW_NOT_EMBEDDABLE`) for one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customViewsExperimental.getCustomViewEmbedToken({
    displayId: "some example string",
    customerId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomViewEmbedTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomViewsExperimental.GetCustomViewEmbedTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customViewsExperimental
  .getCustomViewEmbedToken({
    displayId: "some example string",
    customerId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomViewEmbedTokenResponse
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
| <code>displayId</code> | <code>string</code> | - |
| <code>customerId</code> | <code>string</code> | The customer to scope the view to: external id, Paid display id (cus_…), or internal id. |
| <code>ttlSeconds?</code> | <code>number</code> | Token lifetime in seconds (capped at 3600). |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customViewsExperimental.getCustomViewEmbedToken(request)`

- **OnSuccess**: <code>[CustomViewEmbedTokenResponse](src/models/custom-view-embed-token-response.ts)</code>
- **OnError**: throws <code>[CustomViewsExperimental.GetCustomViewEmbedTokenError](src/resources/custom-views-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customViewsExperimental.getCustomViewEmbedToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomViewEmbedTokenResponse, CustomViewsExperimental.GetCustomViewEmbedTokenError&gt;</code>, with `result.value` of type <code>[CustomViewEmbedTokenResponse](src/models/custom-view-embed-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomViews(request: CustomViewsExperimental.ListCustomViewsRequest, options?: RequestOptions): ApiPromise&lt;CustomViewListResponse, CustomViewsExperimental.ListCustomViewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Lists the organization's custom views (newest first) with lightweight summary info — name, status, query count, default date range, created date. Does not return the SQL or render bundle; fetch a single view via getCustomView for those.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customViewsExperimental.listCustomViews({
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomViewListResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomViewsExperimental.ListCustomViewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customViewsExperimental
  .listCustomViews({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomViewListResponse
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customViewsExperimental.listCustomViews(request)`

- **OnSuccess**: <code>[CustomViewListResponse](src/models/custom-view-list-response.ts)</code>
- **OnError**: throws <code>[CustomViewsExperimental.ListCustomViewsError](src/resources/custom-views-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customViewsExperimental.listCustomViews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomViewListResponse, CustomViewsExperimental.ListCustomViewsError&gt;</code>, with `result.value` of type <code>[CustomViewListResponse](src/models/custom-view-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publishCustomView(request: CustomViewsExperimental.PublishCustomViewRequest, options?: RequestOptions): ApiPromise&lt;CustomView, CustomViewsExperimental.PublishCustomViewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

⚠️ Never publish as an automatic follow-up to creating or generating a view. Only call this after you have shown the user the built/previewed view and they have EXPLICITLY approved publishing — building and publishing are separate user decisions, and answering an earlier question (e.g. the view's scope) is NOT publish approval. Flips the view from DRAFT to PUBLISHED. Only PUBLISHED views are served on the embed data path — this is the gate that stops an unreviewed view reaching end-customers. Idempotent: publishing an already-published view is a no-op success. The response returns a `previewUrl` — give it to the user so they can open the view in Paid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customViewsExperimental.publishCustomView({
    displayId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomView
} catch (err) {
  // TODO: Handle 'err' of type CustomViewsExperimental.PublishCustomViewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customViewsExperimental
  .publishCustomView({ displayId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomView
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
| <code>displayId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customViewsExperimental.publishCustomView(request)`

- **OnSuccess**: <code>[CustomView](src/models/custom-view.ts)</code>
- **OnError**: throws <code>[CustomViewsExperimental.PublishCustomViewError](src/resources/custom-views-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customViewsExperimental.publishCustomView(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomView, CustomViewsExperimental.PublishCustomViewError&gt;</code>, with `result.value` of type <code>[CustomView](src/models/custom-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomView(request: CustomViewsExperimental.UpdateCustomViewRequestParams, options?: RequestOptions): ApiPromise&lt;CustomView, CustomViewsExperimental.UpdateCustomViewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Partially updates a view. Omitted fields are left unchanged. For REVISIONS, prefer the incremental fields — `bundleEdits` (exact search-and-replace on the stored render bundle) and `queryUpserts`/`queryRemovals` (per-query changes) — so you transmit only what changed instead of re-sending the whole payload. The full-replacement fields remain for rewrites: `renderBundle`, and `queries` (a FULL replacement of the query list — never drop queries the user didn't ask to remove). Replacement and incremental forms of the same aspect cannot be combined. The resulting SQL and bundle pass the same validation as createCustomView (SELECT-only, size cap, self-contained, paid:data listener). Works on DRAFT or PUBLISHED views — published embeds pick the change up on their next load.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customViewsExperimental.updateCustomView({
    displayId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomView
} catch (err) {
  // TODO: Handle 'err' of type CustomViewsExperimental.UpdateCustomViewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customViewsExperimental
  .updateCustomView({ displayId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomView
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
| <code>displayId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateCustomViewRequest](src/models/update-custom-view-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customViewsExperimental.updateCustomView(request)`

- **OnSuccess**: <code>[CustomView](src/models/custom-view.ts)</code>
- **OnError**: throws <code>[CustomViewsExperimental.UpdateCustomViewError](src/resources/custom-views-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customViewsExperimental.updateCustomView(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomView, CustomViewsExperimental.UpdateCustomViewError&gt;</code>, with `result.value` of type <code>[CustomView](src/models/custom-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomViewPeriod(request: CustomViewsExperimental.UpdateCustomViewPeriodRequestParams, options?: RequestOptions): ApiPromise&lt;CustomView, CustomViewsExperimental.UpdateCustomViewPeriodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Updates the view's default date range (the period applied to queries that use the `{period_start:DateTime}` / `{period_end:DateTime}` placeholders). Accepts a relative rolling window (e.g. last 30 days) or a fixed start/end range. Lets the period be changed after deployment without re-authoring the SQL. Applies to DRAFT or PUBLISHED views.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customViewsExperimental.updateCustomViewPeriod({
    displayId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomView
} catch (err) {
  // TODO: Handle 'err' of type CustomViewsExperimental.UpdateCustomViewPeriodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customViewsExperimental
  .updateCustomViewPeriod({ displayId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomView
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
| <code>displayId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateCustomViewPeriodRequest](src/models/update-custom-view-period-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customViewsExperimental.updateCustomViewPeriod(request)`

- **OnSuccess**: <code>[CustomView](src/models/custom-view.ts)</code>
- **OnError**: throws <code>[CustomViewsExperimental.UpdateCustomViewPeriodError](src/resources/custom-views-experimental.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customViewsExperimental.updateCustomViewPeriod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomView, CustomViewsExperimental.UpdateCustomViewPeriodError&gt;</code>, with `result.value` of type <code>[CustomView](src/models/custom-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](src/resources/invoices.ts)

<details>
<summary><code>getInvoiceById(request: Invoices.GetInvoiceByIdRequest, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.GetInvoiceByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an invoice by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.getInvoiceById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  // TODO: Handle 'err' of type Invoices.GetInvoiceByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .getInvoiceById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Invoice
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.getInvoiceById(request)`

- **OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: throws <code>[Invoices.GetInvoiceByIdError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.getInvoiceById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Invoice, Invoices.GetInvoiceByIdError&gt;</code>, with `result.value` of type <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInvoiceLines(request: Invoices.GetInvoiceLinesRequest, options?: RequestOptions): ApiPromise&lt;InvoiceLinesResponse, Invoices.GetInvoiceLinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the invoice lines for an invoice by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.getInvoiceLines({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type InvoiceLinesResponse
} catch (err) {
  // TODO: Handle 'err' of type Invoices.GetInvoiceLinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .getInvoiceLines({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoiceLinesResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.getInvoiceLines(request)`

- **OnSuccess**: <code>[InvoiceLinesResponse](src/models/invoice-lines-response.ts)</code>
- **OnError**: throws <code>[Invoices.GetInvoiceLinesError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.getInvoiceLines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoiceLinesResponse, Invoices.GetInvoiceLinesError&gt;</code>, with `result.value` of type <code>[InvoiceLinesResponse](src/models/invoice-lines-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInvoices(request: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise&lt;InvoiceListResponse, Invoices.ListInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of invoices for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.listInvoices({ authorization: "some example string" });
  // TODO: Handle 'response' of type InvoiceListResponse
} catch (err) {
  // TODO: Handle 'err' of type Invoices.ListInvoicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.listInvoices({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoiceListResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>customerId?</code> | <code>string</code> | Filter by customer ID. |
| <code>externalCustomerId?</code> | <code>string</code> | Filter by customer external ID. |
| <code>orderId?</code> | <code>string</code> | Filter by the order this invoice was generated from. |
| <code>status?</code> | <code>[InvoicesGetParametersStatus](src/models/invoices-get-parameters-status.ts)</code> | Filter by invoice status. |
| <code>paymentStatus?</code> | <code>[InvoicesGetParametersPaymentStatus](src/models/invoices-get-parameters-payment-status.ts)</code> | Filter by payment status. |
| <code>issueDateFrom?</code> | <code>string</code> | Only invoices whose issue date is on or after this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters. |
| <code>issueDateTo?</code> | <code>string</code> | Only invoices whose issue date is on or before this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters. |
| <code>dueDateFrom?</code> | <code>string</code> | Only invoices whose due date is on or after this date. Invoices without a due date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters. |
| <code>dueDateTo?</code> | <code>string</code> | Only invoices whose due date is on or before this date. Invoices without a due date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters. |
| <code>displayNumber?</code> | <code>string</code> | Filter by the invoice number shown on the invoice, whether draft or posted (exact match). |
| <code>purchaseOrderReference?</code> | <code>string</code> | Filter by purchase order reference (exact match, whitespace-sensitive). |
| <code>currency?</code> | <code>string</code> | Filter by invoice currency code (case-insensitive, e.g. USD). |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.listInvoices(request)`

- **OnSuccess**: <code>[InvoiceListResponse](src/models/invoice-list-response.ts)</code>
- **OnError**: throws <code>[Invoices.ListInvoicesError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.listInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoiceListResponse, Invoices.ListInvoicesError&gt;</code>, with `result.value` of type <code>[InvoiceListResponse](src/models/invoice-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInvoiceById(request: Invoices.UpdateInvoiceByIdRequest, options?: RequestOptions): ApiPromise&lt;Invoice, Invoices.UpdateInvoiceByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an invoice by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.updateInvoiceById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Invoice
} catch (err) {
  // TODO: Handle 'err' of type Invoices.UpdateInvoiceByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices
  .updateInvoiceById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Invoice
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateInvoiceRequest](src/models/update-invoice-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.updateInvoiceById(request)`

- **OnSuccess**: <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: throws <code>[Invoices.UpdateInvoiceByIdError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.updateInvoiceById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Invoice, Invoices.UpdateInvoiceByIdError&gt;</code>, with `result.value` of type <code>[Invoice](src/models/invoice.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](src/resources/orders.ts)

<details>
<summary><code>activate(request: Orders.ActivateRequest, options?: RequestOptions): ApiPromise&lt;Order, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.activate({
    orderId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Order
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
const result = await client.orders
  .activate({ orderId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order
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
| <code>orderId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.activate(request)`

- **OnSuccess**: <code>[Order](src/models/order.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orders.activate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order, ApiError&gt;</code>, with `result.value` of type <code>[Order](src/models/order.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>activateAndPay(request: Orders.ActivateAndPayRequest, options?: RequestOptions): ApiPromise&lt;Order, Orders.ActivateAndPayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the order and processes the initial payment using the provided Stripe confirmation token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.activateAndPay({
    orderId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Order
} catch (err) {
  // TODO: Handle 'err' of type Orders.ActivateAndPayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .activateAndPay({ orderId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order
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
| <code>orderId</code> | <code>string</code> | The order ID (can be internal ID or display ID) |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[OrdersActivateAndPayRequest](src/models/orders-activate-and-pay-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.activateAndPay(request)`

- **OnSuccess**: <code>[Order](src/models/order.ts)</code>
- **OnError**: throws <code>[Orders.ActivateAndPayError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.activateAndPay(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order, Orders.ActivateAndPayError&gt;</code>, with `result.value` of type <code>[Order](src/models/order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>activateOrderById(request: Orders.ActivateOrderByIdRequest, options?: RequestOptions): ApiPromise&lt;Order1, Orders.ActivateOrderByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate a draft order by ID. Activation starts billing for the order using the same validation and side effects as the dashboard activation flow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.activateOrderById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Order1
} catch (err) {
  // TODO: Handle 'err' of type Orders.ActivateOrderByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .activateOrderById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order1
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.activateOrderById(request)`

- **OnSuccess**: <code>[Order1](src/models/order1.ts)</code>
- **OnError**: throws <code>[Orders.ActivateOrderByIdError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.activateOrderById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order1, Orders.ActivateOrderByIdError&gt;</code>, with `result.value` of type <code>[Order1](src/models/order1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchOrderSeatAssignments(request: Orders.BatchOrderSeatAssignmentsRequest, options?: RequestOptions): ApiPromise&lt;BatchSeatAssignmentsResponse, Orders.BatchOrderSeatAssignmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assign or unassign seats in batch for an order

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.batchOrderSeatAssignments({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type BatchSeatAssignmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.BatchOrderSeatAssignmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .batchOrderSeatAssignments({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchSeatAssignmentsResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[BatchSeatAssignmentsRequest](src/models/batch-seat-assignments-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.batchOrderSeatAssignments(request)`

- **OnSuccess**: <code>[BatchSeatAssignmentsResponse](src/models/batch-seat-assignments-response.ts)</code>
- **OnError**: throws <code>[Orders.BatchOrderSeatAssignmentsError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.batchOrderSeatAssignments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchSeatAssignmentsResponse, Orders.BatchOrderSeatAssignmentsError&gt;</code>, with `result.value` of type <code>[BatchSeatAssignmentsResponse](src/models/batch-seat-assignments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelRenewal(request: Orders.CancelRenewalRequestParams, options?: RequestOptions): ApiPromise&lt;CancelRenewalResponse, Orders.CancelRenewalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules the cancellation of an order's renewal from a specified date. The order will remain active until the cancellation date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.cancelRenewal({
    orderId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CancelRenewalResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.CancelRenewalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .cancelRenewal({ orderId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelRenewalResponse
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
| <code>orderId</code> | <code>string</code> | The order ID (can be internal ID or display ID) |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[CancelRenewalRequest](src/models/cancel-renewal-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.cancelRenewal(request)`

- **OnSuccess**: <code>[CancelRenewalResponse](src/models/cancel-renewal-response.ts)</code>
- **OnError**: throws <code>[Orders.CancelRenewalError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.cancelRenewal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelRenewalResponse, Orders.CancelRenewalError&gt;</code>, with `result.value` of type <code>[CancelRenewalResponse](src/models/cancel-renewal-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOrder(request: Orders.CreateOrderRequestParams, options?: RequestOptions): ApiPromise&lt;Order1, Orders.CreateOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new order for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.createOrder({ authorization: "some example string" });
  // TODO: Handle 'response' of type Order1
} catch (err) {
  // TODO: Handle 'err' of type Orders.CreateOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.createOrder({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order1
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreateOrderRequest](src/models/create-order-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.createOrder(request)`

- **OnSuccess**: <code>[Order1](src/models/order1.ts)</code>
- **OnError**: throws <code>[Orders.CreateOrderError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.createOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order1, Orders.CreateOrderError&gt;</code>, with `result.value` of type <code>[Order1](src/models/order1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>create4(request: Orders.Create4Request, options?: RequestOptions): ApiPromise&lt;Order, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.create4({ authorization: "some example string" });
  // TODO: Handle 'response' of type Order
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
const result = await client.orders.create4({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[OrderCreate](src/models/order-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.create4(request)`

- **OnSuccess**: <code>[Order](src/models/order.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orders.create4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order, ApiError&gt;</code>, with `result.value` of type <code>[Order](src/models/order.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOrderById(request: Orders.DeleteOrderByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Orders.DeleteOrderByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an order by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.deleteOrderById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Orders.DeleteOrderByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .deleteOrderById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.deleteOrderById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Orders.DeleteOrderByIdError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.deleteOrderById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Orders.DeleteOrderByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete4(request: Orders.Delete4Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.delete4({
    orderId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.orders
  .delete4({ orderId: "some example string", authorization: "some example string" })
  .asApiResult();
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
| <code>orderId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.delete4(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orders.delete4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInvoices(request: Orders.GetInvoicesRequest, options?: RequestOptions): ApiPromise&lt;InvoicePaidOrdersApi[], Orders.GetInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all invoices associated with a specific order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getInvoices({
    orderId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type InvoicePaidOrdersApi[]
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetInvoicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .getInvoices({ orderId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvoicePaidOrdersApi[]
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
| <code>orderId</code> | <code>string</code> | The order ID (can be internal ID or display ID) |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getInvoices(request)`

- **OnSuccess**: <code>[InvoicePaidOrdersApi](src/models/invoice-paid-orders-api.ts)[]</code>
- **OnError**: throws <code>[Orders.GetInvoicesError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvoicePaidOrdersApi[], Orders.GetInvoicesError&gt;</code>, with `result.value` of type <code>[InvoicePaidOrdersApi](src/models/invoice-paid-orders-api.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrderById(request: Orders.GetOrderByIdRequest, options?: RequestOptions): ApiPromise&lt;Order1, Orders.GetOrderByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an order by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrderById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Order1
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrderByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .getOrderById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order1
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrderById(request)`

- **OnSuccess**: <code>[Order1](src/models/order1.ts)</code>
- **OnError**: throws <code>[Orders.GetOrderByIdError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrderById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order1, Orders.GetOrderByIdError&gt;</code>, with `result.value` of type <code>[Order1](src/models/order1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrderLines(request: Orders.GetOrderLinesRequest, options?: RequestOptions): ApiPromise&lt;OrderLinesResponse, Orders.GetOrderLinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the order lines for an order by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrderLines({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type OrderLinesResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrderLinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .getOrderLines({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderLinesResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrderLines(request)`

- **OnSuccess**: <code>[OrderLinesResponse](src/models/order-lines-response.ts)</code>
- **OnError**: throws <code>[Orders.GetOrderLinesError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrderLines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderLinesResponse, Orders.GetOrderLinesError&gt;</code>, with `result.value` of type <code>[OrderLinesResponse](src/models/order-lines-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get4(request: Orders.Get4Request, options?: RequestOptions): ApiPromise&lt;Order, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.get4({
    orderId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Order
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
const result = await client.orders
  .get4({ orderId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order
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
| <code>orderId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.get4(request)`

- **OnSuccess**: <code>[Order](src/models/order.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orders.get4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order, ApiError&gt;</code>, with `result.value` of type <code>[Order](src/models/order.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOrderSeats(request: Orders.ListOrderSeatsRequest, options?: RequestOptions): ApiPromise&lt;OrderSeatListResponse, Orders.ListOrderSeatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List seats for an order

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.listOrderSeats({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type OrderSeatListResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.ListOrderSeatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .listOrderSeats({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderSeatListResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>productExternalId?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[OrdersIdSeatsGetParametersStatus](src/models/orders-id-seats-get-parameters-status.ts)</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.listOrderSeats(request)`

- **OnSuccess**: <code>[OrderSeatListResponse](src/models/order-seat-list-response.ts)</code>
- **OnError**: throws <code>[Orders.ListOrderSeatsError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.listOrderSeats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderSeatListResponse, Orders.ListOrderSeatsError&gt;</code>, with `result.value` of type <code>[OrderSeatListResponse](src/models/order-seat-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOrders(request: Orders.ListOrdersRequest, options?: RequestOptions): ApiPromise&lt;OrderListResponse, Orders.ListOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of orders for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.listOrders({ authorization: "some example string" });
  // TODO: Handle 'response' of type OrderListResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.ListOrdersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.listOrders({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderListResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>customerId?</code> | <code>string</code> | Filter by customer ID. |
| <code>externalCustomerId?</code> | <code>string</code> | Filter by customer external ID. |
| <code>externalId?</code> | <code>string</code> | Filter by the order's external ID (exact match). |
| <code>creationState?</code> | <code>[OrdersGetParametersCreationState](src/models/orders-get-parameters-creation-state.ts)</code> | Filter by creation state: draft or active. |
| <code>status?</code> | <code>[OrdersGetParametersStatus](src/models/orders-get-parameters-status.ts)</code> | Filter by derived order status. draft: not yet activated. paused: billing is paused. ended: end date is in the past. active: activated, not paused, and not ended. |
| <code>startDateFrom?</code> | <code>string</code> | Only orders whose start date is on or after this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters. |
| <code>startDateTo?</code> | <code>string</code> | Only orders whose start date is on or before this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters. |
| <code>endDateFrom?</code> | <code>string</code> | Only orders whose end date is on or after this date. Orders without an end date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters. |
| <code>endDateTo?</code> | <code>string</code> | Only orders whose end date is on or before this date. Orders without an end date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters. |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.listOrders(request)`

- **OnSuccess**: <code>[OrderListResponse](src/models/order-list-response.ts)</code>
- **OnError**: throws <code>[Orders.ListOrdersError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.listOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderListResponse, Orders.ListOrdersError&gt;</code>, with `result.value` of type <code>[OrderListResponse](src/models/order-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list4(request: Orders.List4Request, options?: RequestOptions): ApiPromise&lt;Order[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.list4({ authorization: "some example string" });
  // TODO: Handle 'response' of type Order[]
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
const result = await client.orders.list4({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order[]
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.list4(request)`

- **OnSuccess**: <code>[Order](src/models/order.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.orders.list4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order[], ApiError&gt;</code>, with `result.value` of type <code>[Order](src/models/order.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>schedulePlanChange(request: Orders.SchedulePlanChangeRequest, options?: RequestOptions): ApiPromise&lt;ProrationUpgradeResponse, Orders.SchedulePlanChangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a plan upgrade or downgrade for an order with automatic proration calculation. Credits are applied for the unused portion of the current billing period.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.schedulePlanChange({
    orderId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ProrationUpgradeResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.SchedulePlanChangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .schedulePlanChange({ orderId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProrationUpgradeResponse
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
| <code>orderId</code> | <code>string</code> | The order ID (can be internal ID or display ID) |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[ProrationUpgradeRequest](src/models/proration-upgrade-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.schedulePlanChange(request)`

- **OnSuccess**: <code>[ProrationUpgradeResponse](src/models/proration-upgrade-response.ts)</code>
- **OnError**: throws <code>[Orders.SchedulePlanChangeError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.schedulePlanChange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProrationUpgradeResponse, Orders.SchedulePlanChangeError&gt;</code>, with `result.value` of type <code>[ProrationUpgradeResponse](src/models/proration-upgrade-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOrderById(request: Orders.UpdateOrderByIdRequest, options?: RequestOptions): ApiPromise&lt;Order1, Orders.UpdateOrderByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an order by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.updateOrderById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Order1
} catch (err) {
  // TODO: Handle 'err' of type Orders.UpdateOrderByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .updateOrderById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order1
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateOrderRequest](src/models/update-order-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.updateOrderById(request)`

- **OnSuccess**: <code>[Order1](src/models/order1.ts)</code>
- **OnError**: throws <code>[Orders.UpdateOrderByIdError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.updateOrderById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order1, Orders.UpdateOrderByIdError&gt;</code>, with `result.value` of type <code>[Order1](src/models/order1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOrderSeatAssignment(request: Orders.UpdateOrderSeatAssignmentRequest, options?: RequestOptions): ApiPromise&lt;OrderSeat, Orders.UpdateOrderSeatAssignmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assign or unassign a single seat on an order

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.updateOrderSeatAssignment({
    id: "some example string",
    seatId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type OrderSeat
} catch (err) {
  // TODO: Handle 'err' of type Orders.UpdateOrderSeatAssignmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .updateOrderSeatAssignment({
    id: "some example string",
    seatId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderSeat
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
| <code>id</code> | <code>string</code> | - |
| <code>seatId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateSeatAssignmentRequest](src/models/update-seat-assignment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.updateOrderSeatAssignment(request)`

- **OnSuccess**: <code>[OrderSeat](src/models/order-seat.ts)</code>
- **OnError**: throws <code>[Orders.UpdateOrderSeatAssignmentError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.updateOrderSeatAssignment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderSeat, Orders.UpdateOrderSeatAssignmentError&gt;</code>, with `result.value` of type <code>[OrderSeat](src/models/order-seat.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OrdersLines

> Source: [OrdersLines](src/resources/orders-lines.ts)

<details>
<summary><code>update3(request: OrdersLines.Update3Request, options?: RequestOptions): ApiPromise&lt;Order, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ordersLines.update3({
    orderId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Order
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
const result = await client.ordersLines
  .update3({ orderId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order
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
| <code>orderId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[OrdersLinesRequest](src/models/orders-lines-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ordersLines.update3(request)`

- **OnSuccess**: <code>[Order](src/models/order.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.ordersLines.update3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order, ApiError&gt;</code>, with `result.value` of type <code>[Order](src/models/order.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Plans

> Source: [Plans](src/resources/plans.ts)

<details>
<summary><code>createPlan(request: Plans.CreatePlanRequestParams, options?: RequestOptions): ApiPromise&lt;Plan1, Plans.CreatePlanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new plan for a product.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.createPlan({ authorization: "some example string" });
  // TODO: Handle 'response' of type Plan1
} catch (err) {
  // TODO: Handle 'err' of type Plans.CreatePlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans.createPlan({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Plan1
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreatePlanRequest](src/models/create-plan-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.createPlan(request)`

- **OnSuccess**: <code>[Plan1](src/models/plan1.ts)</code>
- **OnError**: throws <code>[Plans.CreatePlanError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.createPlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Plan1, Plans.CreatePlanError&gt;</code>, with `result.value` of type <code>[Plan1](src/models/plan1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getById(request: Plans.GetByIdRequest, options?: RequestOptions): ApiPromise&lt;Plan, Plans.GetByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.getById({
    planId: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Plan
} catch (err) {
  // TODO: Handle 'err' of type Plans.GetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .getById({ planId: "00000000-0000-0000-0000-000000000000", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Plan
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
| <code>planId</code> | <code>string</code> | The ID of the plan |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.getById(request)`

- **OnSuccess**: <code>[Plan](src/models/plan.ts)</code>
- **OnError**: throws <code>[Plans.GetByIdError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.getById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Plan, Plans.GetByIdError&gt;</code>, with `result.value` of type <code>[Plan](src/models/plan.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCurrent(request: Plans.GetCurrentRequest, options?: RequestOptions): ApiPromise&lt;PlansGetCurrentResponse200, Plans.GetCurrentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the currently active plan subscription for a customer by their external ID. Returns the plan details and subscription information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.getCurrent({
    customerExternalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PlansGetCurrentResponse200
} catch (err) {
  // TODO: Handle 'err' of type Plans.GetCurrentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .getCurrent({ customerExternalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlansGetCurrentResponse200
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
| <code>customerExternalId</code> | <code>string</code> | The external ID of the customer |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.getCurrent(request)`

- **OnSuccess**: <code>[PlansGetCurrentResponse200](src/models/plans-get-current-response200.ts)</code>
- **OnError**: throws <code>[Plans.GetCurrentError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.getCurrent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlansGetCurrentResponse200, Plans.GetCurrentError&gt;</code>, with `result.value` of type <code>[PlansGetCurrentResponse200](src/models/plans-get-current-response200.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupById(request: Plans.GetGroupByIdRequest, options?: RequestOptions): ApiPromise&lt;PlanGroup, Plans.GetGroupByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.getGroupById({
    planGroupId: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PlanGroup
} catch (err) {
  // TODO: Handle 'err' of type Plans.GetGroupByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .getGroupById({ planGroupId: "00000000-0000-0000-0000-000000000000", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlanGroup
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
| <code>planGroupId</code> | <code>string</code> | The ID of the plan group |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.getGroupById(request)`

- **OnSuccess**: <code>[PlanGroup](src/models/plan-group.ts)</code>
- **OnError**: throws <code>[Plans.GetGroupByIdError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.getGroupById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlanGroup, Plans.GetGroupByIdError&gt;</code>, with `result.value` of type <code>[PlanGroup](src/models/plan-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupPlans(request: Plans.GetGroupPlansRequest, options?: RequestOptions): ApiPromise&lt;PlanWithFeatures[], Plans.GetGroupPlansError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all plans in a plan group with their features (product-attribute pairs)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.getGroupPlans({
    planGroupId: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PlanWithFeatures[]
} catch (err) {
  // TODO: Handle 'err' of type Plans.GetGroupPlansError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .getGroupPlans({
    planGroupId: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlanWithFeatures[]
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
| <code>planGroupId</code> | <code>string</code> | The ID of the plan group |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.getGroupPlans(request)`

- **OnSuccess**: <code>[PlanWithFeatures](src/models/plan-with-features.ts)[]</code>
- **OnError**: throws <code>[Plans.GetGroupPlansError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.getGroupPlans(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlanWithFeatures[], Plans.GetGroupPlansError&gt;</code>, with `result.value` of type <code>[PlanWithFeatures](src/models/plan-with-features.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlanByExternalId(request: Plans.GetPlanByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;Plan1, Plans.GetPlanByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a plan by your external plan ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.getPlanByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Plan1
} catch (err) {
  // TODO: Handle 'err' of type Plans.GetPlanByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .getPlanByExternalId({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Plan1
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.getPlanByExternalId(request)`

- **OnSuccess**: <code>[Plan1](src/models/plan1.ts)</code>
- **OnError**: throws <code>[Plans.GetPlanByExternalIdError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.getPlanByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Plan1, Plans.GetPlanByExternalIdError&gt;</code>, with `result.value` of type <code>[Plan1](src/models/plan1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlanById(request: Plans.GetPlanByIdRequest, options?: RequestOptions): ApiPromise&lt;Plan1, Plans.GetPlanByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a plan by Paid plan ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.getPlanById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Plan1
} catch (err) {
  // TODO: Handle 'err' of type Plans.GetPlanByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .getPlanById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Plan1
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.getPlanById(request)`

- **OnSuccess**: <code>[Plan1](src/models/plan1.ts)</code>
- **OnError**: throws <code>[Plans.GetPlanByIdError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.getPlanById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Plan1, Plans.GetPlanByIdError&gt;</code>, with `result.value` of type <code>[Plan1](src/models/plan1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsage(request: Plans.GetUsageRequest, options?: RequestOptions): ApiPromise&lt;UsageSummariesResponse, Plans.GetUsageError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.getUsage({
    planId: "00000000-0000-0000-0000-000000000000",
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type UsageSummariesResponse
} catch (err) {
  // TODO: Handle 'err' of type Plans.GetUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .getUsage({
    planId: "00000000-0000-0000-0000-000000000000",
    externalId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageSummariesResponse
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
| <code>planId</code> | <code>string</code> | The ID of the plan |
| <code>externalId</code> | <code>string</code> | The external ID of the customer |
| <code>limit?</code> | <code>number</code> | Maximum number of usage summaries to return (1-1000)<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | Number of usage summaries to skip for pagination<br>**Default**: 0 |
| <code>startTime?</code> | <code>Date</code> (date-time) | Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that overlap with the time range. |
| <code>endTime?</code> | <code>Date</code> (date-time) | Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with the time range. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.getUsage(request)`

- **OnSuccess**: <code>[UsageSummariesResponse](src/models/usage-summaries-response.ts)</code>
- **OnError**: throws <code>[Plans.GetUsageError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.getUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageSummariesResponse, Plans.GetUsageError&gt;</code>, with `result.value` of type <code>[UsageSummariesResponse](src/models/usage-summaries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPlans(request: Plans.ListPlansRequest, options?: RequestOptions): ApiPromise&lt;PlanListResponse, Plans.ListPlansError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns plans for your organization, including archived plans by default, optionally filtered to a product.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.listPlans({ authorization: "some example string" });
  // TODO: Handle 'response' of type PlanListResponse
} catch (err) {
  // TODO: Handle 'err' of type Plans.ListPlansError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans.listPlans({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlanListResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>productId?</code> | <code>string</code> | - |
| <code>externalProductId?</code> | <code>string</code> | - |
| <code>includeArchived?</code> | <code>boolean</code> | Whether to include archived plans in the response. Defaults to true.<br>**Default**: true |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.listPlans(request)`

- **OnSuccess**: <code>[PlanListResponse](src/models/plan-list-response.ts)</code>
- **OnError**: throws <code>[Plans.ListPlansError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.listPlans(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlanListResponse, Plans.ListPlansError&gt;</code>, with `result.value` of type <code>[PlanListResponse](src/models/plan-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribe(request: Plans.SubscribeRequest, options?: RequestOptions): ApiPromise&lt;Order, Plans.SubscribeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new order for a customer subscribing to a plan. The order will be created with the plan's products and pricing attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.subscribe({
    planId: "00000000-0000-0000-0000-000000000000",
    customerExternalId: "some example string",
    currency: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Order
} catch (err) {
  // TODO: Handle 'err' of type Plans.SubscribeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .subscribe({
    planId: "00000000-0000-0000-0000-000000000000",
    customerExternalId: "some example string",
    currency: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Order
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
| <code>planId</code> | <code>string</code> | The ID of the plan |
| <code>customerExternalId</code> | <code>string</code> | The external ID of the customer |
| <code>currency</code> | <code>string</code> | The currency code for the order (e.g., "USD", "EUR") |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.subscribe(request)`

- **OnSuccess**: <code>[Order](src/models/order.ts)</code>
- **OnError**: throws <code>[Plans.SubscribeError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.subscribe(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Order, Plans.SubscribeError&gt;</code>, with `result.value` of type <code>[Order](src/models/order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unsubscribe(request: Plans.UnsubscribeRequest, options?: RequestOptions): ApiPromise&lt;CancelRenewalResponse, Plans.UnsubscribeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the renewal of an active order for a customer's plan subscription. The order will remain active until the cancellation date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.unsubscribe({
    planId: "00000000-0000-0000-0000-000000000000",
    customerExternalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CancelRenewalResponse
} catch (err) {
  // TODO: Handle 'err' of type Plans.UnsubscribeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .unsubscribe({
    planId: "00000000-0000-0000-0000-000000000000",
    customerExternalId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelRenewalResponse
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
| <code>planId</code> | <code>string</code> | The ID of the plan |
| <code>customerExternalId</code> | <code>string</code> | The external ID of the customer |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.unsubscribe(request)`

- **OnSuccess**: <code>[CancelRenewalResponse](src/models/cancel-renewal-response.ts)</code>
- **OnError**: throws <code>[Plans.UnsubscribeError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.unsubscribe(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelRenewalResponse, Plans.UnsubscribeError&gt;</code>, with `result.value` of type <code>[CancelRenewalResponse](src/models/cancel-renewal-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePlanByExternalId(request: Plans.UpdatePlanByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;Plan1, Plans.UpdatePlanByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a plan by your external plan ID. If attributes are provided, they replace the plan's existing attributes. Set status to archive or restore the plan.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.updatePlanByExternalId({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Plan1
} catch (err) {
  // TODO: Handle 'err' of type Plans.UpdatePlanByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .updatePlanByExternalId({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Plan1
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdatePlanRequest](src/models/update-plan-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.updatePlanByExternalId(request)`

- **OnSuccess**: <code>[Plan1](src/models/plan1.ts)</code>
- **OnError**: throws <code>[Plans.UpdatePlanByExternalIdError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.updatePlanByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Plan1, Plans.UpdatePlanByExternalIdError&gt;</code>, with `result.value` of type <code>[Plan1](src/models/plan1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePlanById(request: Plans.UpdatePlanByIdRequest, options?: RequestOptions): ApiPromise&lt;Plan1, Plans.UpdatePlanByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a plan by Paid plan ID. If attributes are provided, they replace the plan's existing attributes. Set status to archive or restore the plan.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.updatePlanById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Plan1
} catch (err) {
  // TODO: Handle 'err' of type Plans.UpdatePlanByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .updatePlanById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Plan1
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdatePlanRequest](src/models/update-plan-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.updatePlanById(request)`

- **OnSuccess**: <code>[Plan1](src/models/plan1.ts)</code>
- **OnError**: throws <code>[Plans.UpdatePlanByIdError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.updatePlanById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Plan1, Plans.UpdatePlanByIdError&gt;</code>, with `result.value` of type <code>[Plan1](src/models/plan1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePlanUpgradePath(request: Plans.UpdatePlanUpgradePathRequestParams, options?: RequestOptions): ApiPromise&lt;PlanUpgradePathResponse, Plans.UpdatePlanUpgradePathError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates upgrade path ordering for plans within a product, grouped by billing frequency.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.updatePlanUpgradePath({ authorization: "some example string" });
  // TODO: Handle 'response' of type PlanUpgradePathResponse
} catch (err) {
  // TODO: Handle 'err' of type Plans.UpdatePlanUpgradePathError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .updatePlanUpgradePath({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlanUpgradePathResponse
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdatePlanUpgradePathRequest](src/models/update-plan-upgrade-path-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.updatePlanUpgradePath(request)`

- **OnSuccess**: <code>[PlanUpgradePathResponse](src/models/plan-upgrade-path-response.ts)</code>
- **OnError**: throws <code>[Plans.UpdatePlanUpgradePathError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.updatePlanUpgradePath(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlanUpgradePathResponse, Plans.UpdatePlanUpgradePathError&gt;</code>, with `result.value` of type <code>[PlanUpgradePathResponse](src/models/plan-upgrade-path-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upgrade(request: Plans.UpgradeRequest, options?: RequestOptions): ApiPromise&lt;ProrationUpgradeResponse, Plans.UpgradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upgrades a customer from one plan to another with automatic proration. Credits are applied for the unused portion of the current billing period, and the order is updated with the new plan's pricing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plans.upgrade({
    customerExternalId: "some example string",
    oldPlanId: "00000000-0000-0000-0000-000000000000",
    newPlanId: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ProrationUpgradeResponse
} catch (err) {
  // TODO: Handle 'err' of type Plans.UpgradeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plans
  .upgrade({
    customerExternalId: "some example string",
    oldPlanId: "00000000-0000-0000-0000-000000000000",
    newPlanId: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProrationUpgradeResponse
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
| <code>customerExternalId</code> | <code>string</code> | The external ID of the customer |
| <code>oldPlanId</code> | <code>string</code> | The ID of the current plan |
| <code>newPlanId</code> | <code>string</code> | The ID of the plan to upgrade to |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plans.upgrade(request)`

- **OnSuccess**: <code>[ProrationUpgradeResponse](src/models/proration-upgrade-response.ts)</code>
- **OnError**: throws <code>[Plans.UpgradeError](src/resources/plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plans.upgrade(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProrationUpgradeResponse, Plans.UpgradeError&gt;</code>, with `result.value` of type <code>[ProrationUpgradeResponse](src/models/proration-upgrade-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PricingApi

> Source: [PricingApi](src/resources/pricing-api.ts)

<details>
<summary><code>getPricing(request: PricingApi.GetPricingRequest, options?: RequestOptions): ApiPromise&lt;PricingResponse, PricingApi.GetPricingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns pricing and credit benefits for a single product attribute.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pricingApi.getPricing({
    productAttributeId: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PricingResponse
} catch (err) {
  // TODO: Handle 'err' of type PricingApi.GetPricingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pricingApi
  .getPricing({
    productAttributeId: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PricingResponse
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
| <code>productAttributeId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pricingApi.getPricing(request)`

- **OnSuccess**: <code>[PricingResponse](src/models/pricing-response.ts)</code>
- **OnError**: throws <code>[PricingApi.GetPricingError](src/resources/pricing-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pricingApi.getPricing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PricingResponse, PricingApi.GetPricingError&gt;</code>, with `result.value` of type <code>[PricingResponse](src/models/pricing-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPricing(request: PricingApi.ListPricingRequest, options?: RequestOptions): ApiPromise&lt;PricingListResponse, PricingApi.ListPricingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns pricing for all product attributes of a product. Each entry includes the attribute's pricing configuration and credit benefits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pricingApi.listPricing({
    productId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PricingListResponse
} catch (err) {
  // TODO: Handle 'err' of type PricingApi.ListPricingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pricingApi
  .listPricing({ productId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PricingListResponse
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
| <code>productId</code> | <code>string</code> | Product display ID or UUID |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pricingApi.listPricing(request)`

- **OnSuccess**: <code>[PricingListResponse](src/models/pricing-list-response.ts)</code>
- **OnError**: throws <code>[PricingApi.ListPricingError](src/resources/pricing-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pricingApi.listPricing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PricingListResponse, PricingApi.ListPricingError&gt;</code>, with `result.value` of type <code>[PricingListResponse](src/models/pricing-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePricing(request: PricingApi.UpdatePricingRequestParams, options?: RequestOptions): ApiPromise&lt;PricingResponse, PricingApi.UpdatePricingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates pricing on an existing product attribute. If creditBenefits is provided, it fully replaces existing benefits. If omitted, existing benefits are preserved.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pricingApi.updatePricing({
    productAttributeId: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PricingResponse
} catch (err) {
  // TODO: Handle 'err' of type PricingApi.UpdatePricingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pricingApi
  .updatePricing({
    productAttributeId: "00000000-0000-0000-0000-000000000000",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PricingResponse
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
| <code>productAttributeId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdatePricingRequest](src/models/update-pricing-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pricingApi.updatePricing(request)`

- **OnSuccess**: <code>[PricingResponse](src/models/pricing-response.ts)</code>
- **OnError**: throws <code>[PricingApi.UpdatePricingError](src/resources/pricing-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pricingApi.updatePricing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PricingResponse, PricingApi.UpdatePricingError&gt;</code>, with `result.value` of type <code>[PricingResponse](src/models/pricing-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](src/resources/products.ts)

<details>
<summary><code>createProduct(request: Products.CreateProductRequestParams, options?: RequestOptions): ApiPromise&lt;Product1, Products.CreateProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new product for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.createProduct({ authorization: "some example string" });
  // TODO: Handle 'response' of type Product1
} catch (err) {
  // TODO: Handle 'err' of type Products.CreateProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products.createProduct({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Product1
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[CreateProductRequest](src/models/create-product-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.createProduct(request)`

- **OnSuccess**: <code>[Product1](src/models/product1.ts)</code>
- **OnError**: throws <code>[Products.CreateProductError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.createProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Product1, Products.CreateProductError&gt;</code>, with `result.value` of type <code>[Product1](src/models/product1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>create5(request: Products.Create5Request, options?: RequestOptions): ApiPromise&lt;Product, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.create5({ authorization: "some example string" });
  // TODO: Handle 'response' of type Product
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
const result = await client.products.create5({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Product
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[ProductCreate](src/models/product-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.create5(request)`

- **OnSuccess**: <code>[Product](src/models/product.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.products.create5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Product, ApiError&gt;</code>, with `result.value` of type <code>[Product](src/models/product.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteByExternalId4(request: Products.DeleteByExternalId4Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.deleteByExternalId4({
    externalId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.products
  .deleteByExternalId4({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.deleteByExternalId4(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.products.deleteByExternalId4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete5(request: Products.Delete5Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.delete5({
    productId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.products
  .delete5({ productId: "some example string", authorization: "some example string" })
  .asApiResult();
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
| <code>productId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.delete5(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.products.delete5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getByExternalId4(request: Products.GetByExternalId4Request, options?: RequestOptions): ApiPromise&lt;Product, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.getByExternalId4({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Product
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
const result = await client.products
  .getByExternalId4({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Product
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.getByExternalId4(request)`

- **OnSuccess**: <code>[Product](src/models/product.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.products.getByExternalId4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Product, ApiError&gt;</code>, with `result.value` of type <code>[Product](src/models/product.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProductById(request: Products.GetProductByIdRequest, options?: RequestOptions): ApiPromise&lt;ProductDetail, Products.GetProductByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a product by ID, including its product attributes with pricing details

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.getProductById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ProductDetail
} catch (err) {
  // TODO: Handle 'err' of type Products.GetProductByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products
  .getProductById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductDetail
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.getProductById(request)`

- **OnSuccess**: <code>[ProductDetail](src/models/product-detail.ts)</code>
- **OnError**: throws <code>[Products.GetProductByIdError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.getProductById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductDetail, Products.GetProductByIdError&gt;</code>, with `result.value` of type <code>[ProductDetail](src/models/product-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get5(request: Products.Get5Request, options?: RequestOptions): ApiPromise&lt;Product, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.get5({
    productId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Product
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
const result = await client.products
  .get5({ productId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Product
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
| <code>productId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.get5(request)`

- **OnSuccess**: <code>[Product](src/models/product.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.products.get5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Product, ApiError&gt;</code>, with `result.value` of type <code>[Product](src/models/product.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProducts(request: Products.ListProductsRequest, options?: RequestOptions): ApiPromise&lt;ProductListResponse, Products.ListProductsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of products for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.listProducts({ authorization: "some example string" });
  // TODO: Handle 'response' of type ProductListResponse
} catch (err) {
  // TODO: Handle 'err' of type Products.ListProductsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products.listProducts({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductListResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>name?</code> | <code>string</code> | Search by product name (case-insensitive, matches anywhere in the name). |
| <code>active?</code> | <code>boolean</code> | Filter by the product's active flag: true or false. |
| <code>archived?</code> | <code>boolean</code> | Filter by archived state: true returns only archived products, false only non-archived. Omit to include both. |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.listProducts(request)`

- **OnSuccess**: <code>[ProductListResponse](src/models/product-list-response.ts)</code>
- **OnError**: throws <code>[Products.ListProductsError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.listProducts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductListResponse, Products.ListProductsError&gt;</code>, with `result.value` of type <code>[ProductListResponse](src/models/product-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list5(request: Products.List5Request, options?: RequestOptions): ApiPromise&lt;Product[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.list5({ authorization: "some example string" });
  // TODO: Handle 'response' of type Product[]
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
const result = await client.products.list5({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Product[]
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.list5(request)`

- **OnSuccess**: <code>[Product](src/models/product.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.products.list5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Product[], ApiError&gt;</code>, with `result.value` of type <code>[Product](src/models/product.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateByExternalId3(request: Products.UpdateByExternalId3Request, options?: RequestOptions): ApiPromise&lt;Product, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.updateByExternalId3({
    externalId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Product
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
const result = await client.products
  .updateByExternalId3({ externalId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Product
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
| <code>externalId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[ProductUpdate](src/models/product-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.updateByExternalId3(request)`

- **OnSuccess**: <code>[Product](src/models/product.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.products.updateByExternalId3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Product, ApiError&gt;</code>, with `result.value` of type <code>[Product](src/models/product.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProductById(request: Products.UpdateProductByIdRequest, options?: RequestOptions): ApiPromise&lt;ProductDetail, Products.UpdateProductByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a product by ID. Optionally upsert product attributes with pricing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.updateProductById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ProductDetail
} catch (err) {
  // TODO: Handle 'err' of type Products.UpdateProductByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products
  .updateProductById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductDetail
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateProductRequest](src/models/update-product-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.updateProductById(request)`

- **OnSuccess**: <code>[ProductDetail](src/models/product-detail.ts)</code>
- **OnError**: throws <code>[Products.UpdateProductByIdError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.updateProductById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductDetail, Products.UpdateProductByIdError&gt;</code>, with `result.value` of type <code>[ProductDetail](src/models/product-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update4(request: Products.Update4Request, options?: RequestOptions): ApiPromise&lt;Product, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.update4({
    productId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type Product
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
const result = await client.products
  .update4({ productId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Product
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
| <code>productId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[ProductUpdate](src/models/product-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.update4(request)`

- **OnSuccess**: <code>[Product](src/models/product.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.products.update4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Product, ApiError&gt;</code>, with `result.value` of type <code>[Product](src/models/product.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Signals

> Source: [Signals](src/resources/signals.ts)

<details>
<summary><code>createSignals(request: Signals.CreateSignalsRequest, options?: RequestOptions): ApiPromise&lt;BulkSignalsResponse, Signals.CreateSignalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple signals (usage events) in a single request. Each signal must include a customer attribution (either customerId or externalCustomerId) and a product attribution (either productId or externalProductId).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signals.createSignals({ authorization: "some example string" });
  // TODO: Handle 'response' of type BulkSignalsResponse
} catch (err) {
  // TODO: Handle 'err' of type Signals.CreateSignalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signals.createSignals({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkSignalsResponse
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[BulkSignalsRequest](src/models/bulk-signals-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signals.createSignals(request)`

- **OnSuccess**: <code>[BulkSignalsResponse](src/models/bulk-signals-response.ts)</code>
- **OnError**: throws <code>[Signals.CreateSignalsError](src/resources/signals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signals.createSignals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkSignalsResponse, Signals.CreateSignalsError&gt;</code>, with `result.value` of type <code>[BulkSignalsResponse](src/models/bulk-signals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Traces

> Source: [Traces](src/resources/traces.ts)

<details>
<summary><code>getTraces(request: Traces.GetTracesRequest, options?: RequestOptions): ApiPromise&lt;TracesResponse, Traces.GetTracesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.getTraces({ authorization: "some example string" });
  // TODO: Handle 'response' of type TracesResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.GetTracesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces.getTraces({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TracesResponse
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
| <code>limit?</code> | <code>number</code> | Maximum number of traces to return (1-1000)<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | Number of traces to skip for pagination<br>**Default**: 0 |
| <code>startTime?</code> | <code>Date</code> (date-time) | Filter traces starting from this time (ISO 8601 format) |
| <code>endTime?</code> | <code>Date</code> (date-time) | Filter traces up to this time (ISO 8601 format) |
| <code>externalCustomerId?</code> | <code>string</code> | Filter traces by external customer ID |
| <code>externalProductId?</code> | <code>string</code> | Filter traces by external product ID |
| <code>externalAgentId?</code> | <code>string</code> | DEPRECATED: Use externalProductId instead. Filter traces by external agent ID |
| <code>metadata?</code> | <code>string</code> | Filter traces by metadata fields. Must be a valid JSON object (e.g., {"key1":"value1","key2":"value2"}). All specified fields must match (AND logic). |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.getTraces(request)`

- **OnSuccess**: <code>[TracesResponse](src/models/traces-response.ts)</code>
- **OnError**: throws <code>[Traces.GetTracesError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.getTraces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TracesResponse, Traces.GetTracesError&gt;</code>, with `result.value` of type <code>[TracesResponse](src/models/traces-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](src/resources/usage.ts)

<details>
<summary><code>checkUsage(request: Usage.CheckUsageRequest, options?: RequestOptions): ApiPromise&lt;UsageCheckUsageResponse200, Usage.CheckUsageError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.checkUsage({ authorization: "some example string" });
  // TODO: Handle 'response' of type UsageCheckUsageResponse200
} catch (err) {
  // TODO: Handle 'err' of type Usage.CheckUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.checkUsage({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageCheckUsageResponse200
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[UsageCheckUsageRequest](src/models/usage-check-usage-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.checkUsage(request)`

- **OnSuccess**: <code>[UsageCheckUsageResponse200](src/models/usage-check-usage-response200.ts)</code>
- **OnError**: throws <code>[Usage.CheckUsageError](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.checkUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageCheckUsageResponse200, Usage.CheckUsageError&gt;</code>, with `result.value` of type <code>[UsageCheckUsageResponse200](src/models/usage-check-usage-response200.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordBulk(request: Usage.RecordBulkRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use POST /usage/v2/signals/bulk instead for cleaner field names.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.recordBulk({ authorization: "some example string" });
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
const result = await client.usage.recordBulk({ authorization: "some example string" }).asApiResult();
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[UsageSignalsBulkRequest](src/models/usage-signals-bulk-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.recordBulk(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.usage.recordBulk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usageRecordBulkV2(request: Usage.UsageRecordBulkV2Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Usage.UsageRecordBulkV2Error&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.usageRecordBulkV2({ authorization: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Usage.UsageRecordBulkV2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.usageRecordBulkV2({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[UsageV2SignalsBulkRequest](src/models/usage-v2-signals-bulk-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.usageRecordBulkV2(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Usage.UsageRecordBulkV2Error](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.usageRecordBulkV2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Usage.UsageRecordBulkV2Error&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ValueModels

> Source: [ValueModels](src/resources/value-models.ts)

<details>
<summary><code>getCurrentValueModel(request: ValueModels.GetCurrentValueModelRequest, options?: RequestOptions): ApiPromise&lt;ValueModelDetail, ValueModels.GetCurrentValueModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current (latest active) value model for the organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueModels.getCurrentValueModel({ authorization: "some example string" });
  // TODO: Handle 'response' of type ValueModelDetail
} catch (err) {
  // TODO: Handle 'err' of type ValueModels.GetCurrentValueModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueModels
  .getCurrentValueModel({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValueModelDetail
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueModels.getCurrentValueModel(request)`

- **OnSuccess**: <code>[ValueModelDetail](src/models/value-model-detail.ts)</code>
- **OnError**: throws <code>[ValueModels.GetCurrentValueModelError](src/resources/value-models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueModels.getCurrentValueModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValueModelDetail, ValueModels.GetCurrentValueModelError&gt;</code>, with `result.value` of type <code>[ValueModelDetail](src/models/value-model-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getValueModelVersion(request: ValueModels.GetValueModelVersionRequest, options?: RequestOptions): ApiPromise&lt;ValueModelDetail, ValueModels.GetValueModelVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific historical value model version by version number, including full content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueModels.getValueModelVersion({
    version: 1,
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ValueModelDetail
} catch (err) {
  // TODO: Handle 'err' of type ValueModels.GetValueModelVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueModels
  .getValueModelVersion({ version: 1, authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValueModelDetail
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
| <code>version</code> | <code>number</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueModels.getValueModelVersion(request)`

- **OnSuccess**: <code>[ValueModelDetail](src/models/value-model-detail.ts)</code>
- **OnError**: throws <code>[ValueModels.GetValueModelVersionError](src/resources/value-models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueModels.getValueModelVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValueModelDetail, ValueModels.GetValueModelVersionError&gt;</code>, with `result.value` of type <code>[ValueModelDetail](src/models/value-model-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listValueModelVersions(request: ValueModels.ListValueModelVersionsRequest, options?: RequestOptions): ApiPromise&lt;ValueModelVersionListResponse, ValueModels.ListValueModelVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all value model versions sorted by version descending. Does not include the full content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueModels.listValueModelVersions({ authorization: "some example string" });
  // TODO: Handle 'response' of type ValueModelVersionListResponse
} catch (err) {
  // TODO: Handle 'err' of type ValueModels.ListValueModelVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueModels
  .listValueModelVersions({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValueModelVersionListResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueModels.listValueModelVersions(request)`

- **OnSuccess**: <code>[ValueModelVersionListResponse](src/models/value-model-version-list-response.ts)</code>
- **OnError**: throws <code>[ValueModels.ListValueModelVersionsError](src/resources/value-models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueModels.listValueModelVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValueModelVersionListResponse, ValueModels.ListValueModelVersionsError&gt;</code>, with `result.value` of type <code>[ValueModelVersionListResponse](src/models/value-model-version-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshValueModelBackfill(request: ValueModels.RefreshValueModelBackfillRequest, options?: RequestOptions): ApiPromise&lt;BackfillResponse, ValueModels.RefreshValueModelBackfillError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manually triggers a recalculation of all ClickHouse rows against the current value model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueModels.refreshValueModelBackfill({
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type BackfillResponse
} catch (err) {
  // TODO: Handle 'err' of type ValueModels.RefreshValueModelBackfillError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueModels
  .refreshValueModelBackfill({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BackfillResponse
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueModels.refreshValueModelBackfill(request)`

- **OnSuccess**: <code>[BackfillResponse](src/models/backfill-response.ts)</code>
- **OnError**: throws <code>[ValueModels.RefreshValueModelBackfillError](src/resources/value-models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueModels.refreshValueModelBackfill(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BackfillResponse, ValueModels.RefreshValueModelBackfillError&gt;</code>, with `result.value` of type <code>[BackfillResponse](src/models/backfill-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateValueModel(request: ValueModels.UpdateValueModelRequest, options?: RequestOptions): ApiPromise&lt;ValueModelDetail, ValueModels.UpdateValueModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a new value model version. Validates the content, creates a new version, archives the previous active version, syncs to ClickHouse, and triggers a backfill of all historical signals.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueModels.updateValueModel({ authorization: "some example string" });
  // TODO: Handle 'response' of type ValueModelDetail
} catch (err) {
  // TODO: Handle 'err' of type ValueModels.UpdateValueModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueModels
  .updateValueModel({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValueModelDetail
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[ValueModelUploadRequest](src/models/value-model-upload-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueModels.updateValueModel(request)`

- **OnSuccess**: <code>[ValueModelDetail](src/models/value-model-detail.ts)</code>
- **OnError**: throws <code>[ValueModels.UpdateValueModelError](src/resources/value-models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueModels.updateValueModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValueModelDetail, ValueModels.UpdateValueModelError&gt;</code>, with `result.value` of type <code>[ValueModelDetail](src/models/value-model-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ValueReceipts

> Source: [ValueReceipts](src/resources/value-receipts.ts)

<details>
<summary><code>archiveValueReceipt(request: ValueReceipts.ArchiveValueReceiptRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, ValueReceipts.ArchiveValueReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-archive a value receipt. Archived VRs are hidden from list by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueReceipts.archiveValueReceipt({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ValueReceipts.ArchiveValueReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueReceipts
  .archiveValueReceipt({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueReceipts.archiveValueReceipt(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[ValueReceipts.ArchiveValueReceiptError](src/resources/value-receipts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueReceipts.archiveValueReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, ValueReceipts.ArchiveValueReceiptError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getValueReceiptById(request: ValueReceipts.GetValueReceiptByIdRequest, options?: RequestOptions): ApiPromise&lt;ValueReceiptDetail, ValueReceipts.GetValueReceiptByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a value receipt by ID, including its publish/share state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueReceipts.getValueReceiptById({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ValueReceiptDetail
} catch (err) {
  // TODO: Handle 'err' of type ValueReceipts.GetValueReceiptByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueReceipts
  .getValueReceiptById({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValueReceiptDetail
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueReceipts.getValueReceiptById(request)`

- **OnSuccess**: <code>[ValueReceiptDetail](src/models/value-receipt-detail.ts)</code>
- **OnError**: throws <code>[ValueReceipts.GetValueReceiptByIdError](src/resources/value-receipts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueReceipts.getValueReceiptById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValueReceiptDetail, ValueReceipts.GetValueReceiptByIdError&gt;</code>, with `result.value` of type <code>[ValueReceiptDetail](src/models/value-receipt-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listValueReceipts(request: ValueReceipts.ListValueReceiptsRequest, options?: RequestOptions): ApiPromise&lt;ValueReceiptListResponse, ValueReceipts.ListValueReceiptsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List value receipts for the organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueReceipts.listValueReceipts({ authorization: "some example string" });
  // TODO: Handle 'response' of type ValueReceiptListResponse
} catch (err) {
  // TODO: Handle 'err' of type ValueReceipts.ListValueReceiptsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueReceipts
  .listValueReceipts({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValueReceiptListResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>customerId?</code> | <code>string</code> | Filter by customer display ID. |
| <code>externalCustomerId?</code> | <code>string</code> | Filter by customer external ID. |
| <code>orderId?</code> | <code>string</code> | - |
| <code>productId?</code> | <code>string</code> | - |
| <code>archived?</code> | <code>[ValueReceiptsGetParametersArchived](src/models/value-receipts-get-parameters-archived.ts)</code> | Include archived value receipts. Defaults to false.<br>**Default**: "false" |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueReceipts.listValueReceipts(request)`

- **OnSuccess**: <code>[ValueReceiptListResponse](src/models/value-receipt-list-response.ts)</code>
- **OnError**: throws <code>[ValueReceipts.ListValueReceiptsError](src/resources/value-receipts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueReceipts.listValueReceipts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValueReceiptListResponse, ValueReceipts.ListValueReceiptsError&gt;</code>, with `result.value` of type <code>[ValueReceiptListResponse](src/models/value-receipt-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publishValueReceipt(request: ValueReceipts.PublishValueReceiptRequest, options?: RequestOptions): ApiPromise&lt;ValueReceiptDetail, ValueReceipts.PublishValueReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make a value receipt publicly accessible via URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueReceipts.publishValueReceipt({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ValueReceiptDetail
} catch (err) {
  // TODO: Handle 'err' of type ValueReceipts.PublishValueReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueReceipts
  .publishValueReceipt({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValueReceiptDetail
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[PublishValueReceiptBody](src/models/publish-value-receipt-body.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueReceipts.publishValueReceipt(request)`

- **OnSuccess**: <code>[ValueReceiptDetail](src/models/value-receipt-detail.ts)</code>
- **OnError**: throws <code>[ValueReceipts.PublishValueReceiptError](src/resources/value-receipts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueReceipts.publishValueReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValueReceiptDetail, ValueReceipts.PublishValueReceiptError&gt;</code>, with `result.value` of type <code>[ValueReceiptDetail](src/models/value-receipt-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshValueReceipt(request: ValueReceipts.RefreshValueReceiptRequest, options?: RequestOptions): ApiPromise&lt;ValueReceiptSyncResponse, ValueReceipts.RefreshValueReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-populate an existing draft value receipt with current data inline. Returns the slim sync response. Sealed VRs cannot be refreshed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueReceipts.refreshValueReceipt({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ValueReceiptSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type ValueReceipts.RefreshValueReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueReceipts
  .refreshValueReceipt({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValueReceiptSyncResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueReceipts.refreshValueReceipt(request)`

- **OnSuccess**: <code>[ValueReceiptSyncResponse](src/models/value-receipt-sync-response.ts)</code>
- **OnError**: throws <code>[ValueReceipts.RefreshValueReceiptError](src/resources/value-receipts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueReceipts.refreshValueReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValueReceiptSyncResponse, ValueReceipts.RefreshValueReceiptError&gt;</code>, with `result.value` of type <code>[ValueReceiptSyncResponse](src/models/value-receipt-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sealValueReceipt(request: ValueReceipts.SealValueReceiptRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, ValueReceipts.SealValueReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transition a draft value receipt to sealed (posted) status. Sealed VRs are immutable — they cannot be updated or re-populated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueReceipts.sealValueReceipt({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ValueReceipts.SealValueReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueReceipts
  .sealValueReceipt({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueReceipts.sealValueReceipt(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[ValueReceipts.SealValueReceiptError](src/resources/value-receipts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueReceipts.sealValueReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, ValueReceipts.SealValueReceiptError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>syncValueReceipt(request: ValueReceipts.SyncValueReceiptRequestParams, options?: RequestOptions): ApiPromise&lt;ValueReceiptSyncResponse, ValueReceipts.SyncValueReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find or create a value receipt by natural key (customer + product/order + dates), then populate it with current data inline. Returns the ID, status, and public URL. Posted (sealed) VRs are returned as-is without re-populating.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueReceipts.syncValueReceipt({ authorization: "some example string" });
  // TODO: Handle 'response' of type ValueReceiptSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type ValueReceipts.SyncValueReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueReceipts
  .syncValueReceipt({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValueReceiptSyncResponse
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[SyncValueReceiptRequest](src/models/sync-value-receipt-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueReceipts.syncValueReceipt(request)`

- **OnSuccess**: <code>[ValueReceiptSyncResponse](src/models/value-receipt-sync-response.ts)</code>
- **OnError**: throws <code>[ValueReceipts.SyncValueReceiptError](src/resources/value-receipts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueReceipts.syncValueReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValueReceiptSyncResponse, ValueReceipts.SyncValueReceiptError&gt;</code>, with `result.value` of type <code>[ValueReceiptSyncResponse](src/models/value-receipt-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unarchiveValueReceipt(request: ValueReceipts.UnarchiveValueReceiptRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, ValueReceipts.UnarchiveValueReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived value receipt.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueReceipts.unarchiveValueReceipt({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ValueReceipts.UnarchiveValueReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueReceipts
  .unarchiveValueReceipt({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueReceipts.unarchiveValueReceipt(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[ValueReceipts.UnarchiveValueReceiptError](src/resources/value-receipts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueReceipts.unarchiveValueReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, ValueReceipts.UnarchiveValueReceiptError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unpublishValueReceipt(request: ValueReceipts.UnpublishValueReceiptRequest, options?: RequestOptions): ApiPromise&lt;ValueReceiptDetail, ValueReceipts.UnpublishValueReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke public access to a value receipt.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.valueReceipts.unpublishValueReceipt({
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ValueReceiptDetail
} catch (err) {
  // TODO: Handle 'err' of type ValueReceipts.UnpublishValueReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.valueReceipts
  .unpublishValueReceipt({ id: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValueReceiptDetail
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
| <code>id</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.valueReceipts.unpublishValueReceipt(request)`

- **OnSuccess**: <code>[ValueReceiptDetail](src/models/value-receipt-detail.ts)</code>
- **OnError**: throws <code>[ValueReceipts.UnpublishValueReceiptError](src/resources/value-receipts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.valueReceipts.unpublishValueReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValueReceiptDetail, ValueReceipts.UnpublishValueReceiptError&gt;</code>, with `result.value` of type <code>[ValueReceiptDetail](src/models/value-receipt-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>listWebhooks(request: Webhooks.ListWebhooksRequest, options?: RequestOptions): ApiPromise&lt;WebhookListResponse, Webhooks.ListWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List customer-facing billing webhooks for the authenticated organization, along with whether the organization has generated a signing secret.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhooks({ authorization: "some example string" });
  // TODO: Handle 'response' of type WebhookListResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ListWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.listWebhooks({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookListResponse
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listWebhooks(request)`

- **OnSuccess**: <code>[WebhookListResponse](src/models/webhook-list-response.ts)</code>
- **OnError**: throws <code>[Webhooks.ListWebhooksError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.listWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookListResponse, Webhooks.ListWebhooksError&gt;</code>, with `result.value` of type <code>[WebhookListResponse](src/models/webhook-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rotateWebhookSecret(request: Webhooks.RotateWebhookSecretRequest, options?: RequestOptions): ApiPromise&lt;RotateWebhookSecretResponse, Webhooks.RotateWebhookSecretError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new HMAC signing secret used by every webhook in this organization and return it exactly once. The previous secret is invalidated immediately on next delivery.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.rotateWebhookSecret({ authorization: "some example string" });
  // TODO: Handle 'response' of type RotateWebhookSecretResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.RotateWebhookSecretError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .rotateWebhookSecret({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RotateWebhookSecretResponse
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
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.rotateWebhookSecret(request)`

- **OnSuccess**: <code>[RotateWebhookSecretResponse](src/models/rotate-webhook-secret-response.ts)</code>
- **OnError**: throws <code>[Webhooks.RotateWebhookSecretError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.rotateWebhookSecret(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RotateWebhookSecretResponse, Webhooks.RotateWebhookSecretError&gt;</code>, with `result.value` of type <code>[RotateWebhookSecretResponse](src/models/rotate-webhook-secret-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testWebhook(request: Webhooks.TestWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookTestResponse, Webhooks.TestWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a synthetic webhook delivery to the configured destination for this webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.testWebhook({
    webhookName: WebhooksWebhookNameTestPostParametersWebhookName.BillingInvoiceCreated,
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type WebhookTestResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.TestWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .testWebhook({
    webhookName: WebhooksWebhookNameTestPostParametersWebhookName.BillingInvoiceCreated,
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookTestResponse
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
| <code>webhookName</code> | <code>[WebhooksWebhookNameTestPostParametersWebhookName](src/models/webhooks-webhook-name-test-post-parameters-webhook-name.ts)</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.testWebhook(request)`

- **OnSuccess**: <code>[WebhookTestResponse](src/models/webhook-test-response.ts)</code>
- **OnError**: throws <code>[Webhooks.TestWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.testWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookTestResponse, Webhooks.TestWebhookError&gt;</code>, with `result.value` of type <code>[WebhookTestResponse](src/models/webhook-test-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: Webhooks.UpdateWebhookRequestParams, options?: RequestOptions): ApiPromise&lt;WebhookUpdateResponse, Webhooks.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable or disable a webhook and configure the destination URL for the authenticated organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.updateWebhook({
    webhookName: WebhooksWebhookNamePatchParametersWebhookName.BillingInvoiceCreated,
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type WebhookUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.UpdateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .updateWebhook({
    webhookName: WebhooksWebhookNamePatchParametersWebhookName.BillingInvoiceCreated,
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookUpdateResponse
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
| <code>webhookName</code> | <code>[WebhooksWebhookNamePatchParametersWebhookName](src/models/webhooks-webhook-name-patch-parameters-webhook-name.ts)</code> | - |
| <code>authorization</code> | <code>string</code> | API Key authentication using Bearer token |
| <code>body?</code> | <code>[UpdateWebhookRequest](src/models/update-webhook-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.updateWebhook(request)`

- **OnSuccess**: <code>[WebhookUpdateResponse](src/models/webhook-update-response.ts)</code>
- **OnError**: throws <code>[Webhooks.UpdateWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.updateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookUpdateResponse, Webhooks.UpdateWebhookError&gt;</code>, with `result.value` of type <code>[WebhookUpdateResponse](src/models/webhook-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

