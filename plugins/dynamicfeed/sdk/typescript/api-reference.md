# Reference

> Source: [DynamicFeedClient](src/client.ts)

## Advisories

> Source: [Advisories](src/resources/advisories.ts)

<details>
<summary><code>advisoriesAdvisoriesGet(request?: Advisories.AdvisoriesAdvisoriesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Advisories.AdvisoriesAdvisoriesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recent security advisories / CVEs — affected package, vulnerable version range, patched
version, severity & CVSS. Filter by package/ecosystem/severity. Newest first. Pairs with
/versions: is my stack current AND safe? (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.advisories.advisoriesAdvisoriesGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Advisories.AdvisoriesAdvisoriesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.advisories.advisoriesAdvisoriesGet().asApiResult();
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
| <code>q?</code> | <code>[Q](src/models/unions/q.ts)</code> | match summary / package / CVE / GHSA id |
| <code>package?</code> | <code>[Package](src/models/unions/package.ts)</code> | affected package name, e.g. lodash, requests |
| <code>ecosystem?</code> | <code>[Ecosystem](src/models/unions/ecosystem.ts)</code> | npm \| pip \| maven \| go \| rubygems \| nuget \| composer \| ... |
| <code>severity?</code> | <code>[Severity](src/models/unions/severity.ts)</code> | low \| moderate \| high \| critical |
| <code>minCvss?</code> | <code>[MinCvss](src/models/unions/min-cvss.ts)</code> | minimum CVSS score (0-10) |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.advisories.advisoriesAdvisoriesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Advisories.AdvisoriesAdvisoriesGetError](src/resources/advisories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.advisories.advisoriesAdvisoriesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Advisories.AdvisoriesAdvisoriesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>advisoriesCheckAdvisoriesCheckGet(request: Advisories.AdvisoriesCheckAdvisoriesCheckGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Advisories.AdvisoriesCheckAdvisoriesCheckGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Is this exact package@version vulnerable? FULL historical lookup across the entire OSV.dev
corpus (Google) — returns every matching advisory + the versions that fix it. For Maven, pass the
full 'group:artifact' coordinate; a bare artifact name returns a hint, not a misleading
'not vulnerable'. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.advisories.advisoriesCheckAdvisoriesCheckGet({
    package: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Advisories.AdvisoriesCheckAdvisoriesCheckGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.advisories
  .advisoriesCheckAdvisoriesCheckGet({ package: "some example string" })
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
| <code>package</code> | <code>string</code> | package name, e.g. lodash, requests. Maven needs the full 'group:artifact' coordinate, e.g. org.apache.logging.log4j:log4j-core |
| <code>version?</code> | <code>[Version](src/models/unions/version.ts)</code> | exact version, e.g. 4.17.10 |
| <code>ecosystem?</code> | <code>[Ecosystem1](src/models/unions/ecosystem1.ts)</code> | npm \| pip \| maven \| go \| rubygems \| nuget \| cargo \| composer |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.advisories.advisoriesCheckAdvisoriesCheckGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Advisories.AdvisoriesCheckAdvisoriesCheckGetError](src/resources/advisories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.advisories.advisoriesCheckAdvisoriesCheckGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Advisories.AdvisoriesCheckAdvisoriesCheckGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Agent

> Source: [Agent](src/resources/agent.ts)

<details>
<summary><code>postV1Explain(request?: Agent.PostV1ExplainRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.PostV1ExplainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."}
(POST) — a tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s),
licence, official URL, update cadence and the full custody trail (origin -> ingest -> normalize ->
serve, plus sign/anchor for awareness), so you can trace and verify where a number came from. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.postV1Explain();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.PostV1ExplainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.postV1Explain().asApiResult();
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
| <code>subject?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.postV1Explain(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.PostV1ExplainError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.postV1Explain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.PostV1ExplainError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>schemasIndexSchemasIndexJsonGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Dynamic Feed receipt-schema family, self-describing (DF-VERIFY/1). Scans the schema
directory at request time so it never drifts: every profile's $id, title and active mint
endpoint when one exists. Deprecated/quarantined schemas remain visible as history, not as
executable capabilities. Schema conformance and signature mathematics are separate from
lifecycle acceptance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.schemasIndexSchemasIndexJsonGet();
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
const result = await client.agent.schemasIndexSchemasIndexJsonGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.schemasIndexSchemasIndexJsonGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.schemasIndexSchemasIndexJsonGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1AgentReceiptV1AgentReceiptPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Agent receipt. A signed, re-checkable record of what an AI agent acted on and what it decided.
The operational-integrity primitive for the agent economy: prove, after the fact, the inputs behind
an agent's action. Body: {"agent": "...", "action": "...", "inputs": },
plus optional "model", "decision", "context". Returns an agent-receipt/v1 with a detached Ed25519
signature (verify against GET /.well-known/keys: drop the `signature` field, canonicalize
json-sorted-compact). Anchor the hash via RFC 3161 via POST /v1/anchor. Keyless. Advisory evidence and
a neutral witness: it proves what the agent was given and did, never that the decision was correct,
and it never moves anything. Spec: https://dynamicfeed.ai/standard

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1AgentReceiptV1AgentReceiptPost();
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
const result = await client.agent.v1AgentReceiptV1AgentReceiptPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1AgentReceiptV1AgentReceiptPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1AgentReceiptV1AgentReceiptPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1AsofV1AsofGet(request: Agent.V1AsofV1AsofGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1AsofV1AsofGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

TIME-MACHINE REPLAY — what did the data say at decision time? Returns the archived observation
for `tool` nearest at-or-before time `t`, replayed VERBATIM from Dynamic Feed's append-only archive
(capturing every served datapoint since 2026-06-07) — the value as served then, never a re-fetch or
reconstruction. The response carries honest metadata (`archived_at`, `distance_seconds` from your
requested instant, the exact archive object, where coverage begins) and is Ed25519-signed (verify
against GET /.well-known/keys) — built for agent backtesting, audit trails and "what did we know
when we decided" disputes. Honest about coverage: a time the archive didn't capture returns a clear
miss with the nearest captured day, never a fabricated past. Paid plans (Pro and up); auth via the
X-API-Key header. Upgrade: https://dynamicfeed.ai/dashboard

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1AsofV1AsofGet({
    tool: "some example string",
    t: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1AsofV1AsofGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent
  .v1AsofV1AsofGet({ tool: "some example string", t: "some example string" })
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
| <code>tool</code> | <code>string</code> | tool name, e.g. current_weather (the keyless MCP tool names) |
| <code>t</code> | <code>string</code> | ISO-8601 timestamp, e.g. 2026-06-10T14:30:00Z |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1AsofV1AsofGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1AsofV1AsofGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1AsofV1AsofGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1AsofV1AsofGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1AttestV1AttestGet(request: Agent.V1AttestV1AttestGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1AttestV1AttestGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Signed parametric-trigger attestation — evaluate 'metric op threshold' at a location against the
live measurement and return a tamper-evident, Ed25519-signed MET / NOT-MET record. The dispute-proof
oracle a parametric-insurance payout can settle against. metric: wind_kmh | temperature_c |
feels_like_c | precipitation_mm. op: gt | gte | lt | lte. Verify against GET /.well-known/keys;
timestamp via POST /v1/anchor (RFC 3161) for independent proof of when.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1AttestV1AttestGet({ metric: "some example string", threshold: 1.5 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1AttestV1AttestGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent
  .v1AttestV1AttestGet({ metric: "some example string", threshold: 1.5 })
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
| <code>metric</code> | <code>string</code> | - |
| <code>threshold</code> | <code>number</code> | - |
| <code>op?</code> | <code>string</code> | -<br>**Default**: "gte" |
| <code>lat?</code> | <code>number</code> | - |
| <code>lon?</code> | <code>number</code> | - |
| <code>city?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1AttestV1AttestGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1AttestV1AttestGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1AttestV1AttestGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1AttestV1AttestGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1BatchV1BatchPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run up to 20 read-only data-tool calls in ONE request — cuts agent round-trips. Keyless.
Body: {"calls":[{"tool":"current_weather","args":{"city":"London"}}, {"tool":"earthquakes","args":{}}]}.
Returns {"results":[{"tool","ok","data"|"error"}, ...]} in the same order. Tool names are the keyless
MCP tools; POST with no `calls` returns the available list. Each call has its own 20s deadline, so a
slow upstream degrades that one item rather than blocking the batch.

Add "facts": true to the body to get each result as a canonical, reliability-graded fact instead of
raw data: {"tool","ok","fact":{value, provenance, verification, reliability{confidence,basis,sources,
verified,vantage,conflict}}}. The whole response is Ed25519-signed (verify against /.well-known/keys),
so this is verifiable, reliability-graded, multi-tool data in one round-trip. Default shape is unchanged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1BatchV1BatchPost();
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
const result = await client.agent.v1BatchV1BatchPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1BatchV1BatchPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1BatchV1BatchPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1BenchmarkHistoryV1BenchmarkHistoryGet(request?: Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DRIFT OVER TIME — daily snapshots of the live-facts benchmark (GET /v1/benchmark), oldest
first. Each snapshot is the items array exactly as measured that day, so diffing consecutive
snapshots shows how fast reality moves away from any fixed training cutoff: rates shift,
releases ship, CVEs land. History starts at first_snapshot_at and grows one snapshot per day.
Human-readable charts at /benchmark/history. Ed25519-signed. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1BenchmarkHistoryV1BenchmarkHistoryGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1BenchmarkHistoryV1BenchmarkHistoryGet().asApiResult();
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
| <code>days?</code> | <code>number</code> | -<br>**Default**: 90 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1BenchmarkHistoryV1BenchmarkHistoryGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1BenchmarkHistoryV1BenchmarkHistoryGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1BenchmarkV1BenchmarkGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The LIVE-FACTS BENCHMARK — a continuously-refreshed eval of facts that move after a model's
training cutoff. Ask a model these questions WITHOUT tools and grade against the answers measured
from authoritative sources at call time: every frozen model fails; a grounded agent passes. Each
item carries its grading rule, source and measured_at; the whole set is Ed25519-signed so a
published score is verifiable evidence, not a claim. Regenerate per run — answers are
time-sensitive by design. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1BenchmarkV1BenchmarkGet();
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
const result = await client.agent.v1BenchmarkV1BenchmarkGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1BenchmarkV1BenchmarkGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1BenchmarkV1BenchmarkGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1BundleV1BundlesBundleIdGet(request: Agent.V1BundleV1BundlesBundleIdGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1BundleV1BundlesBundleIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One curated tool bundle by id (e.g. devsecops, weather-climate, finance-markets).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1BundleV1BundlesBundleIdGet({ bundleId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1BundleV1BundlesBundleIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent
  .v1BundleV1BundlesBundleIdGet({ bundleId: "some example string" })
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
| <code>bundleId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1BundleV1BundlesBundleIdGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1BundleV1BundlesBundleIdGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1BundleV1BundlesBundleIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1BundleV1BundlesBundleIdGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1BundlesV1BundlesGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Curated tool BUNDLES per domain — pick the right tools for your agent's use-case fast (instead of
sifting all tools). Keyless: call any tool via POST /v1/batch; pay-per-call via /v1/pro/*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1BundlesV1BundlesGet();
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
const result = await client.agent.v1BundlesV1BundlesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1BundlesV1BundlesGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1BundlesV1BundlesGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1BushfireV1BushfireGet(request?: Agent.V1BushfireV1BushfireGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1BushfireV1BushfireGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Signed Australian bushfire/fire hotspots (last ~3 days) from Geoscience Australia / Digital Earth
Australia Hotspots — keyless, CC BY 4.0. lat & lon (+ radius_km) for hotspots near a point, a state code
(NSW/QLD/VIC/SA/WA/TAS/NT/ACT), or neither for recent Australia-wide. Ed25519-signed; verify against
GET /.well-known/keys. A hotspot is a satellite thermal anomaly — not every one is a confirmed bushfire.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1BushfireV1BushfireGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1BushfireV1BushfireGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1BushfireV1BushfireGet().asApiResult();
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
| <code>lat?</code> | <code>number</code> | - |
| <code>lon?</code> | <code>number</code> | - |
| <code>radiusKm?</code> | <code>number</code> | -<br>**Default**: 150 |
| <code>state?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1BushfireV1BushfireGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1BushfireV1BushfireGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1BushfireV1BushfireGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1BushfireV1BushfireGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1CheckpointProofV1CheckpointsDayProofGet(request: Agent.V1CheckpointProofV1CheckpointsDayProofGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1CheckpointProofV1CheckpointsDayProofGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The raw witness proof for one day's archive checkpoint. kind=ots (default) returns the
DLT-timestamp .ots bytes (verify: ots verify -d checkpoint-.ots);
kind=rfc3161 returns the RFC 3161 timestamp token DER from the independent TSA (verify:
openssl ts -reply -in checkpoint-.tsr -text, then openssl ts -verify -digest
-sha256 -in checkpoint-.tsr). Offline runner for both witnesses:
scripts/verify_checkpoint.py. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1CheckpointProofV1CheckpointsDayProofGet({
    day: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1CheckpointProofV1CheckpointsDayProofGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent
  .v1CheckpointProofV1CheckpointsDayProofGet({ day: "some example string" })
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
| <code>day</code> | <code>string</code> | - |
| <code>kind?</code> | <code>string</code> | -<br>**Default**: "ots" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1CheckpointProofV1CheckpointsDayProofGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1CheckpointProofV1CheckpointsDayProofGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1CheckpointProofV1CheckpointsDayProofGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1CheckpointProofV1CheckpointsDayProofGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1CheckpointsV1CheckpointsGet(request?: Agent.V1CheckpointsV1CheckpointsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1CheckpointsV1CheckpointsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Daily ARCHIVE CHECKPOINTS, newest first — the append-only claim made independently
checkable. Each entry carries the signed archive-day/v1 document: a SHA-256 digest of that
day's full archive listing, per-feed object counts, the previous day's digest (the chain),
and the anchor status of a DLT-timestamp proof committing the digest to a public
distributed ledger (RFC 3161 on fallback). Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1CheckpointsV1CheckpointsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1CheckpointsV1CheckpointsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1CheckpointsV1CheckpointsGet().asApiResult();
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 30 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1CheckpointsV1CheckpointsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1CheckpointsV1CheckpointsGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1CheckpointsV1CheckpointsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1CheckpointsV1CheckpointsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1DiscoverGetV1DiscoverGet(request?: Agent.V1DiscoverGetV1DiscoverGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1DiscoverGetV1DiscoverGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

CAPABILITY DISCOVERY — ask in plain words what you need ("live rainfall in Brisbane",
"sanctions screening", "satellite positions") and get a ranked, Ed25519-signed list of
candidate capabilities: Dynamic Feed's own tools with MEASURED 24h uptime/latency and a
keyless call recipe, plus matching external MCP servers from the official registry index,
honestly marked registry-reported and unmeasured. Advisory discovery with an explicit
vantage per candidate, not an endorsement. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1DiscoverGetV1DiscoverGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1DiscoverGetV1DiscoverGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1DiscoverGetV1DiscoverGet().asApiResult();
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
| <code>need?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 8 |
| <code>external?</code> | <code>number</code> | -<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1DiscoverGetV1DiscoverGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1DiscoverGetV1DiscoverGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1DiscoverGetV1DiscoverGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1DiscoverGetV1DiscoverGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1DiscoverPostV1DiscoverPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

POST twin of GET /v1/discover: {"need": "...", "limit": 8, "external": true}.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1DiscoverPostV1DiscoverPost();
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
const result = await client.agent.v1DiscoverPostV1DiscoverPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1DiscoverPostV1DiscoverPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1DiscoverPostV1DiscoverPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1DriftV1DriftPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Drift detection — audit an AI's stated facts against live ground-truth, graded by severity. Keyless.
Body: {"claims":["The latest Python is 3.11","Node.js is on 18"]} or {"text":""}.
Returns {checked, drifted_count, overall, results:[{claim, status, drifted, severity, correction, source}]}.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1DriftV1DriftPost();
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
const result = await client.agent.v1DriftV1DriftPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1DriftV1DriftPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1DriftV1DriftPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1EvalReceiptSampleV1EvalReceiptSampleGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A keyless, signed SAMPLE eval-receipt/v1 — a 'Verified Eval' run against a sealed, committed test
set (the set stays private; only its commitment is signed). Verify it in-browser via /verify.js, then
flip a byte and watch verification fail. Advisory evidence only — DF witnesses the committed run, it
does not re-run or certify the benchmark.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1EvalReceiptSampleV1EvalReceiptSampleGet();
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
const result = await client.agent.v1EvalReceiptSampleV1EvalReceiptSampleGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1EvalReceiptSampleV1EvalReceiptSampleGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1EvalReceiptSampleV1EvalReceiptSampleGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1EvalReceiptV1EvalReceiptPost(request?: Agent.V1EvalReceiptV1EvalReceiptPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1EvalReceiptV1EvalReceiptPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WITNESS an AI EVALUATION run — the neutral 'Verified Eval' stamp for the contamination-proof-
benchmark era. The lab commits its test set as a salted sha256 BEFORE the run (`set_commitment`), so
the set stays PRIVATE while the run becomes un-retunable after the fact — solving the evaluator's
dilemma of having to expose a private set to be trusted. Ed25519-signed, transparency-logged,
RFC 3161 timestampable. Body: {"eval_name": "", "model_id": "", "metric":
"pass@1", "score": 0.58, "set_commitment": ""} plus optional n, run_sha256 (hash of the full
transcript), harness, and a BYO-key co-signature. Auth: a FREE key (POST /signup). ADVISORY EVIDENCE
ONLY — Dynamic Feed does NOT re-run or verify the score, and does NOT certify the benchmark is
fair/representative/contamination-free; it witnesses the COMMITTED run so no party can retune it
retroactively. Profile of receipt/v1. Anchor via POST /v1/anchor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1EvalReceiptV1EvalReceiptPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1EvalReceiptV1EvalReceiptPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1EvalReceiptV1EvalReceiptPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1EvalReceiptV1EvalReceiptPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1EvalReceiptV1EvalReceiptPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1EvalReceiptV1EvalReceiptPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1EvalReceiptV1EvalReceiptPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1EvidenceWildfireV1EvidenceWildfireGet(request: Agent.V1EvidenceWildfireV1EvidenceWildfireGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1EvidenceWildfireV1EvidenceWildfireGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Chain-of-custody EVIDENCE record for a wildfire detection. Wraps a SELF-REPORTED detection
(detector, lat/lon, time) with Dynamic Feed's INDEPENDENT context captured at that location the moment
it's requested — fire-weather, near-term forecast, air quality (smoke), and tracked EONET wildfire
events — each datapoint carrying its source, licence and age. The whole record is Ed25519-signed so any
party can verify it OFFLINE against /.well-known/keys, WITHOUT trusting the detector or Dynamic Feed.
Advisory evidence + audit layer: it does NOT make, certify, or sit in the safety-critical path of the
detection — it makes the surrounding context provable later (an insurer claim, a liability review, an
SLA). Keyless. Anchor via RFC 3161 via POST /v1/anchor for proof-of-when independent of us.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1EvidenceWildfireV1EvidenceWildfireGet({ lat: 1.5, lon: 1.5 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1EvidenceWildfireV1EvidenceWildfireGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent
  .v1EvidenceWildfireV1EvidenceWildfireGet({ lat: 1.5, lon: 1.5 })
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
| <code>lat</code> | <code>number</code> | - |
| <code>lon</code> | <code>number</code> | - |
| <code>detectedAt?</code> | <code>[DetectedAt](src/models/unions/detected-at.ts)</code> | - |
| <code>detector?</code> | <code>string</code> | -<br>**Default**: "the detector" |
| <code>place?</code> | <code>[Place](src/models/unions/place.ts)</code> | - |
| <code>confidence?</code> | <code>[Confidence](src/models/unions/confidence.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1EvidenceWildfireV1EvidenceWildfireGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1EvidenceWildfireV1EvidenceWildfireGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1EvidenceWildfireV1EvidenceWildfireGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1EvidenceWildfireV1EvidenceWildfireGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ExplainV1ExplainGet(request?: Agent.V1ExplainV1ExplainGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1ExplainV1ExplainGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."}
(POST) — a tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s),
licence, official URL, update cadence and the full custody trail (origin -> ingest -> normalize ->
serve, plus sign/anchor for awareness), so you can trace and verify where a number came from. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1ExplainV1ExplainGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1ExplainV1ExplainGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1ExplainV1ExplainGet().asApiResult();
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
| <code>subject?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1ExplainV1ExplainGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1ExplainV1ExplainGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1ExplainV1ExplainGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1ExplainV1ExplainGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ExposureReportV1ExposureReportGet(request?: Agent.V1ExposureReportV1ExposureReportGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1ExposureReportV1ExposureReportGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Automated, signed EXPOSURE REPORT. Maps the perils a decision depends on to the external readings
that decide them, flags where those readings are unverifiable today, and attaches a LIVE signed sample
observation for each, so an organisation can see where its decisions rely on data it cannot independently
check. Fully automated, no human in the loop. Ed25519-signed; verify offline at /.well-known/keys.
Advisory evidence, not a certification or legal/financial advice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1ExposureReportV1ExposureReportGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1ExposureReportV1ExposureReportGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1ExposureReportV1ExposureReportGet().asApiResult();
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
| <code>perils?</code> | <code>string</code> | -<br>**Default**: "wind,flood,wildfire" |
| <code>lat?</code> | <code>number</code> | -<br>**Default**: -33.8688 |
| <code>lon?</code> | <code>number</code> | -<br>**Default**: 151.2093 |
| <code>place?</code> | <code>[Place](src/models/unions/place.ts)</code> | - |
| <code>organisation?</code> | <code>[Organisation](src/models/unions/organisation.ts)</code> | - |
| <code>useCase?</code> | <code>[UseCase](src/models/unions/use-case.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1ExposureReportV1ExposureReportGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1ExposureReportV1ExposureReportGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1ExposureReportV1ExposureReportGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1ExposureReportV1ExposureReportGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1GuardV1GuardPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pre-answer guard — the anti-hallucination middleware. POST the draft answer your AI is about to
send; get back a verdict of "pass" or "revise" plus the exact corrections, so you can fix it BEFORE
the user sees it. Keyless. Wrap it around any LLM response pipeline.
Body: {"answer":""} or {"claims":["...","..."]}.
Returns {verdict:"pass"|"revise", checked, issues:[{claim, subject, severity, correction, source}],
confirmed, unverifiable, guidance}. Only claims that CONTRADICT live data trigger "revise"; opinions
and facts no live feed can cover pass through untouched. Verifies prices, software versions, market
open/closed and service up/down against Dynamic Feed's live ground-truth.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1GuardV1GuardPost();
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
const result = await client.agent.v1GuardV1GuardPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1GuardV1GuardPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1GuardV1GuardPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1IndexV1Get(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Dynamic Feed agent & robot API at a glance — every /v1 capability, what it does, and a
copy-paste example. The fastest way for a developer (or an agent) to discover the whole surface.
Keyless unless noted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1IndexV1Get();
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
const result = await client.agent.v1IndexV1Get().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1IndexV1Get()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1IndexV1Get().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1InferenceReceiptSampleV1InferenceReceiptSampleGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A keyless, signed SAMPLE inference-receipt/v1 — for the /receipts demo. Shows what POST
/v1/inference-receipt returns: a neutral witness of a sample inference where the provider served a
DIFFERENT model than requested and set its own fallback flag (illustrative, vendor-neutral). Verify
it in-browser via /verify.js, then flip a byte and watch verification fail.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1InferenceReceiptSampleV1InferenceReceiptSampleGet();
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
const result = await client.agent.v1InferenceReceiptSampleV1InferenceReceiptSampleGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1InferenceReceiptSampleV1InferenceReceiptSampleGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1InferenceReceiptSampleV1InferenceReceiptSampleGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1InferenceReceiptV1InferenceReceiptPost(request?: Agent.V1InferenceReceiptV1InferenceReceiptPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1InferenceReceiptV1InferenceReceiptPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WITNESS a single AI model INFERENCE — a neutral, Ed25519-signed, transparency-logged,
RFC 3161 timestampable receipt that this inference record EXISTED and is INTACT. Privacy by
CONSTRUCTION: the caller hashes the prompt + response LOCALLY and sends ONLY fixed-length sha256
hashes + non-PII metadata. Body: {"claimed_model": "", "prompt_sha256": "", "response_sha256": ""} plus optional
requested_model, latency_ms, token_count, fallback_flag (the provider's OWN flag), provider,
region, and a BYO-key agent co-signature (provider_pubkey + provider_sig). Auth: a FREE key (POST
/signup) — no KYC. PROVES: the record existed at issued_at and is intact (tamper-EVIDENT, verifiable
via /verify.js against /.well-known/keys). Does NOT independently verify which model actually ran,
does NOT adjudicate that a 'downgrade' occurred, does NOT score quality — model_match is a literal
string comparison and the holder draws any inference. Profile of receipt/v1. Anchor via POST /v1/anchor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1InferenceReceiptV1InferenceReceiptPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1InferenceReceiptV1InferenceReceiptPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1InferenceReceiptV1InferenceReceiptPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1InferenceReceiptV1InferenceReceiptPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1InferenceReceiptV1InferenceReceiptPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1InferenceReceiptV1InferenceReceiptPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1InferenceReceiptV1InferenceReceiptPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1IntensityV1IntensityGet(request: Agent.V1IntensityV1IntensityGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1IntensityV1IntensityGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

INTENSITY-AT-LOCATION (DF-VERIFY/1 `intensity/v1`) — the parameter value at an exact coordinate, signed
and reproducible: the settlement-grade reading a parametric trigger evaluates against. Not 'an event
happened' but 'the value at this lat/lon, from the region's authoritative source'. v1 peril: flood —
routed by coordinate to the nearest official river gauge: AU -> BoM Water Data Online (water-course level
m; CC BY 4.0), US -> USGS NWIS (gage height ft / discharge ft3/s). Point-resolved, no interpolation.
drought, wildfire and earthquake (ShakeMap) intensity are rolling in. Verify the Ed25519 signature against
GET /.well-known/keys; re-fetch source_url to reproduce raw_reading_hash (see hash_method). SCOPE: attests
the reading at the cited official gauge — NOT a basin-wide determination or physical loss.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1IntensityV1IntensityGet({ lat: 1.5, lon: 1.5 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1IntensityV1IntensityGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1IntensityV1IntensityGet({ lat: 1.5, lon: 1.5 }).asApiResult();
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
| <code>lat</code> | <code>number</code> | - |
| <code>lon</code> | <code>number</code> | - |
| <code>peril?</code> | <code>string</code> | -<br>**Default**: "flood" |
| <code>metric?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1IntensityV1IntensityGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1IntensityV1IntensityGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1IntensityV1IntensityGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1IntensityV1IntensityGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1MeV1MeGet(request?: Agent.V1MeV1MeGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1MeV1MeGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Your key at a glance — plan, calls used today, daily quota and remaining. The per-user usage view
(the keyless MCP endpoint is unmetered fair-use).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1MeV1MeGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1MeV1MeGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1MeV1MeGet().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1MeV1MeGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1MeV1MeGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1MeV1MeGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1MeV1MeGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1NearbyV1NearbyGet(request: Agent.V1NearbyV1NearbyGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1NearbyV1NearbyGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Signed situational scan: live hazards near a point — earthquakes (USGS), natural events (NASA
EONET: wildfires/volcanoes/floods/storms), major disasters (GDACS) and, in Australia, live satellite
bushfire hotspots (Geoscience Australia) within radius_km, nearest first. Ed25519-signed (verify
against GET /.well-known/keys). The 'what's around me' ping for any machine that moves — robots,
drones, in-car AI assistants, fleet telematics — complements the go/caution/no-go verdict from
/v1/awareness.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1NearbyV1NearbyGet({ lat: 1.5, lon: 1.5 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1NearbyV1NearbyGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1NearbyV1NearbyGet({ lat: 1.5, lon: 1.5 }).asApiResult();
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
| <code>lat</code> | <code>number</code> | - |
| <code>lon</code> | <code>number</code> | - |
| <code>radiusKm?</code> | <code>number</code> | -<br>**Default**: 500 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1NearbyV1NearbyGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1NearbyV1NearbyGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1NearbyV1NearbyGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1NearbyV1NearbyGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1NotarizeV1NotarizePost(request?: Agent.V1NotarizeV1NotarizePostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1NotarizeV1NotarizePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NOTARY for any data feed — a neutral third party witnesses YOUR data and returns a timestamped,
Ed25519-signed notarization: proof these exact bytes existed at this moment, independently verifiable
forever. Two modes — send the data ({"payload": }), or keep it private and send only its
hash ({"payload_sha256": ""}). Optional "subject" names the publisher; "echo": false omits
the payload from the record (hash retained). This attests that Dynamic Feed WITNESSED these bytes
(or this hash) at witnessed_at — not that the content is true. Anchor via POST /v1/anchor for
proof-of-when independent of us. Auth: X-API-Key (free key at POST /signup). 'Let's Encrypt for
data feeds' — your feed, signed, without building a signing stack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1NotarizeV1NotarizePost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1NotarizeV1NotarizePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1NotarizeV1NotarizePost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1NotarizeV1NotarizePost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1NotarizeV1NotarizePostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1NotarizeV1NotarizePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1NotarizeV1NotarizePostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1NotaryEntryV1NotaryLogIdxGet(request: Agent.V1NotaryEntryV1NotaryLogIdxGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1NotaryEntryV1NotaryLogIdxGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One transparency-log entry by index, Ed25519-signed, with the recipe to recompute its
entry_hash and verify chain linkage. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1NotaryEntryV1NotaryLogIdxGet({ idx: 1 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1NotaryEntryV1NotaryLogIdxGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1NotaryEntryV1NotaryLogIdxGet({ idx: 1 }).asApiResult();
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
| <code>idx</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1NotaryEntryV1NotaryLogIdxGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1NotaryEntryV1NotaryLogIdxGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1NotaryEntryV1NotaryLogIdxGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1NotaryEntryV1NotaryLogIdxGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1NotaryFeedRegisterV1NotaryFeedsPost(request?: Agent.V1NotaryFeedRegisterV1NotaryFeedsPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1NotaryFeedRegisterV1NotaryFeedsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

CONTINUOUS NOTARIZATION — register a feed URL and Dynamic Feed fetches it on your interval,
notarizing every CHANGE into the public transparency log automatically: a standing, tamper-evident
history of what your feed published, when. Body: {"url": "https://...", "subject": "Your Co",
"interval_minutes": 180 (min 60)}. Beta: 3 active feeds per key. The first fetch happens
immediately and its notarization is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1NotaryFeedRegisterV1NotaryFeedsPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1NotaryFeedRegisterV1NotaryFeedsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1NotaryFeedRegisterV1NotaryFeedsPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1NotaryFeedRegisterV1NotaryFeedsPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1NotaryFeedRegisterV1NotaryFeedsPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1NotaryFeedRegisterV1NotaryFeedsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1NotaryFeedRegisterV1NotaryFeedsPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1NotaryFeedsListV1NotaryFeedsGet(request?: Agent.V1NotaryFeedsListV1NotaryFeedsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1NotaryFeedsListV1NotaryFeedsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Your registered continuous-notarization feeds (same X-API-Key): status, last hash, last log
index, next-run cadence.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1NotaryFeedsListV1NotaryFeedsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1NotaryFeedsListV1NotaryFeedsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1NotaryFeedsListV1NotaryFeedsGet().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1NotaryFeedsListV1NotaryFeedsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1NotaryFeedsListV1NotaryFeedsGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1NotaryFeedsListV1NotaryFeedsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1NotaryFeedsListV1NotaryFeedsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1NotaryHeadV1NotaryLogHeadGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The transparency-log HEAD — count + chain head hash, Ed25519-signed. The anchorable artifact:
altering ANY past notarization breaks every entry_hash after it and contradicts the anchored
head. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1NotaryHeadV1NotaryLogHeadGet();
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
const result = await client.agent.v1NotaryHeadV1NotaryLogHeadGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1NotaryHeadV1NotaryLogHeadGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1NotaryHeadV1NotaryLogHeadGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1NotaryLogV1NotaryLogGet(request?: Agent.V1NotaryLogV1NotaryLogGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1NotaryLogV1NotaryLogGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The PUBLIC TRANSPARENCY LOG of all notarizations — append-only, hash-chained (CT-style),
newest first. Payload hashes only (never payloads): private by construction, tamper-evident by
recipe. Page back with ?before=. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1NotaryLogV1NotaryLogGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1NotaryLogV1NotaryLogGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1NotaryLogV1NotaryLogGet().asApiResult();
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>before?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1NotaryLogV1NotaryLogGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1NotaryLogV1NotaryLogGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1NotaryLogV1NotaryLogGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1NotaryLogV1NotaryLogGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1NotaryProofV1NotaryLogIdxProofGet(request: Agent.V1NotaryProofV1NotaryLogIdxProofGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1NotaryProofV1NotaryLogIdxProofGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

INCLUSION PROOF for a log entry: the consecutive chain of entries from this index to the most
recently ANCHORED head (or the current head if no anchor covers it yet), plus the anchor record.
Recompute each entry_hash and you have proven this entry is in the history the Bitcoin anchor
commits to — no trust in Dynamic Feed required. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1NotaryProofV1NotaryLogIdxProofGet({ idx: 1 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1NotaryProofV1NotaryLogIdxProofGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1NotaryProofV1NotaryLogIdxProofGet({ idx: 1 }).asApiResult();
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
| <code>idx</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1NotaryProofV1NotaryLogIdxProofGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1NotaryProofV1NotaryLogIdxProofGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1NotaryProofV1NotaryLogIdxProofGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1NotaryProofV1NotaryLogIdxProofGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ProAsofV1ProAsofPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

PREMIUM keyless AS-OF REPLAY — pay-per-call (x402, USDC on Base) signed time-machine over Dynamic
Feed's append-only archive. Body {"tool":"current_weather","t":"2026-06-10T14:30:00Z"} (or ?tool=&t=)
-> the archived observation for `tool` nearest at-or-before `t`, replayed VERBATIM, Ed25519-signed
(verify against GET /.well-known/keys). The keyless paid channel to the SAME engine as the key-gated
GET /v1/asof — for agent backtesting, audit trails and 'what did we know when we decided' disputes.
No signup, no human; discoverable via the x402 bazaar. Honest about coverage: a time the archive
didn't capture returns a clear miss, never a fabricated past.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1ProAsofV1ProAsofPost();
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
const result = await client.agent.v1ProAsofV1ProAsofPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1ProAsofV1ProAsofPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1ProAsofV1ProAsofPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ProBatchV1ProBatchPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

PREMIUM, pay-per-call data batch — the commercial tier of /v1/batch, paid AGENT-NATIVELY via x402
(HTTP 402): an agent gets a price, pays from its wallet, re-calls with the X-PAYMENT header, and is
served — no human, no signup. Up to 100 signed tool calls per request (free /v1/batch is fair-use,
capped at 20). Dynamic Feed charges for its OWN service; a third-party facilitator settles the payment
— DF never custodies funds (witness-not-money). Body: {"calls":[{"tool":...,"args":{...}}, ...]}.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1ProBatchV1ProBatchPost();
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
const result = await client.agent.v1ProBatchV1ProBatchPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1ProBatchV1ProBatchPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1ProBatchV1ProBatchPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ProCatalogV1ProCatalogGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Machine-readable MENU of Dynamic Feed's x402 pay-per-call SKUs (USDC on Base) — the 'price list'
an agent or x402 facilitator shops in one call: every paid endpoint, its price (live from
X402_PRICE_ATOMIC), input/output schema, the recipient wallet (when connected), and the facilitator.
Boundary: DF is the merchant; the facilitator settles — DF never custodies funds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1ProCatalogV1ProCatalogGet();
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
const result = await client.agent.v1ProCatalogV1ProCatalogGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1ProCatalogV1ProCatalogGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1ProCatalogV1ProCatalogGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ProToolDiscoverV1ProToolToolGet(request: Agent.V1ProToolDiscoverV1ProToolToolGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1ProToolDiscoverV1ProToolToolGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discovery for the paid single-call endpoint. A GET returns the x402 402 challenge — so an agent that
probes with GET (instead of a 'Method Not Allowed' dead end) still learns the price, the asset, and that
it must POST with an X-PAYMENT header + {"args":{...}} body. NO payment is taken on GET; settlement only
ever happens on POST. Pure discovery, no money path.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1ProToolDiscoverV1ProToolToolGet({ tool: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1ProToolDiscoverV1ProToolToolGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent
  .v1ProToolDiscoverV1ProToolToolGet({ tool: "some example string" })
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
| <code>tool</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1ProToolDiscoverV1ProToolToolGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1ProToolDiscoverV1ProToolToolGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1ProToolDiscoverV1ProToolToolGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1ProToolDiscoverV1ProToolToolGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ProToolV1ProToolToolPost(request: Agent.V1ProToolV1ProToolToolPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1ProToolV1ProToolToolPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

PREMIUM single signed tool call — pay-per-call (x402, USDC on Base) for ANY one of Dynamic Feed's
live tools. An agent pays once, gets one Ed25519-signed datapoint. No signup, no human. Body:
{"args":{...}}. Discoverable via the x402 bazaar. (Free alternative: keyless /v1/batch, fair-use.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1ProToolV1ProToolToolPost({ tool: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1ProToolV1ProToolToolPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1ProToolV1ProToolToolPost({ tool: "some example string" }).asApiResult();
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
| <code>tool</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1ProToolV1ProToolToolPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1ProToolV1ProToolToolPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1ProToolV1ProToolToolPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1ProToolV1ProToolToolPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ProxyWitnessV1ProxyWitnessPost(request?: Agent.V1ProxyWitnessV1ProxyWitnessPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1ProxyWitnessV1ProxyWitnessPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

PROXY WITNESS, route any third-party API call through Dynamic Feed and get a signed, archived
receipt of exactly what that URL returned to us at this moment. Body:
{"url": "https://...", "method": "GET"|"POST"|..., "headers": {...}, "body": "...", "echo": false, "subject": "..."}.
We fetch server-side under an SSRF guard (only public http/https targets; private and reserved
addresses blocked; redirects not followed), redact your request credentials from the record, and
sign a proxy-witness/v1 envelope carrying the response status, content-type, size and SHA-256 (the
full body only when echo:true and small; our archive is hash-first and never keeps the body).
Witnesses what the URL returned to us, not that the content is true; never the money path.
Auth: X-API-Key (free key at POST /signup).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1ProxyWitnessV1ProxyWitnessPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1ProxyWitnessV1ProxyWitnessPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1ProxyWitnessV1ProxyWitnessPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1ProxyWitnessV1ProxyWitnessPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1ProxyWitnessV1ProxyWitnessPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1ProxyWitnessV1ProxyWitnessPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1ProxyWitnessV1ProxyWitnessPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1ReceiptV1ReceiptPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evidence receipt — wrap any fact/claim/data in a timestamped, Ed25519-SIGNED record: provable
evidence of what an AI was told (or asserted), and when. Body: {"data": } or {"claim":"..."}.
Returns the receipt + a detached signature (verify against GET /.well-known/keys); anchor its hash to
RFC 3161 via POST /v1/anchor. Keyless. An audit-trail input for regulated AI (fintech / legal / medical).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1ReceiptV1ReceiptPost();
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
const result = await client.agent.v1ReceiptV1ReceiptPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1ReceiptV1ReceiptPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1ReceiptV1ReceiptPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1SnapshotV1SnapshotGet(request?: Agent.V1SnapshotV1SnapshotGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1SnapshotV1SnapshotGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Historical world-state — what Dynamic Feed reported on a given day. ?date=YYYY-MM-DD returns that
day's stored snapshot (the cross-domain world_pulse digest); no date returns today's, captured on
read. Honest about coverage: a date before the earliest snapshot returns the available range, never
a fabricated past. Keyless. The auditable companion to the signed/RFC 3161 timestamped awareness layer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1SnapshotV1SnapshotGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1SnapshotV1SnapshotGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1SnapshotV1SnapshotGet().asApiResult();
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
| <code>date?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1SnapshotV1SnapshotGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1SnapshotV1SnapshotGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1SnapshotV1SnapshotGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1SnapshotV1SnapshotGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1SourcesV1SourcesGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The authoritative source catalog — every upstream feed Dynamic Feed serves, with its publisher,
official URL, licence, whether commercial use + redistribution is permitted, update cadence, and the
tools it backs. Keyless. Each datapoint is provenance-stamped (source, licence, timestamp) so you can
cite it and verify usage rights yourself.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1SourcesV1SourcesGet();
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
const result = await client.agent.v1SourcesV1SourcesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1SourcesV1SourcesGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1SourcesV1SourcesGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1StampV1StampPost(request?: Agent.V1StampV1StampPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1StampV1StampPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an independently verifiable record of submitted JSON.

``X-API-Key`` is optional so the existing keyless signing behaviour remains available. When a
key is supplied it is always validated: portal ``fx_live_`` keys use the isolated Fluxdyne
runtime database boundary, while legacy keys keep their existing validation and metering path.
A signature establishes integrity and issuer identity; it does not establish that submitted
content is complete, scientifically valid, or true.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1StampV1StampPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1StampV1StampPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1StampV1StampPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1StampV1StampPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1StampV1StampPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1StampV1StampPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1StampV1StampPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1StationGetV1StationStationIdGet(request: Agent.V1StationGetV1StationStationIdGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1StationGetV1StationStationIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The public descriptor of a registered station (no owner identity). Keyless, so a verifier of a
station-receipt can see what the station is and what it reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1StationGetV1StationStationIdGet({ stationId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1StationGetV1StationStationIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent
  .v1StationGetV1StationStationIdGet({ stationId: "some example string" })
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
| <code>stationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1StationGetV1StationStationIdGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1StationGetV1StationStationIdGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1StationGetV1StationStationIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1StationGetV1StationStationIdGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1StationReadingV1StationReadingPost(request?: Agent.V1StationReadingV1StationReadingPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1StationReadingV1StationReadingPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Witness one reading your station reported: get back a signed station-receipt/v1 stating, in
words, that the value is self-reported by your station and only WITNESSED (not measured) by
Dynamic Feed. Body: {"station_id": "stn_...", "quantity": "wind_kmh", "value": 12.4, "unit": "km/h",
"observed_at": "..."}. Keyless verification against /.well-known/keys. Auth: X-API-Key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1StationReadingV1StationReadingPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1StationReadingV1StationReadingPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1StationReadingV1StationReadingPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1StationReadingV1StationReadingPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1StationReadingV1StationReadingPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1StationReadingV1StationReadingPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1StationReadingV1StationReadingPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1StationRegisterV1StationRegisterPost(request?: Agent.V1StationRegisterV1StationRegisterPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1StationRegisterV1StationRegisterPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WE SIGN YOUR STATION, register your own sensor so its readings can be witnessed as signed
receipts. Body: {"name": "...", "location": {"lat": .., "lon": ..}, "quantities": ["wind_kmh", ...]}.
Returns a station_id + provenance. Dynamic Feed witnesses what your station reports; it does not
measure the value. Your key is stored only as a non-reversible hash. Auth: X-API-Key (free key at
POST /signup).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1StationRegisterV1StationRegisterPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1StationRegisterV1StationRegisterPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1StationRegisterV1StationRegisterPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1StationRegisterV1StationRegisterPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1StationRegisterV1StationRegisterPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1StationRegisterV1StationRegisterPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1StationRegisterV1StationRegisterPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1StreamV1StreamGet(request?: Agent.V1StreamV1StreamGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1StreamV1StreamGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Server-Sent Events stream of a LIVE value. Point an EventSource at
/v1/stream?tool=&args=&interval=&count= and receive the tool's current value every
`interval` seconds as a `value` event, until `count` updates or you disconnect. Keyless. Bounded for
fair use: interval 5-300s, count 1-60. Example: /v1/stream?tool=cite&args={"subject":"BTC"}&interval=10

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1StreamV1StreamGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1StreamV1StreamGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1StreamV1StreamGet().asApiResult();
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
| <code>tool?</code> | <code>string</code> | - |
| <code>args?</code> | <code>string</code> | - |
| <code>interval?</code> | <code>number</code> | -<br>**Default**: 15 |
| <code>count?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1StreamV1StreamGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1StreamV1StreamGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1StreamV1StreamGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1StreamV1StreamGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1TriggerReceiptV1TriggerReceiptGet(request: Agent.V1TriggerReceiptV1TriggerReceiptGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1TriggerReceiptV1TriggerReceiptGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parametric catastrophe TRIGGER RECEIPT (DF-VERIFY/1 `trigger-receipt/v1`) — the dispute-proof oracle a
parametric payout settles against. Evaluates 'metric op threshold' at a location against the live official
reading and returns an Ed25519-signed receipt carrying the four properties that end a parametric dispute:
(1) a pinned + hashed methodology (nobody moves the goalposts after the event); (2) the exact re-fetchable
source_url + a raw_reading_hash anyone can reproduce (independent verifiability, not 'trust us');
(3) a deterministic determination — triggered + payout_factor + rationale, re-computable by any party;
(4) the signature (timestamp via POST /v1/anchor (RFC 3161) for proof of when). Neutral calculation-agent-of-
record: attests what the official source reported and what the pinned methodology implies — NOT ground-truth
physical loss. v0.1 metrics: wind_kmh | temperature_c | feels_like_c | precipitation_mm (Open-Meteo).
op: gt | gte | lt | lte. Verify against GET /.well-known/keys; schema at /schemas/trigger-receipt-v1.json.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1TriggerReceiptV1TriggerReceiptGet({
    metric: "some example string",
    threshold: 1.5,
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1TriggerReceiptV1TriggerReceiptGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent
  .v1TriggerReceiptV1TriggerReceiptGet({ metric: "some example string", threshold: 1.5 })
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
| <code>metric</code> | <code>string</code> | - |
| <code>threshold</code> | <code>number</code> | - |
| <code>op?</code> | <code>string</code> | -<br>**Default**: "gte" |
| <code>lat?</code> | <code>number</code> | - |
| <code>lon?</code> | <code>number</code> | - |
| <code>city?</code> | <code>string</code> | - |
| <code>peril?</code> | <code>string</code> | - |
| <code>contractRef?</code> | <code>string</code> | - |
| <code>methodology?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1TriggerReceiptV1TriggerReceiptGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1TriggerReceiptV1TriggerReceiptGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1TriggerReceiptV1TriggerReceiptGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1TriggerReceiptV1TriggerReceiptGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1VcV1VcPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Security quarantine: legacy VC wrapping did not verify the inner receipt or role boundaries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1VcV1VcPost();
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
const result = await client.agent.v1VcV1VcPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1VcV1VcPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1VcV1VcPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WatchlistDeleteV1WatchlistDelete(request?: Agent.V1WatchlistDeleteV1WatchlistDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1WatchlistDeleteV1WatchlistDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one item from your watchlist (?label=BTC) or clear it entirely (no label). Per-user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1WatchlistDeleteV1WatchlistDelete();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1WatchlistDeleteV1WatchlistDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1WatchlistDeleteV1WatchlistDelete().asApiResult();
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
| <code>label?</code> | <code>string</code> | - |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1WatchlistDeleteV1WatchlistDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1WatchlistDeleteV1WatchlistDeleteError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1WatchlistDeleteV1WatchlistDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1WatchlistDeleteV1WatchlistDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WatchlistGetV1WatchlistGet(request?: Agent.V1WatchlistGetV1WatchlistGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1WatchlistGetV1WatchlistGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Your saved watchlist — the subjects/tools you monitor. ?pull=true runs every watched tool and
returns each one's CURRENT value in a single call (your whole dashboard at once). Per-user, keyed by
your API key (X-API-Key).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1WatchlistGetV1WatchlistGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1WatchlistGetV1WatchlistGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1WatchlistGetV1WatchlistGet().asApiResult();
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
| <code>pull?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1WatchlistGetV1WatchlistGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1WatchlistGetV1WatchlistGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1WatchlistGetV1WatchlistGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1WatchlistGetV1WatchlistGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WatchlistPostV1WatchlistPost(request?: Agent.V1WatchlistPostV1WatchlistPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1WatchlistPostV1WatchlistPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add to or replace your watchlist. Body {"label":"BTC","tool":"cite","args":{"subject":"BTC"}} adds
one item; body {"items":[...]} replaces the whole list (max 25). Each item's `tool` must be a real
Dynamic Feed tool. Per-user, keyed by your API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1WatchlistPostV1WatchlistPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1WatchlistPostV1WatchlistPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1WatchlistPostV1WatchlistPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1WatchlistPostV1WatchlistPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1WatchlistPostV1WatchlistPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1WatchlistPostV1WatchlistPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1WatchlistPostV1WatchlistPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WebhooksCreateV1WebhooksPost(request?: Agent.V1WebhooksCreateV1WebhooksPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1WebhooksCreateV1WebhooksPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a webhook that fires when a tool's value CHANGES. Body:
{"url":"https://you.example/hook","tool":"exploited_vulnerabilities","args":{}}. The URL is validated
SSRF-safe (public http/https only). Returns a one-time `secret` — every delivery is HMAC-SHA256 signed
with it (header X-DynamicFeed-Signature: sha256=…), so you can verify it came from us. Per-user (X-API-Key).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1WebhooksCreateV1WebhooksPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1WebhooksCreateV1WebhooksPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1WebhooksCreateV1WebhooksPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1WebhooksCreateV1WebhooksPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1WebhooksCreateV1WebhooksPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1WebhooksCreateV1WebhooksPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1WebhooksCreateV1WebhooksPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WebhooksDeleteV1WebhooksDelete(request?: Agent.V1WebhooksDeleteV1WebhooksDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1WebhooksDeleteV1WebhooksDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one of your webhook subscriptions by ?id=. Per-user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1WebhooksDeleteV1WebhooksDelete();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1WebhooksDeleteV1WebhooksDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1WebhooksDeleteV1WebhooksDelete().asApiResult();
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
| <code>id?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1WebhooksDeleteV1WebhooksDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1WebhooksDeleteV1WebhooksDeleteError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1WebhooksDeleteV1WebhooksDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1WebhooksDeleteV1WebhooksDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WebhooksListV1WebhooksGet(request?: Agent.V1WebhooksListV1WebhooksGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1WebhooksListV1WebhooksGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List your webhook subscriptions (secrets are never returned). Per-user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1WebhooksListV1WebhooksGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1WebhooksListV1WebhooksGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1WebhooksListV1WebhooksGet().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1WebhooksListV1WebhooksGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1WebhooksListV1WebhooksGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1WebhooksListV1WebhooksGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1WebhooksListV1WebhooksGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WebhooksTestV1WebhooksTestPost(request?: Agent.V1WebhooksTestV1WebhooksTestPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1WebhooksTestV1WebhooksTestPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a signed TEST delivery to one of your subscriptions now — confirm your endpoint receives it and
the HMAC validates. Body: {"id": }. Per-user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1WebhooksTestV1WebhooksTestPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1WebhooksTestV1WebhooksTestPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1WebhooksTestV1WebhooksTestPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1WebhooksTestV1WebhooksTestPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1WebhooksTestV1WebhooksTestPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1WebhooksTestV1WebhooksTestPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1WebhooksTestV1WebhooksTestPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WitnessInclusionV1WitnessIdxInclusionGet(request: Agent.V1WitnessInclusionV1WitnessIdxInclusionGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1WitnessInclusionV1WitnessIdxInclusionGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

SUCCINCT, browser-verifiable inclusion proof that witness/notary entry {idx} is in the
append-only log — an O(log n) RFC-6962 Merkle audit path to a tree root we Ed25519-SIGN (the
checkpoint). Any party folds leaf -> root in their own browser and checks the checkpoint signature
against /.well-known/keys, with NO trust in Dynamic Feed's word (only its published key). Keyless.
Recipe: leaf = sha256(0x00 ‖ content_hash_bytes); node = sha256(0x01 ‖ left ‖ right); fold the
audit_path (each {sibling, side}) up to root_sha256; confirm it equals the signed
checkpoint.root_sha256, then verify the checkpoint Ed25519 signature. In-browser via
/verify.js verifyInclusion(). Complements GET /v1/notary/log/{idx}/proof (the O(n) chain replay):
the chain proves append-order, this proves succinct membership in a signed tree.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1WitnessInclusionV1WitnessIdxInclusionGet({ idx: 1 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1WitnessInclusionV1WitnessIdxInclusionGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1WitnessInclusionV1WitnessIdxInclusionGet({ idx: 1 }).asApiResult();
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
| <code>idx</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1WitnessInclusionV1WitnessIdxInclusionGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1WitnessInclusionV1WitnessIdxInclusionGetError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1WitnessInclusionV1WitnessIdxInclusionGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1WitnessInclusionV1WitnessIdxInclusionGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WitnessSampleV1WitnessSampleGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A keyless, signed SAMPLE txn-receipt/v1 — for the /witness demo. Shows exactly what POST
/v1/witness returns (without writing to the log or needing a key): a neutral witness of a sample
machine-to-machine transaction record, with the recent-Bitcoin-block NOT-BEFORE time marker.
Verify it in-browser via /verify.js, then flip a byte and watch verification fail.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1WitnessSampleV1WitnessSampleGet();
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
const result = await client.agent.v1WitnessSampleV1WitnessSampleGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1WitnessSampleV1WitnessSampleGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agent.v1WitnessSampleV1WitnessSampleGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1WitnessV1WitnessPost(request?: Agent.V1WitnessV1WitnessPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Agent.V1WitnessV1WitnessPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WITNESS a machine-to-machine / agent-to-agent transaction RECORD — a neutral, third-party,
Ed25519-signed, transparency-logged, RFC 3161 timestampable receipt that this exact record EXISTED and
is INTACT. Dynamic Feed sits BESIDE the transaction, NEVER in the value path: it only signs +
timestamps + anchors a HASH of a record you give it. It never accepts, holds, routes, converts or
custodies funds or anything of value. Send the record ({"payload": }) or keep it private
({"content_hash": ""}). Optional: parties[] (opaque ids — NO PII), txn_ref (opaque),
and a BYO-key agent co-signature (provider_pubkey + provider_sig, Ed25519 over the ascii-hex hash)
so the receipt reads "agent attested, Dynamic Feed witnessed". Auth: a FREE key (POST /signup) —
no KYC. PROVES: the record existed at issued_at, is intact (tamper-EVIDENT, verifiable via
/verify.js against /.well-known/keys), and which agent key co-signed. Does NOT prove the
transaction was authorized, correct, lawful, completed, or that any value moved. Profile of
receipt/v1. Anchor independently via POST /v1/anchor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agent.v1WitnessV1WitnessPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Agent.V1WitnessV1WitnessPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agent.v1WitnessV1WitnessPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agent.v1WitnessV1WitnessPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Agent.V1WitnessV1WitnessPostError](src/resources/agent.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agent.v1WitnessV1WitnessPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Agent.V1WitnessV1WitnessPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AgentStats

> Source: [AgentStats](src/resources/agent-stats.ts)

<details>
<summary><code>agentStatsV1AgentStatsGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public, no-PII view of the agent/machine traffic Dynamic Feed serves: tool calls
(today / 7d / 30d / all-time) and the distinct agent client types seen (Claude, ChatGPT,
Cursor, LangChain, MCP clients, ...). Counts only — no IPs, no identities. Powers the public
'agents tapping us' counter on /agents. The response itself is Ed25519-signed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agentStats.agentStatsV1AgentStatsGet();
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
const result = await client.agentStats.agentStatsV1AgentStatsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentStats.agentStatsV1AgentStatsGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agentStats.agentStatsV1AgentStatsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AiModels

> Source: [AiModels](src/resources/ai-models.ts)

<details>
<summary><code>aiModelsEpAiModelsGet(request?: AiModels.AiModelsEpAiModelsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, AiModels.AiModelsEpAiModelsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current & trending AI models from the open-model ecosystem (Hugging Face) — name, org, task,
popularity, release date. Complements /models (closed-flagship pricing & versions). (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiModels.aiModelsEpAiModelsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type AiModels.AiModelsEpAiModelsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiModels.aiModelsEpAiModelsGet().asApiResult();
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
| <code>query?</code> | <code>[Query](src/models/unions/query.ts)</code> | search a model name (e.g. llama, qwen, whisper) |
| <code>org?</code> | <code>[Org](src/models/unions/org.ts)</code> | filter by org/author (e.g. meta-llama, deepseek-ai) |
| <code>task?</code> | <code>string</code> | text-generation (default), text-to-image, ... or 'any'<br>**Default**: "text-generation" |
| <code>sort?</code> | <code>string</code> | trending \| newest \| downloads<br>**Default**: "trending" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiModels.aiModelsEpAiModelsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[AiModels.AiModelsEpAiModelsGetError](src/resources/ai-models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiModels.aiModelsEpAiModelsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, AiModels.AiModelsEpAiModelsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AirQuality

> Source: [AirQuality](src/resources/air-quality.ts)

<details>
<summary><code>airQualityAirQualityGet(request?: AirQuality.AirQualityAirQualityGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, AirQuality.AirQualityAirQualityGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current air quality (PM2.5/PM10, US & European AQI) by city or lat/lon. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.airQuality.airQualityAirQualityGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type AirQuality.AirQualityAirQualityGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.airQuality.airQualityAirQualityGet().asApiResult();
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
| <code>city?</code> | <code>[City](src/models/unions/city.ts)</code> | city name |
| <code>lat?</code> | <code>[Lat](src/models/unions/lat.ts)</code> | - |
| <code>lon?</code> | <code>[Lon](src/models/unions/lon.ts)</code> | - |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.airQuality.airQualityAirQualityGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[AirQuality.AirQualityAirQualityGetError](src/resources/air-quality.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.airQuality.airQualityAirQualityGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, AirQuality.AirQualityAirQualityGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AirportDelays

> Source: [AirportDelays](src/resources/airport-delays.ts)

<details>
<summary><code>airportDelaysAirportDelaysGet(request?: AirportDelays.AirportDelaysAirportDelaysGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, AirportDelays.AirportDelaysAirportDelaysGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live FAA airport delays, ground stops, closures & ground-delay programs (US National Airspace
System — keyless source). Empty/short list = airspace running normally. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.airportDelays.airportDelaysAirportDelaysGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type AirportDelays.AirportDelaysAirportDelaysGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.airportDelays.airportDelaysAirportDelaysGet().asApiResult();
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
| <code>airport?</code> | <code>string</code> | 3-letter airport code, e.g. LGA, LAX (optional) |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 60 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.airportDelays.airportDelaysAirportDelaysGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[AirportDelays.AirportDelaysAirportDelaysGetError](src/resources/airport-delays.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.airportDelays.airportDelaysAirportDelaysGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, AirportDelays.AirportDelaysAirportDelaysGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Benchmarks

> Source: [Benchmarks](src/resources/benchmarks.ts)

<details>
<summary><code>benchmarksBenchmarksGet(request?: Benchmarks.BenchmarksBenchmarksGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Benchmarks.BenchmarksBenchmarksGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Measured latency & uptime per AI provider — our own data, fastest first. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.benchmarks.benchmarksBenchmarksGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Benchmarks.BenchmarksBenchmarksGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.benchmarks.benchmarksBenchmarksGet().asApiResult();
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
| <code>windowHours?</code> | <code>number</code> | rolling window in hours<br>**Default**: 24 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.benchmarks.benchmarksBenchmarksGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Benchmarks.BenchmarksBenchmarksGetError](src/resources/benchmarks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.benchmarks.benchmarksBenchmarksGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Benchmarks.BenchmarksBenchmarksGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>benchmarksHistoryBenchmarksHistoryGet(request?: Benchmarks.BenchmarksHistoryBenchmarksHistoryGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Benchmarks.BenchmarksHistoryBenchmarksHistoryGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The PERMANENT daily provider-latency & uptime archive — data Dynamic Feed measures itself and
never prunes, so it cannot be backfilled by anyone. Built for quant / eval / research use. Free keys
get a 7-day sample; paid plans get the full history. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.benchmarks.benchmarksHistoryBenchmarksHistoryGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Benchmarks.BenchmarksHistoryBenchmarksHistoryGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.benchmarks.benchmarksHistoryBenchmarksHistoryGet().asApiResult();
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
| <code>provider?</code> | <code>string</code> | filter to one provider, e.g. openai (optional) |
| <code>days?</code> | <code>number</code> | lookback in days<br>**Default**: 90 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.benchmarks.benchmarksHistoryBenchmarksHistoryGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Benchmarks.BenchmarksHistoryBenchmarksHistoryGetError](src/resources/benchmarks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.benchmarks.benchmarksHistoryBenchmarksHistoryGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Benchmarks.BenchmarksHistoryBenchmarksHistoryGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Billing

> Source: [Billing](src/resources/billing.ts)

<details>
<summary><code>billingSuccessBillingSuccessGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.billingSuccessBillingSuccessGet();
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
const result = await client.billing.billingSuccessBillingSuccessGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.billingSuccessBillingSuccessGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.billing.billingSuccessBillingSuccessGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>billingWebhookBillingWebhookPost(request?: Billing.BillingWebhookBillingWebhookPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Billing.BillingWebhookBillingWebhookPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stripe calls this to confirm payments. Upgrades/downgrades the key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.billingWebhookBillingWebhookPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Billing.BillingWebhookBillingWebhookPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing.billingWebhookBillingWebhookPost().asApiResult();
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
| <code>stripeSignature?</code> | <code>[StripeSignature](src/models/unions/stripe-signature.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.billingWebhookBillingWebhookPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Billing.BillingWebhookBillingWebhookPostError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.billingWebhookBillingWebhookPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Billing.BillingWebhookBillingWebhookPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkoutBillingCheckoutPost(request: Billing.CheckoutBillingCheckoutPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Billing.CheckoutBillingCheckoutPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a Stripe Checkout for a paid plan. Returns a payment URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.checkoutBillingCheckoutPost({ apiKey: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Billing.CheckoutBillingCheckoutPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing
  .checkoutBillingCheckoutPost({ apiKey: "some example string" })
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
| <code>apiKey</code> | <code>string</code> | the key you want to upgrade |
| <code>tier?</code> | <code>string</code> | pro ($19/mo), ultra ($59/mo), mega ($199/mo) or notary ($49/mo)<br>**Default**: "pro" |
| <code>interval?</code> | <code>string</code> | 'month' (default) or 'annual' — annual prepay is 2 months free ($190/$590/$1,990/$490 per year)<br>**Default**: "month" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billing.checkoutBillingCheckoutPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Billing.CheckoutBillingCheckoutPostError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.checkoutBillingCheckoutPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Billing.CheckoutBillingCheckoutPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CarbonIntensity

> Source: [CarbonIntensity](src/resources/carbon-intensity.ts)

<details>
<summary><code>carbonIntensityCarbonIntensityGet(request?: CarbonIntensity.CarbonIntensityCarbonIntensityGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CarbonIntensity.CarbonIntensityCarbonIntensityGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

GB grid carbon intensity now + fuel mix + cleanest upcoming half-hour (NESO, CC-BY, keyless
source). (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.carbonIntensity.carbonIntensityCarbonIntensityGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CarbonIntensity.CarbonIntensityCarbonIntensityGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.carbonIntensity.carbonIntensityCarbonIntensityGet().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.carbonIntensity.carbonIntensityCarbonIntensityGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CarbonIntensity.CarbonIntensityCarbonIntensityGetError](src/resources/carbon-intensity.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.carbonIntensity.carbonIntensityCarbonIntensityGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CarbonIntensity.CarbonIntensityCarbonIntensityGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## China

> Source: [China](src/resources/china.ts)

<details>
<summary><code>chinaEpChinaGet(request?: China.ChinaEpChinaGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, China.ChinaEpChinaGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

China markets & macro AIs lack: Shanghai Composite + Hang Seng, A-share/China ETF proxies
(CSI 300, MSCI China, internet, tech, consumer...), CNY/HKD & cross FX, and 12 World Bank macro
series + a derived trade balance. `metric` narrows the slice. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.china.chinaEpChinaGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type China.ChinaEpChinaGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.china.chinaEpChinaGet().asApiResult();
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
| <code>metric?</code> | <code>string</code> | all \| indices \| fx \| etfs \| macro<br>**Default**: "all" |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.china.chinaEpChinaGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[China.ChinaEpChinaGetError](src/resources/china.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.china.chinaEpChinaGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, China.ChinaEpChinaGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Cite

> Source: [Cite](src/resources/cite.ts)

<details>
<summary><code>citeEpCiteGet(request?: Cite.CiteEpCiteGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Cite.CiteEpCiteGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A fresh, citeable source + timestamp for a current datapoint. (Key on REST; keyless on MCP.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cite.citeEpCiteGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Cite.CiteEpCiteGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cite.citeEpCiteGet().asApiResult();
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
| <code>subject?</code> | <code>string</code> | any tool/source/topic (earthquakes, USGS, Open-Meteo, ...) or a software product — returns a citeable source + verify URL + timestamp |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cite.citeEpCiteGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Cite.CiteEpCiteGetError](src/resources/cite.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cite.citeEpCiteGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Cite.CiteEpCiteGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Consensus

> Source: [Consensus](src/resources/consensus.ts)

<details>
<summary><code>consensusConsensusGet(request?: Consensus.ConsensusConsensusGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Consensus.ConsensusConsensusGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

PROPRIETARY: real-time cross-exchange price consensus — the median price across
several independent venues plus how tightly they agree (spread in basis points), the
min/max, and the per-venue breakdown. Tells an AI tool the real price AND whether to
trust it. Measured by Dynamic Feed; available nowhere else. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.consensus.consensusConsensusGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Consensus.ConsensusConsensusGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.consensus.consensusConsensusGet().asApiResult();
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
| <code>symbol?</code> | <code>[Symbol](src/models/unions/symbol.ts)</code> | exact symbol, e.g. BTC, ETH, SOL |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.consensus.consensusConsensusGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Consensus.ConsensusConsensusGetError](src/resources/consensus.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.consensus.consensusConsensusGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Consensus.ConsensusConsensusGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Convert

> Source: [Convert](src/resources/convert.ts)

<details>
<summary><code>convertEpConvertGet(request?: Convert.ConvertEpConvertGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Convert.ConvertEpConvertGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert money between fiat currencies at the LIVE ECB reference rate. Crypto & precious-metal
conversion is coming in a future release. (Requires API key; keyless over MCP.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.convert.convertEpConvertGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Convert.ConvertEpConvertGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.convert.convertEpConvertGet().asApiResult();
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
| <code>amount?</code> | <code>number</code> | amount to convert<br>**Default**: 1 |
| <code>fromCurrency?</code> | <code>string</code> | e.g. EUR, GBP, JPY<br>**Default**: "USD" |
| <code>toCurrency?</code> | <code>string</code> | e.g. USD, AUD, CHF<br>**Default**: "USD" |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.convert.convertEpConvertGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Convert.ConvertEpConvertGetError](src/resources/convert.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.convert.convertEpConvertGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Convert.ConvertEpConvertGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Countdown

> Source: [Countdown](src/resources/countdown.ts)

<details>
<summary><code>countdownEpCountdownGet(request?: Countdown.CountdownEpCountdownGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Countdown.CountdownEpCountdownGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Time until a live event (market open/close or next rocket launch). (Key on REST; keyless on MCP.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.countdown.countdownEpCountdownGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Countdown.CountdownEpCountdownGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.countdown.countdownEpCountdownGet().asApiResult();
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
| <code>event?</code> | <code>string</code> | e.g. 'NYSE open' or 'next SpaceX launch' |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.countdown.countdownEpCountdownGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Countdown.CountdownEpCountdownGetError](src/resources/countdown.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.countdown.countdownEpCountdownGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Countdown.CountdownEpCountdownGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Dataset

> Source: [Dataset](src/resources/dataset.ts)

<details>
<summary><code>datasetAdvisoriesDatasetAdvisoriesJsonGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.datasetAdvisoriesDatasetAdvisoriesJsonGet();
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
const result = await client.dataset.datasetAdvisoriesDatasetAdvisoriesJsonGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.datasetAdvisoriesDatasetAdvisoriesJsonGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataset.datasetAdvisoriesDatasetAdvisoriesJsonGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datasetConsensusDatasetConsensusJsonGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.datasetConsensusDatasetConsensusJsonGet();
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
const result = await client.dataset.datasetConsensusDatasetConsensusJsonGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.datasetConsensusDatasetConsensusJsonGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataset.datasetConsensusDatasetConsensusJsonGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datasetIndexDatasetGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Open, free, crawlable snapshots of every feed (for AI training & research).

The real-time, filterable API + MCP endpoint remain the product; this is a
public snapshot so the data spreads into the corpus AIs learn from.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.datasetIndexDatasetGet();
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
const result = await client.dataset.datasetIndexDatasetGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.datasetIndexDatasetGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataset.datasetIndexDatasetGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datasetModelsDatasetModelsJsonGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.datasetModelsDatasetModelsJsonGet();
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
const result = await client.dataset.datasetModelsDatasetModelsJsonGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.datasetModelsDatasetModelsJsonGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataset.datasetModelsDatasetModelsJsonGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datasetNewsDatasetNewsJsonGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.datasetNewsDatasetNewsJsonGet();
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
const result = await client.dataset.datasetNewsDatasetNewsJsonGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.datasetNewsDatasetNewsJsonGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataset.datasetNewsDatasetNewsJsonGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datasetServersDatasetServersJsonGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.datasetServersDatasetServersJsonGet();
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
const result = await client.dataset.datasetServersDatasetServersJsonGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.datasetServersDatasetServersJsonGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataset.datasetServersDatasetServersJsonGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datasetStatusDatasetStatusJsonGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.datasetStatusDatasetStatusJsonGet();
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
const result = await client.dataset.datasetStatusDatasetStatusJsonGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.datasetStatusDatasetStatusJsonGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataset.datasetStatusDatasetStatusJsonGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datasetVersionsDatasetVersionsJsonGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataset.datasetVersionsDatasetVersionsJsonGet();
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
const result = await client.dataset.datasetVersionsDatasetVersionsJsonGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.datasetVersionsDatasetVersionsJsonGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dataset.datasetVersionsDatasetVersionsJsonGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Dev

> Source: [Dev](src/resources/dev.ts)

<details>
<summary><code>dnsEpDnsGet(request: Dev.DnsEpDnsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Dev.DnsEpDnsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live DNS records for a domain via Cloudflare DNS-over-HTTPS. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dev.dnsEpDnsGet({ name: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Dev.DnsEpDnsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dev.dnsEpDnsGet({ name: "some example string" }).asApiResult();
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
| <code>name</code> | <code>string</code> | domain, e.g. example.com |
| <code>type?</code> | <code>string</code> | A \| AAAA \| MX \| TXT \| NS \| CNAME \| SOA \| CAA<br>**Default**: "A" |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dev.dnsEpDnsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Dev.DnsEpDnsGetError](src/resources/dev.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dev.dnsEpDnsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Dev.DnsEpDnsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>githubReleasesEpGithubReleasesGet(request: Dev.GithubReleasesEpGithubReleasesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Dev.GithubReleasesEpGithubReleasesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Latest GitHub releases for a repo (version, date, author, link) via the public atom feed —
keyless source, no rate limit. (Requires API key on REST; the MCP tool is keyless.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dev.githubReleasesEpGithubReleasesGet({ repo: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Dev.GithubReleasesEpGithubReleasesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dev
  .githubReleasesEpGithubReleasesGet({ repo: "some example string" })
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
| <code>repo</code> | <code>string</code> | owner/name, e.g. openai/openai-python |
| <code>limit?</code> | <code>number</code> | max releases (1-25)<br>**Default**: 5 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dev.githubReleasesEpGithubReleasesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Dev.GithubReleasesEpGithubReleasesGetError](src/resources/dev.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dev.githubReleasesEpGithubReleasesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Dev.GithubReleasesEpGithubReleasesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hackerNewsEpHackerNewsGet(request?: Dev.HackerNewsEpHackerNewsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Dev.HackerNewsEpHackerNewsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live Hacker News stories — the tech/AI attention layer. Optional case-insensitive title filter. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dev.hackerNewsEpHackerNewsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Dev.HackerNewsEpHackerNewsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dev.hackerNewsEpHackerNewsGet().asApiResult();
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
| <code>query?</code> | <code>string</code> | - |
| <code>kind?</code> | <code>string</code> | top \| new \| best<br>**Default**: "top" |
| <code>limit?</code> | <code>number</code> | max stories (1-30)<br>**Default**: 10 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dev.hackerNewsEpHackerNewsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Dev.HackerNewsEpHackerNewsGetError](src/resources/dev.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dev.hackerNewsEpHackerNewsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Dev.HackerNewsEpHackerNewsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Drought

> Source: [Drought](src/resources/drought.ts)

<details>
<summary><code>droughtDroughtGet(request?: Drought.DroughtDroughtGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Drought.DroughtDroughtGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

US drought severity — % of area in each D0-D4 class by week (U.S. Drought Monitor — keyless).
National or by state; a commodity-market mover and a hazard signal. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.drought.droughtDroughtGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Drought.DroughtDroughtGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.drought.droughtDroughtGet().asApiResult();
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
| <code>area?</code> | <code>string</code> | 'total' (US national) or a state FIPS code<br>**Default**: "total" |
| <code>weeks?</code> | <code>number</code> | -<br>**Default**: 6 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.drought.droughtDroughtGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Drought.DroughtDroughtGetError](src/resources/drought.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.drought.droughtDroughtGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Drought.DroughtDroughtGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DrugShortages

> Source: [DrugShortages](src/resources/drug-shortages.ts)

<details>
<summary><code>drugShortagesDrugShortagesGet(request?: DrugShortages.DrugShortagesDrugShortagesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, DrugShortages.DrugShortagesDrugShortagesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

US drug shortages from the FDA (openFDA — keyless source): is drug X in shortage right now, with
status, reason and company. Informational — confirm clinically. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.drugShortages.drugShortagesDrugShortagesGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type DrugShortages.DrugShortagesDrugShortagesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.drugShortages.drugShortagesDrugShortagesGet().asApiResult();
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
| <code>query?</code> | <code>string</code> | drug / generic name, e.g. amoxicillin (optional) |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.drugShortages.drugShortagesDrugShortagesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[DrugShortages.DrugShortagesDrugShortagesGetError](src/resources/drug-shortages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.drugShortages.drugShortagesDrugShortagesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, DrugShortages.DrugShortagesDrugShortagesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DynamicFeedLiveDataForAi

> Source: [DynamicFeedLiveDataForAi](src/resources/dynamic-feed-live-data-for-ai.ts)

<details>
<summary><code>homeGet(options?: RequestOptions): ApiPromise&lt;string, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Serve the marketing landing page (with live demo widget).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dynamicFeedLiveDataForAi.homeGet();
  // TODO: Handle 'response' of type string
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
const result = await client.dynamicFeedLiveDataForAi.homeGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dynamicFeedLiveDataForAi.homeGet()`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dynamicFeedLiveDataForAi.homeGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, ApiError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Earthquakes

> Source: [Earthquakes](src/resources/earthquakes.ts)

<details>
<summary><code>earthquakesEarthquakesGet(request?: Earthquakes.EarthquakesEarthquakesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Earthquakes.EarthquakesEarthquakesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recent earthquakes worldwide (USGS) — magnitude, depth, location, PAGER impact alert, tsunami
flag, felt reports and significance. Sorted by impact then magnitude. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.earthquakes.earthquakesEarthquakesGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Earthquakes.EarthquakesEarthquakesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.earthquakes.earthquakesEarthquakesGet().asApiResult();
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
| <code>minMagnitude?</code> | <code>number</code> | minimum magnitude<br>**Default**: 2.5 |
| <code>period?</code> | <code>string</code> | hour \| day \| week \| month<br>**Default**: "day" |
| <code>tsunamiOnly?</code> | <code>boolean</code> | only quakes flagged with tsunami potential<br>**Default**: false |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 30 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.earthquakes.earthquakesEarthquakesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Earthquakes.EarthquakesEarthquakesGetError](src/resources/earthquakes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.earthquakes.earthquakesEarthquakesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Earthquakes.EarthquakesEarthquakesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Energy

> Source: [Energy](src/resources/energy.ts)

<details>
<summary><code>energyGridEnergyGet(request?: Energy.EnergyGridEnergyGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Energy.EnergyGridEnergyGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live US electricity grid data (EIA v2, public domain): demand, net generation, or current fuel mix
by region/operator. Hourly. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.energyGridEnergyGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Energy.EnergyGridEnergyGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.energy.energyGridEnergyGet().asApiResult();
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
| <code>region?</code> | <code>string</code> | US48 (national) or a grid operator: CAISO, PJM, MISO, ERCOT, ISONE, NYISO, SPP, BPA<br>**Default**: "US48" |
| <code>metric?</code> | <code>string</code> | demand \| generation \| mix<br>**Default**: "demand" |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.energy.energyGridEnergyGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Energy.EnergyGridEnergyGetError](src/resources/energy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.energy.energyGridEnergyGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Energy.EnergyGridEnergyGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ExploitedVulnerabilities

> Source: [ExploitedVulnerabilities](src/resources/exploited-vulnerabilities.ts)

<details>
<summary><code>exploitedVulnerabilitiesExploitedVulnerabilitiesGet(request?: ExploitedVulnerabilities.ExploitedVulnerabilitiesExploitedVulnerabilitiesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ExploitedVulnerabilities.ExploitedVulnerabilitiesExploitedVulnerabilitiesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Vulnerabilities CONFIRMED exploited in the wild (CISA KEV) — each enriched with its EPSS
exploitation-probability score. The 'which CVEs actually matter right now' layer. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.exploitedVulnerabilities.exploitedVulnerabilitiesExploitedVulnerabilitiesGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ExploitedVulnerabilities.ExploitedVulnerabilitiesExploitedVulnerabilitiesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exploitedVulnerabilities
  .exploitedVulnerabilitiesExploitedVulnerabilitiesGet()
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
| <code>query?</code> | <code>[Query](src/models/unions/query.ts)</code> | match CVE id / name / description |
| <code>vendor?</code> | <code>[Vendor](src/models/unions/vendor.ts)</code> | filter by vendor (e.g. Microsoft, Cisco) |
| <code>product?</code> | <code>[Product](src/models/unions/product.ts)</code> | filter by product (e.g. Windows, PAN-OS) |
| <code>ransomwareOnly?</code> | <code>boolean</code> | only CVEs linked to ransomware campaigns<br>**Default**: false |
| <code>recentDays?</code> | <code>number</code> | only CVEs added to KEV in the last N days<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exploitedVulnerabilities.exploitedVulnerabilitiesExploitedVulnerabilitiesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ExploitedVulnerabilities.ExploitedVulnerabilitiesExploitedVulnerabilitiesGetError](src/resources/exploited-vulnerabilities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exploitedVulnerabilities.exploitedVulnerabilitiesExploitedVulnerabilitiesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ExploitedVulnerabilities.ExploitedVulnerabilitiesExploitedVulnerabilitiesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FederalRegister

> Source: [FederalRegister](src/resources/federal-register.ts)

<details>
<summary><code>federalRegisterFederalRegisterGet(request?: FederalRegister.FederalRegisterFederalRegisterGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, FederalRegister.FederalRegisterFederalRegisterGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recent US Federal Register documents — rules, proposed rules, notices, executive orders (keyless
NARA source). Answers what regulation took effect or what the President signed. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.federalRegister.federalRegisterFederalRegisterGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type FederalRegister.FederalRegisterFederalRegisterGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.federalRegister.federalRegisterFederalRegisterGet().asApiResult();
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
| <code>query?</code> | <code>string</code> | text search |
| <code>docType?</code> | <code>string</code> | RULE \| PRORULE \| NOTICE \| PRESDOCU |
| <code>agency?</code> | <code>string</code> | agency slug, e.g. securities-and-exchange-commission |
| <code>days?</code> | <code>number</code> | -<br>**Default**: 7 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.federalRegister.federalRegisterFederalRegisterGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[FederalRegister.FederalRegisterFederalRegisterGetError](src/resources/federal-register.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.federalRegister.federalRegisterFederalRegisterGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, FederalRegister.FederalRegisterFederalRegisterGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Flights

> Source: [Flights](src/resources/flights.ts)

<details>
<summary><code>flightsFlightsGet(request?: Flights.FlightsFlightsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Flights.FlightsFlightsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live aircraft right now — real-time positions from adsb.lol community ADS-B (CC0).
Filter by region preset and/or callsign. Airborne flights first. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.flights.flightsFlightsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Flights.FlightsFlightsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.flights.flightsFlightsGet().asApiResult();
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
| <code>region?</code> | <code>[Region](src/models/unions/region.ts)</code> | region preset: morocco, spain, london, newyork, paris, tokyo, dubai, europe, usa, asia, ... |
| <code>callsign?</code> | <code>[Callsign](src/models/unions/callsign.ts)</code> | filter by flight callsign, e.g. BAW123 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.flights.flightsFlightsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Flights.FlightsFlightsGetError](src/resources/flights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.flights.flightsFlightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Flights.FlightsFlightsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Forecast

> Source: [Forecast](src/resources/forecast.ts)

<details>
<summary><code>forecastForecastGet(request?: Forecast.ForecastForecastGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Forecast.ForecastForecastGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Multi-day weather forecast (up to 16 days) by city or lat/lon. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.forecast.forecastForecastGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Forecast.ForecastForecastGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forecast.forecastForecastGet().asApiResult();
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
| <code>city?</code> | <code>[City](src/models/unions/city.ts)</code> | city name |
| <code>lat?</code> | <code>[Lat](src/models/unions/lat.ts)</code> | - |
| <code>lon?</code> | <code>[Lon](src/models/unions/lon.ts)</code> | - |
| <code>days?</code> | <code>number</code> | -<br>**Default**: 7 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forecast.forecastForecastGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Forecast.ForecastForecastGetError](src/resources/forecast.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.forecast.forecastForecastGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Forecast.ForecastForecastGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GlobalDisasters

> Source: [GlobalDisasters](src/resources/global-disasters.ts)

<details>
<summary><code>globalDisastersEpGlobalDisastersGet(request?: GlobalDisasters.GlobalDisastersEpGlobalDisastersGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GlobalDisasters.GlobalDisastersEpGlobalDisastersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Worldwide multi-hazard disaster alerts (GDACS) — earthquakes, tropical cyclones, floods,
droughts, volcanoes — with a Green/Orange/Red humanitarian-impact level + affected countries.
The 'how bad, where, who's affected' severity layer. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalDisasters.globalDisastersEpGlobalDisastersGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GlobalDisasters.GlobalDisastersEpGlobalDisastersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalDisasters.globalDisastersEpGlobalDisastersGet().asApiResult();
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
| <code>alertLevel?</code> | <code>string</code> | Green;Orange;Red (semicolon-separated)<br>**Default**: "Orange;Red" |
| <code>eventType?</code> | <code>[EventType](src/models/unions/event-type.ts)</code> | EQ \| TC \| FL \| DR \| VO \| WF |
| <code>country?</code> | <code>[Country](src/models/unions/country.ts)</code> | country name or ISO3 (e.g. PHL) |
| <code>days?</code> | <code>number</code> | look-back window in days<br>**Default**: 7 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.globalDisasters.globalDisastersEpGlobalDisastersGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GlobalDisasters.GlobalDisastersEpGlobalDisastersGetError](src/resources/global-disasters.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.globalDisasters.globalDisastersEpGlobalDisastersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GlobalDisasters.GlobalDisastersEpGlobalDisastersGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GpsInterference

> Source: [GpsInterference](src/resources/gps-interference.ts)

<details>
<summary><code>gpsInterferenceGpsInterferenceGet(request?: GpsInterference.GpsInterferenceGpsInterferenceGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GpsInterference.GpsInterferenceGpsInterferenceGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Probable GPS/GNSS interference (jamming/spoofing) over an area, MEASURED from live ADS-B navigation
integrity (the GPSJam method) — a Dynamic Feed-derived signal (from adsb.lol, CC0). Pass a region
preset or lat+lon. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gpsInterference.gpsInterferenceGpsInterferenceGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GpsInterference.GpsInterferenceGpsInterferenceGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gpsInterference.gpsInterferenceGpsInterferenceGet().asApiResult();
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
| <code>region?</code> | <code>string</code> | preset: london, blacksea, baltic, easternmed, persiangulf, korea, finland, caucasus, northsea |
| <code>lat?</code> | <code>[Lat](src/models/unions/lat.ts)</code> | latitude (use with lon instead of a preset) |
| <code>lon?</code> | <code>[Lon](src/models/unions/lon.ts)</code> | longitude |
| <code>radiusKm?</code> | <code>number</code> | radius around lat/lon in km<br>**Default**: 300 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gpsInterference.gpsInterferenceGpsInterferenceGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GpsInterference.GpsInterferenceGpsInterferenceGetError](src/resources/gps-interference.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gpsInterference.gpsInterferenceGpsInterferenceGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GpsInterference.GpsInterferenceGpsInterferenceGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/resources/health.ts)

<details>
<summary><code>healthHealthGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.health.healthHealthGet();
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
const result = await client.health.healthHealthGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.health.healthHealthGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.health.healthHealthGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## History

> Source: [History](src/resources/history.ts)

<details>
<summary><code>historyV1HistoryGet(request?: History.HistoryV1HistoryGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, History.HistoryV1HistoryGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive coverage — what Dynamic Feed's permanent, append-only archive holds.

• No `tool` → the set of tools captured + a count.
• `tool=` → that tool's captured date partitions, earliest/latest, and day count.

This is the availability index over the un-backfillable history (the permanence moat): it tells an
agent which days are on record for a tool. Row-level point-in-time values ("what was the value at
time T") are a premium query that layers on the same Hive-partitioned archive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.history.historyV1HistoryGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type History.HistoryV1HistoryGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.history.historyV1HistoryGet().asApiResult();
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
| <code>tool?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.history.historyV1HistoryGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[History.HistoryV1HistoryGetError](src/resources/history.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.history.historyV1HistoryGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, History.HistoryV1HistoryGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Info

> Source: [Info](src/resources/info.ts)

<details>
<summary><code>infoInfoGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.info.infoInfoGet();
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
const result = await client.info.infoInfoGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.info.infoInfoGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.info.infoInfoGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InternetOutages

> Source: [InternetOutages](src/resources/internet-outages.ts)

<details>
<summary><code>internetOutagesInternetOutagesGet(request?: InternetOutages.InternetOutagesInternetOutagesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, InternetOutages.InternetOutagesInternetOutagesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live BGP routing health for a network resource from RIPEstat (RIPE NCC). Global visibility +
outage signal (healthy/degraded/outage) — a sharp visibility drop = the network is losing global
reachability. The clean, redistributable RIPEstat replacement for CAIDA. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.internetOutages.internetOutagesInternetOutagesGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type InternetOutages.InternetOutagesInternetOutagesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.internetOutages.internetOutagesInternetOutagesGet().asApiResult();
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
| <code>resource?</code> | <code>string</code> | an ASN (AS3215), an IP (8.8.8.8), or a prefix (193.0.0.0/22) |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.internetOutages.internetOutagesInternetOutagesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[InternetOutages.InternetOutagesInternetOutagesGetError](src/resources/internet-outages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.internetOutages.internetOutagesInternetOutagesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, InternetOutages.InternetOutagesInternetOutagesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Iss

> Source: [Iss](src/resources/iss.ts)

<details>
<summary><code>issIssGet(request?: Iss.IssIssGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Iss.IssIssGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Where the International Space Station is right now + who's aboard + orbital-latency floor.
(Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.iss.issIssGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Iss.IssIssGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.iss.issIssGet().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.iss.issIssGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Iss.IssIssGetError](src/resources/iss.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.iss.issIssGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Iss.IssIssGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Launches

> Source: [Launches](src/resources/launches.ts)

<details>
<summary><code>launchesLaunchesGet(request?: Launches.LaunchesLaunchesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Launches.LaunchesLaunchesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upcoming rocket launches worldwide — name, provider, rocket, time, site. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.launches.launchesLaunchesGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Launches.LaunchesLaunchesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.launches.launchesLaunchesGet().asApiResult();
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
| <code>provider?</code> | <code>[Provider](src/models/unions/provider.ts)</code> | filter by provider, e.g. SpaceX |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 8 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.launches.launchesLaunchesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Launches.LaunchesLaunchesGetError](src/resources/launches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.launches.launchesLaunchesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Launches.LaunchesLaunchesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Macro

> Source: [Macro](src/resources/macro.ts)

<details>
<summary><code>globalMacroMacroGet(request?: Macro.GlobalMacroMacroGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Macro.GlobalMacroMacroGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Worldwide macro indicators for any country (World Bank Open Data, CC-BY) — globalizes the China-only
macro. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.macro.globalMacroMacroGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Macro.GlobalMacroMacroGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.macro.globalMacroMacroGet().asApiResult();
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
| <code>country?</code> | <code>string</code> | ISO code (US, GB, DE, IN, BR, JP, CN) or country name |
| <code>indicator?</code> | <code>string</code> | gdp \| gdp_growth \| cpi_inflation \| unemployment \| population \| exports \| imports \| current_account \| fx_reserves \| fdi \| govt_debt_pct_gdp \| all<br>**Default**: "all" |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.macro.globalMacroMacroGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Macro.GlobalMacroMacroGetError](src/resources/macro.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.macro.globalMacroMacroGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Macro.GlobalMacroMacroGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MarketHours

> Source: [MarketHours](src/resources/market-hours.ts)

<details>
<summary><code>marketHoursMarketHoursGet(request?: MarketHours.MarketHoursMarketHoursGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, MarketHours.MarketHoursMarketHoursGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Is the market open right now? Live open/closed + next open/close for major exchanges
(plus crypto 24/7 and forex 24/5). Tells an AI whether a price is live or a closed-market
last-print. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketHours.marketHoursMarketHoursGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type MarketHours.MarketHoursMarketHoursGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketHours.marketHoursMarketHoursGet().asApiResult();
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
| <code>market?</code> | <code>[Market](src/models/unions/market.ts)</code> | NYSE, NASDAQ, LSE, XETRA, TSE, HKEX, ASX, Crypto, Forex |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketHours.marketHoursMarketHoursGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[MarketHours.MarketHoursMarketHoursGetError](src/resources/market-hours.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketHours.marketHoursMarketHoursGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, MarketHours.MarketHoursMarketHoursGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Models

> Source: [Models](src/resources/models.ts)

<details>
<summary><code>modelsModelsGet(request?: Models.ModelsModelsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Models.ModelsModelsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search current AI models by price, context, capability. Cheapest first. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.modelsModelsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Models.ModelsModelsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models.modelsModelsGet().asApiResult();
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
| <code>q?</code> | <code>[Q](src/models/unions/q.ts)</code> | match model name/id |
| <code>provider?</code> | <code>[Provider](src/models/unions/provider.ts)</code> | openai, anthropic, google, ... |
| <code>maxInputPrice?</code> | <code>[MaxInputPrice](src/models/unions/max-input-price.ts)</code> | max USD per 1M input tokens |
| <code>minContext?</code> | <code>[MinContext](src/models/unions/min-context.ts)</code> | min context window in tokens |
| <code>needsVision?</code> | <code>[NeedsVision](src/models/unions/needs-vision.ts)</code> | only models that accept images |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.modelsModelsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Models.ModelsModelsGetError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.modelsModelsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Models.ModelsModelsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Movers

> Source: [Movers](src/resources/movers.ts)

<details>
<summary><code>moversMoversGet(request?: Movers.MoversMoversGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Movers.MoversMoversGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DERIVED signal — biggest 24h gainers or losers across the markets we track. Computed from
Dynamic Feed's own data & recorded history (not a raw source you can scrape). (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.movers.moversMoversGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Movers.MoversMoversGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.movers.moversMoversGet().asApiResult();
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
| <code>direction?</code> | <code>string</code> | gainers \| losers<br>**Default**: "gainers" |
| <code>assetClass?</code> | <code>[AssetClass](src/models/unions/asset-class.ts)</code> | crypto \| stock \| index \| forex \| commodity \| metal |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 15 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.movers.moversMoversGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Movers.MoversMoversGetError](src/resources/movers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.movers.moversMoversGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Movers.MoversMoversGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NaturalEvents

> Source: [NaturalEvents](src/resources/natural-events.ts)

<details>
<summary><code>naturalEventsNaturalEventsGet(request?: NaturalEvents.NaturalEventsNaturalEventsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, NaturalEvents.NaturalEventsNaturalEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Active natural events worldwide (NASA EONET) — wildfires, severe storms, volcanoes, floods,
sea/lake ice. "What natural events are happening on Earth right now?". (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.naturalEvents.naturalEventsNaturalEventsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type NaturalEvents.NaturalEventsNaturalEventsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.naturalEvents.naturalEventsNaturalEventsGet().asApiResult();
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
| <code>category?</code> | <code>[Category](src/models/unions/category.ts)</code> | wildfires \| severeStorms \| volcanoes \| floods \| seaLakeIce |
| <code>days?</code> | <code>number</code> | look-back window in days<br>**Default**: 30 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 30 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.naturalEvents.naturalEventsNaturalEventsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[NaturalEvents.NaturalEventsNaturalEventsGetError](src/resources/natural-events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.naturalEvents.naturalEventsNaturalEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, NaturalEvents.NaturalEventsNaturalEventsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](src/resources/news.ts)

<details>
<summary><code>newsNewsGet(request?: News.NewsNewsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, News.NewsNewsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Latest AI news & releases across providers. Newest first. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.news.newsNewsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type News.NewsNewsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.news.newsNewsGet().asApiResult();
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
| <code>q?</code> | <code>[Q](src/models/unions/q.ts)</code> | match title/summary |
| <code>source?</code> | <code>[Source](src/models/unions/source.ts)</code> | OpenAI, Google AI, Hugging Face, ... |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 30 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.news.newsNewsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[News.NewsNewsGetError](src/resources/news.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.news.newsNewsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, News.NewsNewsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OrbitalDatacenters

> Source: [OrbitalDatacenters](src/resources/orbital-datacenters.ts)

<details>
<summary><code>orbitalDatacentersOrbitalDatacentersGet(request?: OrbitalDatacenters.OrbitalDatacentersOrbitalDatacentersGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, OrbitalDatacenters.OrbitalDatacentersOrbitalDatacentersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DATA CENTERS IN SPACE — a curated registry of compute/AI spacecraft in orbit (Starcloud's
NVIDIA H100, ESA Φsat-2 AI edge, D-Orbit in-orbit cloud), each enriched with live orbital data
and the speed-of-light latency floor for ground links. Data nowhere else. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orbitalDatacenters.orbitalDatacentersOrbitalDatacentersGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type OrbitalDatacenters.OrbitalDatacentersOrbitalDatacentersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orbitalDatacenters.orbitalDatacentersOrbitalDatacentersGet().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orbitalDatacenters.orbitalDatacentersOrbitalDatacentersGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[OrbitalDatacenters.OrbitalDatacentersOrbitalDatacentersGetError](src/resources/orbital-datacenters.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orbitalDatacenters.orbitalDatacentersOrbitalDatacentersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, OrbitalDatacenters.OrbitalDatacentersOrbitalDatacentersGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Rates

> Source: [Rates](src/resources/rates.ts)

<details>
<summary><code>ratesRatesGet(request?: Rates.RatesRatesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Rates.RatesRatesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live US benchmark interest rates (Fed funds / SOFR / OBFR…) from the New York Fed — the
rates models perpetually quote stale. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.rates.ratesRatesGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Rates.RatesRatesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rates.ratesRatesGet().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rates.ratesRatesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Rates.RatesRatesGetError](src/resources/rates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rates.ratesRatesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Rates.RatesRatesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RealityCheck

> Source: [RealityCheck](src/resources/reality-check.ts)

<details>
<summary><code>realityCheckEpRealityCheckGet(request?: RealityCheck.RealityCheckEpRealityCheckGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, RealityCheck.RealityCheckEpRealityCheckGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fact-check a statement against LIVE data — verdict (accurate / stale_or_wrong / current_value /
outside_coverage) + the live value + source. The anti-hallucination check; covers prices, market hours,
software versions, service status. (Key on REST; same tool keyless over MCP.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.realityCheck.realityCheckEpRealityCheckGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type RealityCheck.RealityCheckEpRealityCheckGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.realityCheck.realityCheckEpRealityCheckGet().asApiResult();
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
| <code>claim?</code> | <code>string</code> | a statement to verify, e.g. "BTC is $90,000" or "the market is open" |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.realityCheck.realityCheckEpRealityCheckGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[RealityCheck.RealityCheckEpRealityCheckGetError](src/resources/reality-check.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.realityCheck.realityCheckEpRealityCheckGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, RealityCheck.RealityCheckEpRealityCheckGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Recalls

> Source: [Recalls](src/resources/recalls.ts)

<details>
<summary><code>recallsRecallsGet(request?: Recalls.RecallsRecallsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Recalls.RecallsRecallsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

US product recalls — food, drug & medical-device enforcement reports (openFDA, keyless, CC0).
'Is product X recalled right now?' Class I = most serious; most-recent first. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recalls.recallsRecallsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Recalls.RecallsRecallsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recalls.recallsRecallsGet().asApiResult();
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
| <code>query?</code> | <code>string</code> | match the product description (brand/product), or blank for latest |
| <code>category?</code> | <code>string</code> | all \| food \| drug \| device<br>**Default**: "all" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recalls.recallsRecallsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Recalls.RecallsRecallsGetError](src/resources/recalls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recalls.recallsRecallsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Recalls.RecallsRecallsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Robot

> Source: [Robot](src/resources/robot.ts)

<details>
<summary><code>v1AnchorDailyV1AnchorDailyGet(request?: Robot.V1AnchorDailyV1AnchorDailyGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Robot.V1AnchorDailyV1AnchorDailyGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

L2 — the day's world-state snapshot timestamped via RFC 3161 (one hash per day, free &
batched via RFC 3161): a durable, tamper-evident record of what Dynamic Feed reported. Anchors
on first call (idempotent), then returns the proof. ?date=YYYY-MM-DD; keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robot.v1AnchorDailyV1AnchorDailyGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Robot.V1AnchorDailyV1AnchorDailyGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.robot.v1AnchorDailyV1AnchorDailyGet().asApiResult();
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
| <code>date?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robot.v1AnchorDailyV1AnchorDailyGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Robot.V1AnchorDailyV1AnchorDailyGetError](src/resources/robot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.robot.v1AnchorDailyV1AnchorDailyGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Robot.V1AnchorDailyV1AnchorDailyGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1AnchorUpgradeV1AnchorUpgradePost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-check a stored timestamp proof. RFC 3161 tokens are final at issue (nothing to upgrade); a
legacy OpenTimestamps proof is folded into its block attestation. Body: {"token_b64": "..."}
(legacy {"proof_ots_b64": "..."} still accepted).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robot.v1AnchorUpgradeV1AnchorUpgradePost();
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
const result = await client.robot.v1AnchorUpgradeV1AnchorUpgradePost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robot.v1AnchorUpgradeV1AnchorUpgradePost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.robot.v1AnchorUpgradeV1AnchorUpgradePost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1AnchorV1AnchorPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Timestamp a snapshot's hash with an independent RFC 3161 authority — returns a signed timestamp
token proving the record existed at time T, independently verifiable, even against us. Body:
{"snapshot": {...}} (its canonical SHA-256 is timestamped) or {"digest_hex": ""}.
Hashes ONLY, never data. Off the verdict hot path (Rung C).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robot.v1AnchorV1AnchorPost();
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
const result = await client.robot.v1AnchorV1AnchorPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robot.v1AnchorV1AnchorPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.robot.v1AnchorV1AnchorPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1AwarenessV1AwarenessPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Robot situational-awareness v1: ONE call returns a go / caution / no-go verdict plus the grounded
facts behind it, for a robot (ground|humanoid|aerial|marine|orbital) at a location. NEVER blocks: the
feeds fan out under a hard deadline and any laggard is dropped with the snapshot flagged `degraded`
(fail-safe → the verdict can never be `go` when degraded, it floors to `caution`). Keyless in v1.

Body: {"robot":{"id","class"},"location":{"lat","lon","alt_m"},"radius_km"?,"domains"?,
"max_staleness_s"?,"limits"?,"deadline_ms"?,"require_signed"?}. Every response is signed with Ed25519
(Rung B) · verify against GET /.well-known/keys. Timestamp a snapshot's hash via POST /v1/anchor (Rung C).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robot.v1AwarenessV1AwarenessPost();
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
const result = await client.robot.v1AwarenessV1AwarenessPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robot.v1AwarenessV1AwarenessPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.robot.v1AwarenessV1AwarenessPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1HumanoidV1HumanoidPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Humanoid PRE-OPERATION check: a preset over /v1/awareness for class=humanoid (a bipedal robot
working AMONG PEOPLE). POST {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go
verdict fused from wind (topple risk, high centre of mass), precipitation (slip/footing), temperature
(ice underfoot + actuator/battery envelope), air quality (tighter, people nearby) and nearby
earthquakes · Ed25519-signed, hard-deadline (never hangs; degraded floors to caution).
ADVISORY EVIDENCE ONLY: proof of what was true at a time, NOT a safety certification and NOT a
guarantee it is safe to act; the robot's own stack owns every action. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robot.v1HumanoidV1HumanoidPost();
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
const result = await client.robot.v1HumanoidV1HumanoidPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robot.v1HumanoidV1HumanoidPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.robot.v1HumanoidV1HumanoidPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1MarineV1MarinePost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marine vessel / USV PRE-OPERATION check: a preset over /v1/awareness for class=marine. POST
{"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from live
significant WAVE HEIGHT (the primary driver), wind, a heavy-precipitation storm proxy, geomagnetic
activity (GPS/comms) and nearby earthquakes (tsunami) · Ed25519-signed, hard-deadline (never hangs;
degraded floors to caution). Inland points simply omit the sea-state factor. ADVISORY EVIDENCE only:
not a safety certification and not a claim it is safe to sail; the vessel's own stack owns every
action. Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robot.v1MarineV1MarinePost();
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
const result = await client.robot.v1MarineV1MarinePost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robot.v1MarineV1MarinePost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.robot.v1MarineV1MarinePost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1PreflightV1PreflightPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Drone PRE-FLIGHT safety check: a preset over /v1/awareness for class=aerial. POST
{"location":{"lat","lon","alt_m"?},"radius_km"?}. Returns a go / caution / no-go take-off verdict
fused from wind & weather, air quality, space weather (GPS/comms integrity) and nearby hazards ·
Ed25519-signed, hard-deadline (never hangs; degraded floors to caution). Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robot.v1PreflightV1PreflightPost();
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
const result = await client.robot.v1PreflightV1PreflightPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robot.v1PreflightV1PreflightPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.robot.v1PreflightV1PreflightPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1RoadV1RoadPost(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ground / autonomous-vehicle OVER-THE-HORIZON hazard check: a preset over /v1/awareness for
class=ground. POST {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict
fused from weather, air quality and nearby earthquakes/hazards along the route · signed, never hangs.
Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robot.v1RoadV1RoadPost();
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
const result = await client.robot.v1RoadV1RoadPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robot.v1RoadV1RoadPost()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.robot.v1RoadV1RoadPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1RobotReceiptSampleV1RobotReceiptSampleGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A keyless, signed SAMPLE robot-receipt/v1: the 'black box' record of an embodied-AI decision (an
aerial robot told CAUTION on degraded GPS, which held). Verify it in-browser via /verify.js, then flip
a byte and watch verification fail. Advisory evidence only: not a safety system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robot.v1RobotReceiptSampleV1RobotReceiptSampleGet();
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
const result = await client.robot.v1RobotReceiptSampleV1RobotReceiptSampleGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robot.v1RobotReceiptSampleV1RobotReceiptSampleGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.robot.v1RobotReceiptSampleV1RobotReceiptSampleGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1RobotReceiptV1RobotReceiptPost(request?: Robot.V1RobotReceiptV1RobotReceiptPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Robot.V1RobotReceiptV1RobotReceiptPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WITNESS a single robot / embodied-AI DECISION: the neutral 'black box' receipt of what a robot
was told and which model/policy decided, at the moment it acted. Ed25519-signed, transparency-logged,
RFC 3161 timestampable. Privacy by CONSTRUCTION: the caller hashes the decision inputs (sensor/awareness
context) LOCALLY and sends ONLY a fixed-length sha256 + non-PII labels. Body: {"robot_class":
"ground|aerial|marine|orbital|humanoid", "model_id": "", "verdict":
"go|caution|no-go", "inputs_sha256": ""} plus optional decision, awareness_ref (a prior
/v1/awareness snapshot_id), region (COARSE, no precise coords), latency_ms, and a BYO-key co-signature.
Auth: a FREE key (POST /signup). ADVISORY EVIDENCE ONLY: proves the decision record existed and is
intact (tamper-EVIDENT, verifiable via /verify.js); it does NOT certify the action was safe/correct/
lawful, is NOT a safety system, and is NOT the actuator (the robot's own certified safety layer decides).
Profile of receipt/v1. Anchor via POST /v1/anchor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robot.v1RobotReceiptV1RobotReceiptPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Robot.V1RobotReceiptV1RobotReceiptPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.robot.v1RobotReceiptV1RobotReceiptPost().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robot.v1RobotReceiptV1RobotReceiptPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Robot.V1RobotReceiptV1RobotReceiptPostError](src/resources/robot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.robot.v1RobotReceiptV1RobotReceiptPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Robot.V1RobotReceiptV1RobotReceiptPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sanctions

> Source: [Sanctions](src/resources/sanctions.ts)

<details>
<summary><code>sanctionsScreenSanctionsGet(request?: Sanctions.SanctionsScreenSanctionsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Sanctions.SanctionsScreenSanctionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Screen a name against the US OFAC SDN + UK Sanctions List (FCDO, Open Government Licence) — each match
tagged with its list (US-OFAC | UK). A match means the party is sanctioned — legally binding the instant
it's posted; models can't know recent designations. Confirm the full official entry before acting.
(Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sanctions.sanctionsScreenSanctionsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Sanctions.SanctionsScreenSanctionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sanctions.sanctionsScreenSanctionsGet().asApiResult();
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
| <code>name?</code> | <code>string</code> | name to screen against the US OFAC SDN + UK Sanctions List |
| <code>program?</code> | <code>string</code> | optional program/regime filter, e.g. IRAN, CUBA, or a UK regime |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sanctions.sanctionsScreenSanctionsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Sanctions.SanctionsScreenSanctionsGetError](src/resources/sanctions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sanctions.sanctionsScreenSanctionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Sanctions.SanctionsScreenSanctionsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Satellite

> Source: [Satellite](src/resources/satellite.ts)

<details>
<summary><code>satelliteSatelliteGet(request: Satellite.SatelliteSatelliteGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Satellite.SatelliteSatelliteGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real-time position of ANY satellite by NORAD id — true SGP4 propagation of the latest live
CelesTrak TLE to the current instant: exact lat/lon, altitude, velocity, ground-footprint radius,
the speed-of-light latency floor, and the TLE's age. Optionally a forward ground-track. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.satellite.satelliteSatelliteGet({ noradId: 1 });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Satellite.SatelliteSatelliteGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.satellite.satelliteSatelliteGet({ noradId: 1 }).asApiResult();
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
| <code>noradId</code> | <code>number</code> | NORAD catalog number, e.g. 25544 (ISS), 20580 (Hubble), 44714 (a Starlink) |
| <code>trackMinutes?</code> | <code>number</code> | also return a predicted ground-track this many minutes ahead (0 = none)<br>**Default**: 0 |
| <code>stepSeconds?</code> | <code>number</code> | ground-track sampling step in seconds<br>**Default**: 60 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.satellite.satelliteSatelliteGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Satellite.SatelliteSatelliteGetError](src/resources/satellite.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.satellite.satelliteSatelliteGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Satellite.SatelliteSatelliteGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Satellites

> Source: [Satellites](src/resources/satellites.ts)

<details>
<summary><code>satellitesSatellitesGet(request?: Satellites.SatellitesSatellitesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Satellites.SatellitesSatellitesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Satellite/constellation catalog (Starlink, GPS, stations…) with altitude, orbital period, and
a derived light-speed round-trip latency to ground — the physics floor for orbital networks. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.satellites.satellitesSatellitesGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Satellites.SatellitesSatellitesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.satellites.satellitesSatellitesGet().asApiResult();
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
| <code>group?</code> | <code>string</code> | starlink, stations, gps-ops, oneweb, galileo, weather, active, geo<br>**Default**: "starlink" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.satellites.satellitesSatellitesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Satellites.SatellitesSatellitesGetError](src/resources/satellites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.satellites.satellitesSatellitesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Satellites.SatellitesSatellitesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SecFilings

> Source: [SecFilings](src/resources/sec-filings.ts)

<details>
<summary><code>secFilingsSecFilingsGet(request?: SecFilings.SecFilingsSecFilingsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, SecFilings.SecFilingsSecFilingsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recent SEC EDGAR filings for a US public company (8-K / 10-K / S-1 / Form 4). US public domain.
(Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.secFilings.secFilingsSecFilingsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type SecFilings.SecFilingsSecFilingsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.secFilings.secFilingsSecFilingsGet().asApiResult();
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
| <code>ticker?</code> | <code>string</code> | US stock ticker, e.g. AAPL, NVDA, TSLA |
| <code>form?</code> | <code>string</code> | filter by form: 8-K, 10-K, 10-Q, S-1, 4 ... |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 15 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.secFilings.secFilingsSecFilingsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[SecFilings.SecFilingsSecFilingsGetError](src/resources/sec-filings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.secFilings.secFilingsSecFilingsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, SecFilings.SecFilingsSecFilingsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Security

> Source: [Security](src/resources/security.ts)

<details>
<summary><code>packageHealthEpPackageHealthGet(request: Security.PackageHealthEpPackageHealthGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Security.PackageHealthEpPackageHealthGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Package health & security posture from deps.dev (Google Open Source Insights): latest version,
license, known-advisory count, the OpenSSF Scorecard (0-10 + weakest checks) and popularity. The
'should I depend on this?' check — pairs with /advisories/check and /versions. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.security.packageHealthEpPackageHealthGet({ package: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Security.PackageHealthEpPackageHealthGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.security
  .packageHealthEpPackageHealthGet({ package: "some example string" })
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
| <code>package</code> | <code>string</code> | package name, e.g. lodash, requests, django |
| <code>ecosystem?</code> | <code>string</code> | npm \| pypi \| go \| maven \| cargo \| nuget \| rubygems<br>**Default**: "npm" |
| <code>version?</code> | <code>[Version](src/models/unions/version.ts)</code> | exact version (optional; defaults to latest) |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.security.packageHealthEpPackageHealthGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Security.PackageHealthEpPackageHealthGetError](src/resources/security.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.security.packageHealthEpPackageHealthGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Security.PackageHealthEpPackageHealthGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServersApi

> Source: [ServersApi](src/resources/servers-api.ts)

<details>
<summary><code>serversServersGet(request?: ServersApi.ServersServersGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ServersApi.ServersServersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search the MCP server registry — find AI agent tools. Most-starred first. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serversApi.serversServersGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ServersApi.ServersServersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serversApi.serversServersGet().asApiResult();
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
| <code>q?</code> | <code>[Q](src/models/unions/q.ts)</code> | match server name/description |
| <code>hasRemote?</code> | <code>[HasRemote](src/models/unions/has-remote.ts)</code> | only servers with a hosted/remote endpoint |
| <code>minStars?</code> | <code>[MinStars](src/models/unions/min-stars.ts)</code> | minimum GitHub stars |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serversApi.serversServersGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ServersApi.ServersServersGetError](src/resources/servers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serversApi.serversServersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ServersApi.ServersServersGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Shipping

> Source: [Shipping](src/resources/shipping.ts)

<details>
<summary><code>shippingEpShippingGet(request?: Shipping.ShippingEpShippingGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Shipping.ShippingEpShippingGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Global shipping & maritime: daily ship transits through the world's 28 chokepoints (Suez, Panama,
Hormuz, Malacca, Taiwan...) via IMF PortWatch, the ~2,065-port global registry, and LIVE Baltic vessel
positions (AIS, Digitraffic) enriched with ship name/type/destination. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.shippingEpShippingGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Shipping.ShippingEpShippingGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping.shippingEpShippingGet().asApiResult();
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
| <code>scope?</code> | <code>string</code> | chokepoints \| ports \| vessels<br>**Default**: "chokepoints" |
| <code>query?</code> | <code>string</code> | filter by name/country (chokepoints, ports) or ship name/destination (vessels) |
| <code>region?</code> | <code>string</code> | Baltic preset for scope=vessels: baltic, helsinki, stockholm, kiel, gdansk, copenhagen, riga, gulf-of-finland<br>**Default**: "baltic" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 30 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.shippingEpShippingGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Shipping.ShippingEpShippingGetError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.shippingEpShippingGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Shipping.ShippingEpShippingGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Signals

> Source: [Signals](src/resources/signals.ts)

<details>
<summary><code>signalsSignalsGet(request: Signals.SignalsSignalsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Signals.SignalsSignalsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DERIVED proprietary signals computed from Dynamic Feed's recorded history — realized
volatility, price range, and how the cross-exchange spread is trending (widening/narrowing).
Branded numbers only we have; richer as history accumulates. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signals.signalsSignalsGet({ symbol: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Signals.SignalsSignalsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signals.signalsSignalsGet({ symbol: "some example string" }).asApiResult();
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
| <code>symbol</code> | <code>string</code> | instrument symbol, e.g. BTC, ETH, XAU, EURUSD |
| <code>hours?</code> | <code>number</code> | window<br>**Default**: 24 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signals.signalsSignalsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Signals.SignalsSignalsGetError](src/resources/signals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signals.signalsSignalsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Signals.SignalsSignalsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Signup

> Source: [Signup](src/resources/signup.ts)

<details>
<summary><code>signupSignupPost(request?: Signup.SignupSignupPostRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Signup.SignupSignupPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a free API key instantly.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signup.signupSignupPost();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Signup.SignupSignupPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signup.signupSignupPost().asApiResult();
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
| <code>body?</code> | <code>[BodySignupSignupPost](src/models/body-signup-signup-post.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signup.signupSignupPost(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Signup.SignupSignupPostError](src/resources/signup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signup.signupSignupPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Signup.SignupSignupPostError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SpaceWeather

> Source: [SpaceWeather](src/resources/space-weather.ts)

<details>
<summary><code>spaceWeatherSpaceWeatherGet(request?: SpaceWeather.SpaceWeatherSpaceWeatherGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, SpaceWeather.SpaceWeatherSpaceWeatherGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Full space-weather now-cast — NOAA R/S/G storm scales, geomagnetic Kp, solar wind (speed/
density/Bz, the storm driver) and the latest solar X-ray flux/flare. Affects satellite comms &
drag, GPS, HF radio, power grids and orbital-compute radiation/power. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.spaceWeather.spaceWeatherSpaceWeatherGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type SpaceWeather.SpaceWeatherSpaceWeatherGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.spaceWeather.spaceWeatherSpaceWeatherGet().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.spaceWeather.spaceWeatherSpaceWeatherGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[SpaceWeather.SpaceWeatherSpaceWeatherGetError](src/resources/space-weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.spaceWeather.spaceWeatherSpaceWeatherGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, SpaceWeather.SpaceWeatherSpaceWeatherGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sports

> Source: [Sports](src/resources/sports.ts)

<details>
<summary><code>sportsSportsGet(request?: Sports.SportsSportsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Sports.SportsSportsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Global ATTENTION + official schedule for a sporting event/team/competition — e.g. the 2026 FIFA
World Cup. Attention = daily Wikipedia article views by language edition, with 7-day momentum & peak;
plus hosts, start/end dates and sport from Wikidata. Source: Wikimedia Pageviews + Wikidata (CC0) —
this is the neutral global-attention layer, NOT live scores, fixtures or odds. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sports.sportsSportsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Sports.SportsSportsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sports.sportsSportsGet().asApiResult();
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
| <code>topic?</code> | <code>string</code> | event/team/competition, e.g. '2026 FIFA World Cup'<br>**Default**: "2026 FIFA World Cup" |
| <code>days?</code> | <code>number</code> | attention window in days<br>**Default**: 30 |
| <code>lang?</code> | <code>string</code> | primary Wikipedia language edition (en, es, pt, fr, ...)<br>**Default**: "en" |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sports.sportsSportsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Sports.SportsSportsGetError](src/resources/sports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sports.sportsSportsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Sports.SportsSportsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>worldcupRouteWorldcupGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

2026 FIFA World Cup fixtures + final results (openfootball, public domain). Keyless — powers the
homepage World Cup section and any agent. See also the keyless `world_cup` MCP tool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sports.worldcupRouteWorldcupGet();
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
const result = await client.sports.worldcupRouteWorldcupGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sports.worldcupRouteWorldcupGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.sports.worldcupRouteWorldcupGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Status

> Source: [Status](src/resources/status.ts)

<details>
<summary><code>statusStatusGet(request?: Status.StatusStatusGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Status.StatusStatusGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live up/down/degraded status for major AI & dev services. Issues first. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.status.statusStatusGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Status.StatusStatusGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.status.statusStatusGet().asApiResult();
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
| <code>category?</code> | <code>[Category](src/models/unions/category.ts)</code> | ai \| dev \| infra \| platform |
| <code>onlyIssues?</code> | <code>[OnlyIssues](src/models/unions/only-issues.ts)</code> | only services currently degraded/down |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.status.statusStatusGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Status.StatusStatusGetError](src/resources/status.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.status.statusStatusGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Status.StatusStatusGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tides

> Source: [Tides](src/resources/tides.ts)

<details>
<summary><code>tidesEpTidesGet(request?: Tides.TidesEpTidesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tides.TidesEpTidesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current water level + next high/low tides for a US coastal station (NOAA CO-OPS, public domain).
SCOPE: US stations only. Not for navigation — confirm against official NOAA tide tables. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tides.tidesEpTidesGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tides.TidesEpTidesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tides.tidesEpTidesGet().asApiResult();
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
| <code>station?</code> | <code>string</code> | NOAA station id, e.g. 9414290 |
| <code>location?</code> | <code>string</code> | or a preset: san francisco, new york, boston, seattle, honolulu, … |
| <code>units?</code> | <code>string</code> | english (feet) \| metric<br>**Default**: "english" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 6 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tides.tidesEpTidesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tides.TidesEpTidesGetError](src/resources/tides.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tides.tidesEpTidesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tides.TidesEpTidesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Time

> Source: [Time](src/resources/time.ts)

<details>
<summary><code>timeEpTimeGet(request?: Time.TimeEpTimeGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Time.TimeEpTimeGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current date/time anywhere — an LLM has no clock. (Requires API key; keyless over MCP.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.time.timeEpTimeGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Time.TimeEpTimeGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.time.timeEpTimeGet().asApiResult();
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
| <code>tz?</code> | <code>string</code> | IANA timezone, e.g. America/New_York (default UTC)<br>**Default**: "UTC" |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.time.timeEpTimeGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Time.TimeEpTimeGetError](src/resources/time.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.time.timeEpTimeGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Time.TimeEpTimeGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TreasuryYields

> Source: [TreasuryYields](src/resources/treasury-yields.ts)

<details>
<summary><code>treasuryYieldsTreasuryYieldsGet(request?: TreasuryYields.TreasuryYieldsTreasuryYieldsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, TreasuryYields.TreasuryYieldsTreasuryYieldsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

US Treasury daily par yield curve + 10Y-2Y / 10Y-3M spreads (the recession signal). Keyless
source, US public domain. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.treasuryYields.treasuryYieldsTreasuryYieldsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type TreasuryYields.TreasuryYieldsTreasuryYieldsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.treasuryYields.treasuryYieldsTreasuryYieldsGet().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.treasuryYields.treasuryYieldsTreasuryYieldsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[TreasuryYields.TreasuryYieldsTreasuryYieldsGetError](src/resources/treasury-yields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.treasuryYields.treasuryYieldsTreasuryYieldsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, TreasuryYields.TreasuryYieldsTreasuryYieldsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VerifiedFacts

> Source: [VerifiedFacts](src/resources/verified-facts.ts)

<details>
<summary><code>postV1Answer(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a
question, get ONE Ed25519-signed answer object carrying the complete evidence chain: the exact
calls made, the exact source readings (fact/v1), per-premise verdicts computed by the published
deterministic rule answer-eval/1, and a confidence whose formula ships inside the payload
(answer-conf/1) so anyone can recompute it. No model in the loop: unroutable input gets a
SIGNED refusal that states exactly what IS covered. Signed proves integrity, not truth;
everything is advisory evidence. Keyless; GET returns usage + coverage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiedFacts.postV1Answer();
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
const result = await client.verifiedFacts.postV1Answer().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiedFacts.postV1Answer()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.verifiedFacts.postV1Answer().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postV1Facts(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST
verification block. Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed
reported this exact value at this time, unaltered (integrity); 'verified' is reserved for facts
independently corroborated by 2+ sources AND still fresh. confidence is a transparent composite
of the exposed signals, never decorative; a single-source reading is honestly verified:false.
Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or
POST {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiedFacts.postV1Facts();
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
const result = await client.verifiedFacts.postV1Facts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiedFacts.postV1Facts()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.verifiedFacts.postV1Facts().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1AnswerV1AnswerGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a
question, get ONE Ed25519-signed answer object carrying the complete evidence chain: the exact
calls made, the exact source readings (fact/v1), per-premise verdicts computed by the published
deterministic rule answer-eval/1, and a confidence whose formula ships inside the payload
(answer-conf/1) so anyone can recompute it. No model in the loop: unroutable input gets a
SIGNED refusal that states exactly what IS covered. Signed proves integrity, not truth;
everything is advisory evidence. Keyless; GET returns usage + coverage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiedFacts.v1AnswerV1AnswerGet();
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
const result = await client.verifiedFacts.v1AnswerV1AnswerGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiedFacts.v1AnswerV1AnswerGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.verifiedFacts.v1AnswerV1AnswerGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1FactsV1FactsGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST
verification block. Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed
reported this exact value at this time, unaltered (integrity); 'verified' is reserved for facts
independently corroborated by 2+ sources AND still fresh. confidence is a transparent composite
of the exposed signals, never decorative; a single-source reading is honestly verified:false.
Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or
POST {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiedFacts.v1FactsV1FactsGet();
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
const result = await client.verifiedFacts.v1FactsV1FactsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiedFacts.v1FactsV1FactsGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.verifiedFacts.v1FactsV1FactsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1StateOfMcpTrendV1StateOfMcpTrendGet(request?: VerifiedFacts.V1StateOfMcpTrendV1StateOfMcpTrendGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, VerifiedFacts.V1StateOfMcpTrendV1StateOfMcpTrendGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Growth over time: the headline State of MCP numbers, one point per daily snapshot, oldest
first. The trend IS the value (server count, remote share, keyless share drifting over time).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiedFacts.v1StateOfMcpTrendV1StateOfMcpTrendGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type VerifiedFacts.V1StateOfMcpTrendV1StateOfMcpTrendGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiedFacts.v1StateOfMcpTrendV1StateOfMcpTrendGet().asApiResult();
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
| <code>days?</code> | <code>number</code> | -<br>**Default**: 365 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiedFacts.v1StateOfMcpTrendV1StateOfMcpTrendGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[VerifiedFacts.V1StateOfMcpTrendV1StateOfMcpTrendGetError](src/resources/verified-facts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiedFacts.v1StateOfMcpTrendV1StateOfMcpTrendGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, VerifiedFacts.V1StateOfMcpTrendV1StateOfMcpTrendGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1StateOfMcpV1StateOfMcpGet(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

STATE OF MCP — a signed census of the Model Context Protocol ecosystem, measured from the
official registry: how many servers exist, how many are remote, and how many are keyless. One
Ed25519-signed envelope you can verify against /.well-known/keys; a primary-source figure, not
a claim. Served from the latest daily snapshot (the crawl runs off the request path). Keyless.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiedFacts.v1StateOfMcpV1StateOfMcpGet();
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
const result = await client.verifiedFacts.v1StateOfMcpV1StateOfMcpGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiedFacts.v1StateOfMcpV1StateOfMcpGet()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.verifiedFacts.v1StateOfMcpV1StateOfMcpGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Versions

> Source: [Versions](src/resources/versions.ts)

<details>
<summary><code>versionsVersionsGet(request?: Versions.VersionsVersionsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Versions.VersionsVersionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Latest stable versions & end-of-life dates for languages, runtimes, frameworks,
databases & OSes. Answers 'what's the latest X?' and 'is version Y still supported?'.
Each row has a `status` (supported/nearing-eol/end-of-life) + provenance. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versions.versionsVersionsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Versions.VersionsVersionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versions.versionsVersionsGet().asApiResult();
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
| <code>product?</code> | <code>[Product](src/models/unions/product.ts)</code> | exact product, e.g. python, nodejs, postgresql |
| <code>q?</code> | <code>[Q](src/models/unions/q.ts)</code> | match a product name |
| <code>category?</code> | <code>[Category](src/models/unions/category.ts)</code> | language \| runtime \| framework \| database \| os \| tool |
| <code>onlySupported?</code> | <code>[OnlySupported](src/models/unions/only-supported.ts)</code> | exclude end-of-life release lines |
| <code>onlyLts?</code> | <code>[OnlyLts](src/models/unions/only-lts.ts)</code> | only long-term-support lines |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versions.versionsVersionsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Versions.VersionsVersionsGetError](src/resources/versions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versions.versionsVersionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Versions.VersionsVersionsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Volcanoes

> Source: [Volcanoes](src/resources/volcanoes.ts)

<details>
<summary><code>volcanoesEpVolcanoesGet(request?: Volcanoes.VolcanoesEpVolcanoesGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Volcanoes.VolcanoesEpVolcanoesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current US volcano alert levels (USGS Volcano Hazards Program, public domain). 'elevated' = only
volcanoes at YELLOW/ORANGE/RED or ADVISORY/WATCH/WARNING; 'all' = every USGS-monitored volcano. Each
carries the ground alert level, aviation colour code and the official notice URL. SCOPE: US volcanoes
only — the global Smithsonian GVP dataset is licensed non-commercial. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.volcanoes.volcanoesEpVolcanoesGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Volcanoes.VolcanoesEpVolcanoesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.volcanoes.volcanoesEpVolcanoesGet().asApiResult();
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
| <code>status?</code> | <code>string</code> | 'elevated' (default — only active alerts) or 'all'<br>**Default**: "elevated" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.volcanoes.volcanoesEpVolcanoesGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Volcanoes.VolcanoesEpVolcanoesGetError](src/resources/volcanoes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.volcanoes.volcanoesEpVolcanoesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Volcanoes.VolcanoesEpVolcanoesGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WaterLevels

> Source: [WaterLevels](src/resources/water-levels.ts)

<details>
<summary><code>waterLevelsWaterLevelsGet(request?: WaterLevels.WaterLevelsWaterLevelsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, WaterLevels.WaterLevelsWaterLevelsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real-time US river levels — gage height + streamflow from USGS (a keyless public-domain source):
by state, USGS site number(s), or a curated set of major rivers. Rising gage = flood risk; unusually
low flow = drought. Each reading carries its USGS observation time. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.waterLevels.waterLevelsWaterLevelsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type WaterLevels.WaterLevelsWaterLevelsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.waterLevels.waterLevelsWaterLevelsGet().asApiResult();
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
| <code>state?</code> | <code>string</code> | 2-letter US state code, e.g. TX, CA (optional) |
| <code>site?</code> | <code>string</code> | USGS site number(s), comma-separated (optional) |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.waterLevels.waterLevelsWaterLevelsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[WaterLevels.WaterLevelsWaterLevelsGetError](src/resources/water-levels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.waterLevels.waterLevelsWaterLevelsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, WaterLevels.WaterLevelsWaterLevelsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WeatherAlerts

> Source: [WeatherAlerts](src/resources/weather-alerts.ts)

<details>
<summary><code>weatherAlertsWeatherAlertsGet(request?: WeatherAlerts.WeatherAlertsWeatherAlertsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, WeatherAlerts.WeatherAlertsWeatherAlertsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Active US NWS weather alerts/warnings — life-safety watches/warnings/advisories. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weatherAlerts.weatherAlertsWeatherAlertsGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type WeatherAlerts.WeatherAlertsWeatherAlertsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weatherAlerts.weatherAlertsWeatherAlertsGet().asApiResult();
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
| <code>area?</code> | <code>string</code> | 2-letter US state (CA, TX...) or marine zone; blank = nationwide Severe/Extreme |
| <code>event?</code> | <code>string</code> | filter by event type, e.g. Flood, Tornado, Heat |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weatherAlerts.weatherAlertsWeatherAlertsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[WeatherAlerts.WeatherAlertsWeatherAlertsGetError](src/resources/weather-alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weatherAlerts.weatherAlertsWeatherAlertsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, WeatherAlerts.WeatherAlertsWeatherAlertsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Weather

> Source: [Weather](src/resources/weather.ts)

<details>
<summary><code>v1OpenweatherCurrentV1OpenweatherCurrentGet(request?: Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

LEGACY ALIAS — provider is Open-Meteo. Returns the canonical current_weather envelope
(app/open_meteo.py: CC-BY 4.0, attribution, freshness, cross-source concordance) plus a
provider-identity notice. Prefer the current_weather tool via POST /v1/batch or MCP.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.v1OpenweatherCurrentV1OpenweatherCurrentGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather.v1OpenweatherCurrentV1OpenweatherCurrentGet().asApiResult();
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
| <code>city?</code> | <code>[City1](src/models/unions/city1.ts)</code> | - |
| <code>lat?</code> | <code>[Lat1](src/models/unions/lat1.ts)</code> | - |
| <code>lon?</code> | <code>[Lon1](src/models/unions/lon1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.v1OpenweatherCurrentV1OpenweatherCurrentGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.v1OpenweatherCurrentV1OpenweatherCurrentGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1OpenweatherForecastV1OpenweatherForecastGet(request?: Weather.V1OpenweatherForecastV1OpenweatherForecastGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Weather.V1OpenweatherForecastV1OpenweatherForecastGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

LEGACY ALIAS — provider is Open-Meteo. Returns the canonical multi-model forecast envelope
(app/open_meteo.py) plus a provider-identity notice. Prefer weather_forecast via POST /v1/batch
or MCP.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.v1OpenweatherForecastV1OpenweatherForecastGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Weather.V1OpenweatherForecastV1OpenweatherForecastGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather.v1OpenweatherForecastV1OpenweatherForecastGet().asApiResult();
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
| <code>city?</code> | <code>[City1](src/models/unions/city1.ts)</code> | - |
| <code>lat?</code> | <code>[Lat1](src/models/unions/lat1.ts)</code> | - |
| <code>lon?</code> | <code>[Lon1](src/models/unions/lon1.ts)</code> | - |
| <code>days?</code> | <code>number</code> | -<br>**Default**: 5 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.v1OpenweatherForecastV1OpenweatherForecastGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Weather.V1OpenweatherForecastV1OpenweatherForecastGetError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.v1OpenweatherForecastV1OpenweatherForecastGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Weather.V1OpenweatherForecastV1OpenweatherForecastGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>weatherWeatherGet(request?: Weather.WeatherWeatherGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Weather.WeatherWeatherGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current weather anywhere — by city name (geocoded) or lat/lon. Temperature, feels-like,
wind, humidity, precipitation & conditions, live from Open-Meteo. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.weatherWeatherGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Weather.WeatherWeatherGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather.weatherWeatherGet().asApiResult();
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
| <code>city?</code> | <code>[City](src/models/unions/city.ts)</code> | city name, e.g. London, Tokyo, New York |
| <code>lat?</code> | <code>[Lat](src/models/unions/lat.ts)</code> | latitude (alternative to city) |
| <code>lon?</code> | <code>[Lon](src/models/unions/lon.ts)</code> | longitude (alternative to city) |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.weatherWeatherGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Weather.WeatherWeatherGetError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.weatherWeatherGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Weather.WeatherWeatherGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WhatsNew

> Source: [WhatsNew](src/resources/whats-new.ts)

<details>
<summary><code>whatsNewEpWhatsNewGet(request?: WhatsNew.WhatsNewEpWhatsNewGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, WhatsNew.WhatsNewEpWhatsNewGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What an AI has missed since its training cutoff — a LIVE snapshot of the current world
(trending model, live prices, top exploited CVE, latest versions, a headline, fastest AI API)
with a plain-English summary. The 'pulse' every connecting model can read. (Requires API key on
REST; the same tool is keyless over MCP.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.whatsNew.whatsNewEpWhatsNewGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type WhatsNew.WhatsNewEpWhatsNewGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatsNew.whatsNewEpWhatsNewGet().asApiResult();
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
| <code>cutoff?</code> | <code>string</code> | your knowledge cutoff if known, e.g. 2024-10 (optional) |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatsNew.whatsNewEpWhatsNewGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[WhatsNew.WhatsNewEpWhatsNewGetError](src/resources/whats-new.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatsNew.whatsNewEpWhatsNewGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, WhatsNew.WhatsNewEpWhatsNewGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Wildfires

> Source: [Wildfires](src/resources/wildfires.ts)

<details>
<summary><code>wildfiresWildfiresGet(request?: Wildfires.WildfiresWildfiresGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Wildfires.WildfiresWildfiresGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Active US wildfires (NIFC WFIGS) — incident name, size in acres, % contained, cause, state and
location. The 'how big / how contained' detail hotspot feeds can't give. Largest first. (Requires API key.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wildfires.wildfiresWildfiresGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Wildfires.WildfiresWildfiresGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wildfires.wildfiresWildfiresGet().asApiResult();
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
| <code>state?</code> | <code>[State](src/models/unions/state.ts)</code> | filter to a US state, e.g. CA, TX (2-letter) |
| <code>onlyUncontained?</code> | <code>boolean</code> | only fires below 100% containment<br>**Default**: false |
| <code>minAcres?</code> | <code>number</code> | minimum incident size in acres<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wildfires.wildfiresWildfiresGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Wildfires.WildfiresWildfiresGetError](src/resources/wildfires.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wildfires.wildfiresWildfiresGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Wildfires.WildfiresWildfiresGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WorldPulse

> Source: [WorldPulse](src/resources/world-pulse.ts)

<details>
<summary><code>worldPulseEpWorldPulseGet(request?: WorldPulse.WorldPulseEpWorldPulseGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, WorldPulse.WorldPulseEpWorldPulseGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What's happening on Earth right now — one cross-domain live digest. (Key on REST; keyless on MCP.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.worldPulse.worldPulseEpWorldPulseGet();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type WorldPulse.WorldPulseEpWorldPulseGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.worldPulse.worldPulseEpWorldPulseGet().asApiResult();
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
| <code>xApiKey?</code> | <code>[XApiKey](src/models/unions/xapi-key.ts)</code> | - |
| <code>xRapidapiProxySecret?</code> | <code>[XRapidapiProxySecret](src/models/unions/xrapidapi-proxy-secret.ts)</code> | - |
| <code>xRapidapiUser?</code> | <code>[XRapidapiUser](src/models/unions/xrapidapi-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.worldPulse.worldPulseEpWorldPulseGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[WorldPulse.WorldPulseEpWorldPulseGetError](src/resources/world-pulse.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.worldPulse.worldPulseEpWorldPulseGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, WorldPulse.WorldPulseEpWorldPulseGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DynamicFeedError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

