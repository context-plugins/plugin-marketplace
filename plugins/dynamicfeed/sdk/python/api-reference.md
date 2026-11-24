# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [DynamicFeedClient](dynamic_feed/client.py)

## Advisories

> Source: [Advisories](dynamic_feed/apis/advisories.py)

<details>
<summary><code>def advisories_advisories_get(*, q: str | None = None, package: str | None = None, ecosystem: str | None = None, severity: str | None = None, min_cvss: float | None = None, limit: int | None = 50, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.advisories.advisories_advisories_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AdvisoriesAdvisoriesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.advisories.advisories_advisories_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AdvisoriesAdvisoriesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | match summary / package / CVE / GHSA id<br>**Default**: <code>None</code> |
| <code>package</code> | <code>str \| None</code> | affected package name, e.g. lodash, requests<br>**Default**: <code>None</code> |
| <code>ecosystem</code> | <code>str \| None</code> | npm \| pip \| maven \| go \| rubygems \| nuget \| composer \| ...<br>**Default**: <code>None</code> |
| <code>severity</code> | <code>str \| None</code> | low \| moderate \| high \| critical<br>**Default**: <code>None</code> |
| <code>min_cvss</code> | <code>float \| None</code> | minimum CVSS score (0-10)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[AdvisoriesAdvisoriesGetErrorBody](dynamic_feed/errors/advisories_advisories_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def advisories_check_advisories_check_get(package: str, *, version: str | None = None, ecosystem: str | None = None, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.advisories.advisories_check_advisories_check_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AdvisoriesCheckAdvisoriesCheckGetErrorBody
```

**Async**

```python
try:
    response = await async_client.advisories.advisories_check_advisories_check_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AdvisoriesCheckAdvisoriesCheckGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>package</code> | <code>str</code> | package name, e.g. lodash, requests. Maven needs the full 'group:artifact' coordinate, e.g. org.apache.logging.log4j:log4j-core |
| <code>version</code> | <code>str \| None</code> | exact version, e.g. 4.17.10<br>**Default**: <code>None</code> |
| <code>ecosystem</code> | <code>str \| None</code> | npm \| pip \| maven \| go \| rubygems \| nuget \| cargo \| composer<br>**Default**: <code>None</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[AdvisoriesCheckAdvisoriesCheckGetErrorBody](dynamic_feed/errors/advisories_check_advisories_check_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Agent

> Source: [Agent](dynamic_feed/apis/agent.py)

<details>
<summary><code>def post_v1_explain(*, subject: str | None = "", request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.post_v1_explain()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostV1ExplainErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.post_v1_explain()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostV1ExplainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subject</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[PostV1ExplainErrorBody](dynamic_feed/errors/post_v1_explain_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def schemas_index_schemas_index_json_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.schemas_index_schemas_index_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.schemas_index_schemas_index_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_agent_receipt_v1_agent_receipt_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_agent_receipt_v1_agent_receipt_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_agent_receipt_v1_agent_receipt_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_asof_v1_asof_get(tool: str, t: str, *, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_asof_v1_asof_get("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1AsofV1AsofGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_asof_v1_asof_get("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1AsofV1AsofGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tool</code> | <code>str</code> | tool name, e.g. current_weather (the keyless MCP tool names) |
| <code>t</code> | <code>str</code> | ISO-8601 timestamp, e.g. 2026-06-10T14:30:00Z |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1AsofV1AsofGetErrorBody](dynamic_feed/errors/v1_asof_v1_asof_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_attest_v1_attest_get(metric: str, threshold: float, *, op: str | None = "gte", lat: float | None = None, lon: float | None = None, city: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_attest_v1_attest_get("some example string", 1.5)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1AttestV1AttestGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_attest_v1_attest_get("some example string", 1.5)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1AttestV1AttestGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>metric</code> | <code>str</code> | Value sent with the request. |
| <code>threshold</code> | <code>float</code> | Value sent with the request. |
| <code>op</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>"gte"</code> |
| <code>lat</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>city</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1AttestV1AttestGetErrorBody](dynamic_feed/errors/v1_attest_v1_attest_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_batch_v1_batch_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_batch_v1_batch_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_batch_v1_batch_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_benchmark_history_v1_benchmark_history_get(*, days: int | None = 90, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_benchmark_history_v1_benchmark_history_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_benchmark_history_v1_benchmark_history_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>90</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody](dynamic_feed/errors/v1_benchmark_history_v1_benchmark_history_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_benchmark_v1_benchmark_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_benchmark_v1_benchmark_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_benchmark_v1_benchmark_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_bundle_v1_bundles_bundle_id_get(bundle_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One curated tool bundle by id (e.g. devsecops, weather-climate, finance-markets).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_bundle_v1_bundles_bundle_id_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1BundleV1BundlesBundleIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_bundle_v1_bundles_bundle_id_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1BundleV1BundlesBundleIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bundle_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1BundleV1BundlesBundleIdGetErrorBody](dynamic_feed/errors/v1_bundle_v1_bundles_bundle_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_bundles_v1_bundles_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Curated tool BUNDLES per domain — pick the right tools for your agent's use-case fast (instead of
sifting all tools). Keyless: call any tool via POST /v1/batch; pay-per-call via /v1/pro/*.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_bundles_v1_bundles_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_bundles_v1_bundles_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_bushfire_v1_bushfire_get(*, lat: float | None = None, lon: float | None = None, radius_km: float | None = 150.0, state: str | None = "", limit: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_bushfire_v1_bushfire_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1BushfireV1BushfireGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_bushfire_v1_bushfire_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1BushfireV1BushfireGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>radius_km</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>150.0</code> |
| <code>state</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1BushfireV1BushfireGetErrorBody](dynamic_feed/errors/v1_bushfire_v1_bushfire_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_checkpoint_proof_v1_checkpoints_day_proof_get(day: str, *, kind: str | None = "ots", request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_checkpoint_proof_v1_checkpoints_day_proof_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1CheckpointProofV1CheckpointsDayProofGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_checkpoint_proof_v1_checkpoints_day_proof_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1CheckpointProofV1CheckpointsDayProofGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>day</code> | <code>str</code> | Value sent with the request. |
| <code>kind</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>"ots"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1CheckpointProofV1CheckpointsDayProofGetErrorBody](dynamic_feed/errors/v1_checkpoint_proof_v1_checkpoints_day_proof_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_checkpoints_v1_checkpoints_get(*, limit: int | None = 30, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_checkpoints_v1_checkpoints_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1CheckpointsV1CheckpointsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_checkpoints_v1_checkpoints_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1CheckpointsV1CheckpointsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>30</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1CheckpointsV1CheckpointsGetErrorBody](dynamic_feed/errors/v1_checkpoints_v1_checkpoints_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_discover_get_v1_discover_get(*, need: str | None = "", limit: int | None = 8, external: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_discover_get_v1_discover_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1DiscoverGetV1DiscoverGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_discover_get_v1_discover_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1DiscoverGetV1DiscoverGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>need</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>8</code> |
| <code>external</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1DiscoverGetV1DiscoverGetErrorBody](dynamic_feed/errors/v1_discover_get_v1_discover_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_discover_post_v1_discover_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

POST twin of GET /v1/discover: {"need": "...", "limit": 8, "external": true}.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_discover_post_v1_discover_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_discover_post_v1_discover_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_drift_v1_drift_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_drift_v1_drift_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_drift_v1_drift_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_eval_receipt_sample_v1_eval_receipt_sample_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_eval_receipt_sample_v1_eval_receipt_sample_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_eval_receipt_sample_v1_eval_receipt_sample_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_eval_receipt_v1_eval_receipt_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_eval_receipt_v1_eval_receipt_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1EvalReceiptV1EvalReceiptPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_eval_receipt_v1_eval_receipt_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1EvalReceiptV1EvalReceiptPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1EvalReceiptV1EvalReceiptPostErrorBody](dynamic_feed/errors/v1_eval_receipt_v1_eval_receipt_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_evidence_wildfire_v1_evidence_wildfire_get(lat: float, lon: float, *, detected_at: str | None = None, detector: str | None = "the detector", place: str | None = None, confidence: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_evidence_wildfire_v1_evidence_wildfire_get(1.5, 1.5)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1EvidenceWildfireV1EvidenceWildfireGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_evidence_wildfire_v1_evidence_wildfire_get(1.5, 1.5)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1EvidenceWildfireV1EvidenceWildfireGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | Value sent with the request. |
| <code>lon</code> | <code>float</code> | Value sent with the request. |
| <code>detected_at</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>detector</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>"the detector"</code> |
| <code>place</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>confidence</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1EvidenceWildfireV1EvidenceWildfireGetErrorBody](dynamic_feed/errors/v1_evidence_wildfire_v1_evidence_wildfire_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_explain_v1_explain_get(*, subject: str | None = "", request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_explain_v1_explain_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1ExplainV1ExplainGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_explain_v1_explain_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1ExplainV1ExplainGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subject</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1ExplainV1ExplainGetErrorBody](dynamic_feed/errors/v1_explain_v1_explain_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_exposure_report_v1_exposure_report_get(*, perils: str | None = "wind,flood,wildfire", lat: float | None = -33.8688, lon: float | None = 151.2093, place: str | None = None, organisation: str | None = None, use_case: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_exposure_report_v1_exposure_report_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1ExposureReportV1ExposureReportGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_exposure_report_v1_exposure_report_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1ExposureReportV1ExposureReportGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>perils</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>"wind,flood,wildfire"</code> |
| <code>lat</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>-33.8688</code> |
| <code>lon</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>151.2093</code> |
| <code>place</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>organisation</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>use_case</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1ExposureReportV1ExposureReportGetErrorBody](dynamic_feed/errors/v1_exposure_report_v1_exposure_report_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_guard_v1_guard_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_guard_v1_guard_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_guard_v1_guard_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_index_v1_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_index_v1_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_index_v1_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_inference_receipt_sample_v1_inference_receipt_sample_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_inference_receipt_sample_v1_inference_receipt_sample_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_inference_receipt_sample_v1_inference_receipt_sample_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_inference_receipt_v1_inference_receipt_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_inference_receipt_v1_inference_receipt_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1InferenceReceiptV1InferenceReceiptPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_inference_receipt_v1_inference_receipt_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1InferenceReceiptV1InferenceReceiptPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1InferenceReceiptV1InferenceReceiptPostErrorBody](dynamic_feed/errors/v1_inference_receipt_v1_inference_receipt_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_intensity_v1_intensity_get(lat: float, lon: float, *, peril: str | None = "flood", metric: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_intensity_v1_intensity_get(1.5, 1.5)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1IntensityV1IntensityGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_intensity_v1_intensity_get(1.5, 1.5)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1IntensityV1IntensityGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | Value sent with the request. |
| <code>lon</code> | <code>float</code> | Value sent with the request. |
| <code>peril</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>"flood"</code> |
| <code>metric</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1IntensityV1IntensityGetErrorBody](dynamic_feed/errors/v1_intensity_v1_intensity_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_me_v1_me_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Your key at a glance — plan, calls used today, daily quota and remaining. The per-user usage view
(the keyless MCP endpoint is unmetered fair-use).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_me_v1_me_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1MeV1MeGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_me_v1_me_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1MeV1MeGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1MeV1MeGetErrorBody](dynamic_feed/errors/v1_me_v1_me_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_nearby_v1_nearby_get(lat: float, lon: float, *, radius_km: float | None = 500.0, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_nearby_v1_nearby_get(1.5, 1.5)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NearbyV1NearbyGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_nearby_v1_nearby_get(1.5, 1.5)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NearbyV1NearbyGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | Value sent with the request. |
| <code>lon</code> | <code>float</code> | Value sent with the request. |
| <code>radius_km</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>500.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1NearbyV1NearbyGetErrorBody](dynamic_feed/errors/v1_nearby_v1_nearby_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_notarize_v1_notarize_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_notarize_v1_notarize_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotarizeV1NotarizePostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_notarize_v1_notarize_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotarizeV1NotarizePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1NotarizeV1NotarizePostErrorBody](dynamic_feed/errors/v1_notarize_v1_notarize_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_notary_entry_v1_notary_log_idx_get(idx: int, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One transparency-log entry by index, Ed25519-signed, with the recipe to recompute its
entry_hash and verify chain linkage. Keyless.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_notary_entry_v1_notary_log_idx_get(1)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotaryEntryV1NotaryLogIdxGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_notary_entry_v1_notary_log_idx_get(1)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotaryEntryV1NotaryLogIdxGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idx</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1NotaryEntryV1NotaryLogIdxGetErrorBody](dynamic_feed/errors/v1_notary_entry_v1_notary_log_idx_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_notary_feed_register_v1_notary_feeds_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_notary_feed_register_v1_notary_feeds_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_notary_feed_register_v1_notary_feeds_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody](dynamic_feed/errors/v1_notary_feed_register_v1_notary_feeds_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_notary_feeds_list_v1_notary_feeds_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Your registered continuous-notarization feeds (same X-API-Key): status, last hash, last log
index, next-run cadence.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_notary_feeds_list_v1_notary_feeds_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotaryFeedsListV1NotaryFeedsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_notary_feeds_list_v1_notary_feeds_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotaryFeedsListV1NotaryFeedsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1NotaryFeedsListV1NotaryFeedsGetErrorBody](dynamic_feed/errors/v1_notary_feeds_list_v1_notary_feeds_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_notary_head_v1_notary_log_head_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_notary_head_v1_notary_log_head_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_notary_head_v1_notary_log_head_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_notary_log_v1_notary_log_get(*, limit: int | None = 50, before: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_notary_log_v1_notary_log_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotaryLogV1NotaryLogGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_notary_log_v1_notary_log_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotaryLogV1NotaryLogGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>before</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1NotaryLogV1NotaryLogGetErrorBody](dynamic_feed/errors/v1_notary_log_v1_notary_log_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_notary_proof_v1_notary_log_idx_proof_get(idx: int, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_notary_proof_v1_notary_log_idx_proof_get(1)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotaryProofV1NotaryLogIdxProofGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_notary_proof_v1_notary_log_idx_proof_get(1)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1NotaryProofV1NotaryLogIdxProofGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idx</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1NotaryProofV1NotaryLogIdxProofGetErrorBody](dynamic_feed/errors/v1_notary_proof_v1_notary_log_idx_proof_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_pro_asof_v1_pro_asof_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_pro_asof_v1_pro_asof_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_pro_asof_v1_pro_asof_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_pro_batch_v1_pro_batch_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_pro_batch_v1_pro_batch_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_pro_batch_v1_pro_batch_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_pro_catalog_v1_pro_catalog_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_pro_catalog_v1_pro_catalog_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_pro_catalog_v1_pro_catalog_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_pro_tool_discover_v1_pro_tool_tool_get(tool: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_pro_tool_discover_v1_pro_tool_tool_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1ProToolDiscoverV1ProToolToolGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_pro_tool_discover_v1_pro_tool_tool_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1ProToolDiscoverV1ProToolToolGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tool</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1ProToolDiscoverV1ProToolToolGetErrorBody](dynamic_feed/errors/v1_pro_tool_discover_v1_pro_tool_tool_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_pro_tool_v1_pro_tool_tool_post(tool: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_pro_tool_v1_pro_tool_tool_post("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1ProToolV1ProToolToolPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_pro_tool_v1_pro_tool_tool_post("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1ProToolV1ProToolToolPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tool</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1ProToolV1ProToolToolPostErrorBody](dynamic_feed/errors/v1_pro_tool_v1_pro_tool_tool_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_proxy_witness_v1_proxy_witness_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_proxy_witness_v1_proxy_witness_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1ProxyWitnessV1ProxyWitnessPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_proxy_witness_v1_proxy_witness_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1ProxyWitnessV1ProxyWitnessPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1ProxyWitnessV1ProxyWitnessPostErrorBody](dynamic_feed/errors/v1_proxy_witness_v1_proxy_witness_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_receipt_v1_receipt_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_receipt_v1_receipt_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_receipt_v1_receipt_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_snapshot_v1_snapshot_get(*, date: str | None = "", request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_snapshot_v1_snapshot_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1SnapshotV1SnapshotGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_snapshot_v1_snapshot_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1SnapshotV1SnapshotGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1SnapshotV1SnapshotGetErrorBody](dynamic_feed/errors/v1_snapshot_v1_snapshot_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_sources_v1_sources_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_sources_v1_sources_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_sources_v1_sources_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_stamp_v1_stamp_post(*, x_api_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an independently verifiable record of submitted JSON.

`X-API-Key` is optional so the existing keyless signing behaviour remains available. When a
key is supplied it is always validated: portal `fx_live_` keys use the isolated Fluxdyne
runtime database boundary, while legacy keys keep their existing validation and metering path.
A signature establishes integrity and issuer identity; it does not establish that submitted
content is complete, scientifically valid, or true.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_stamp_v1_stamp_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StampV1StampPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_stamp_v1_stamp_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StampV1StampPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1StampV1StampPostErrorBody](dynamic_feed/errors/v1_stamp_v1_stamp_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_station_get_v1_station_station_id_get(station_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The public descriptor of a registered station (no owner identity). Keyless, so a verifier of a
station-receipt can see what the station is and what it reports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_station_get_v1_station_station_id_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StationGetV1StationStationIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_station_get_v1_station_station_id_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StationGetV1StationStationIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>station_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1StationGetV1StationStationIdGetErrorBody](dynamic_feed/errors/v1_station_get_v1_station_station_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_station_reading_v1_station_reading_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_station_reading_v1_station_reading_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StationReadingV1StationReadingPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_station_reading_v1_station_reading_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StationReadingV1StationReadingPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1StationReadingV1StationReadingPostErrorBody](dynamic_feed/errors/v1_station_reading_v1_station_reading_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_station_register_v1_station_register_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_station_register_v1_station_register_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StationRegisterV1StationRegisterPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_station_register_v1_station_register_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StationRegisterV1StationRegisterPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1StationRegisterV1StationRegisterPostErrorBody](dynamic_feed/errors/v1_station_register_v1_station_register_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_stream_v1_stream_get(*, tool: str | None = "", args: str | None = "", interval: float | None = 15.0, count: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_stream_v1_stream_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StreamV1StreamGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_stream_v1_stream_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StreamV1StreamGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tool</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>args</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>interval</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>15.0</code> |
| <code>count</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1StreamV1StreamGetErrorBody](dynamic_feed/errors/v1_stream_v1_stream_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_trigger_receipt_v1_trigger_receipt_get(metric: str, threshold: float, *, op: str | None = "gte", lat: float | None = None, lon: float | None = None, city: str | None = None, peril: str | None = None, contract_ref: str | None = None, methodology: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_trigger_receipt_v1_trigger_receipt_get("some example string", 1.5)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1TriggerReceiptV1TriggerReceiptGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_trigger_receipt_v1_trigger_receipt_get("some example string", 1.5)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1TriggerReceiptV1TriggerReceiptGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>metric</code> | <code>str</code> | Value sent with the request. |
| <code>threshold</code> | <code>float</code> | Value sent with the request. |
| <code>op</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>"gte"</code> |
| <code>lat</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>city</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>peril</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>contract_ref</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>methodology</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1TriggerReceiptV1TriggerReceiptGetErrorBody](dynamic_feed/errors/v1_trigger_receipt_v1_trigger_receipt_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_vc_v1_vc_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Security quarantine: legacy VC wrapping did not verify the inner receipt or role boundaries.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_vc_v1_vc_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_vc_v1_vc_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_watchlist_delete_v1_watchlist_delete(*, label: str | None = "", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one item from your watchlist (?label=BTC) or clear it entirely (no label). Per-user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_watchlist_delete_v1_watchlist_delete()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WatchlistDeleteV1WatchlistDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_watchlist_delete_v1_watchlist_delete()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WatchlistDeleteV1WatchlistDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>label</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1WatchlistDeleteV1WatchlistDeleteErrorBody](dynamic_feed/errors/v1_watchlist_delete_v1_watchlist_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_watchlist_get_v1_watchlist_get(*, pull: bool | None = False, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_watchlist_get_v1_watchlist_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WatchlistGetV1WatchlistGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_watchlist_get_v1_watchlist_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WatchlistGetV1WatchlistGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1WatchlistGetV1WatchlistGetErrorBody](dynamic_feed/errors/v1_watchlist_get_v1_watchlist_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_watchlist_post_v1_watchlist_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_watchlist_post_v1_watchlist_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WatchlistPostV1WatchlistPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_watchlist_post_v1_watchlist_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WatchlistPostV1WatchlistPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1WatchlistPostV1WatchlistPostErrorBody](dynamic_feed/errors/v1_watchlist_post_v1_watchlist_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_webhooks_create_v1_webhooks_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_webhooks_create_v1_webhooks_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WebhooksCreateV1WebhooksPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_webhooks_create_v1_webhooks_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WebhooksCreateV1WebhooksPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1WebhooksCreateV1WebhooksPostErrorBody](dynamic_feed/errors/v1_webhooks_create_v1_webhooks_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_webhooks_delete_v1_webhooks_delete(*, id_: int | None = 0, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one of your webhook subscriptions by ?id=. Per-user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_webhooks_delete_v1_webhooks_delete()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WebhooksDeleteV1WebhooksDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_webhooks_delete_v1_webhooks_delete()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WebhooksDeleteV1WebhooksDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1WebhooksDeleteV1WebhooksDeleteErrorBody](dynamic_feed/errors/v1_webhooks_delete_v1_webhooks_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_webhooks_list_v1_webhooks_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List your webhook subscriptions (secrets are never returned). Per-user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_webhooks_list_v1_webhooks_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WebhooksListV1WebhooksGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_webhooks_list_v1_webhooks_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WebhooksListV1WebhooksGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1WebhooksListV1WebhooksGetErrorBody](dynamic_feed/errors/v1_webhooks_list_v1_webhooks_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_webhooks_test_v1_webhooks_test_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a signed TEST delivery to one of your subscriptions now — confirm your endpoint receives it and
the HMAC validates. Body: {"id": }. Per-user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_webhooks_test_v1_webhooks_test_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WebhooksTestV1WebhooksTestPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_webhooks_test_v1_webhooks_test_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WebhooksTestV1WebhooksTestPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1WebhooksTestV1WebhooksTestPostErrorBody](dynamic_feed/errors/v1_webhooks_test_v1_webhooks_test_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_witness_inclusion_v1_witness_idx_inclusion_get(idx: int, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_witness_inclusion_v1_witness_idx_inclusion_get(1)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_witness_inclusion_v1_witness_idx_inclusion_get(1)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idx</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody](dynamic_feed/errors/v1_witness_inclusion_v1_witness_idx_inclusion_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_witness_sample_v1_witness_sample_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_witness_sample_v1_witness_sample_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent.v1_witness_sample_v1_witness_sample_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_witness_v1_witness_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent.v1_witness_v1_witness_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WitnessV1WitnessPostErrorBody
```

**Async**

```python
try:
    response = await async_client.agent.v1_witness_v1_witness_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1WitnessV1WitnessPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1WitnessV1WitnessPostErrorBody](dynamic_feed/errors/v1_witness_v1_witness_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AgentStats

> Source: [AgentStats](dynamic_feed/apis/agent_stats.py)

<details>
<summary><code>def agent_stats_v1_agent_stats_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.agent_stats.agent_stats_v1_agent_stats_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agent_stats.agent_stats_v1_agent_stats_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AiModels

> Source: [AiModels](dynamic_feed/apis/ai_models.py)

<details>
<summary><code>def ai_models_ep_ai_models_get(*, query: str | None = None, org: str | None = None, task: str | None = "text-generation", sort: str | None = "trending", limit: int | None = 25, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current & trending AI models from the open-model ecosystem (Hugging Face) — name, org, task,
popularity, release date. Complements /models (closed-flagship pricing & versions). (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ai_models.ai_models_ep_ai_models_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AiModelsEpAiModelsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_models.ai_models_ep_ai_models_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AiModelsEpAiModelsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str \| None</code> | search a model name (e.g. llama, qwen, whisper)<br>**Default**: <code>None</code> |
| <code>org</code> | <code>str \| None</code> | filter by org/author (e.g. meta-llama, deepseek-ai)<br>**Default**: <code>None</code> |
| <code>task</code> | <code>str \| None</code> | text-generation (default), text-to-image, ... or 'any'<br>**Default**: <code>"text-generation"</code> |
| <code>sort</code> | <code>str \| None</code> | trending \| newest \| downloads<br>**Default**: <code>"trending"</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[AiModelsEpAiModelsGetErrorBody](dynamic_feed/errors/ai_models_ep_ai_models_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AirQuality

> Source: [AirQuality](dynamic_feed/apis/air_quality.py)

<details>
<summary><code>def air_quality_air_quality_get(*, city: str | None = None, lat: float | None = None, lon: float | None = None, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current air quality (PM2.5/PM10, US & European AQI) by city or lat/lon. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.air_quality.air_quality_air_quality_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirQualityAirQualityGetErrorBody
```

**Async**

```python
try:
    response = await async_client.air_quality.air_quality_air_quality_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirQualityAirQualityGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>city</code> | <code>str \| None</code> | city name<br>**Default**: <code>None</code> |
| <code>lat</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[AirQualityAirQualityGetErrorBody](dynamic_feed/errors/air_quality_air_quality_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AirportDelays

> Source: [AirportDelays](dynamic_feed/apis/airport_delays.py)

<details>
<summary><code>def airport_delays_airport_delays_get(*, airport: str | None = "", limit: int | None = 60, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live FAA airport delays, ground stops, closures & ground-delay programs (US National Airspace
System — keyless source). Empty/short list = airspace running normally. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.airport_delays.airport_delays_airport_delays_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirportDelaysAirportDelaysGetErrorBody
```

**Async**

```python
try:
    response = await async_client.airport_delays.airport_delays_airport_delays_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirportDelaysAirportDelaysGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>airport</code> | <code>str \| None</code> | 3-letter airport code, e.g. LGA, LAX (optional)<br>**Default**: <code>""</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>60</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[AirportDelaysAirportDelaysGetErrorBody](dynamic_feed/errors/airport_delays_airport_delays_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Benchmarks

> Source: [Benchmarks](dynamic_feed/apis/benchmarks.py)

<details>
<summary><code>def benchmarks_benchmarks_get(*, window_hours: int | None = 24, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Measured latency & uptime per AI provider — our own data, fastest first. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.benchmarks.benchmarks_benchmarks_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BenchmarksBenchmarksGetErrorBody
```

**Async**

```python
try:
    response = await async_client.benchmarks.benchmarks_benchmarks_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BenchmarksBenchmarksGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>window_hours</code> | <code>int \| None</code> | rolling window in hours<br>**Default**: <code>24</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[BenchmarksBenchmarksGetErrorBody](dynamic_feed/errors/benchmarks_benchmarks_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def benchmarks_history_benchmarks_history_get(*, provider: str | None = "", days: int | None = 90, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.benchmarks.benchmarks_history_benchmarks_history_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BenchmarksHistoryBenchmarksHistoryGetErrorBody
```

**Async**

```python
try:
    response = await async_client.benchmarks.benchmarks_history_benchmarks_history_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BenchmarksHistoryBenchmarksHistoryGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>provider</code> | <code>str \| None</code> | filter to one provider, e.g. openai (optional)<br>**Default**: <code>""</code> |
| <code>days</code> | <code>int \| None</code> | lookback in days<br>**Default**: <code>90</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[BenchmarksHistoryBenchmarksHistoryGetErrorBody](dynamic_feed/errors/benchmarks_history_benchmarks_history_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Billing

> Source: [Billing](dynamic_feed/apis/billing.py)

<details>
<summary><code>def billing_success_billing_success_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.billing.billing_success_billing_success_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.billing.billing_success_billing_success_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def billing_webhook_billing_webhook_post(*, stripe_signature: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stripe calls this to confirm payments. Upgrades/downgrades the key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.billing.billing_webhook_billing_webhook_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BillingWebhookBillingWebhookPostErrorBody
```

**Async**

```python
try:
    response = await async_client.billing.billing_webhook_billing_webhook_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BillingWebhookBillingWebhookPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>stripe_signature</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[BillingWebhookBillingWebhookPostErrorBody](dynamic_feed/errors/billing_webhook_billing_webhook_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def checkout_billing_checkout_post(api_key: str, *, tier: str | None = "pro", interval: str | None = "month", request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a Stripe Checkout for a paid plan. Returns a payment URL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.billing.checkout_billing_checkout_post("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CheckoutBillingCheckoutPostErrorBody
```

**Async**

```python
try:
    response = await async_client.billing.checkout_billing_checkout_post("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CheckoutBillingCheckoutPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | the key you want to upgrade |
| <code>tier</code> | <code>str \| None</code> | pro ($19/mo), ultra ($59/mo), mega ($199/mo) or notary ($49/mo)<br>**Default**: <code>"pro"</code> |
| <code>interval</code> | <code>str \| None</code> | 'month' (default) or 'annual' — annual prepay is 2 months free ($190/$590/$1,990/$490 per year)<br>**Default**: <code>"month"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[CheckoutBillingCheckoutPostErrorBody](dynamic_feed/errors/checkout_billing_checkout_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CarbonIntensity

> Source: [CarbonIntensity](dynamic_feed/apis/carbon_intensity.py)

<details>
<summary><code>def carbon_intensity_carbon_intensity_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

GB grid carbon intensity now + fuel mix + cleanest upcoming half-hour (NESO, CC-BY, keyless
source). (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.carbon_intensity.carbon_intensity_carbon_intensity_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CarbonIntensityCarbonIntensityGetErrorBody
```

**Async**

```python
try:
    response = await async_client.carbon_intensity.carbon_intensity_carbon_intensity_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CarbonIntensityCarbonIntensityGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[CarbonIntensityCarbonIntensityGetErrorBody](dynamic_feed/errors/carbon_intensity_carbon_intensity_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## China

> Source: [China](dynamic_feed/apis/china.py)

<details>
<summary><code>def china_ep_china_get(*, metric: str | None = "all", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.china.china_ep_china_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChinaEpChinaGetErrorBody
```

**Async**

```python
try:
    response = await async_client.china.china_ep_china_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChinaEpChinaGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>metric</code> | <code>str \| None</code> | all \| indices \| fx \| etfs \| macro<br>**Default**: <code>"all"</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[ChinaEpChinaGetErrorBody](dynamic_feed/errors/china_ep_china_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Cite

> Source: [Cite](dynamic_feed/apis/cite.py)

<details>
<summary><code>def cite_ep_cite_get(*, subject: str | None = "", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A fresh, citeable source + timestamp for a current datapoint. (Key on REST; keyless on MCP.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cite.cite_ep_cite_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CiteEpCiteGetErrorBody
```

**Async**

```python
try:
    response = await async_client.cite.cite_ep_cite_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CiteEpCiteGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subject</code> | <code>str \| None</code> | any tool/source/topic (earthquakes, USGS, Open-Meteo, ...) or a software product — returns a citeable source + verify URL + timestamp<br>**Default**: <code>""</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[CiteEpCiteGetErrorBody](dynamic_feed/errors/cite_ep_cite_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Consensus

> Source: [Consensus](dynamic_feed/apis/consensus.py)

<details>
<summary><code>def consensus_consensus_get(*, symbol: str | None = None, limit: int | None = 50, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.consensus.consensus_consensus_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConsensusConsensusGetErrorBody
```

**Async**

```python
try:
    response = await async_client.consensus.consensus_consensus_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConsensusConsensusGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str \| None</code> | exact symbol, e.g. BTC, ETH, SOL<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[ConsensusConsensusGetErrorBody](dynamic_feed/errors/consensus_consensus_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Convert

> Source: [Convert](dynamic_feed/apis/convert.py)

<details>
<summary><code>def convert_ep_convert_get(*, amount: float | None = 1.0, from_currency: str | None = "USD", to_currency: str | None = "USD", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert money between fiat currencies at the LIVE ECB reference rate. Crypto & precious-metal
conversion is coming in a future release. (Requires API key; keyless over MCP.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.convert.convert_ep_convert_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConvertEpConvertGetErrorBody
```

**Async**

```python
try:
    response = await async_client.convert.convert_ep_convert_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConvertEpConvertGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>amount</code> | <code>float \| None</code> | amount to convert<br>**Default**: <code>1.0</code> |
| <code>from_currency</code> | <code>str \| None</code> | e.g. EUR, GBP, JPY<br>**Default**: <code>"USD"</code> |
| <code>to_currency</code> | <code>str \| None</code> | e.g. USD, AUD, CHF<br>**Default**: <code>"USD"</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[ConvertEpConvertGetErrorBody](dynamic_feed/errors/convert_ep_convert_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Countdown

> Source: [Countdown](dynamic_feed/apis/countdown.py)

<details>
<summary><code>def countdown_ep_countdown_get(*, event: str | None = "", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Time until a live event (market open/close or next rocket launch). (Key on REST; keyless on MCP.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.countdown.countdown_ep_countdown_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountdownEpCountdownGetErrorBody
```

**Async**

```python
try:
    response = await async_client.countdown.countdown_ep_countdown_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountdownEpCountdownGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>event</code> | <code>str \| None</code> | e.g. 'NYSE open' or 'next SpaceX launch'<br>**Default**: <code>""</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[CountdownEpCountdownGetErrorBody](dynamic_feed/errors/countdown_ep_countdown_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Dataset

> Source: [Dataset](dynamic_feed/apis/dataset.py)

<details>
<summary><code>def dataset_advisories_dataset_advisories_json_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dataset.dataset_advisories_dataset_advisories_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.dataset.dataset_advisories_dataset_advisories_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataset_consensus_dataset_consensus_json_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dataset.dataset_consensus_dataset_consensus_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.dataset.dataset_consensus_dataset_consensus_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataset_index_dataset_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dataset.dataset_index_dataset_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.dataset.dataset_index_dataset_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataset_models_dataset_models_json_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dataset.dataset_models_dataset_models_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.dataset.dataset_models_dataset_models_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataset_news_dataset_news_json_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dataset.dataset_news_dataset_news_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.dataset.dataset_news_dataset_news_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataset_servers_dataset_servers_json_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dataset.dataset_servers_dataset_servers_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.dataset.dataset_servers_dataset_servers_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataset_status_dataset_status_json_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dataset.dataset_status_dataset_status_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.dataset.dataset_status_dataset_status_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataset_versions_dataset_versions_json_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dataset.dataset_versions_dataset_versions_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.dataset.dataset_versions_dataset_versions_json_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Dev

> Source: [Dev](dynamic_feed/apis/dev.py)

<details>
<summary><code>def dns_ep_dns_get(name: str, *, type_: str | None = "A", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live DNS records for a domain via Cloudflare DNS-over-HTTPS. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dev.dns_ep_dns_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsEpDnsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dev.dns_ep_dns_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsEpDnsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | domain, e.g. example.com |
| <code>type_</code> | <code>str \| None</code> | A \| AAAA \| MX \| TXT \| NS \| CNAME \| SOA \| CAA<br>**Default**: <code>"A"</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[DnsEpDnsGetErrorBody](dynamic_feed/errors/dns_ep_dns_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def github_releases_ep_github_releases_get(repo: str, *, limit: int | None = 5, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Latest GitHub releases for a repo (version, date, author, link) via the public atom feed —
keyless source, no rate limit. (Requires API key on REST; the MCP tool is keyless.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dev.github_releases_ep_github_releases_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GithubReleasesEpGithubReleasesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dev.github_releases_ep_github_releases_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GithubReleasesEpGithubReleasesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo</code> | <code>str</code> | owner/name, e.g. openai/openai-python |
| <code>limit</code> | <code>int \| None</code> | max releases (1-25)<br>**Default**: <code>5</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[GithubReleasesEpGithubReleasesGetErrorBody](dynamic_feed/errors/github_releases_ep_github_releases_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hacker_news_ep_hacker_news_get(*, query: str | None = "", kind: str | None = "top", limit: int | None = 10, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live Hacker News stories — the tech/AI attention layer. Optional case-insensitive title filter. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dev.hacker_news_ep_hacker_news_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HackerNewsEpHackerNewsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dev.hacker_news_ep_hacker_news_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HackerNewsEpHackerNewsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>kind</code> | <code>str \| None</code> | top \| new \| best<br>**Default**: <code>"top"</code> |
| <code>limit</code> | <code>int \| None</code> | max stories (1-30)<br>**Default**: <code>10</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[HackerNewsEpHackerNewsGetErrorBody](dynamic_feed/errors/hacker_news_ep_hacker_news_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Drought

> Source: [Drought](dynamic_feed/apis/drought.py)

<details>
<summary><code>def drought_drought_get(*, area: str | None = "total", weeks: int | None = 6, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

US drought severity — % of area in each D0-D4 class by week (U.S. Drought Monitor — keyless).
National or by state; a commodity-market mover and a hazard signal. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.drought.drought_drought_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DroughtDroughtGetErrorBody
```

**Async**

```python
try:
    response = await async_client.drought.drought_drought_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DroughtDroughtGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>area</code> | <code>str \| None</code> | 'total' (US national) or a state FIPS code<br>**Default**: <code>"total"</code> |
| <code>weeks</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>6</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[DroughtDroughtGetErrorBody](dynamic_feed/errors/drought_drought_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DrugShortages

> Source: [DrugShortages](dynamic_feed/apis/drug_shortages.py)

<details>
<summary><code>def drug_shortages_drug_shortages_get(*, query: str | None = "", limit: int | None = 25, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

US drug shortages from the FDA (openFDA — keyless source): is drug X in shortage right now, with
status, reason and company. Informational — confirm clinically. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.drug_shortages.drug_shortages_drug_shortages_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DrugShortagesDrugShortagesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.drug_shortages.drug_shortages_drug_shortages_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DrugShortagesDrugShortagesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str \| None</code> | drug / generic name, e.g. amoxicillin (optional)<br>**Default**: <code>""</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[DrugShortagesDrugShortagesGetErrorBody](dynamic_feed/errors/drug_shortages_drug_shortages_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DynamicFeedLiveDataForAi

> Source: [DynamicFeedLiveDataForAi](dynamic_feed/apis/dynamic_feed_live_data_for_ai.py)

<details>
<summary><code>def home_get(*, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Serve the marketing landing page (with live demo widget).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dynamic_feed_live_data_for_ai.home_get()
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.dynamic_feed_live_data_for_ai.home_get()
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Earthquakes

> Source: [Earthquakes](dynamic_feed/apis/earthquakes.py)

<details>
<summary><code>def earthquakes_earthquakes_get(*, min_magnitude: float | None = 2.5, period: str | None = "day", tsunami_only: bool | None = False, limit: int | None = 30, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recent earthquakes worldwide (USGS) — magnitude, depth, location, PAGER impact alert, tsunami
flag, felt reports and significance. Sorted by impact then magnitude. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.earthquakes.earthquakes_earthquakes_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EarthquakesEarthquakesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.earthquakes.earthquakes_earthquakes_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EarthquakesEarthquakesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>min_magnitude</code> | <code>float \| None</code> | minimum magnitude<br>**Default**: <code>2.5</code> |
| <code>period</code> | <code>str \| None</code> | hour \| day \| week \| month<br>**Default**: <code>"day"</code> |
| <code>tsunami_only</code> | <code>bool \| None</code> | only quakes flagged with tsunami potential<br>**Default**: <code>False</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>30</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[EarthquakesEarthquakesGetErrorBody](dynamic_feed/errors/earthquakes_earthquakes_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Energy

> Source: [Energy](dynamic_feed/apis/energy.py)

<details>
<summary><code>def energy_grid_energy_get(*, region: str | None = "US48", metric: str | None = "demand", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live US electricity grid data (EIA v2, public domain): demand, net generation, or current fuel mix
by region/operator. Hourly. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.energy.energy_grid_energy_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnergyGridEnergyGetErrorBody
```

**Async**

```python
try:
    response = await async_client.energy.energy_grid_energy_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnergyGridEnergyGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region</code> | <code>str \| None</code> | US48 (national) or a grid operator: CAISO, PJM, MISO, ERCOT, ISONE, NYISO, SPP, BPA<br>**Default**: <code>"US48"</code> |
| <code>metric</code> | <code>str \| None</code> | demand \| generation \| mix<br>**Default**: <code>"demand"</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[EnergyGridEnergyGetErrorBody](dynamic_feed/errors/energy_grid_energy_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExploitedVulnerabilities

> Source: [ExploitedVulnerabilities](dynamic_feed/apis/exploited_vulnerabilities.py)

<details>
<summary><code>def exploited_vulnerabilities_exploited_vulnerabilities_get(*, query: str | None = None, vendor: str | None = None, product: str | None = None, ransomware_only: bool | None = False, recent_days: int | None = 0, limit: int | None = 25, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Vulnerabilities CONFIRMED exploited in the wild (CISA KEV) — each enriched with its EPSS
exploitation-probability score. The 'which CVEs actually matter right now' layer. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.exploited_vulnerabilities.exploited_vulnerabilities_exploited_vulnerabilities_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExploitedVulnerabilitiesExploitedVulnerabilitiesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.exploited_vulnerabilities.exploited_vulnerabilities_exploited_vulnerabilities_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExploitedVulnerabilitiesExploitedVulnerabilitiesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str \| None</code> | match CVE id / name / description<br>**Default**: <code>None</code> |
| <code>vendor</code> | <code>str \| None</code> | filter by vendor (e.g. Microsoft, Cisco)<br>**Default**: <code>None</code> |
| <code>product</code> | <code>str \| None</code> | filter by product (e.g. Windows, PAN-OS)<br>**Default**: <code>None</code> |
| <code>ransomware_only</code> | <code>bool \| None</code> | only CVEs linked to ransomware campaigns<br>**Default**: <code>False</code> |
| <code>recent_days</code> | <code>int \| None</code> | only CVEs added to KEV in the last N days<br>**Default**: <code>0</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[ExploitedVulnerabilitiesExploitedVulnerabilitiesGetErrorBody](dynamic_feed/errors/exploited_vulnerabilities_exploited_vulnerabilities_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FederalRegister

> Source: [FederalRegister](dynamic_feed/apis/federal_register.py)

<details>
<summary><code>def federal_register_federal_register_get(*, query: str | None = "", doc_type: str | None = "", agency: str | None = "", days: int | None = 7, limit: int | None = 20, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recent US Federal Register documents — rules, proposed rules, notices, executive orders (keyless
NARA source). Answers what regulation took effect or what the President signed. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.federal_register.federal_register_federal_register_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FederalRegisterFederalRegisterGetErrorBody
```

**Async**

```python
try:
    response = await async_client.federal_register.federal_register_federal_register_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FederalRegisterFederalRegisterGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str \| None</code> | text search<br>**Default**: <code>""</code> |
| <code>doc_type</code> | <code>str \| None</code> | RULE \| PRORULE \| NOTICE \| PRESDOCU<br>**Default**: <code>""</code> |
| <code>agency</code> | <code>str \| None</code> | agency slug, e.g. securities-and-exchange-commission<br>**Default**: <code>""</code> |
| <code>days</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>7</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[FederalRegisterFederalRegisterGetErrorBody](dynamic_feed/errors/federal_register_federal_register_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Flights

> Source: [Flights](dynamic_feed/apis/flights.py)

<details>
<summary><code>def flights_flights_get(*, region: str | None = None, callsign: str | None = None, limit: int | None = 50, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live aircraft right now — real-time positions from adsb.lol community ADS-B (CC0).
Filter by region preset and/or callsign. Airborne flights first. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.flights.flights_flights_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FlightsFlightsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.flights.flights_flights_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FlightsFlightsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region</code> | <code>str \| None</code> | region preset: morocco, spain, london, newyork, paris, tokyo, dubai, europe, usa, asia, ...<br>**Default**: <code>None</code> |
| <code>callsign</code> | <code>str \| None</code> | filter by flight callsign, e.g. BAW123<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[FlightsFlightsGetErrorBody](dynamic_feed/errors/flights_flights_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Forecast

> Source: [Forecast](dynamic_feed/apis/forecast.py)

<details>
<summary><code>def forecast_forecast_get(*, city: str | None = None, lat: float | None = None, lon: float | None = None, days: int | None = 7, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Multi-day weather forecast (up to 16 days) by city or lat/lon. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.forecast.forecast_forecast_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ForecastForecastGetErrorBody
```

**Async**

```python
try:
    response = await async_client.forecast.forecast_forecast_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ForecastForecastGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>city</code> | <code>str \| None</code> | city name<br>**Default**: <code>None</code> |
| <code>lat</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>days</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>7</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[ForecastForecastGetErrorBody](dynamic_feed/errors/forecast_forecast_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## GlobalDisasters

> Source: [GlobalDisasters](dynamic_feed/apis/global_disasters.py)

<details>
<summary><code>def global_disasters_ep_global_disasters_get(*, alert_level: str | None = "Orange;Red", event_type: str | None = None, country: str | None = None, days: int | None = 7, limit: int | None = 50, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.global_disasters.global_disasters_ep_global_disasters_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GlobalDisastersEpGlobalDisastersGetErrorBody
```

**Async**

```python
try:
    response = await async_client.global_disasters.global_disasters_ep_global_disasters_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GlobalDisastersEpGlobalDisastersGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>alert_level</code> | <code>str \| None</code> | Green;Orange;Red (semicolon-separated)<br>**Default**: <code>"Orange;Red"</code> |
| <code>event_type</code> | <code>str \| None</code> | EQ \| TC \| FL \| DR \| VO \| WF<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | country name or ISO3 (e.g. PHL)<br>**Default**: <code>None</code> |
| <code>days</code> | <code>int \| None</code> | look-back window in days<br>**Default**: <code>7</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[GlobalDisastersEpGlobalDisastersGetErrorBody](dynamic_feed/errors/global_disasters_ep_global_disasters_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## GpsInterference

> Source: [GpsInterference](dynamic_feed/apis/gps_interference.py)

<details>
<summary><code>def gps_interference_gps_interference_get(*, region: str | None = "", lat: float | None = None, lon: float | None = None, radius_km: int | None = 300, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.gps_interference.gps_interference_gps_interference_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GpsInterferenceGpsInterferenceGetErrorBody
```

**Async**

```python
try:
    response = await async_client.gps_interference.gps_interference_gps_interference_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GpsInterferenceGpsInterferenceGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region</code> | <code>str \| None</code> | preset: london, blacksea, baltic, easternmed, persiangulf, korea, finland, caucasus, northsea<br>**Default**: <code>""</code> |
| <code>lat</code> | <code>float \| None</code> | latitude (use with lon instead of a preset)<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | longitude<br>**Default**: <code>None</code> |
| <code>radius_km</code> | <code>int \| None</code> | radius around lat/lon in km<br>**Default**: <code>300</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[GpsInterferenceGpsInterferenceGetErrorBody](dynamic_feed/errors/gps_interference_gps_interference_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](dynamic_feed/apis/health.py)

<details>
<summary><code>def health_health_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.health.health_health_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.health.health_health_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## History

> Source: [History](dynamic_feed/apis/history.py)

<details>
<summary><code>def history_v1_history_get(*, tool: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.history.history_v1_history_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HistoryV1HistoryGetErrorBody
```

**Async**

```python
try:
    response = await async_client.history.history_v1_history_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HistoryV1HistoryGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tool</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[HistoryV1HistoryGetErrorBody](dynamic_feed/errors/history_v1_history_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Info

> Source: [Info](dynamic_feed/apis/info.py)

<details>
<summary><code>def info_info_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.info.info_info_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.info.info_info_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## InternetOutages

> Source: [InternetOutages](dynamic_feed/apis/internet_outages.py)

<details>
<summary><code>def internet_outages_internet_outages_get(*, resource: str | None = "", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.internet_outages.internet_outages_internet_outages_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InternetOutagesInternetOutagesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.internet_outages.internet_outages_internet_outages_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InternetOutagesInternetOutagesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource</code> | <code>str \| None</code> | an ASN (AS3215), an IP (8.8.8.8), or a prefix (193.0.0.0/22)<br>**Default**: <code>""</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[InternetOutagesInternetOutagesGetErrorBody](dynamic_feed/errors/internet_outages_internet_outages_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Iss

> Source: [Iss](dynamic_feed/apis/iss.py)

<details>
<summary><code>def iss_iss_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Where the International Space Station is right now + who's aboard + orbital-latency floor.
(Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.iss.iss_iss_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IssIssGetErrorBody
```

**Async**

```python
try:
    response = await async_client.iss.iss_iss_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IssIssGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[IssIssGetErrorBody](dynamic_feed/errors/iss_iss_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Launches

> Source: [Launches](dynamic_feed/apis/launches.py)

<details>
<summary><code>def launches_launches_get(*, provider: str | None = None, limit: int | None = 8, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upcoming rocket launches worldwide — name, provider, rocket, time, site. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.launches.launches_launches_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LaunchesLaunchesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.launches.launches_launches_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LaunchesLaunchesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>provider</code> | <code>str \| None</code> | filter by provider, e.g. SpaceX<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>8</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[LaunchesLaunchesGetErrorBody](dynamic_feed/errors/launches_launches_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Macro

> Source: [Macro](dynamic_feed/apis/macro.py)

<details>
<summary><code>def global_macro_macro_get(*, country: str | None = "", indicator: str | None = "all", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Worldwide macro indicators for any country (World Bank Open Data, CC-BY) — globalizes the China-only
macro. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.macro.global_macro_macro_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GlobalMacroMacroGetErrorBody
```

**Async**

```python
try:
    response = await async_client.macro.global_macro_macro_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GlobalMacroMacroGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str \| None</code> | ISO code (US, GB, DE, IN, BR, JP, CN) or country name<br>**Default**: <code>""</code> |
| <code>indicator</code> | <code>str \| None</code> | gdp \| gdp_growth \| cpi_inflation \| unemployment \| population \| exports \| imports \| current_account \| fx_reserves \| fdi \| govt_debt_pct_gdp \| all<br>**Default**: <code>"all"</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[GlobalMacroMacroGetErrorBody](dynamic_feed/errors/global_macro_macro_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MarketHours

> Source: [MarketHours](dynamic_feed/apis/market_hours.py)

<details>
<summary><code>def market_hours_market_hours_get(*, market: str | None = None, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_hours.market_hours_market_hours_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarketHoursMarketHoursGetErrorBody
```

**Async**

```python
try:
    response = await async_client.market_hours.market_hours_market_hours_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarketHoursMarketHoursGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market</code> | <code>str \| None</code> | NYSE, NASDAQ, LSE, XETRA, TSE, HKEX, ASX, Crypto, Forex<br>**Default**: <code>None</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[MarketHoursMarketHoursGetErrorBody](dynamic_feed/errors/market_hours_market_hours_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ModelsApi

> Source: [ModelsApi](dynamic_feed/apis/models_api.py)

<details>
<summary><code>def models_models_get(*, q: str | None = None, provider: str | None = None, max_input_price: float | None = None, min_context: int | None = None, needs_vision: bool | None = None, limit: int | None = 50, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search current AI models by price, context, capability. Cheapest first. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.models_api.models_models_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModelsModelsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.models_models_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModelsModelsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | match model name/id<br>**Default**: <code>None</code> |
| <code>provider</code> | <code>str \| None</code> | openai, anthropic, google, ...<br>**Default**: <code>None</code> |
| <code>max_input_price</code> | <code>float \| None</code> | max USD per 1M input tokens<br>**Default**: <code>None</code> |
| <code>min_context</code> | <code>int \| None</code> | min context window in tokens<br>**Default**: <code>None</code> |
| <code>needs_vision</code> | <code>bool \| None</code> | only models that accept images<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[ModelsModelsGetErrorBody](dynamic_feed/errors/models_models_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Movers

> Source: [Movers](dynamic_feed/apis/movers.py)

<details>
<summary><code>def movers_movers_get(*, direction: str | None = "gainers", asset_class: str | None = None, limit: int | None = 15, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DERIVED signal — biggest 24h gainers or losers across the markets we track. Computed from
Dynamic Feed's own data & recorded history (not a raw source you can scrape). (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.movers.movers_movers_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MoversMoversGetErrorBody
```

**Async**

```python
try:
    response = await async_client.movers.movers_movers_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MoversMoversGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction</code> | <code>str \| None</code> | gainers \| losers<br>**Default**: <code>"gainers"</code> |
| <code>asset_class</code> | <code>str \| None</code> | crypto \| stock \| index \| forex \| commodity \| metal<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>15</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[MoversMoversGetErrorBody](dynamic_feed/errors/movers_movers_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## NaturalEvents

> Source: [NaturalEvents](dynamic_feed/apis/natural_events.py)

<details>
<summary><code>def natural_events_natural_events_get(*, category: str | None = None, days: int | None = 30, limit: int | None = 30, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Active natural events worldwide (NASA EONET) — wildfires, severe storms, volcanoes, floods,
sea/lake ice. "What natural events are happening on Earth right now?". (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.natural_events.natural_events_natural_events_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NaturalEventsNaturalEventsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.natural_events.natural_events_natural_events_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NaturalEventsNaturalEventsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>str \| None</code> | wildfires \| severeStorms \| volcanoes \| floods \| seaLakeIce<br>**Default**: <code>None</code> |
| <code>days</code> | <code>int \| None</code> | look-back window in days<br>**Default**: <code>30</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>30</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[NaturalEventsNaturalEventsGetErrorBody](dynamic_feed/errors/natural_events_natural_events_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](dynamic_feed/apis/news.py)

<details>
<summary><code>def news_news_get(*, q: str | None = None, source: str | None = None, limit: int | None = 30, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Latest AI news & releases across providers. Newest first. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.news_news_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NewsNewsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.news.news_news_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NewsNewsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | match title/summary<br>**Default**: <code>None</code> |
| <code>source</code> | <code>str \| None</code> | OpenAI, Google AI, Hugging Face, ...<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>30</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[NewsNewsGetErrorBody](dynamic_feed/errors/news_news_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## OrbitalDatacenters

> Source: [OrbitalDatacenters](dynamic_feed/apis/orbital_datacenters.py)

<details>
<summary><code>def orbital_datacenters_orbital_datacenters_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.orbital_datacenters.orbital_datacenters_orbital_datacenters_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrbitalDatacentersOrbitalDatacentersGetErrorBody
```

**Async**

```python
try:
    response = await async_client.orbital_datacenters.orbital_datacenters_orbital_datacenters_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrbitalDatacentersOrbitalDatacentersGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[OrbitalDatacentersOrbitalDatacentersGetErrorBody](dynamic_feed/errors/orbital_datacenters_orbital_datacenters_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Rates

> Source: [Rates](dynamic_feed/apis/rates.py)

<details>
<summary><code>def rates_rates_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live US benchmark interest rates (Fed funds / SOFR / OBFR…) from the New York Fed — the
rates models perpetually quote stale. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.rates.rates_rates_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RatesRatesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.rates.rates_rates_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RatesRatesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RatesRatesGetErrorBody](dynamic_feed/errors/rates_rates_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RealityCheck

> Source: [RealityCheck](dynamic_feed/apis/reality_check.py)

<details>
<summary><code>def reality_check_ep_reality_check_get(*, claim: str | None = "", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reality_check.reality_check_ep_reality_check_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RealityCheckEpRealityCheckGetErrorBody
```

**Async**

```python
try:
    response = await async_client.reality_check.reality_check_ep_reality_check_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RealityCheckEpRealityCheckGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>claim</code> | <code>str \| None</code> | a statement to verify, e.g. "BTC is $90,000" or "the market is open"<br>**Default**: <code>""</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RealityCheckEpRealityCheckGetErrorBody](dynamic_feed/errors/reality_check_ep_reality_check_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Recalls

> Source: [Recalls](dynamic_feed/apis/recalls.py)

<details>
<summary><code>def recalls_recalls_get(*, query: str | None = "", category: str | None = "all", limit: int | None = 20, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

US product recalls — food, drug & medical-device enforcement reports (openFDA, keyless, CC0).
'Is product X recalled right now?' Class I = most serious; most-recent first. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recalls.recalls_recalls_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecallsRecallsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.recalls.recalls_recalls_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecallsRecallsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str \| None</code> | match the product description (brand/product), or blank for latest<br>**Default**: <code>""</code> |
| <code>category</code> | <code>str \| None</code> | all \| food \| drug \| device<br>**Default**: <code>"all"</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RecallsRecallsGetErrorBody](dynamic_feed/errors/recalls_recalls_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Robot

> Source: [Robot](dynamic_feed/apis/robot.py)

<details>
<summary><code>def v1_anchor_daily_v1_anchor_daily_get(*, date: str | None = "", request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.robot.v1_anchor_daily_v1_anchor_daily_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1AnchorDailyV1AnchorDailyGetErrorBody
```

**Async**

```python
try:
    response = await async_client.robot.v1_anchor_daily_v1_anchor_daily_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1AnchorDailyV1AnchorDailyGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1AnchorDailyV1AnchorDailyGetErrorBody](dynamic_feed/errors/v1_anchor_daily_v1_anchor_daily_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_anchor_upgrade_v1_anchor_upgrade_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.robot.v1_anchor_upgrade_v1_anchor_upgrade_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.robot.v1_anchor_upgrade_v1_anchor_upgrade_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_anchor_v1_anchor_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.robot.v1_anchor_v1_anchor_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.robot.v1_anchor_v1_anchor_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_awareness_v1_awareness_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.robot.v1_awareness_v1_awareness_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.robot.v1_awareness_v1_awareness_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_humanoid_v1_humanoid_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.robot.v1_humanoid_v1_humanoid_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.robot.v1_humanoid_v1_humanoid_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_marine_v1_marine_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.robot.v1_marine_v1_marine_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.robot.v1_marine_v1_marine_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_preflight_v1_preflight_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.robot.v1_preflight_v1_preflight_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.robot.v1_preflight_v1_preflight_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_road_v1_road_post(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.robot.v1_road_v1_road_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.robot.v1_road_v1_road_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_robot_receipt_sample_v1_robot_receipt_sample_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.robot.v1_robot_receipt_sample_v1_robot_receipt_sample_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.robot.v1_robot_receipt_sample_v1_robot_receipt_sample_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_robot_receipt_v1_robot_receipt_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.robot.v1_robot_receipt_v1_robot_receipt_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1RobotReceiptV1RobotReceiptPostErrorBody
```

**Async**

```python
try:
    response = await async_client.robot.v1_robot_receipt_v1_robot_receipt_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1RobotReceiptV1RobotReceiptPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1RobotReceiptV1RobotReceiptPostErrorBody](dynamic_feed/errors/v1_robot_receipt_v1_robot_receipt_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sanctions

> Source: [Sanctions](dynamic_feed/apis/sanctions.py)

<details>
<summary><code>def sanctions_screen_sanctions_get(*, name: str | None = "", program: str | None = "", limit: int | None = 25, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sanctions.sanctions_screen_sanctions_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SanctionsScreenSanctionsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sanctions.sanctions_screen_sanctions_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SanctionsScreenSanctionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | name to screen against the US OFAC SDN + UK Sanctions List<br>**Default**: <code>""</code> |
| <code>program</code> | <code>str \| None</code> | optional program/regime filter, e.g. IRAN, CUBA, or a UK regime<br>**Default**: <code>""</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[SanctionsScreenSanctionsGetErrorBody](dynamic_feed/errors/sanctions_screen_sanctions_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Satellite

> Source: [Satellite](dynamic_feed/apis/satellite.py)

<details>
<summary><code>def satellite_satellite_get(norad_id: int, *, track_minutes: int | None = 0, step_seconds: int | None = 60, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.satellite.satellite_satellite_get(1)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SatelliteSatelliteGetErrorBody
```

**Async**

```python
try:
    response = await async_client.satellite.satellite_satellite_get(1)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SatelliteSatelliteGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>norad_id</code> | <code>int</code> | NORAD catalog number, e.g. 25544 (ISS), 20580 (Hubble), 44714 (a Starlink) |
| <code>track_minutes</code> | <code>int \| None</code> | also return a predicted ground-track this many minutes ahead (0 = none)<br>**Default**: <code>0</code> |
| <code>step_seconds</code> | <code>int \| None</code> | ground-track sampling step in seconds<br>**Default**: <code>60</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[SatelliteSatelliteGetErrorBody](dynamic_feed/errors/satellite_satellite_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Satellites

> Source: [Satellites](dynamic_feed/apis/satellites.py)

<details>
<summary><code>def satellites_satellites_get(*, group: str | None = "starlink", limit: int | None = 25, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Satellite/constellation catalog (Starlink, GPS, stations…) with altitude, orbital period, and
a derived light-speed round-trip latency to ground — the physics floor for orbital networks. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.satellites.satellites_satellites_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SatellitesSatellitesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.satellites.satellites_satellites_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SatellitesSatellitesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group</code> | <code>str \| None</code> | starlink, stations, gps-ops, oneweb, galileo, weather, active, geo<br>**Default**: <code>"starlink"</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[SatellitesSatellitesGetErrorBody](dynamic_feed/errors/satellites_satellites_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SecFilings

> Source: [SecFilings](dynamic_feed/apis/sec_filings.py)

<details>
<summary><code>def sec_filings_sec_filings_get(*, ticker: str | None = "", form: str | None = "", limit: int | None = 15, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recent SEC EDGAR filings for a US public company (8-K / 10-K / S-1 / Form 4). US public domain.
(Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sec_filings.sec_filings_sec_filings_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SecFilingsSecFilingsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sec_filings.sec_filings_sec_filings_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SecFilingsSecFilingsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str \| None</code> | US stock ticker, e.g. AAPL, NVDA, TSLA<br>**Default**: <code>""</code> |
| <code>form</code> | <code>str \| None</code> | filter by form: 8-K, 10-K, 10-Q, S-1, 4 ...<br>**Default**: <code>""</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>15</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[SecFilingsSecFilingsGetErrorBody](dynamic_feed/errors/sec_filings_sec_filings_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Security

> Source: [Security](dynamic_feed/apis/security.py)

<details>
<summary><code>def package_health_ep_package_health_get(package: str, *, ecosystem: str | None = "npm", version: str | None = None, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.security.package_health_ep_package_health_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PackageHealthEpPackageHealthGetErrorBody
```

**Async**

```python
try:
    response = await async_client.security.package_health_ep_package_health_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PackageHealthEpPackageHealthGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>package</code> | <code>str</code> | package name, e.g. lodash, requests, django |
| <code>ecosystem</code> | <code>str \| None</code> | npm \| pypi \| go \| maven \| cargo \| nuget \| rubygems<br>**Default**: <code>"npm"</code> |
| <code>version</code> | <code>str \| None</code> | exact version (optional; defaults to latest)<br>**Default**: <code>None</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[PackageHealthEpPackageHealthGetErrorBody](dynamic_feed/errors/package_health_ep_package_health_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Servers

> Source: [Servers](dynamic_feed/apis/servers.py)

<details>
<summary><code>def servers_servers_get(*, q: str | None = None, has_remote: bool | None = None, min_stars: int | None = None, limit: int | None = 50, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search the MCP server registry — find AI agent tools. Most-starred first. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.servers.servers_servers_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ServersServersGetErrorBody
```

**Async**

```python
try:
    response = await async_client.servers.servers_servers_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ServersServersGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | match server name/description<br>**Default**: <code>None</code> |
| <code>has_remote</code> | <code>bool \| None</code> | only servers with a hosted/remote endpoint<br>**Default**: <code>None</code> |
| <code>min_stars</code> | <code>int \| None</code> | minimum GitHub stars<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[ServersServersGetErrorBody](dynamic_feed/errors/servers_servers_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Shipping

> Source: [Shipping](dynamic_feed/apis/shipping.py)

<details>
<summary><code>def shipping_ep_shipping_get(*, scope: str | None = "chokepoints", query: str | None = "", region: str | None = "baltic", limit: int | None = 30, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.shipping.shipping_ep_shipping_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShippingEpShippingGetErrorBody
```

**Async**

```python
try:
    response = await async_client.shipping.shipping_ep_shipping_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShippingEpShippingGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scope</code> | <code>str \| None</code> | chokepoints \| ports \| vessels<br>**Default**: <code>"chokepoints"</code> |
| <code>query</code> | <code>str \| None</code> | filter by name/country (chokepoints, ports) or ship name/destination (vessels)<br>**Default**: <code>""</code> |
| <code>region</code> | <code>str \| None</code> | Baltic preset for scope=vessels: baltic, helsinki, stockholm, kiel, gdansk, copenhagen, riga, gulf-of-finland<br>**Default**: <code>"baltic"</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>30</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[ShippingEpShippingGetErrorBody](dynamic_feed/errors/shipping_ep_shipping_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Signals

> Source: [Signals](dynamic_feed/apis/signals.py)

<details>
<summary><code>def signals_signals_get(symbol: str, *, hours: int | None = 24, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals.signals_signals_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SignalsSignalsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.signals.signals_signals_get("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SignalsSignalsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str</code> | instrument symbol, e.g. BTC, ETH, XAU, EURUSD |
| <code>hours</code> | <code>int \| None</code> | window<br>**Default**: <code>24</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[SignalsSignalsGetErrorBody](dynamic_feed/errors/signals_signals_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Signup

> Source: [Signup](dynamic_feed/apis/signup.py)

<details>
<summary><code>def signup_signup_post(*, body: BodySignupSignupPost | BodySignupSignupPostDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a free API key instantly.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signup.signup_signup_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SignupSignupPostErrorBody
```

**Async**

```python
try:
    response = await async_client.signup.signup_signup_post()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SignupSignupPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BodySignupSignupPost](dynamic_feed/models/body_signup_signup_post.py) \| [BodySignupSignupPostDict](dynamic_feed/models/body_signup_signup_post.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[SignupSignupPostErrorBody](dynamic_feed/errors/signup_signup_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SpaceWeather

> Source: [SpaceWeather](dynamic_feed/apis/space_weather.py)

<details>
<summary><code>def space_weather_space_weather_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.space_weather.space_weather_space_weather_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpaceWeatherSpaceWeatherGetErrorBody
```

**Async**

```python
try:
    response = await async_client.space_weather.space_weather_space_weather_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpaceWeatherSpaceWeatherGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[SpaceWeatherSpaceWeatherGetErrorBody](dynamic_feed/errors/space_weather_space_weather_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sports

> Source: [Sports](dynamic_feed/apis/sports.py)

<details>
<summary><code>def sports_sports_get(*, topic: str | None = "2026 FIFA World Cup", days: int | None = 30, lang: str | None = "en", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sports.sports_sports_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SportsSportsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sports.sports_sports_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SportsSportsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>topic</code> | <code>str \| None</code> | event/team/competition, e.g. '2026 FIFA World Cup'<br>**Default**: <code>"2026 FIFA World Cup"</code> |
| <code>days</code> | <code>int \| None</code> | attention window in days<br>**Default**: <code>30</code> |
| <code>lang</code> | <code>str \| None</code> | primary Wikipedia language edition (en, es, pt, fr, ...)<br>**Default**: <code>"en"</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[SportsSportsGetErrorBody](dynamic_feed/errors/sports_sports_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def worldcup_route_worldcup_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

2026 FIFA World Cup fixtures + final results (openfootball, public domain). Keyless — powers the
homepage World Cup section and any agent. See also the keyless `world_cup` MCP tool.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sports.worldcup_route_worldcup_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.sports.worldcup_route_worldcup_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Status

> Source: [Status](dynamic_feed/apis/status.py)

<details>
<summary><code>def status_status_get(*, category: str | None = None, only_issues: bool | None = None, limit: int | None = 100, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Live up/down/degraded status for major AI & dev services. Issues first. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.status.status_status_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StatusStatusGetErrorBody
```

**Async**

```python
try:
    response = await async_client.status.status_status_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StatusStatusGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>str \| None</code> | ai \| dev \| infra \| platform<br>**Default**: <code>None</code> |
| <code>only_issues</code> | <code>bool \| None</code> | only services currently degraded/down<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[StatusStatusGetErrorBody](dynamic_feed/errors/status_status_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tides

> Source: [Tides](dynamic_feed/apis/tides.py)

<details>
<summary><code>def tides_ep_tides_get(*, station: str | None = "", location: str | None = "", units: str | None = "english", limit: int | None = 6, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current water level + next high/low tides for a US coastal station (NOAA CO-OPS, public domain).
SCOPE: US stations only. Not for navigation — confirm against official NOAA tide tables. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tides.tides_ep_tides_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TidesEpTidesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tides.tides_ep_tides_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TidesEpTidesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>station</code> | <code>str \| None</code> | NOAA station id, e.g. 9414290<br>**Default**: <code>""</code> |
| <code>location</code> | <code>str \| None</code> | or a preset: san francisco, new york, boston, seattle, honolulu, …<br>**Default**: <code>""</code> |
| <code>units</code> | <code>str \| None</code> | english (feet) \| metric<br>**Default**: <code>"english"</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>6</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[TidesEpTidesGetErrorBody](dynamic_feed/errors/tides_ep_tides_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Time

> Source: [Time](dynamic_feed/apis/time.py)

<details>
<summary><code>def time_ep_time_get(*, tz: str | None = "UTC", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current date/time anywhere — an LLM has no clock. (Requires API key; keyless over MCP.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.time.time_ep_time_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TimeEpTimeGetErrorBody
```

**Async**

```python
try:
    response = await async_client.time.time_ep_time_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TimeEpTimeGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tz</code> | <code>str \| None</code> | IANA timezone, e.g. America/New_York (default UTC)<br>**Default**: <code>"UTC"</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[TimeEpTimeGetErrorBody](dynamic_feed/errors/time_ep_time_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TreasuryYields

> Source: [TreasuryYields](dynamic_feed/apis/treasury_yields.py)

<details>
<summary><code>def treasury_yields_treasury_yields_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

US Treasury daily par yield curve + 10Y-2Y / 10Y-3M spreads (the recession signal). Keyless
source, US public domain. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.treasury_yields.treasury_yields_treasury_yields_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TreasuryYieldsTreasuryYieldsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.treasury_yields.treasury_yields_treasury_yields_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TreasuryYieldsTreasuryYieldsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[TreasuryYieldsTreasuryYieldsGetErrorBody](dynamic_feed/errors/treasury_yields_treasury_yields_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Versions

> Source: [Versions](dynamic_feed/apis/versions.py)

<details>
<summary><code>def versions_versions_get(*, product: str | None = None, q: str | None = None, category: str | None = None, only_supported: bool | None = None, only_lts: bool | None = None, limit: int | None = 100, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.versions_versions_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VersionsVersionsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.versions_versions_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VersionsVersionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>str \| None</code> | exact product, e.g. python, nodejs, postgresql<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | match a product name<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | language \| runtime \| framework \| database \| os \| tool<br>**Default**: <code>None</code> |
| <code>only_supported</code> | <code>bool \| None</code> | exclude end-of-life release lines<br>**Default**: <code>None</code> |
| <code>only_lts</code> | <code>bool \| None</code> | only long-term-support lines<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[VersionsVersionsGetErrorBody](dynamic_feed/errors/versions_versions_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Volcanoes

> Source: [Volcanoes](dynamic_feed/apis/volcanoes.py)

<details>
<summary><code>def volcanoes_ep_volcanoes_get(*, status: str | None = "elevated", limit: int | None = 50, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.volcanoes.volcanoes_ep_volcanoes_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VolcanoesEpVolcanoesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.volcanoes.volcanoes_ep_volcanoes_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VolcanoesEpVolcanoesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>str \| None</code> | 'elevated' (default — only active alerts) or 'all'<br>**Default**: <code>"elevated"</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[VolcanoesEpVolcanoesGetErrorBody](dynamic_feed/errors/volcanoes_ep_volcanoes_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WaterLevels

> Source: [WaterLevels](dynamic_feed/apis/water_levels.py)

<details>
<summary><code>def water_levels_water_levels_get(*, state: str | None = "", site: str | None = "", limit: int | None = 20, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.water_levels.water_levels_water_levels_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WaterLevelsWaterLevelsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.water_levels.water_levels_water_levels_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WaterLevelsWaterLevelsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>str \| None</code> | 2-letter US state code, e.g. TX, CA (optional)<br>**Default**: <code>""</code> |
| <code>site</code> | <code>str \| None</code> | USGS site number(s), comma-separated (optional)<br>**Default**: <code>""</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[WaterLevelsWaterLevelsGetErrorBody](dynamic_feed/errors/water_levels_water_levels_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Weather

> Source: [Weather](dynamic_feed/apis/weather.py)

<details>
<summary><code>def v1_openweather_current_v1_openweather_current_get(*, city: str | None = None, lat: float | None = None, lon: float | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.weather.v1_openweather_current_v1_openweather_current_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1OpenweatherCurrentV1OpenweatherCurrentGetErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.v1_openweather_current_v1_openweather_current_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1OpenweatherCurrentV1OpenweatherCurrentGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>city</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lat</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1OpenweatherCurrentV1OpenweatherCurrentGetErrorBody](dynamic_feed/errors/v1_openweather_current_v1_openweather_current_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_openweather_forecast_v1_openweather_forecast_get(*, city: str | None = None, lat: float | None = None, lon: float | None = None, days: int | None = 5, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.weather.v1_openweather_forecast_v1_openweather_forecast_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1OpenweatherForecastV1OpenweatherForecastGetErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.v1_openweather_forecast_v1_openweather_forecast_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1OpenweatherForecastV1OpenweatherForecastGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>city</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lat</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>days</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>5</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1OpenweatherForecastV1OpenweatherForecastGetErrorBody](dynamic_feed/errors/v1_openweather_forecast_v1_openweather_forecast_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def weather_weather_get(*, city: str | None = None, lat: float | None = None, lon: float | None = None, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current weather anywhere — by city name (geocoded) or lat/lon. Temperature, feels-like,
wind, humidity, precipitation & conditions, live from Open-Meteo. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.weather.weather_weather_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WeatherWeatherGetErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.weather_weather_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WeatherWeatherGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>city</code> | <code>str \| None</code> | city name, e.g. London, Tokyo, New York<br>**Default**: <code>None</code> |
| <code>lat</code> | <code>float \| None</code> | latitude (alternative to city)<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | longitude (alternative to city)<br>**Default**: <code>None</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[WeatherWeatherGetErrorBody](dynamic_feed/errors/weather_weather_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WeatherAlerts

> Source: [WeatherAlerts](dynamic_feed/apis/weather_alerts.py)

<details>
<summary><code>def weather_alerts_weather_alerts_get(*, area: str | None = "", event: str | None = "", limit: int | None = 20, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Active US NWS weather alerts/warnings — life-safety watches/warnings/advisories. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.weather_alerts.weather_alerts_weather_alerts_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WeatherAlertsWeatherAlertsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.weather_alerts.weather_alerts_weather_alerts_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WeatherAlertsWeatherAlertsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>area</code> | <code>str \| None</code> | 2-letter US state (CA, TX...) or marine zone; blank = nationwide Severe/Extreme<br>**Default**: <code>""</code> |
| <code>event</code> | <code>str \| None</code> | filter by event type, e.g. Flood, Tornado, Heat<br>**Default**: <code>""</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[WeatherAlertsWeatherAlertsGetErrorBody](dynamic_feed/errors/weather_alerts_weather_alerts_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WhatsNew

> Source: [WhatsNew](dynamic_feed/apis/whats_new.py)

<details>
<summary><code>def whats_new_ep_whats_new_get(*, cutoff: str | None = "", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.whats_new.whats_new_ep_whats_new_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WhatsNewEpWhatsNewGetErrorBody
```

**Async**

```python
try:
    response = await async_client.whats_new.whats_new_ep_whats_new_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WhatsNewEpWhatsNewGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cutoff</code> | <code>str \| None</code> | your knowledge cutoff if known, e.g. 2024-10 (optional)<br>**Default**: <code>""</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[WhatsNewEpWhatsNewGetErrorBody](dynamic_feed/errors/whats_new_ep_whats_new_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Wildfires

> Source: [Wildfires](dynamic_feed/apis/wildfires.py)

<details>
<summary><code>def wildfires_wildfires_get(*, state: str | None = None, only_uncontained: bool | None = False, min_acres: float | None = 0.0, limit: int | None = 25, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Active US wildfires (NIFC WFIGS) — incident name, size in acres, % contained, cause, state and
location. The 'how big / how contained' detail hotspot feeds can't give. Largest first. (Requires API key.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.wildfires.wildfires_wildfires_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WildfiresWildfiresGetErrorBody
```

**Async**

```python
try:
    response = await async_client.wildfires.wildfires_wildfires_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WildfiresWildfiresGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>str \| None</code> | filter to a US state, e.g. CA, TX (2-letter)<br>**Default**: <code>None</code> |
| <code>only_uncontained</code> | <code>bool \| None</code> | only fires below 100% containment<br>**Default**: <code>False</code> |
| <code>min_acres</code> | <code>float \| None</code> | minimum incident size in acres<br>**Default**: <code>0.0</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[WildfiresWildfiresGetErrorBody](dynamic_feed/errors/wildfires_wildfires_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WorldPulse

> Source: [WorldPulse](dynamic_feed/apis/world_pulse.py)

<details>
<summary><code>def world_pulse_ep_world_pulse_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What's happening on Earth right now — one cross-domain live digest. (Key on REST; keyless on MCP.)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.world_pulse.world_pulse_ep_world_pulse_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WorldPulseEpWorldPulseGetErrorBody
```

**Async**

```python
try:
    response = await async_client.world_pulse.world_pulse_ep_world_pulse_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WorldPulseEpWorldPulseGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_api_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_proxy_secret</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>x_rapidapi_user</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[WorldPulseEpWorldPulseGetErrorBody](dynamic_feed/errors/world_pulse_ep_world_pulse_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VerifiedFacts

> Source: [VerifiedFacts](dynamic_feed/apis/verified_facts.py)

<details>
<summary><code>def post_v1_answer(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.verified_facts.post_v1_answer()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.verified_facts.post_v1_answer()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_v1_facts(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.verified_facts.post_v1_facts()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.verified_facts.post_v1_facts()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_answer_v1_answer_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.verified_facts.v1_answer_v1_answer_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.verified_facts.v1_answer_v1_answer_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_facts_v1_facts_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.verified_facts.v1_facts_v1_facts_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.verified_facts.v1_facts_v1_facts_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_state_of_mcp_trend_v1_state_of_mcp_trend_get(*, days: int | None = 365, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Growth over time: the headline State of MCP numbers, one point per daily snapshot, oldest
first. The trend IS the value (server count, remote share, keyless share drifting over time).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.verified_facts.v1_state_of_mcp_trend_v1_state_of_mcp_trend_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody
```

**Async**

```python
try:
    response = await async_client.verified_facts.v1_state_of_mcp_trend_v1_state_of_mcp_trend_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>365</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody](dynamic_feed/errors/v1_state_of_mcp_trend_v1_state_of_mcp_trend_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](dynamic_feed/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](dynamic_feed/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def v1_state_of_mcp_v1_state_of_mcp_get(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.verified_facts.v1_state_of_mcp_v1_state_of_mcp_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.verified_facts.v1_state_of_mcp_v1_state_of_mcp_get()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamic_feed/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](dynamic_feed/core/exceptions.py)&#91;[RawError](dynamic_feed/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

