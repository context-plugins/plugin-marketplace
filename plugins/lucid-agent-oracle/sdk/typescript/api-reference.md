# Reference

> Source: [LucidAgentOracleApiClient](src/client.ts)

## AgentsApi

> Source: [AgentsApi](src/resources/agents-api.ts)

<details>
<summary><code>agentLeaderboard(request: AgentsApi.AgentLeaderboardRequest, options?: RequestOptions): ApiPromise&lt;V1OracleAgentsLeaderboardResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ranked list of agents by wallet count, protocol count, evidence count, or newest.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agentsApi.agentLeaderboard();
  // TODO: Handle 'response' of type V1OracleAgentsLeaderboardResponse
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
const result = await client.agentsApi.agentLeaderboard().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleAgentsLeaderboardResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>cursor?</code> | <code>string</code> | - |
| <code>sort?</code> | <code>[Sort4](src/models/unions/sort4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentsApi.agentLeaderboard(request)`

- **OnSuccess**: <code>[V1OracleAgentsLeaderboardResponse](src/models/v1-oracle-agents-leaderboard-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agentsApi.agentLeaderboard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleAgentsLeaderboardResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1OracleAgentsLeaderboardResponse](src/models/v1-oracle-agents-leaderboard-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAgentActivity(request: AgentsApi.GetAgentActivityRequest, options?: RequestOptions): ApiPromise&lt;V1OracleAgentsActivityResponse, AgentsApi.GetAgentActivityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Chronological activity feed for an agent (wallet links, evidence, conflicts). Requires pro tier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agentsApi.getAgentActivity({ id: "some example string" });
  // TODO: Handle 'response' of type V1OracleAgentsActivityResponse
} catch (err) {
  // TODO: Handle 'err' of type AgentsApi.GetAgentActivityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentsApi.getAgentActivity({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleAgentsActivityResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>cursor?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentsApi.getAgentActivity(request)`

- **OnSuccess**: <code>[V1OracleAgentsActivityResponse](src/models/v1-oracle-agents-activity-response.ts)</code>
- **OnError**: throws <code>[AgentsApi.GetAgentActivityError](src/resources/agents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentsApi.getAgentActivity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleAgentsActivityResponse, AgentsApi.GetAgentActivityError&gt;</code>, with `result.value` of type <code>[V1OracleAgentsActivityResponse](src/models/v1-oracle-agents-activity-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAgentMetrics(request: AgentsApi.GetAgentMetricsRequest, options?: RequestOptions): ApiPromise&lt;V1OracleAgentsMetricsResponse, AgentsApi.GetAgentMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detailed wallet, evidence, protocol, and conflict metrics for an agent. Requires pro tier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agentsApi.getAgentMetrics({ id: "some example string" });
  // TODO: Handle 'response' of type V1OracleAgentsMetricsResponse
} catch (err) {
  // TODO: Handle 'err' of type AgentsApi.GetAgentMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentsApi.getAgentMetrics({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleAgentsMetricsResponse
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

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentsApi.getAgentMetrics(request)`

- **OnSuccess**: <code>[V1OracleAgentsMetricsResponse](src/models/v1-oracle-agents-metrics-response.ts)</code>
- **OnError**: throws <code>[AgentsApi.GetAgentMetricsError](src/resources/agents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentsApi.getAgentMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleAgentsMetricsResponse, AgentsApi.GetAgentMetricsError&gt;</code>, with `result.value` of type <code>[V1OracleAgentsMetricsResponse](src/models/v1-oracle-agents-metrics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAgentProfile(request: AgentsApi.GetAgentProfileRequest, options?: RequestOptions): ApiPromise&lt;V1OracleAgentsResponse, AgentsApi.GetAgentProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an agent entity profile including wallets, protocols, and reputation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agentsApi.getAgentProfile({ id: "some example string" });
  // TODO: Handle 'response' of type V1OracleAgentsResponse
} catch (err) {
  // TODO: Handle 'err' of type AgentsApi.GetAgentProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentsApi.getAgentProfile({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleAgentsResponse
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

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentsApi.getAgentProfile(request)`

- **OnSuccess**: <code>[V1OracleAgentsResponse](src/models/v1-oracle-agents-response.ts)</code>
- **OnError**: throws <code>[AgentsApi.GetAgentProfileError](src/resources/agents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentsApi.getAgentProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleAgentsResponse, AgentsApi.GetAgentProfileError&gt;</code>, with `result.value` of type <code>[V1OracleAgentsResponse](src/models/v1-oracle-agents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getModelUsageDistribution(request: AgentsApi.GetModelUsageDistributionRequest, options?: RequestOptions): ApiPromise&lt;V1OracleAgentsModelUsageResponse, AgentsApi.GetModelUsageDistributionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

LLM model/provider distribution across the agent economy. Requires pro tier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agentsApi.getModelUsageDistribution();
  // TODO: Handle 'response' of type V1OracleAgentsModelUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type AgentsApi.GetModelUsageDistributionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentsApi.getModelUsageDistribution().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleAgentsModelUsageResponse
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
| <code>period?</code> | <code>[Period3](src/models/unions/period3.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentsApi.getModelUsageDistribution(request)`

- **OnSuccess**: <code>[V1OracleAgentsModelUsageResponse](src/models/v1-oracle-agents-model-usage-response.ts)</code>
- **OnError**: throws <code>[AgentsApi.GetModelUsageDistributionError](src/resources/agents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentsApi.getModelUsageDistribution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleAgentsModelUsageResponse, AgentsApi.GetModelUsageDistributionError&gt;</code>, with `result.value` of type <code>[V1OracleAgentsModelUsageResponse](src/models/v1-oracle-agents-model-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchAgents(request: AgentsApi.SearchAgentsRequest, options?: RequestOptions): ApiPromise&lt;V1OracleAgentsSearchResponse, AgentsApi.SearchAgentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for agent entities by wallet, protocol, ERC-8004 ID, or free-text query.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agentsApi.searchAgents();
  // TODO: Handle 'response' of type V1OracleAgentsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type AgentsApi.SearchAgentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentsApi.searchAgents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleAgentsSearchResponse
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>cursor?</code> | <code>string</code> | - |
| <code>wallet?</code> | <code>string</code> | - |
| <code>chain?</code> | <code>string</code> | - |
| <code>protocol?</code> | <code>string</code> | - |
| <code>protocolId?</code> | <code>string</code> | - |
| <code>erc8004Id?</code> | <code>string</code> | - |
| <code>q?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentsApi.searchAgents(request)`

- **OnSuccess**: <code>[V1OracleAgentsSearchResponse](src/models/v1-oracle-agents-search-response.ts)</code>
- **OnError**: throws <code>[AgentsApi.SearchAgentsError](src/resources/agents-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentsApi.searchAgents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleAgentsSearchResponse, AgentsApi.SearchAgentsError&gt;</code>, with `result.value` of type <code>[V1OracleAgentsSearchResponse](src/models/v1-oracle-agents-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProtocolsApi

> Source: [ProtocolsApi](src/resources/protocols-api.ts)

<details>
<summary><code>getProtocolDetail(request: ProtocolsApi.GetProtocolDetailRequest, options?: RequestOptions): ApiPromise&lt;V1OracleProtocolsResponse1, ProtocolsApi.GetProtocolDetailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve protocol detail including agent and wallet counts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.protocolsApi.getProtocolDetail({ id: "some example string" });
  // TODO: Handle 'response' of type V1OracleProtocolsResponse1
} catch (err) {
  // TODO: Handle 'err' of type ProtocolsApi.GetProtocolDetailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.protocolsApi.getProtocolDetail({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleProtocolsResponse1
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

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.protocolsApi.getProtocolDetail(request)`

- **OnSuccess**: <code>[V1OracleProtocolsResponse1](src/models/v1-oracle-protocols-response1.ts)</code>
- **OnError**: throws <code>[ProtocolsApi.GetProtocolDetailError](src/resources/protocols-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.protocolsApi.getProtocolDetail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleProtocolsResponse1, ProtocolsApi.GetProtocolDetailError&gt;</code>, with `result.value` of type <code>[V1OracleProtocolsResponse1](src/models/v1-oracle-protocols-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProtocolMetrics(request: ProtocolsApi.GetProtocolMetricsRequest, options?: RequestOptions): ApiPromise&lt;V1OracleProtocolsMetricsResponse, ProtocolsApi.GetProtocolMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detailed protocol metrics including agent counts, wallets, evidence, and recent activity. Requires pro tier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.protocolsApi.getProtocolMetrics({ id: "some example string" });
  // TODO: Handle 'response' of type V1OracleProtocolsMetricsResponse
} catch (err) {
  // TODO: Handle 'err' of type ProtocolsApi.GetProtocolMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.protocolsApi.getProtocolMetrics({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleProtocolsMetricsResponse
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

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.protocolsApi.getProtocolMetrics(request)`

- **OnSuccess**: <code>[V1OracleProtocolsMetricsResponse](src/models/v1-oracle-protocols-metrics-response.ts)</code>
- **OnError**: throws <code>[ProtocolsApi.GetProtocolMetricsError](src/resources/protocols-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.protocolsApi.getProtocolMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleProtocolsMetricsResponse, ProtocolsApi.GetProtocolMetricsError&gt;</code>, with `result.value` of type <code>[V1OracleProtocolsMetricsResponse](src/models/v1-oracle-protocols-metrics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProtocols(options?: RequestOptions): ApiPromise&lt;V1OracleProtocolsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all indexed protocols with their chain support and status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.protocolsApi.listProtocols();
  // TODO: Handle 'response' of type V1OracleProtocolsResponse
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
const result = await client.protocolsApi.listProtocols().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleProtocolsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.protocolsApi.listProtocols()`

- **OnSuccess**: <code>[V1OracleProtocolsResponse](src/models/v1-oracle-protocols-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.protocolsApi.listProtocols().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleProtocolsResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1OracleProtocolsResponse](src/models/v1-oracle-protocols-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Feeds

> Source: [Feeds](src/resources/feeds.ts)

<details>
<summary><code>getFeedDetail(request: Feeds.GetFeedDetailRequest, options?: RequestOptions): ApiPromise&lt;FeedDetailResponse, Feeds.GetFeedDetailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deep dive on a single feed with its latest value and methodology URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feeds.getFeedDetail({ id: "some example string" });
  // TODO: Handle 'response' of type FeedDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type Feeds.GetFeedDetailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feeds.getFeedDetail({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedDetailResponse
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
| <code>id</code> | <code>string</code> | Feed identifier (aegdp, aai, apri) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feeds.getFeedDetail(request)`

- **OnSuccess**: <code>[FeedDetailResponse](src/models/feed-detail-response.ts)</code>
- **OnError**: throws <code>[Feeds.GetFeedDetailError](src/resources/feeds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feeds.getFeedDetail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedDetailResponse, Feeds.GetFeedDetailError&gt;</code>, with `result.value` of type <code>[FeedDetailResponse](src/models/feed-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeedHistory(request: Feeds.GetFeedHistoryRequest, options?: RequestOptions): ApiPromise&lt;V1OracleFeedsHistoryResponse, Feeds.GetFeedHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Time-series feed values from ClickHouse. Free tier limited to 7d. Pro/Growth up to 90d.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feeds.getFeedHistory({ id: "some example string" });
  // TODO: Handle 'response' of type V1OracleFeedsHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type Feeds.GetFeedHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feeds.getFeedHistory({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleFeedsHistoryResponse
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
| <code>id</code> | <code>string</code> | Feed identifier (aegdp, aai, apri) |
| <code>period?</code> | <code>[Period31](src/models/unions/period31.ts)</code> | - |
| <code>interval?</code> | <code>[Interval3](src/models/unions/interval3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feeds.getFeedHistory(request)`

- **OnSuccess**: <code>[V1OracleFeedsHistoryResponse](src/models/v1-oracle-feeds-history-response.ts)</code>
- **OnError**: throws <code>[Feeds.GetFeedHistoryError](src/resources/feeds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feeds.getFeedHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleFeedsHistoryResponse, Feeds.GetFeedHistoryError&gt;</code>, with `result.value` of type <code>[V1OracleFeedsHistoryResponse](src/models/v1-oracle-feeds-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeedMethodology(request: Feeds.GetFeedMethodologyRequest, options?: RequestOptions): ApiPromise&lt;FeedMethodologyResponse, Feeds.GetFeedMethodologyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detailed methodology for a feed including computation formula, weights, and anchors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feeds.getFeedMethodology({ id: "some example string" });
  // TODO: Handle 'response' of type FeedMethodologyResponse
} catch (err) {
  // TODO: Handle 'err' of type Feeds.GetFeedMethodologyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feeds.getFeedMethodology({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedMethodologyResponse
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
| <code>id</code> | <code>string</code> | Feed identifier (aegdp, aai, apri) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feeds.getFeedMethodology(request)`

- **OnSuccess**: <code>[FeedMethodologyResponse](src/models/feed-methodology-response.ts)</code>
- **OnError**: throws <code>[Feeds.GetFeedMethodologyError](src/resources/feeds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feeds.getFeedMethodology(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedMethodologyResponse, Feeds.GetFeedMethodologyError&gt;</code>, with `result.value` of type <code>[FeedMethodologyResponse](src/models/feed-methodology-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllFeeds(options?: RequestOptions): ApiPromise&lt;FeedListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current state of the agent economy — all 3 feed values with confidence and freshness.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feeds.listAllFeeds();
  // TODO: Handle 'response' of type FeedListResponse
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
const result = await client.feeds.listAllFeeds().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feeds.listAllFeeds()`

- **OnSuccess**: <code>[FeedListResponse](src/models/feed-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.feeds.listAllFeeds().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedListResponse, ApiError&gt;</code>, with `result.value` of type <code>[FeedListResponse](src/models/feed-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/resources/reports.ts)

<details>
<summary><code>getLatestReport(options?: RequestOptions): ApiPromise&lt;ReportLatestResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Latest signed oracle report with all feed values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getLatestReport();
  // TODO: Handle 'response' of type ReportLatestResponse
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
const result = await client.reports.getLatestReport().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportLatestResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getLatestReport()`

- **OnSuccess**: <code>[ReportLatestResponse](src/models/report-latest-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.getLatestReport().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportLatestResponse, ApiError&gt;</code>, with `result.value` of type <code>[ReportLatestResponse](src/models/report-latest-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyOracleReport(request: Reports.VerifyOracleReportRequest, options?: RequestOptions): ApiPromise&lt;V1OracleReportsVerifyResponse, Reports.VerifyOracleReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify a signed oracle report envelope — Ed25519 signature + payload integrity + publication status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.verifyOracleReport({
    body: {
      report: {
        feedId: "some example string",
        feedVersion: 1,
        reportTimestamp: 1.5,
        values: { key: {} },
        inputManifestHash: "some example string",
        computationHash: "some example string",
        revision: 1,
        signerSetId: "some example string",
        signatures: [{ signer: "some example string", sig: "some example string" }],
      },
    },
  });
  // TODO: Handle 'response' of type V1OracleReportsVerifyResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.VerifyOracleReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.verifyOracleReport({
  body: {
    report: {
      feedId: "some example string",
      feedVersion: 1,
      reportTimestamp: 1.5,
      values: { key: {} },
      inputManifestHash: "some example string",
      computationHash: "some example string",
      revision: 1,
      signerSetId: "some example string",
      signatures: [{ signer: "some example string", sig: "some example string" }],
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OracleReportsVerifyResponse
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
| <code>body</code> | <code>[V1OracleReportsVerifyRequest](src/models/v1-oracle-reports-verify-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.verifyOracleReport(request)`

- **OnSuccess**: <code>[V1OracleReportsVerifyResponse](src/models/v1-oracle-reports-verify-response.ts)</code>
- **OnError**: throws <code>[Reports.VerifyOracleReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.verifyOracleReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OracleReportsVerifyResponse, Reports.VerifyOracleReportError&gt;</code>, with `result.value` of type <code>[V1OracleReportsVerifyResponse](src/models/v1-oracle-reports-verify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LucidAgentOracleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

