# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [DynamicFeedClient](src/DynamicFeed/DynamicFeedClient.cs)

## Advisories

> Source: [Advisories](src/DynamicFeed/Api/Advisories.cs)

<details>
<summary><code>Task&lt;object&gt; AdvisoriesAdvisoriesGet(AdvisoriesAdvisoriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Advisories.AdvisoriesAdvisoriesGet(new AdvisoriesAdvisoriesGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<AdvisoriesAdvisoriesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AdvisoriesAdvisoriesGetRequest](src/DynamicFeed/Requests/Advisories/AdvisoriesAdvisoriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[AdvisoriesAdvisoriesGetError](src/DynamicFeed/Errors/AdvisoriesAdvisoriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; AdvisoriesCheckAdvisoriesCheckGet(AdvisoriesCheckAdvisoriesCheckGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Advisories.AdvisoriesCheckAdvisoriesCheckGet(
        new AdvisoriesCheckAdvisoriesCheckGetRequest { Package = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<AdvisoriesCheckAdvisoriesCheckGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AdvisoriesCheckAdvisoriesCheckGetRequest](src/DynamicFeed/Requests/Advisories/AdvisoriesCheckAdvisoriesCheckGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[AdvisoriesCheckAdvisoriesCheckGetError](src/DynamicFeed/Errors/AdvisoriesCheckAdvisoriesCheckGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Agent

> Source: [Agent](src/DynamicFeed/Api/Agent.cs)

<details>
<summary><code>Task&lt;object&gt; PostV1Explain(PostV1ExplainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.PostV1Explain(new PostV1ExplainRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<PostV1ExplainError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostV1ExplainRequest](src/DynamicFeed/Requests/Agent/PostV1ExplainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[PostV1ExplainError](src/DynamicFeed/Errors/PostV1ExplainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; SchemasIndexSchemasIndexJsonGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.SchemasIndexSchemasIndexJsonGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1AgentReceiptV1AgentReceiptPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1AgentReceiptV1AgentReceiptPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1AsofV1AsofGet(V1AsofV1AsofGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1AsofV1AsofGet(new V1AsofV1AsofGetRequest
    {
        Tool = "some example string",
        T = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1AsofV1AsofGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1AsofV1AsofGetRequest](src/DynamicFeed/Requests/Agent/V1AsofV1AsofGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1AsofV1AsofGetError](src/DynamicFeed/Errors/V1AsofV1AsofGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1AttestV1AttestGet(V1AttestV1AttestGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1AttestV1AttestGet(new V1AttestV1AttestGetRequest
    {
        Metric = "some example string",
        Threshold = 1.5d,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1AttestV1AttestGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1AttestV1AttestGetRequest](src/DynamicFeed/Requests/Agent/V1AttestV1AttestGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1AttestV1AttestGetError](src/DynamicFeed/Errors/V1AttestV1AttestGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1BatchV1BatchPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1BatchV1BatchPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1BenchmarkHistoryV1BenchmarkHistoryGet(V1BenchmarkHistoryV1BenchmarkHistoryGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1BenchmarkHistoryV1BenchmarkHistoryGet(
        new V1BenchmarkHistoryV1BenchmarkHistoryGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1BenchmarkHistoryV1BenchmarkHistoryGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1BenchmarkHistoryV1BenchmarkHistoryGetRequest](src/DynamicFeed/Requests/Agent/V1BenchmarkHistoryV1BenchmarkHistoryGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1BenchmarkHistoryV1BenchmarkHistoryGetError](src/DynamicFeed/Errors/V1BenchmarkHistoryV1BenchmarkHistoryGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1BenchmarkV1BenchmarkGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1BenchmarkV1BenchmarkGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1BundleV1BundlesBundleIdGet(V1BundleV1BundlesBundleIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1BundleV1BundlesBundleIdGet(new V1BundleV1BundlesBundleIdGetRequest
    {
        BundleId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1BundleV1BundlesBundleIdGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1BundleV1BundlesBundleIdGetRequest](src/DynamicFeed/Requests/Agent/V1BundleV1BundlesBundleIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1BundleV1BundlesBundleIdGetError](src/DynamicFeed/Errors/V1BundleV1BundlesBundleIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1BundlesV1BundlesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1BundlesV1BundlesGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1BushfireV1BushfireGet(V1BushfireV1BushfireGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1BushfireV1BushfireGet(new V1BushfireV1BushfireGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1BushfireV1BushfireGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1BushfireV1BushfireGetRequest](src/DynamicFeed/Requests/Agent/V1BushfireV1BushfireGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1BushfireV1BushfireGetError](src/DynamicFeed/Errors/V1BushfireV1BushfireGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1CheckpointProofV1CheckpointsDayProofGet(V1CheckpointProofV1CheckpointsDayProofGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1CheckpointProofV1CheckpointsDayProofGet(
        new V1CheckpointProofV1CheckpointsDayProofGetRequest { Day = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1CheckpointProofV1CheckpointsDayProofGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1CheckpointProofV1CheckpointsDayProofGetRequest](src/DynamicFeed/Requests/Agent/V1CheckpointProofV1CheckpointsDayProofGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1CheckpointProofV1CheckpointsDayProofGetError](src/DynamicFeed/Errors/V1CheckpointProofV1CheckpointsDayProofGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1CheckpointsV1CheckpointsGet(V1CheckpointsV1CheckpointsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1CheckpointsV1CheckpointsGet(new V1CheckpointsV1CheckpointsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1CheckpointsV1CheckpointsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1CheckpointsV1CheckpointsGetRequest](src/DynamicFeed/Requests/Agent/V1CheckpointsV1CheckpointsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1CheckpointsV1CheckpointsGetError](src/DynamicFeed/Errors/V1CheckpointsV1CheckpointsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1DiscoverGetV1DiscoverGet(V1DiscoverGetV1DiscoverGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1DiscoverGetV1DiscoverGet(new V1DiscoverGetV1DiscoverGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1DiscoverGetV1DiscoverGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1DiscoverGetV1DiscoverGetRequest](src/DynamicFeed/Requests/Agent/V1DiscoverGetV1DiscoverGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1DiscoverGetV1DiscoverGetError](src/DynamicFeed/Errors/V1DiscoverGetV1DiscoverGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1DiscoverPostV1DiscoverPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1DiscoverPostV1DiscoverPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1DriftV1DriftPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1DriftV1DriftPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1EvalReceiptSampleV1EvalReceiptSampleGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1EvalReceiptSampleV1EvalReceiptSampleGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1EvalReceiptV1EvalReceiptPost(V1EvalReceiptV1EvalReceiptPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1EvalReceiptV1EvalReceiptPost(new V1EvalReceiptV1EvalReceiptPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1EvalReceiptV1EvalReceiptPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1EvalReceiptV1EvalReceiptPostRequest](src/DynamicFeed/Requests/Agent/V1EvalReceiptV1EvalReceiptPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1EvalReceiptV1EvalReceiptPostError](src/DynamicFeed/Errors/V1EvalReceiptV1EvalReceiptPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1EvidenceWildfireV1EvidenceWildfireGet(V1EvidenceWildfireV1EvidenceWildfireGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1EvidenceWildfireV1EvidenceWildfireGet(
        new V1EvidenceWildfireV1EvidenceWildfireGetRequest { Lat = 1.5d, Lon = 1.5d });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1EvidenceWildfireV1EvidenceWildfireGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1EvidenceWildfireV1EvidenceWildfireGetRequest](src/DynamicFeed/Requests/Agent/V1EvidenceWildfireV1EvidenceWildfireGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1EvidenceWildfireV1EvidenceWildfireGetError](src/DynamicFeed/Errors/V1EvidenceWildfireV1EvidenceWildfireGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1ExplainV1ExplainGet(V1ExplainV1ExplainGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1ExplainV1ExplainGet(new V1ExplainV1ExplainGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1ExplainV1ExplainGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1ExplainV1ExplainGetRequest](src/DynamicFeed/Requests/Agent/V1ExplainV1ExplainGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1ExplainV1ExplainGetError](src/DynamicFeed/Errors/V1ExplainV1ExplainGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1ExposureReportV1ExposureReportGet(V1ExposureReportV1ExposureReportGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1ExposureReportV1ExposureReportGet(
        new V1ExposureReportV1ExposureReportGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1ExposureReportV1ExposureReportGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1ExposureReportV1ExposureReportGetRequest](src/DynamicFeed/Requests/Agent/V1ExposureReportV1ExposureReportGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1ExposureReportV1ExposureReportGetError](src/DynamicFeed/Errors/V1ExposureReportV1ExposureReportGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1GuardV1GuardPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1GuardV1GuardPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1IndexV1Get(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1IndexV1Get();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1InferenceReceiptSampleV1InferenceReceiptSampleGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1InferenceReceiptSampleV1InferenceReceiptSampleGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1InferenceReceiptV1InferenceReceiptPost(V1InferenceReceiptV1InferenceReceiptPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1InferenceReceiptV1InferenceReceiptPost(
        new V1InferenceReceiptV1InferenceReceiptPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1InferenceReceiptV1InferenceReceiptPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1InferenceReceiptV1InferenceReceiptPostRequest](src/DynamicFeed/Requests/Agent/V1InferenceReceiptV1InferenceReceiptPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1InferenceReceiptV1InferenceReceiptPostError](src/DynamicFeed/Errors/V1InferenceReceiptV1InferenceReceiptPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1IntensityV1IntensityGet(V1IntensityV1IntensityGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1IntensityV1IntensityGet(new V1IntensityV1IntensityGetRequest
    {
        Lat = 1.5d,
        Lon = 1.5d,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1IntensityV1IntensityGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1IntensityV1IntensityGetRequest](src/DynamicFeed/Requests/Agent/V1IntensityV1IntensityGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1IntensityV1IntensityGetError](src/DynamicFeed/Errors/V1IntensityV1IntensityGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1MeV1MeGet(V1MeV1MeGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1MeV1MeGet(new V1MeV1MeGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1MeV1MeGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1MeV1MeGetRequest](src/DynamicFeed/Requests/Agent/V1MeV1MeGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1MeV1MeGetError](src/DynamicFeed/Errors/V1MeV1MeGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1NearbyV1NearbyGet(V1NearbyV1NearbyGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1NearbyV1NearbyGet(new V1NearbyV1NearbyGetRequest { Lat = 1.5d, Lon = 1.5d });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1NearbyV1NearbyGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1NearbyV1NearbyGetRequest](src/DynamicFeed/Requests/Agent/V1NearbyV1NearbyGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1NearbyV1NearbyGetError](src/DynamicFeed/Errors/V1NearbyV1NearbyGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1NotarizeV1NotarizePost(V1NotarizeV1NotarizePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1NotarizeV1NotarizePost(new V1NotarizeV1NotarizePostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1NotarizeV1NotarizePostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1NotarizeV1NotarizePostRequest](src/DynamicFeed/Requests/Agent/V1NotarizeV1NotarizePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1NotarizeV1NotarizePostError](src/DynamicFeed/Errors/V1NotarizeV1NotarizePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1NotaryEntryV1NotaryLogIdxGet(V1NotaryEntryV1NotaryLogIdxGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1NotaryEntryV1NotaryLogIdxGet(new V1NotaryEntryV1NotaryLogIdxGetRequest
    {
        Idx = 1,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1NotaryEntryV1NotaryLogIdxGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1NotaryEntryV1NotaryLogIdxGetRequest](src/DynamicFeed/Requests/Agent/V1NotaryEntryV1NotaryLogIdxGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1NotaryEntryV1NotaryLogIdxGetError](src/DynamicFeed/Errors/V1NotaryEntryV1NotaryLogIdxGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1NotaryFeedRegisterV1NotaryFeedsPost(V1NotaryFeedRegisterV1NotaryFeedsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1NotaryFeedRegisterV1NotaryFeedsPost(
        new V1NotaryFeedRegisterV1NotaryFeedsPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1NotaryFeedRegisterV1NotaryFeedsPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1NotaryFeedRegisterV1NotaryFeedsPostRequest](src/DynamicFeed/Requests/Agent/V1NotaryFeedRegisterV1NotaryFeedsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1NotaryFeedRegisterV1NotaryFeedsPostError](src/DynamicFeed/Errors/V1NotaryFeedRegisterV1NotaryFeedsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1NotaryFeedsListV1NotaryFeedsGet(V1NotaryFeedsListV1NotaryFeedsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1NotaryFeedsListV1NotaryFeedsGet(new V1NotaryFeedsListV1NotaryFeedsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1NotaryFeedsListV1NotaryFeedsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1NotaryFeedsListV1NotaryFeedsGetRequest](src/DynamicFeed/Requests/Agent/V1NotaryFeedsListV1NotaryFeedsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1NotaryFeedsListV1NotaryFeedsGetError](src/DynamicFeed/Errors/V1NotaryFeedsListV1NotaryFeedsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1NotaryHeadV1NotaryLogHeadGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1NotaryHeadV1NotaryLogHeadGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1NotaryLogV1NotaryLogGet(V1NotaryLogV1NotaryLogGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1NotaryLogV1NotaryLogGet(new V1NotaryLogV1NotaryLogGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1NotaryLogV1NotaryLogGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1NotaryLogV1NotaryLogGetRequest](src/DynamicFeed/Requests/Agent/V1NotaryLogV1NotaryLogGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1NotaryLogV1NotaryLogGetError](src/DynamicFeed/Errors/V1NotaryLogV1NotaryLogGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1NotaryProofV1NotaryLogIdxProofGet(V1NotaryProofV1NotaryLogIdxProofGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1NotaryProofV1NotaryLogIdxProofGet(new V1NotaryProofV1NotaryLogIdxProofGetRequest
    {
        Idx = 1,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1NotaryProofV1NotaryLogIdxProofGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1NotaryProofV1NotaryLogIdxProofGetRequest](src/DynamicFeed/Requests/Agent/V1NotaryProofV1NotaryLogIdxProofGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1NotaryProofV1NotaryLogIdxProofGetError](src/DynamicFeed/Errors/V1NotaryProofV1NotaryLogIdxProofGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1ProAsofV1ProAsofPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1ProAsofV1ProAsofPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1ProBatchV1ProBatchPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1ProBatchV1ProBatchPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1ProCatalogV1ProCatalogGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1ProCatalogV1ProCatalogGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1ProToolDiscoverV1ProToolToolGet(V1ProToolDiscoverV1ProToolToolGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1ProToolDiscoverV1ProToolToolGet(new V1ProToolDiscoverV1ProToolToolGetRequest
    {
        Tool = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1ProToolDiscoverV1ProToolToolGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1ProToolDiscoverV1ProToolToolGetRequest](src/DynamicFeed/Requests/Agent/V1ProToolDiscoverV1ProToolToolGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1ProToolDiscoverV1ProToolToolGetError](src/DynamicFeed/Errors/V1ProToolDiscoverV1ProToolToolGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1ProToolV1ProToolToolPost(V1ProToolV1ProToolToolPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1ProToolV1ProToolToolPost(new V1ProToolV1ProToolToolPostRequest
    {
        Tool = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1ProToolV1ProToolToolPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1ProToolV1ProToolToolPostRequest](src/DynamicFeed/Requests/Agent/V1ProToolV1ProToolToolPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1ProToolV1ProToolToolPostError](src/DynamicFeed/Errors/V1ProToolV1ProToolToolPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1ProxyWitnessV1ProxyWitnessPost(V1ProxyWitnessV1ProxyWitnessPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1ProxyWitnessV1ProxyWitnessPost(new V1ProxyWitnessV1ProxyWitnessPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1ProxyWitnessV1ProxyWitnessPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1ProxyWitnessV1ProxyWitnessPostRequest](src/DynamicFeed/Requests/Agent/V1ProxyWitnessV1ProxyWitnessPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1ProxyWitnessV1ProxyWitnessPostError](src/DynamicFeed/Errors/V1ProxyWitnessV1ProxyWitnessPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1ReceiptV1ReceiptPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1ReceiptV1ReceiptPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1SnapshotV1SnapshotGet(V1SnapshotV1SnapshotGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1SnapshotV1SnapshotGet(new V1SnapshotV1SnapshotGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1SnapshotV1SnapshotGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1SnapshotV1SnapshotGetRequest](src/DynamicFeed/Requests/Agent/V1SnapshotV1SnapshotGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1SnapshotV1SnapshotGetError](src/DynamicFeed/Errors/V1SnapshotV1SnapshotGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1SourcesV1SourcesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1SourcesV1SourcesGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1StampV1StampPost(V1StampV1StampPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agent.V1StampV1StampPost(new V1StampV1StampPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1StampV1StampPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1StampV1StampPostRequest](src/DynamicFeed/Requests/Agent/V1StampV1StampPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1StampV1StampPostError](src/DynamicFeed/Errors/V1StampV1StampPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1StationGetV1StationStationIdGet(V1StationGetV1StationStationIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1StationGetV1StationStationIdGet(new V1StationGetV1StationStationIdGetRequest
    {
        StationId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1StationGetV1StationStationIdGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1StationGetV1StationStationIdGetRequest](src/DynamicFeed/Requests/Agent/V1StationGetV1StationStationIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1StationGetV1StationStationIdGetError](src/DynamicFeed/Errors/V1StationGetV1StationStationIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1StationReadingV1StationReadingPost(V1StationReadingV1StationReadingPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1StationReadingV1StationReadingPost(
        new V1StationReadingV1StationReadingPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1StationReadingV1StationReadingPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1StationReadingV1StationReadingPostRequest](src/DynamicFeed/Requests/Agent/V1StationReadingV1StationReadingPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1StationReadingV1StationReadingPostError](src/DynamicFeed/Errors/V1StationReadingV1StationReadingPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1StationRegisterV1StationRegisterPost(V1StationRegisterV1StationRegisterPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1StationRegisterV1StationRegisterPost(
        new V1StationRegisterV1StationRegisterPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1StationRegisterV1StationRegisterPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1StationRegisterV1StationRegisterPostRequest](src/DynamicFeed/Requests/Agent/V1StationRegisterV1StationRegisterPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1StationRegisterV1StationRegisterPostError](src/DynamicFeed/Errors/V1StationRegisterV1StationRegisterPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1StreamV1StreamGet(V1StreamV1StreamGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1StreamV1StreamGet(new V1StreamV1StreamGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1StreamV1StreamGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1StreamV1StreamGetRequest](src/DynamicFeed/Requests/Agent/V1StreamV1StreamGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1StreamV1StreamGetError](src/DynamicFeed/Errors/V1StreamV1StreamGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1TriggerReceiptV1TriggerReceiptGet(V1TriggerReceiptV1TriggerReceiptGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1TriggerReceiptV1TriggerReceiptGet(new V1TriggerReceiptV1TriggerReceiptGetRequest
    {
        Metric = "some example string",
        Threshold = 1.5d,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1TriggerReceiptV1TriggerReceiptGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1TriggerReceiptV1TriggerReceiptGetRequest](src/DynamicFeed/Requests/Agent/V1TriggerReceiptV1TriggerReceiptGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1TriggerReceiptV1TriggerReceiptGetError](src/DynamicFeed/Errors/V1TriggerReceiptV1TriggerReceiptGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1VcV1VcPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1VcV1VcPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1WatchlistDeleteV1WatchlistDelete(V1WatchlistDeleteV1WatchlistDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1WatchlistDeleteV1WatchlistDelete(
        new V1WatchlistDeleteV1WatchlistDeleteRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1WatchlistDeleteV1WatchlistDeleteError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1WatchlistDeleteV1WatchlistDeleteRequest](src/DynamicFeed/Requests/Agent/V1WatchlistDeleteV1WatchlistDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1WatchlistDeleteV1WatchlistDeleteError](src/DynamicFeed/Errors/V1WatchlistDeleteV1WatchlistDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1WatchlistGetV1WatchlistGet(V1WatchlistGetV1WatchlistGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1WatchlistGetV1WatchlistGet(new V1WatchlistGetV1WatchlistGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1WatchlistGetV1WatchlistGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1WatchlistGetV1WatchlistGetRequest](src/DynamicFeed/Requests/Agent/V1WatchlistGetV1WatchlistGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1WatchlistGetV1WatchlistGetError](src/DynamicFeed/Errors/V1WatchlistGetV1WatchlistGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1WatchlistPostV1WatchlistPost(V1WatchlistPostV1WatchlistPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1WatchlistPostV1WatchlistPost(new V1WatchlistPostV1WatchlistPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1WatchlistPostV1WatchlistPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1WatchlistPostV1WatchlistPostRequest](src/DynamicFeed/Requests/Agent/V1WatchlistPostV1WatchlistPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1WatchlistPostV1WatchlistPostError](src/DynamicFeed/Errors/V1WatchlistPostV1WatchlistPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1WebhooksCreateV1WebhooksPost(V1WebhooksCreateV1WebhooksPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1WebhooksCreateV1WebhooksPost(new V1WebhooksCreateV1WebhooksPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1WebhooksCreateV1WebhooksPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1WebhooksCreateV1WebhooksPostRequest](src/DynamicFeed/Requests/Agent/V1WebhooksCreateV1WebhooksPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1WebhooksCreateV1WebhooksPostError](src/DynamicFeed/Errors/V1WebhooksCreateV1WebhooksPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1WebhooksDeleteV1WebhooksDelete(V1WebhooksDeleteV1WebhooksDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1WebhooksDeleteV1WebhooksDelete(new V1WebhooksDeleteV1WebhooksDeleteRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1WebhooksDeleteV1WebhooksDeleteError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1WebhooksDeleteV1WebhooksDeleteRequest](src/DynamicFeed/Requests/Agent/V1WebhooksDeleteV1WebhooksDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1WebhooksDeleteV1WebhooksDeleteError](src/DynamicFeed/Errors/V1WebhooksDeleteV1WebhooksDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1WebhooksListV1WebhooksGet(V1WebhooksListV1WebhooksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1WebhooksListV1WebhooksGet(new V1WebhooksListV1WebhooksGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1WebhooksListV1WebhooksGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1WebhooksListV1WebhooksGetRequest](src/DynamicFeed/Requests/Agent/V1WebhooksListV1WebhooksGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1WebhooksListV1WebhooksGetError](src/DynamicFeed/Errors/V1WebhooksListV1WebhooksGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1WebhooksTestV1WebhooksTestPost(V1WebhooksTestV1WebhooksTestPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1WebhooksTestV1WebhooksTestPost(new V1WebhooksTestV1WebhooksTestPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1WebhooksTestV1WebhooksTestPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1WebhooksTestV1WebhooksTestPostRequest](src/DynamicFeed/Requests/Agent/V1WebhooksTestV1WebhooksTestPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1WebhooksTestV1WebhooksTestPostError](src/DynamicFeed/Errors/V1WebhooksTestV1WebhooksTestPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1WitnessInclusionV1WitnessIdxInclusionGet(V1WitnessInclusionV1WitnessIdxInclusionGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1WitnessInclusionV1WitnessIdxInclusionGet(
        new V1WitnessInclusionV1WitnessIdxInclusionGetRequest { Idx = 1 });
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1WitnessInclusionV1WitnessIdxInclusionGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1WitnessInclusionV1WitnessIdxInclusionGetRequest](src/DynamicFeed/Requests/Agent/V1WitnessInclusionV1WitnessIdxInclusionGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1WitnessInclusionV1WitnessIdxInclusionGetError](src/DynamicFeed/Errors/V1WitnessInclusionV1WitnessIdxInclusionGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1WitnessSampleV1WitnessSampleGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1WitnessSampleV1WitnessSampleGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1WitnessV1WitnessPost(V1WitnessV1WitnessPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Agent.V1WitnessV1WitnessPost(new V1WitnessV1WitnessPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1WitnessV1WitnessPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1WitnessV1WitnessPostRequest](src/DynamicFeed/Requests/Agent/V1WitnessV1WitnessPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1WitnessV1WitnessPostError](src/DynamicFeed/Errors/V1WitnessV1WitnessPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AgentStats

> Source: [AgentStats](src/DynamicFeed/Api/AgentStats.cs)

<details>
<summary><code>Task&lt;object&gt; AgentStatsV1AgentStatsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AgentStats.AgentStatsV1AgentStatsGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AiModels

> Source: [AiModels](src/DynamicFeed/Api/AiModels.cs)

<details>
<summary><code>Task&lt;object&gt; AiModelsEpAiModelsGet(AiModelsEpAiModelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AiModels.AiModelsEpAiModelsGet(new AiModelsEpAiModelsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<AiModelsEpAiModelsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AiModelsEpAiModelsGetRequest](src/DynamicFeed/Requests/AiModels/AiModelsEpAiModelsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[AiModelsEpAiModelsGetError](src/DynamicFeed/Errors/AiModelsEpAiModelsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AirQuality

> Source: [AirQuality](src/DynamicFeed/Api/AirQuality.cs)

<details>
<summary><code>Task&lt;object&gt; AirQualityAirQualityGet(AirQualityAirQualityGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AirQuality.AirQualityAirQualityGet(new AirQualityAirQualityGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<AirQualityAirQualityGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AirQualityAirQualityGetRequest](src/DynamicFeed/Requests/AirQuality/AirQualityAirQualityGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[AirQualityAirQualityGetError](src/DynamicFeed/Errors/AirQualityAirQualityGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AirportDelays

> Source: [AirportDelays](src/DynamicFeed/Api/AirportDelays.cs)

<details>
<summary><code>Task&lt;object&gt; AirportDelaysAirportDelaysGet(AirportDelaysAirportDelaysGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AirportDelays.AirportDelaysAirportDelaysGet(new AirportDelaysAirportDelaysGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<AirportDelaysAirportDelaysGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AirportDelaysAirportDelaysGetRequest](src/DynamicFeed/Requests/AirportDelays/AirportDelaysAirportDelaysGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[AirportDelaysAirportDelaysGetError](src/DynamicFeed/Errors/AirportDelaysAirportDelaysGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Benchmarks

> Source: [Benchmarks](src/DynamicFeed/Api/Benchmarks.cs)

<details>
<summary><code>Task&lt;object&gt; BenchmarksBenchmarksGet(BenchmarksBenchmarksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Benchmarks.BenchmarksBenchmarksGet(new BenchmarksBenchmarksGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<BenchmarksBenchmarksGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BenchmarksBenchmarksGetRequest](src/DynamicFeed/Requests/Benchmarks/BenchmarksBenchmarksGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[BenchmarksBenchmarksGetError](src/DynamicFeed/Errors/BenchmarksBenchmarksGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; BenchmarksHistoryBenchmarksHistoryGet(BenchmarksHistoryBenchmarksHistoryGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Benchmarks.BenchmarksHistoryBenchmarksHistoryGet(
        new BenchmarksHistoryBenchmarksHistoryGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<BenchmarksHistoryBenchmarksHistoryGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BenchmarksHistoryBenchmarksHistoryGetRequest](src/DynamicFeed/Requests/Benchmarks/BenchmarksHistoryBenchmarksHistoryGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[BenchmarksHistoryBenchmarksHistoryGetError](src/DynamicFeed/Errors/BenchmarksHistoryBenchmarksHistoryGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Billing

> Source: [Billing](src/DynamicFeed/Api/Billing.cs)

<details>
<summary><code>Task&lt;object&gt; BillingSuccessBillingSuccessGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Billing.BillingSuccessBillingSuccessGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; BillingWebhookBillingWebhookPost(BillingWebhookBillingWebhookPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Billing.BillingWebhookBillingWebhookPost(new BillingWebhookBillingWebhookPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<BillingWebhookBillingWebhookPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BillingWebhookBillingWebhookPostRequest](src/DynamicFeed/Requests/Billing/BillingWebhookBillingWebhookPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[BillingWebhookBillingWebhookPostError](src/DynamicFeed/Errors/BillingWebhookBillingWebhookPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; CheckoutBillingCheckoutPost(CheckoutBillingCheckoutPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Billing.CheckoutBillingCheckoutPost(new CheckoutBillingCheckoutPostRequest
    {
        ApiKey = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<CheckoutBillingCheckoutPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckoutBillingCheckoutPostRequest](src/DynamicFeed/Requests/Billing/CheckoutBillingCheckoutPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[CheckoutBillingCheckoutPostError](src/DynamicFeed/Errors/CheckoutBillingCheckoutPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CarbonIntensity

> Source: [CarbonIntensity](src/DynamicFeed/Api/CarbonIntensity.cs)

<details>
<summary><code>Task&lt;object&gt; CarbonIntensityCarbonIntensityGet(CarbonIntensityCarbonIntensityGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CarbonIntensity.CarbonIntensityCarbonIntensityGet(
        new CarbonIntensityCarbonIntensityGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<CarbonIntensityCarbonIntensityGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CarbonIntensityCarbonIntensityGetRequest](src/DynamicFeed/Requests/CarbonIntensity/CarbonIntensityCarbonIntensityGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[CarbonIntensityCarbonIntensityGetError](src/DynamicFeed/Errors/CarbonIntensityCarbonIntensityGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## China

> Source: [China](src/DynamicFeed/Api/China.cs)

<details>
<summary><code>Task&lt;object&gt; ChinaEpChinaGet(ChinaEpChinaGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.China.ChinaEpChinaGet(new ChinaEpChinaGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ChinaEpChinaGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ChinaEpChinaGetRequest](src/DynamicFeed/Requests/China/ChinaEpChinaGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[ChinaEpChinaGetError](src/DynamicFeed/Errors/ChinaEpChinaGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Cite

> Source: [Cite](src/DynamicFeed/Api/Cite.cs)

<details>
<summary><code>Task&lt;object&gt; CiteEpCiteGet(CiteEpCiteGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Cite.CiteEpCiteGet(new CiteEpCiteGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<CiteEpCiteGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CiteEpCiteGetRequest](src/DynamicFeed/Requests/Cite/CiteEpCiteGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[CiteEpCiteGetError](src/DynamicFeed/Errors/CiteEpCiteGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Consensus

> Source: [Consensus](src/DynamicFeed/Api/Consensus.cs)

<details>
<summary><code>Task&lt;object&gt; ConsensusConsensusGet(ConsensusConsensusGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Consensus.ConsensusConsensusGet(new ConsensusConsensusGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ConsensusConsensusGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConsensusConsensusGetRequest](src/DynamicFeed/Requests/Consensus/ConsensusConsensusGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[ConsensusConsensusGetError](src/DynamicFeed/Errors/ConsensusConsensusGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ConvertApi

> Source: [ConvertApi](src/DynamicFeed/Api/ConvertApi.cs)

<details>
<summary><code>Task&lt;object&gt; ConvertEpConvertGet(ConvertEpConvertGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ConvertApi.ConvertEpConvertGet(new ConvertEpConvertGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ConvertEpConvertGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConvertEpConvertGetRequest](src/DynamicFeed/Requests/ConvertApi/ConvertEpConvertGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[ConvertEpConvertGetError](src/DynamicFeed/Errors/ConvertEpConvertGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Countdown

> Source: [Countdown](src/DynamicFeed/Api/Countdown.cs)

<details>
<summary><code>Task&lt;object&gt; CountdownEpCountdownGet(CountdownEpCountdownGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Countdown.CountdownEpCountdownGet(new CountdownEpCountdownGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<CountdownEpCountdownGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CountdownEpCountdownGetRequest](src/DynamicFeed/Requests/Countdown/CountdownEpCountdownGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[CountdownEpCountdownGetError](src/DynamicFeed/Errors/CountdownEpCountdownGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Dataset

> Source: [Dataset](src/DynamicFeed/Api/Dataset.cs)

<details>
<summary><code>Task&lt;object&gt; DatasetAdvisoriesDatasetAdvisoriesJsonGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Dataset.DatasetAdvisoriesDatasetAdvisoriesJsonGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DatasetConsensusDatasetConsensusJsonGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Dataset.DatasetConsensusDatasetConsensusJsonGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DatasetIndexDatasetGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Dataset.DatasetIndexDatasetGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DatasetModelsDatasetModelsJsonGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Dataset.DatasetModelsDatasetModelsJsonGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DatasetNewsDatasetNewsJsonGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Dataset.DatasetNewsDatasetNewsJsonGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DatasetServersDatasetServersJsonGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Dataset.DatasetServersDatasetServersJsonGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DatasetStatusDatasetStatusJsonGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Dataset.DatasetStatusDatasetStatusJsonGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DatasetVersionsDatasetVersionsJsonGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Dataset.DatasetVersionsDatasetVersionsJsonGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Dev

> Source: [Dev](src/DynamicFeed/Api/Dev.cs)

<details>
<summary><code>Task&lt;object&gt; DnsEpDnsGet(DnsEpDnsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Dev.DnsEpDnsGet(new DnsEpDnsGetRequest { Name = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DnsEpDnsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DnsEpDnsGetRequest](src/DynamicFeed/Requests/Dev/DnsEpDnsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[DnsEpDnsGetError](src/DynamicFeed/Errors/DnsEpDnsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GithubReleasesEpGithubReleasesGet(GithubReleasesEpGithubReleasesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Dev.GithubReleasesEpGithubReleasesGet(new GithubReleasesEpGithubReleasesGetRequest
    {
        Repo = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GithubReleasesEpGithubReleasesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GithubReleasesEpGithubReleasesGetRequest](src/DynamicFeed/Requests/Dev/GithubReleasesEpGithubReleasesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[GithubReleasesEpGithubReleasesGetError](src/DynamicFeed/Errors/GithubReleasesEpGithubReleasesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; HackerNewsEpHackerNewsGet(HackerNewsEpHackerNewsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Dev.HackerNewsEpHackerNewsGet(new HackerNewsEpHackerNewsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<HackerNewsEpHackerNewsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HackerNewsEpHackerNewsGetRequest](src/DynamicFeed/Requests/Dev/HackerNewsEpHackerNewsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[HackerNewsEpHackerNewsGetError](src/DynamicFeed/Errors/HackerNewsEpHackerNewsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Drought

> Source: [Drought](src/DynamicFeed/Api/Drought.cs)

<details>
<summary><code>Task&lt;object&gt; DroughtDroughtGet(DroughtDroughtGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Drought.DroughtDroughtGet(new DroughtDroughtGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<DroughtDroughtGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DroughtDroughtGetRequest](src/DynamicFeed/Requests/Drought/DroughtDroughtGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[DroughtDroughtGetError](src/DynamicFeed/Errors/DroughtDroughtGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DrugShortages

> Source: [DrugShortages](src/DynamicFeed/Api/DrugShortages.cs)

<details>
<summary><code>Task&lt;object&gt; DrugShortagesDrugShortagesGet(DrugShortagesDrugShortagesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DrugShortages.DrugShortagesDrugShortagesGet(new DrugShortagesDrugShortagesGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<DrugShortagesDrugShortagesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DrugShortagesDrugShortagesGetRequest](src/DynamicFeed/Requests/DrugShortages/DrugShortagesDrugShortagesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[DrugShortagesDrugShortagesGetError](src/DynamicFeed/Errors/DrugShortagesDrugShortagesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DynamicFeedLiveDataForAi

> Source: [DynamicFeedLiveDataForAi](src/DynamicFeed/Api/DynamicFeedLiveDataForAi.cs)

<details>
<summary><code>Task&lt;string&gt; HomeGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.DynamicFeedLiveDataForAi.HomeGet();
    // TODO: Handle 'response' of type string
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Earthquakes

> Source: [Earthquakes](src/DynamicFeed/Api/Earthquakes.cs)

<details>
<summary><code>Task&lt;object&gt; EarthquakesEarthquakesGet(EarthquakesEarthquakesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Earthquakes.EarthquakesEarthquakesGet(new EarthquakesEarthquakesGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<EarthquakesEarthquakesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EarthquakesEarthquakesGetRequest](src/DynamicFeed/Requests/Earthquakes/EarthquakesEarthquakesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[EarthquakesEarthquakesGetError](src/DynamicFeed/Errors/EarthquakesEarthquakesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Energy

> Source: [Energy](src/DynamicFeed/Api/Energy.cs)

<details>
<summary><code>Task&lt;object&gt; EnergyGridEnergyGet(EnergyGridEnergyGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Energy.EnergyGridEnergyGet(new EnergyGridEnergyGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<EnergyGridEnergyGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnergyGridEnergyGetRequest](src/DynamicFeed/Requests/Energy/EnergyGridEnergyGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[EnergyGridEnergyGetError](src/DynamicFeed/Errors/EnergyGridEnergyGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExploitedVulnerabilities

> Source: [ExploitedVulnerabilities](src/DynamicFeed/Api/ExploitedVulnerabilities.cs)

<details>
<summary><code>Task&lt;object&gt; ExploitedVulnerabilitiesExploitedVulnerabilitiesGet(ExploitedVulnerabilitiesExploitedVulnerabilitiesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ExploitedVulnerabilities.ExploitedVulnerabilitiesExploitedVulnerabilitiesGet(
        new ExploitedVulnerabilitiesExploitedVulnerabilitiesGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ExploitedVulnerabilitiesExploitedVulnerabilitiesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExploitedVulnerabilitiesExploitedVulnerabilitiesGetRequest](src/DynamicFeed/Requests/ExploitedVulnerabilities/ExploitedVulnerabilitiesExploitedVulnerabilitiesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[ExploitedVulnerabilitiesExploitedVulnerabilitiesGetError](src/DynamicFeed/Errors/ExploitedVulnerabilitiesExploitedVulnerabilitiesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FederalRegister

> Source: [FederalRegister](src/DynamicFeed/Api/FederalRegister.cs)

<details>
<summary><code>Task&lt;object&gt; FederalRegisterFederalRegisterGet(FederalRegisterFederalRegisterGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.FederalRegister.FederalRegisterFederalRegisterGet(
        new FederalRegisterFederalRegisterGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<FederalRegisterFederalRegisterGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FederalRegisterFederalRegisterGetRequest](src/DynamicFeed/Requests/FederalRegister/FederalRegisterFederalRegisterGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[FederalRegisterFederalRegisterGetError](src/DynamicFeed/Errors/FederalRegisterFederalRegisterGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Flights

> Source: [Flights](src/DynamicFeed/Api/Flights.cs)

<details>
<summary><code>Task&lt;object&gt; FlightsFlightsGet(FlightsFlightsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Flights.FlightsFlightsGet(new FlightsFlightsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<FlightsFlightsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FlightsFlightsGetRequest](src/DynamicFeed/Requests/Flights/FlightsFlightsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[FlightsFlightsGetError](src/DynamicFeed/Errors/FlightsFlightsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Forecast

> Source: [Forecast](src/DynamicFeed/Api/Forecast.cs)

<details>
<summary><code>Task&lt;object&gt; ForecastForecastGet(ForecastForecastGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Forecast.ForecastForecastGet(new ForecastForecastGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ForecastForecastGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ForecastForecastGetRequest](src/DynamicFeed/Requests/Forecast/ForecastForecastGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[ForecastForecastGetError](src/DynamicFeed/Errors/ForecastForecastGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GlobalDisasters

> Source: [GlobalDisasters](src/DynamicFeed/Api/GlobalDisasters.cs)

<details>
<summary><code>Task&lt;object&gt; GlobalDisastersEpGlobalDisastersGet(GlobalDisastersEpGlobalDisastersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GlobalDisasters.GlobalDisastersEpGlobalDisastersGet(
        new GlobalDisastersEpGlobalDisastersGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GlobalDisastersEpGlobalDisastersGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GlobalDisastersEpGlobalDisastersGetRequest](src/DynamicFeed/Requests/GlobalDisasters/GlobalDisastersEpGlobalDisastersGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[GlobalDisastersEpGlobalDisastersGetError](src/DynamicFeed/Errors/GlobalDisastersEpGlobalDisastersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GpsInterference

> Source: [GpsInterference](src/DynamicFeed/Api/GpsInterference.cs)

<details>
<summary><code>Task&lt;object&gt; GpsInterferenceGpsInterferenceGet(GpsInterferenceGpsInterferenceGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GpsInterference.GpsInterferenceGpsInterferenceGet(
        new GpsInterferenceGpsInterferenceGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GpsInterferenceGpsInterferenceGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GpsInterferenceGpsInterferenceGetRequest](src/DynamicFeed/Requests/GpsInterference/GpsInterferenceGpsInterferenceGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[GpsInterferenceGpsInterferenceGetError](src/DynamicFeed/Errors/GpsInterferenceGpsInterferenceGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/DynamicFeed/Api/Health.cs)

<details>
<summary><code>Task&lt;object&gt; HealthHealthGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Health.HealthHealthGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## History

> Source: [History](src/DynamicFeed/Api/History.cs)

<details>
<summary><code>Task&lt;object&gt; HistoryV1HistoryGet(HistoryV1HistoryGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.History.HistoryV1HistoryGet(new HistoryV1HistoryGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<HistoryV1HistoryGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HistoryV1HistoryGetRequest](src/DynamicFeed/Requests/History/HistoryV1HistoryGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[HistoryV1HistoryGetError](src/DynamicFeed/Errors/HistoryV1HistoryGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Info

> Source: [Info](src/DynamicFeed/Api/Info.cs)

<details>
<summary><code>Task&lt;object&gt; InfoInfoGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Info.InfoInfoGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## InternetOutages

> Source: [InternetOutages](src/DynamicFeed/Api/InternetOutages.cs)

<details>
<summary><code>Task&lt;object&gt; InternetOutagesInternetOutagesGet(InternetOutagesInternetOutagesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.InternetOutages.InternetOutagesInternetOutagesGet(
        new InternetOutagesInternetOutagesGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<InternetOutagesInternetOutagesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[InternetOutagesInternetOutagesGetRequest](src/DynamicFeed/Requests/InternetOutages/InternetOutagesInternetOutagesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[InternetOutagesInternetOutagesGetError](src/DynamicFeed/Errors/InternetOutagesInternetOutagesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Iss

> Source: [Iss](src/DynamicFeed/Api/Iss.cs)

<details>
<summary><code>Task&lt;object&gt; IssIssGet(IssIssGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Iss.IssIssGet(new IssIssGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<IssIssGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IssIssGetRequest](src/DynamicFeed/Requests/Iss/IssIssGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[IssIssGetError](src/DynamicFeed/Errors/IssIssGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Launches

> Source: [Launches](src/DynamicFeed/Api/Launches.cs)

<details>
<summary><code>Task&lt;object&gt; LaunchesLaunchesGet(LaunchesLaunchesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Launches.LaunchesLaunchesGet(new LaunchesLaunchesGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<LaunchesLaunchesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[LaunchesLaunchesGetRequest](src/DynamicFeed/Requests/Launches/LaunchesLaunchesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[LaunchesLaunchesGetError](src/DynamicFeed/Errors/LaunchesLaunchesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Macro

> Source: [Macro](src/DynamicFeed/Api/Macro.cs)

<details>
<summary><code>Task&lt;object&gt; GlobalMacroMacroGet(GlobalMacroMacroGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Macro.GlobalMacroMacroGet(new GlobalMacroMacroGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GlobalMacroMacroGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GlobalMacroMacroGetRequest](src/DynamicFeed/Requests/Macro/GlobalMacroMacroGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[GlobalMacroMacroGetError](src/DynamicFeed/Errors/GlobalMacroMacroGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MarketHours

> Source: [MarketHours](src/DynamicFeed/Api/MarketHours.cs)

<details>
<summary><code>Task&lt;object&gt; MarketHoursMarketHoursGet(MarketHoursMarketHoursGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.MarketHours.MarketHoursMarketHoursGet(new MarketHoursMarketHoursGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<MarketHoursMarketHoursGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MarketHoursMarketHoursGetRequest](src/DynamicFeed/Requests/MarketHours/MarketHoursMarketHoursGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[MarketHoursMarketHoursGetError](src/DynamicFeed/Errors/MarketHoursMarketHoursGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ModelsApi

> Source: [ModelsApi](src/DynamicFeed/Api/ModelsApi.cs)

<details>
<summary><code>Task&lt;object&gt; ModelsModelsGet(ModelsModelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ModelsApi.ModelsModelsGet(new ModelsModelsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ModelsModelsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ModelsModelsGetRequest](src/DynamicFeed/Requests/ModelsApi/ModelsModelsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[ModelsModelsGetError](src/DynamicFeed/Errors/ModelsModelsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Movers

> Source: [Movers](src/DynamicFeed/Api/Movers.cs)

<details>
<summary><code>Task&lt;object&gt; MoversMoversGet(MoversMoversGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Movers.MoversMoversGet(new MoversMoversGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<MoversMoversGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MoversMoversGetRequest](src/DynamicFeed/Requests/Movers/MoversMoversGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[MoversMoversGetError](src/DynamicFeed/Errors/MoversMoversGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NaturalEvents

> Source: [NaturalEvents](src/DynamicFeed/Api/NaturalEvents.cs)

<details>
<summary><code>Task&lt;object&gt; NaturalEventsNaturalEventsGet(NaturalEventsNaturalEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NaturalEvents.NaturalEventsNaturalEventsGet(new NaturalEventsNaturalEventsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<NaturalEventsNaturalEventsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NaturalEventsNaturalEventsGetRequest](src/DynamicFeed/Requests/NaturalEvents/NaturalEventsNaturalEventsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[NaturalEventsNaturalEventsGetError](src/DynamicFeed/Errors/NaturalEventsNaturalEventsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](src/DynamicFeed/Api/News.cs)

<details>
<summary><code>Task&lt;object&gt; NewsNewsGet(NewsNewsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.News.NewsNewsGet(new NewsNewsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<NewsNewsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NewsNewsGetRequest](src/DynamicFeed/Requests/News/NewsNewsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[NewsNewsGetError](src/DynamicFeed/Errors/NewsNewsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OrbitalDatacenters

> Source: [OrbitalDatacenters](src/DynamicFeed/Api/OrbitalDatacenters.cs)

<details>
<summary><code>Task&lt;object&gt; OrbitalDatacentersOrbitalDatacentersGet(OrbitalDatacentersOrbitalDatacentersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.OrbitalDatacenters.OrbitalDatacentersOrbitalDatacentersGet(
        new OrbitalDatacentersOrbitalDatacentersGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<OrbitalDatacentersOrbitalDatacentersGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OrbitalDatacentersOrbitalDatacentersGetRequest](src/DynamicFeed/Requests/OrbitalDatacenters/OrbitalDatacentersOrbitalDatacentersGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[OrbitalDatacentersOrbitalDatacentersGetError](src/DynamicFeed/Errors/OrbitalDatacentersOrbitalDatacentersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Rates

> Source: [Rates](src/DynamicFeed/Api/Rates.cs)

<details>
<summary><code>Task&lt;object&gt; RatesRatesGet(RatesRatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Rates.RatesRatesGet(new RatesRatesGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<RatesRatesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RatesRatesGetRequest](src/DynamicFeed/Requests/Rates/RatesRatesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RatesRatesGetError](src/DynamicFeed/Errors/RatesRatesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RealityCheck

> Source: [RealityCheck](src/DynamicFeed/Api/RealityCheck.cs)

<details>
<summary><code>Task&lt;object&gt; RealityCheckEpRealityCheckGet(RealityCheckEpRealityCheckGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.RealityCheck.RealityCheckEpRealityCheckGet(new RealityCheckEpRealityCheckGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<RealityCheckEpRealityCheckGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RealityCheckEpRealityCheckGetRequest](src/DynamicFeed/Requests/RealityCheck/RealityCheckEpRealityCheckGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RealityCheckEpRealityCheckGetError](src/DynamicFeed/Errors/RealityCheckEpRealityCheckGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Recalls

> Source: [Recalls](src/DynamicFeed/Api/Recalls.cs)

<details>
<summary><code>Task&lt;object&gt; RecallsRecallsGet(RecallsRecallsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recalls.RecallsRecallsGet(new RecallsRecallsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<RecallsRecallsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RecallsRecallsGetRequest](src/DynamicFeed/Requests/Recalls/RecallsRecallsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RecallsRecallsGetError](src/DynamicFeed/Errors/RecallsRecallsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Robot

> Source: [Robot](src/DynamicFeed/Api/Robot.cs)

<details>
<summary><code>Task&lt;object&gt; V1AnchorDailyV1AnchorDailyGet(V1AnchorDailyV1AnchorDailyGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robot.V1AnchorDailyV1AnchorDailyGet(new V1AnchorDailyV1AnchorDailyGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1AnchorDailyV1AnchorDailyGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1AnchorDailyV1AnchorDailyGetRequest](src/DynamicFeed/Requests/Robot/V1AnchorDailyV1AnchorDailyGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1AnchorDailyV1AnchorDailyGetError](src/DynamicFeed/Errors/V1AnchorDailyV1AnchorDailyGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1AnchorUpgradeV1AnchorUpgradePost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robot.V1AnchorUpgradeV1AnchorUpgradePost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1AnchorV1AnchorPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robot.V1AnchorV1AnchorPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1AwarenessV1AwarenessPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robot.V1AwarenessV1AwarenessPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1HumanoidV1HumanoidPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robot.V1HumanoidV1HumanoidPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1MarineV1MarinePost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robot.V1MarineV1MarinePost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1PreflightV1PreflightPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robot.V1PreflightV1PreflightPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1RoadV1RoadPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robot.V1RoadV1RoadPost();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1RobotReceiptSampleV1RobotReceiptSampleGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robot.V1RobotReceiptSampleV1RobotReceiptSampleGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1RobotReceiptV1RobotReceiptPost(V1RobotReceiptV1RobotReceiptPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robot.V1RobotReceiptV1RobotReceiptPost(new V1RobotReceiptV1RobotReceiptPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1RobotReceiptV1RobotReceiptPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1RobotReceiptV1RobotReceiptPostRequest](src/DynamicFeed/Requests/Robot/V1RobotReceiptV1RobotReceiptPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1RobotReceiptV1RobotReceiptPostError](src/DynamicFeed/Errors/V1RobotReceiptV1RobotReceiptPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sanctions

> Source: [Sanctions](src/DynamicFeed/Api/Sanctions.cs)

<details>
<summary><code>Task&lt;object&gt; SanctionsScreenSanctionsGet(SanctionsScreenSanctionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Sanctions.SanctionsScreenSanctionsGet(new SanctionsScreenSanctionsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<SanctionsScreenSanctionsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SanctionsScreenSanctionsGetRequest](src/DynamicFeed/Requests/Sanctions/SanctionsScreenSanctionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[SanctionsScreenSanctionsGetError](src/DynamicFeed/Errors/SanctionsScreenSanctionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Satellite

> Source: [Satellite](src/DynamicFeed/Api/Satellite.cs)

<details>
<summary><code>Task&lt;object&gt; SatelliteSatelliteGet(SatelliteSatelliteGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Satellite.SatelliteSatelliteGet(new SatelliteSatelliteGetRequest { NoradId = 1 });
    // TODO: Handle 'response' of type object
}
catch (ApiException<SatelliteSatelliteGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SatelliteSatelliteGetRequest](src/DynamicFeed/Requests/Satellite/SatelliteSatelliteGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[SatelliteSatelliteGetError](src/DynamicFeed/Errors/SatelliteSatelliteGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Satellites

> Source: [Satellites](src/DynamicFeed/Api/Satellites.cs)

<details>
<summary><code>Task&lt;object&gt; SatellitesSatellitesGet(SatellitesSatellitesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Satellites.SatellitesSatellitesGet(new SatellitesSatellitesGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<SatellitesSatellitesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SatellitesSatellitesGetRequest](src/DynamicFeed/Requests/Satellites/SatellitesSatellitesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[SatellitesSatellitesGetError](src/DynamicFeed/Errors/SatellitesSatellitesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SecFilings

> Source: [SecFilings](src/DynamicFeed/Api/SecFilings.cs)

<details>
<summary><code>Task&lt;object&gt; SecFilingsSecFilingsGet(SecFilingsSecFilingsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SecFilings.SecFilingsSecFilingsGet(new SecFilingsSecFilingsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<SecFilingsSecFilingsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SecFilingsSecFilingsGetRequest](src/DynamicFeed/Requests/SecFilings/SecFilingsSecFilingsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[SecFilingsSecFilingsGetError](src/DynamicFeed/Errors/SecFilingsSecFilingsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Security

> Source: [Security](src/DynamicFeed/Api/Security.cs)

<details>
<summary><code>Task&lt;object&gt; PackageHealthEpPackageHealthGet(PackageHealthEpPackageHealthGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Security.PackageHealthEpPackageHealthGet(new PackageHealthEpPackageHealthGetRequest
    {
        Package = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<PackageHealthEpPackageHealthGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PackageHealthEpPackageHealthGetRequest](src/DynamicFeed/Requests/Security/PackageHealthEpPackageHealthGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[PackageHealthEpPackageHealthGetError](src/DynamicFeed/Errors/PackageHealthEpPackageHealthGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ServersApi

> Source: [ServersApi](src/DynamicFeed/Api/ServersApi.cs)

<details>
<summary><code>Task&lt;object&gt; ServersServersGet(ServersServersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ServersApi.ServersServersGet(new ServersServersGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ServersServersGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ServersServersGetRequest](src/DynamicFeed/Requests/ServersApi/ServersServersGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[ServersServersGetError](src/DynamicFeed/Errors/ServersServersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Shipping

> Source: [Shipping](src/DynamicFeed/Api/Shipping.cs)

<details>
<summary><code>Task&lt;object&gt; ShippingEpShippingGet(ShippingEpShippingGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Shipping.ShippingEpShippingGet(new ShippingEpShippingGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ShippingEpShippingGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ShippingEpShippingGetRequest](src/DynamicFeed/Requests/Shipping/ShippingEpShippingGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[ShippingEpShippingGetError](src/DynamicFeed/Errors/ShippingEpShippingGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Signals

> Source: [Signals](src/DynamicFeed/Api/Signals.cs)

<details>
<summary><code>Task&lt;object&gt; SignalsSignalsGet(SignalsSignalsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Signals.SignalsSignalsGet(new SignalsSignalsGetRequest
    {
        Symbol = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<SignalsSignalsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SignalsSignalsGetRequest](src/DynamicFeed/Requests/Signals/SignalsSignalsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[SignalsSignalsGetError](src/DynamicFeed/Errors/SignalsSignalsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Signup

> Source: [Signup](src/DynamicFeed/Api/Signup.cs)

<details>
<summary><code>Task&lt;object&gt; SignupSignupPost(SignupSignupPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Signup.SignupSignupPost(new SignupSignupPostRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<SignupSignupPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SignupSignupPostRequest](src/DynamicFeed/Requests/Signup/SignupSignupPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[SignupSignupPostError](src/DynamicFeed/Errors/SignupSignupPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SpaceWeather

> Source: [SpaceWeather](src/DynamicFeed/Api/SpaceWeather.cs)

<details>
<summary><code>Task&lt;object&gt; SpaceWeatherSpaceWeatherGet(SpaceWeatherSpaceWeatherGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SpaceWeather.SpaceWeatherSpaceWeatherGet(new SpaceWeatherSpaceWeatherGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<SpaceWeatherSpaceWeatherGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SpaceWeatherSpaceWeatherGetRequest](src/DynamicFeed/Requests/SpaceWeather/SpaceWeatherSpaceWeatherGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[SpaceWeatherSpaceWeatherGetError](src/DynamicFeed/Errors/SpaceWeatherSpaceWeatherGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sports

> Source: [Sports](src/DynamicFeed/Api/Sports.cs)

<details>
<summary><code>Task&lt;object&gt; SportsSportsGet(SportsSportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Sports.SportsSportsGet(new SportsSportsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<SportsSportsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SportsSportsGetRequest](src/DynamicFeed/Requests/Sports/SportsSportsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[SportsSportsGetError](src/DynamicFeed/Errors/SportsSportsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; WorldcupRouteWorldcupGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Sports.WorldcupRouteWorldcupGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Status

> Source: [Status](src/DynamicFeed/Api/Status.cs)

<details>
<summary><code>Task&lt;object&gt; StatusStatusGet(StatusStatusGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Status.StatusStatusGet(new StatusStatusGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<StatusStatusGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StatusStatusGetRequest](src/DynamicFeed/Requests/Status/StatusStatusGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[StatusStatusGetError](src/DynamicFeed/Errors/StatusStatusGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tides

> Source: [Tides](src/DynamicFeed/Api/Tides.cs)

<details>
<summary><code>Task&lt;object&gt; TidesEpTidesGet(TidesEpTidesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Tides.TidesEpTidesGet(new TidesEpTidesGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<TidesEpTidesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TidesEpTidesGetRequest](src/DynamicFeed/Requests/Tides/TidesEpTidesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[TidesEpTidesGetError](src/DynamicFeed/Errors/TidesEpTidesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Time

> Source: [Time](src/DynamicFeed/Api/Time.cs)

<details>
<summary><code>Task&lt;object&gt; TimeEpTimeGet(TimeEpTimeGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Time.TimeEpTimeGet(new TimeEpTimeGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<TimeEpTimeGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TimeEpTimeGetRequest](src/DynamicFeed/Requests/Time/TimeEpTimeGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[TimeEpTimeGetError](src/DynamicFeed/Errors/TimeEpTimeGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TreasuryYields

> Source: [TreasuryYields](src/DynamicFeed/Api/TreasuryYields.cs)

<details>
<summary><code>Task&lt;object&gt; TreasuryYieldsTreasuryYieldsGet(TreasuryYieldsTreasuryYieldsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.TreasuryYields.TreasuryYieldsTreasuryYieldsGet(
        new TreasuryYieldsTreasuryYieldsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<TreasuryYieldsTreasuryYieldsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TreasuryYieldsTreasuryYieldsGetRequest](src/DynamicFeed/Requests/TreasuryYields/TreasuryYieldsTreasuryYieldsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[TreasuryYieldsTreasuryYieldsGetError](src/DynamicFeed/Errors/TreasuryYieldsTreasuryYieldsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Versions

> Source: [Versions](src/DynamicFeed/Api/Versions.cs)

<details>
<summary><code>Task&lt;object&gt; VersionsVersionsGet(VersionsVersionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Versions.VersionsVersionsGet(new VersionsVersionsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<VersionsVersionsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VersionsVersionsGetRequest](src/DynamicFeed/Requests/Versions/VersionsVersionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[VersionsVersionsGetError](src/DynamicFeed/Errors/VersionsVersionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Volcanoes

> Source: [Volcanoes](src/DynamicFeed/Api/Volcanoes.cs)

<details>
<summary><code>Task&lt;object&gt; VolcanoesEpVolcanoesGet(VolcanoesEpVolcanoesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Volcanoes.VolcanoesEpVolcanoesGet(new VolcanoesEpVolcanoesGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<VolcanoesEpVolcanoesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VolcanoesEpVolcanoesGetRequest](src/DynamicFeed/Requests/Volcanoes/VolcanoesEpVolcanoesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[VolcanoesEpVolcanoesGetError](src/DynamicFeed/Errors/VolcanoesEpVolcanoesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WaterLevels

> Source: [WaterLevels](src/DynamicFeed/Api/WaterLevels.cs)

<details>
<summary><code>Task&lt;object&gt; WaterLevelsWaterLevelsGet(WaterLevelsWaterLevelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WaterLevels.WaterLevelsWaterLevelsGet(new WaterLevelsWaterLevelsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<WaterLevelsWaterLevelsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WaterLevelsWaterLevelsGetRequest](src/DynamicFeed/Requests/WaterLevels/WaterLevelsWaterLevelsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[WaterLevelsWaterLevelsGetError](src/DynamicFeed/Errors/WaterLevelsWaterLevelsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Weather

> Source: [Weather](src/DynamicFeed/Api/Weather.cs)

<details>
<summary><code>Task&lt;object&gt; V1OpenweatherCurrentV1OpenweatherCurrentGet(V1OpenweatherCurrentV1OpenweatherCurrentGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Weather.V1OpenweatherCurrentV1OpenweatherCurrentGet(
        new V1OpenweatherCurrentV1OpenweatherCurrentGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1OpenweatherCurrentV1OpenweatherCurrentGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1OpenweatherCurrentV1OpenweatherCurrentGetRequest](src/DynamicFeed/Requests/Weather/V1OpenweatherCurrentV1OpenweatherCurrentGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1OpenweatherCurrentV1OpenweatherCurrentGetError](src/DynamicFeed/Errors/V1OpenweatherCurrentV1OpenweatherCurrentGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1OpenweatherForecastV1OpenweatherForecastGet(V1OpenweatherForecastV1OpenweatherForecastGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Weather.V1OpenweatherForecastV1OpenweatherForecastGet(
        new V1OpenweatherForecastV1OpenweatherForecastGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1OpenweatherForecastV1OpenweatherForecastGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1OpenweatherForecastV1OpenweatherForecastGetRequest](src/DynamicFeed/Requests/Weather/V1OpenweatherForecastV1OpenweatherForecastGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1OpenweatherForecastV1OpenweatherForecastGetError](src/DynamicFeed/Errors/V1OpenweatherForecastV1OpenweatherForecastGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; WeatherWeatherGet(WeatherWeatherGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Weather.WeatherWeatherGet(new WeatherWeatherGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<WeatherWeatherGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WeatherWeatherGetRequest](src/DynamicFeed/Requests/Weather/WeatherWeatherGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[WeatherWeatherGetError](src/DynamicFeed/Errors/WeatherWeatherGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WeatherAlerts

> Source: [WeatherAlerts](src/DynamicFeed/Api/WeatherAlerts.cs)

<details>
<summary><code>Task&lt;object&gt; WeatherAlertsWeatherAlertsGet(WeatherAlertsWeatherAlertsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WeatherAlerts.WeatherAlertsWeatherAlertsGet(new WeatherAlertsWeatherAlertsGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<WeatherAlertsWeatherAlertsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WeatherAlertsWeatherAlertsGetRequest](src/DynamicFeed/Requests/WeatherAlerts/WeatherAlertsWeatherAlertsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[WeatherAlertsWeatherAlertsGetError](src/DynamicFeed/Errors/WeatherAlertsWeatherAlertsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WhatsNew

> Source: [WhatsNew](src/DynamicFeed/Api/WhatsNew.cs)

<details>
<summary><code>Task&lt;object&gt; WhatsNewEpWhatsNewGet(WhatsNewEpWhatsNewGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WhatsNew.WhatsNewEpWhatsNewGet(new WhatsNewEpWhatsNewGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<WhatsNewEpWhatsNewGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WhatsNewEpWhatsNewGetRequest](src/DynamicFeed/Requests/WhatsNew/WhatsNewEpWhatsNewGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[WhatsNewEpWhatsNewGetError](src/DynamicFeed/Errors/WhatsNewEpWhatsNewGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Wildfires

> Source: [Wildfires](src/DynamicFeed/Api/Wildfires.cs)

<details>
<summary><code>Task&lt;object&gt; WildfiresWildfiresGet(WildfiresWildfiresGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Wildfires.WildfiresWildfiresGet(new WildfiresWildfiresGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<WildfiresWildfiresGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WildfiresWildfiresGetRequest](src/DynamicFeed/Requests/Wildfires/WildfiresWildfiresGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[WildfiresWildfiresGetError](src/DynamicFeed/Errors/WildfiresWildfiresGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WorldPulse

> Source: [WorldPulse](src/DynamicFeed/Api/WorldPulse.cs)

<details>
<summary><code>Task&lt;object&gt; WorldPulseEpWorldPulseGet(WorldPulseEpWorldPulseGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WorldPulse.WorldPulseEpWorldPulseGet(new WorldPulseEpWorldPulseGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<WorldPulseEpWorldPulseGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WorldPulseEpWorldPulseGetRequest](src/DynamicFeed/Requests/WorldPulse/WorldPulseEpWorldPulseGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[WorldPulseEpWorldPulseGetError](src/DynamicFeed/Errors/WorldPulseEpWorldPulseGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VerifiedFacts

> Source: [VerifiedFacts](src/DynamicFeed/Api/VerifiedFacts.cs)

<details>
<summary><code>Task&lt;object&gt; PostV1Answer(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VerifiedFacts.PostV1Answer();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; PostV1Facts(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VerifiedFacts.PostV1Facts();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1AnswerV1AnswerGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VerifiedFacts.V1AnswerV1AnswerGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1FactsV1FactsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VerifiedFacts.V1FactsV1FactsGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1StateOfMcpTrendV1StateOfMcpTrendGet(V1StateOfMcpTrendV1StateOfMcpTrendGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VerifiedFacts.V1StateOfMcpTrendV1StateOfMcpTrendGet(
        new V1StateOfMcpTrendV1StateOfMcpTrendGetRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<V1StateOfMcpTrendV1StateOfMcpTrendGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1StateOfMcpTrendV1StateOfMcpTrendGetRequest](src/DynamicFeed/Requests/VerifiedFacts/V1StateOfMcpTrendV1StateOfMcpTrendGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[V1StateOfMcpTrendV1StateOfMcpTrendGetError](src/DynamicFeed/Errors/V1StateOfMcpTrendV1StateOfMcpTrendGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; V1StateOfMcpV1StateOfMcpGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VerifiedFacts.V1StateOfMcpV1StateOfMcpGet();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DynamicFeed/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DynamicFeed/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

