using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.ErrorResponse;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.Agent;

namespace DynamicFeed.Api;

public sealed class Agent
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Agent(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// V1 Explain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostV1ExplainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."}
    /// (POST) — a tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s),
    /// licence, official URL, update cadence and the full custody trail (origin -&gt; ingest -&gt; normalize -&gt;
    /// serve, plus sign/anchor for awareness), so you can trace and verify where a number came from. Keyless.
    /// </remarks>
    public Task<object> PostV1Explain(PostV1ExplainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/explain"),
            [],
            [new Param("subject", request.Subject)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            PostV1ExplainError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Schemas Index
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Dynamic Feed receipt-schema family, self-describing (DF-VERIFY/1). Scans the schema
    /// directory at request time so it never drifts: every profile's $id, title and active mint
    /// endpoint when one exists. Deprecated/quarantined schemas remain visible as history, not as
    /// executable capabilities. Schema conformance and signature mathematics are separate from
    /// lifecycle acceptance.
    /// </remarks>
    public Task<object> SchemasIndexSchemasIndexJsonGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/schemas/index.json"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Agent Receipt
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Agent receipt. A signed, re-checkable record of what an AI agent acted on and what it decided.
    /// The operational-integrity primitive for the agent economy: prove, after the fact, the inputs behind
    /// an agent's action. Body: {"agent": "...", "action": "...", "inputs": },
    /// plus optional "model", "decision", "context". Returns an agent-receipt/v1 with a detached Ed25519
    /// signature (verify against GET /.well-known/keys: drop the <c>signature</c> field, canonicalize
    /// json-sorted-compact). Anchor the hash via RFC 3161 via POST /v1/anchor. Keyless. Advisory evidence and
    /// a neutral witness: it proves what the agent was given and did, never that the decision was correct,
    /// and it never moves anything. Spec: https://dynamicfeed.ai/standard
    /// </remarks>
    public Task<object> V1AgentReceiptV1AgentReceiptPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/agent/receipt"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Asof
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1AsofV1AsofGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// TIME-MACHINE REPLAY — what did the data say at decision time? Returns the archived observation
    /// for <c>tool</c> nearest at-or-before time <c>t</c>, replayed VERBATIM from Dynamic Feed's append-only archive
    /// (capturing every served datapoint since 2026-06-07) — the value as served then, never a re-fetch or
    /// reconstruction. The response carries honest metadata (<c>archived_at</c>, <c>distance_seconds</c> from your
    /// requested instant, the exact archive object, where coverage begins) and is Ed25519-signed (verify
    /// against GET /.well-known/keys) — built for agent backtesting, audit trails and "what did we know
    /// when we decided" disputes. Honest about coverage: a time the archive didn't capture returns a clear
    /// miss with the nearest captured day, never a fabricated past. Paid plans (Pro and up); auth via the
    /// X-API-Key header. Upgrade: https://dynamicfeed.ai/dashboard
    /// </remarks>
    public Task<object> V1AsofV1AsofGet(V1AsofV1AsofGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/asof"),
            [],
            [new Param("tool", request.Tool), new Param("t", request.T)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1AsofV1AsofGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Attest
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1AttestV1AttestGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Signed parametric-trigger attestation — evaluate 'metric op threshold' at a location against the
    /// live measurement and return a tamper-evident, Ed25519-signed MET / NOT-MET record. The dispute-proof
    /// oracle a parametric-insurance payout can settle against. metric: wind_kmh | temperature_c |
    /// feels_like_c | precipitation_mm. op: gt | gte | lt | lte. Verify against GET /.well-known/keys;
    /// timestamp via POST /v1/anchor (RFC 3161) for independent proof of when.
    /// </remarks>
    public Task<object> V1AttestV1AttestGet(V1AttestV1AttestGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/attest"),
            [],
            [
                new Param("metric", request.Metric),
                new Param("threshold", request.Threshold),
                new Param("op", request.Op),
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("city", request.City),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1AttestV1AttestGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Batch
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Run up to 20 read-only data-tool calls in ONE request — cuts agent round-trips. Keyless.
    /// Body: {"calls":[{"tool":"current_weather","args":{"city":"London"}}, {"tool":"earthquakes","args":{}}]}.
    /// Returns {"results":[{"tool","ok","data"|"error"}, ...]} in the same order. Tool names are the keyless
    /// MCP tools; POST with no <c>calls</c> returns the available list. Each call has its own 20s deadline, so a
    /// slow upstream degrades that one item rather than blocking the batch.
    /// <para>
    /// Add "facts": true to the body to get each result as a canonical, reliability-graded fact instead of
    /// raw data: {"tool","ok","fact":{value, provenance, verification, reliability{confidence,basis,sources,
    /// verified,vantage,conflict}}}. The whole response is Ed25519-signed (verify against /.well-known/keys),
    /// so this is verifiable, reliability-graded, multi-tool data in one round-trip. Default shape is unchanged.
    /// </para>
    /// </remarks>
    public Task<object> V1BatchV1BatchPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/batch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Benchmark History
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1BenchmarkHistoryV1BenchmarkHistoryGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DRIFT OVER TIME — daily snapshots of the live-facts benchmark (GET /v1/benchmark), oldest
    /// first. Each snapshot is the items array exactly as measured that day, so diffing consecutive
    /// snapshots shows how fast reality moves away from any fixed training cutoff: rates shift,
    /// releases ship, CVEs land. History starts at first_snapshot_at and grows one snapshot per day.
    /// Human-readable charts at /benchmark/history. Ed25519-signed. Keyless.
    /// </remarks>
    public Task<object> V1BenchmarkHistoryV1BenchmarkHistoryGet(V1BenchmarkHistoryV1BenchmarkHistoryGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/benchmark/history"),
            [],
            [new Param("days", request.Days)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1BenchmarkHistoryV1BenchmarkHistoryGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Benchmark
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The LIVE-FACTS BENCHMARK — a continuously-refreshed eval of facts that move after a model's
    /// training cutoff. Ask a model these questions WITHOUT tools and grade against the answers measured
    /// from authoritative sources at call time: every frozen model fails; a grounded agent passes. Each
    /// item carries its grading rule, source and measured_at; the whole set is Ed25519-signed so a
    /// published score is verifiable evidence, not a claim. Regenerate per run — answers are
    /// time-sensitive by design. Keyless.
    /// </remarks>
    public Task<object> V1BenchmarkV1BenchmarkGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/benchmark"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Bundle
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1BundleV1BundlesBundleIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One curated tool bundle by id (e.g. devsecops, weather-climate, finance-markets).
    /// </remarks>
    public Task<object> V1BundleV1BundlesBundleIdGet(V1BundleV1BundlesBundleIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bundles/{bundle_id}"),
            [new TemplateParam("bundle_id", request.BundleId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1BundleV1BundlesBundleIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Bundles
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Curated tool BUNDLES per domain — pick the right tools for your agent's use-case fast (instead of
    /// sifting all tools). Keyless: call any tool via POST /v1/batch; pay-per-call via /v1/pro/*.
    /// </remarks>
    public Task<object> V1BundlesV1BundlesGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bundles"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Bushfire
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1BushfireV1BushfireGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Signed Australian bushfire/fire hotspots (last ~3 days) from Geoscience Australia / Digital Earth
    /// Australia Hotspots — keyless, CC BY 4.0. lat &amp; lon (+ radius_km) for hotspots near a point, a state code
    /// (NSW/QLD/VIC/SA/WA/TAS/NT/ACT), or neither for recent Australia-wide. Ed25519-signed; verify against
    /// GET /.well-known/keys. A hotspot is a satellite thermal anomaly — not every one is a confirmed bushfire.
    /// </remarks>
    public Task<object> V1BushfireV1BushfireGet(V1BushfireV1BushfireGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bushfire"),
            [],
            [
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("radius_km", request.RadiusKm),
                new Param("state", request.State),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1BushfireV1BushfireGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Checkpoint Proof
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1CheckpointProofV1CheckpointsDayProofGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The raw witness proof for one day's archive checkpoint. kind=ots (default) returns the
    /// DLT-timestamp .ots bytes (verify: ots verify -d checkpoint-.ots);
    /// kind=rfc3161 returns the RFC 3161 timestamp token DER from the independent TSA (verify:
    /// openssl ts -reply -in checkpoint-.tsr -text, then openssl ts -verify -digest
    /// -sha256 -in checkpoint-.tsr). Offline runner for both witnesses:
    /// scripts/verify_checkpoint.py. Keyless.
    /// </remarks>
    public Task<object> V1CheckpointProofV1CheckpointsDayProofGet(V1CheckpointProofV1CheckpointsDayProofGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/checkpoints/{day}/proof"),
            [new TemplateParam("day", request.Day)],
            [new Param("kind", request.Kind)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1CheckpointProofV1CheckpointsDayProofGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Checkpoints
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1CheckpointsV1CheckpointsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Daily ARCHIVE CHECKPOINTS, newest first — the append-only claim made independently
    /// checkable. Each entry carries the signed archive-day/v1 document: a SHA-256 digest of that
    /// day's full archive listing, per-feed object counts, the previous day's digest (the chain),
    /// and the anchor status of a DLT-timestamp proof committing the digest to a public
    /// distributed ledger (RFC 3161 on fallback). Keyless.
    /// </remarks>
    public Task<object> V1CheckpointsV1CheckpointsGet(V1CheckpointsV1CheckpointsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/checkpoints"),
            [],
            [new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1CheckpointsV1CheckpointsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Discover Get
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1DiscoverGetV1DiscoverGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// CAPABILITY DISCOVERY — ask in plain words what you need ("live rainfall in Brisbane",
    /// "sanctions screening", "satellite positions") and get a ranked, Ed25519-signed list of
    /// candidate capabilities: Dynamic Feed's own tools with MEASURED 24h uptime/latency and a
    /// keyless call recipe, plus matching external MCP servers from the official registry index,
    /// honestly marked registry-reported and unmeasured. Advisory discovery with an explicit
    /// vantage per candidate, not an endorsement. Keyless.
    /// </remarks>
    public Task<object> V1DiscoverGetV1DiscoverGet(V1DiscoverGetV1DiscoverGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/discover"),
            [],
            [
                new Param("need", request.Need),
                new Param("limit", request.Limit),
                new Param("external", request.External),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1DiscoverGetV1DiscoverGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Discover Post
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// POST twin of GET /v1/discover: {"need": "...", "limit": 8, "external": true}.
    /// </remarks>
    public Task<object> V1DiscoverPostV1DiscoverPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/discover"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Drift
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Drift detection — audit an AI's stated facts against live ground-truth, graded by severity. Keyless.
    /// Body: {"claims":["The latest Python is 3.11","Node.js is on 18"]} or {"text":""}.
    /// Returns {checked, drifted_count, overall, results:[{claim, status, drifted, severity, correction, source}]}.
    /// </remarks>
    public Task<object> V1DriftV1DriftPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/drift"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Eval Receipt Sample
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A keyless, signed SAMPLE eval-receipt/v1 — a 'Verified Eval' run against a sealed, committed test
    /// set (the set stays private; only its commitment is signed). Verify it in-browser via /verify.js, then
    /// flip a byte and watch verification fail. Advisory evidence only — DF witnesses the committed run, it
    /// does not re-run or certify the benchmark.
    /// </remarks>
    public Task<object> V1EvalReceiptSampleV1EvalReceiptSampleGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/eval-receipt/sample"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Eval Receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1EvalReceiptV1EvalReceiptPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// WITNESS an AI EVALUATION run — the neutral 'Verified Eval' stamp for the contamination-proof-
    /// benchmark era. The lab commits its test set as a salted sha256 BEFORE the run (<c>set_commitment</c>), so
    /// the set stays PRIVATE while the run becomes un-retunable after the fact — solving the evaluator's
    /// dilemma of having to expose a private set to be trusted. Ed25519-signed, transparency-logged,
    /// RFC 3161 timestampable. Body: {"eval_name": "", "model_id": "", "metric":
    /// "pass@1", "score": 0.58, "set_commitment": ""} plus optional n, run_sha256 (hash of the full
    /// transcript), harness, and a BYO-key co-signature. Auth: a FREE key (POST /signup). ADVISORY EVIDENCE
    /// ONLY — Dynamic Feed does NOT re-run or verify the score, and does NOT certify the benchmark is
    /// fair/representative/contamination-free; it witnesses the COMMITTED run so no party can retune it
    /// retroactively. Profile of receipt/v1. Anchor via POST /v1/anchor.
    /// </remarks>
    public Task<object> V1EvalReceiptV1EvalReceiptPost(V1EvalReceiptV1EvalReceiptPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/eval-receipt"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1EvalReceiptV1EvalReceiptPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Evidence Wildfire
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1EvidenceWildfireV1EvidenceWildfireGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Chain-of-custody EVIDENCE record for a wildfire detection. Wraps a SELF-REPORTED detection
    /// (detector, lat/lon, time) with Dynamic Feed's INDEPENDENT context captured at that location the moment
    /// it's requested — fire-weather, near-term forecast, air quality (smoke), and tracked EONET wildfire
    /// events — each datapoint carrying its source, licence and age. The whole record is Ed25519-signed so any
    /// party can verify it OFFLINE against /.well-known/keys, WITHOUT trusting the detector or Dynamic Feed.
    /// Advisory evidence + audit layer: it does NOT make, certify, or sit in the safety-critical path of the
    /// detection — it makes the surrounding context provable later (an insurer claim, a liability review, an
    /// SLA). Keyless. Anchor via RFC 3161 via POST /v1/anchor for proof-of-when independent of us.
    /// </remarks>
    public Task<object> V1EvidenceWildfireV1EvidenceWildfireGet(V1EvidenceWildfireV1EvidenceWildfireGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/evidence/wildfire"),
            [],
            [
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("detected_at", request.DetectedAt),
                new Param("detector", request.Detector),
                new Param("place", request.Place),
                new Param("confidence", request.Confidence),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1EvidenceWildfireV1EvidenceWildfireGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Explain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1ExplainV1ExplainGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."}
    /// (POST) — a tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s),
    /// licence, official URL, update cadence and the full custody trail (origin -&gt; ingest -&gt; normalize -&gt;
    /// serve, plus sign/anchor for awareness), so you can trace and verify where a number came from. Keyless.
    /// </remarks>
    public Task<object> V1ExplainV1ExplainGet(V1ExplainV1ExplainGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/explain"),
            [],
            [new Param("subject", request.Subject)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1ExplainV1ExplainGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Exposure Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1ExposureReportV1ExposureReportGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Automated, signed EXPOSURE REPORT. Maps the perils a decision depends on to the external readings
    /// that decide them, flags where those readings are unverifiable today, and attaches a LIVE signed sample
    /// observation for each, so an organisation can see where its decisions rely on data it cannot independently
    /// check. Fully automated, no human in the loop. Ed25519-signed; verify offline at /.well-known/keys.
    /// Advisory evidence, not a certification or legal/financial advice.
    /// </remarks>
    public Task<object> V1ExposureReportV1ExposureReportGet(V1ExposureReportV1ExposureReportGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/exposure-report"),
            [],
            [
                new Param("perils", request.Perils),
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("place", request.Place),
                new Param("organisation", request.Organisation),
                new Param("use_case", request.UseCase),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1ExposureReportV1ExposureReportGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Guard
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pre-answer guard — the anti-hallucination middleware. POST the draft answer your AI is about to
    /// send; get back a verdict of "pass" or "revise" plus the exact corrections, so you can fix it BEFORE
    /// the user sees it. Keyless. Wrap it around any LLM response pipeline.
    /// Body: {"answer":""} or {"claims":["...","..."]}.
    /// Returns {verdict:"pass"|"revise", checked, issues:[{claim, subject, severity, correction, source}],
    /// confirmed, unverifiable, guidance}. Only claims that CONTRADICT live data trigger "revise"; opinions
    /// and facts no live feed can cover pass through untouched. Verifies prices, software versions, market
    /// open/closed and service up/down against Dynamic Feed's live ground-truth.
    /// </remarks>
    public Task<object> V1GuardV1GuardPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/guard"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Index
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The Dynamic Feed agent &amp; robot API at a glance — every /v1 capability, what it does, and a
    /// copy-paste example. The fastest way for a developer (or an agent) to discover the whole surface.
    /// Keyless unless noted.
    /// </remarks>
    public Task<object> V1IndexV1Get(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Inference Receipt Sample
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A keyless, signed SAMPLE inference-receipt/v1 — for the /receipts demo. Shows what POST
    /// /v1/inference-receipt returns: a neutral witness of a sample inference where the provider served a
    /// DIFFERENT model than requested and set its own fallback flag (illustrative, vendor-neutral). Verify
    /// it in-browser via /verify.js, then flip a byte and watch verification fail.
    /// </remarks>
    public Task<object> V1InferenceReceiptSampleV1InferenceReceiptSampleGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/inference-receipt/sample"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Inference Receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1InferenceReceiptV1InferenceReceiptPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// WITNESS a single AI model INFERENCE — a neutral, Ed25519-signed, transparency-logged,
    /// RFC 3161 timestampable receipt that this inference record EXISTED and is INTACT. Privacy by
    /// CONSTRUCTION: the caller hashes the prompt + response LOCALLY and sends ONLY fixed-length sha256
    /// hashes + non-PII metadata. Body: {"claimed_model": "", "prompt_sha256": "", "response_sha256": ""} plus optional
    /// requested_model, latency_ms, token_count, fallback_flag (the provider's OWN flag), provider,
    /// region, and a BYO-key agent co-signature (provider_pubkey + provider_sig). Auth: a FREE key (POST
    /// /signup) — no KYC. PROVES: the record existed at issued_at and is intact (tamper-EVIDENT, verifiable
    /// via /verify.js against /.well-known/keys). Does NOT independently verify which model actually ran,
    /// does NOT adjudicate that a 'downgrade' occurred, does NOT score quality — model_match is a literal
    /// string comparison and the holder draws any inference. Profile of receipt/v1. Anchor via POST /v1/anchor.
    /// </remarks>
    public Task<object> V1InferenceReceiptV1InferenceReceiptPost(V1InferenceReceiptV1InferenceReceiptPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/inference-receipt"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1InferenceReceiptV1InferenceReceiptPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Intensity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1IntensityV1IntensityGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// INTENSITY-AT-LOCATION (DF-VERIFY/1 <c>intensity/v1</c>) — the parameter value at an exact coordinate, signed
    /// and reproducible: the settlement-grade reading a parametric trigger evaluates against. Not 'an event
    /// happened' but 'the value at this lat/lon, from the region's authoritative source'. v1 peril: flood —
    /// routed by coordinate to the nearest official river gauge: AU -&gt; BoM Water Data Online (water-course level
    /// m; CC BY 4.0), US -&gt; USGS NWIS (gage height ft / discharge ft3/s). Point-resolved, no interpolation.
    /// drought, wildfire and earthquake (ShakeMap) intensity are rolling in. Verify the Ed25519 signature against
    /// GET /.well-known/keys; re-fetch source_url to reproduce raw_reading_hash (see hash_method). SCOPE: attests
    /// the reading at the cited official gauge — NOT a basin-wide determination or physical loss.
    /// </remarks>
    public Task<object> V1IntensityV1IntensityGet(V1IntensityV1IntensityGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/intensity"),
            [],
            [
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("peril", request.Peril),
                new Param("metric", request.Metric),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1IntensityV1IntensityGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Me
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1MeV1MeGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Your key at a glance — plan, calls used today, daily quota and remaining. The per-user usage view
    /// (the keyless MCP endpoint is unmetered fair-use).
    /// </remarks>
    public Task<object> V1MeV1MeGet(V1MeV1MeGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/me"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1MeV1MeGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Nearby
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1NearbyV1NearbyGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Signed situational scan: live hazards near a point — earthquakes (USGS), natural events (NASA
    /// EONET: wildfires/volcanoes/floods/storms), major disasters (GDACS) and, in Australia, live satellite
    /// bushfire hotspots (Geoscience Australia) within radius_km, nearest first. Ed25519-signed (verify
    /// against GET /.well-known/keys). The 'what's around me' ping for any machine that moves — robots,
    /// drones, in-car AI assistants, fleet telematics — complements the go/caution/no-go verdict from
    /// /v1/awareness.
    /// </remarks>
    public Task<object> V1NearbyV1NearbyGet(V1NearbyV1NearbyGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/nearby"),
            [],
            [new Param("lat", request.Lat), new Param("lon", request.Lon), new Param("radius_km", request.RadiusKm)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1NearbyV1NearbyGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Notarize
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1NotarizeV1NotarizePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// NOTARY for any data feed — a neutral third party witnesses YOUR data and returns a timestamped,
    /// Ed25519-signed notarization: proof these exact bytes existed at this moment, independently verifiable
    /// forever. Two modes — send the data ({"payload": }), or keep it private and send only its
    /// hash ({"payload_sha256": ""}). Optional "subject" names the publisher; "echo": false omits
    /// the payload from the record (hash retained). This attests that Dynamic Feed WITNESSED these bytes
    /// (or this hash) at witnessed_at — not that the content is true. Anchor via POST /v1/anchor for
    /// proof-of-when independent of us. Auth: X-API-Key (free key at POST /signup). 'Let's Encrypt for
    /// data feeds' — your feed, signed, without building a signing stack.
    /// </remarks>
    public Task<object> V1NotarizeV1NotarizePost(V1NotarizeV1NotarizePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/notarize"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1NotarizeV1NotarizePostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Notary Entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1NotaryEntryV1NotaryLogIdxGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One transparency-log entry by index, Ed25519-signed, with the recipe to recompute its
    /// entry_hash and verify chain linkage. Keyless.
    /// </remarks>
    public Task<object> V1NotaryEntryV1NotaryLogIdxGet(V1NotaryEntryV1NotaryLogIdxGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/notary/log/{idx}"),
            [new TemplateParam("idx", request.Idx)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1NotaryEntryV1NotaryLogIdxGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Notary Feed Register
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1NotaryFeedRegisterV1NotaryFeedsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// CONTINUOUS NOTARIZATION — register a feed URL and Dynamic Feed fetches it on your interval,
    /// notarizing every CHANGE into the public transparency log automatically: a standing, tamper-evident
    /// history of what your feed published, when. Body: {"url": "https://...", "subject": "Your Co",
    /// "interval_minutes": 180 (min 60)}. Beta: 3 active feeds per key. The first fetch happens
    /// immediately and its notarization is returned.
    /// </remarks>
    public Task<object> V1NotaryFeedRegisterV1NotaryFeedsPost(V1NotaryFeedRegisterV1NotaryFeedsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/notary/feeds"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1NotaryFeedRegisterV1NotaryFeedsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Notary Feeds List
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1NotaryFeedsListV1NotaryFeedsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Your registered continuous-notarization feeds (same X-API-Key): status, last hash, last log
    /// index, next-run cadence.
    /// </remarks>
    public Task<object> V1NotaryFeedsListV1NotaryFeedsGet(V1NotaryFeedsListV1NotaryFeedsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/notary/feeds"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1NotaryFeedsListV1NotaryFeedsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Notary Head
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The transparency-log HEAD — count + chain head hash, Ed25519-signed. The anchorable artifact:
    /// altering ANY past notarization breaks every entry_hash after it and contradicts the anchored
    /// head. Keyless.
    /// </remarks>
    public Task<object> V1NotaryHeadV1NotaryLogHeadGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/notary/log/head"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Notary Log
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1NotaryLogV1NotaryLogGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The PUBLIC TRANSPARENCY LOG of all notarizations — append-only, hash-chained (CT-style),
    /// newest first. Payload hashes only (never payloads): private by construction, tamper-evident by
    /// recipe. Page back with ?before=. Keyless.
    /// </remarks>
    public Task<object> V1NotaryLogV1NotaryLogGet(V1NotaryLogV1NotaryLogGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/notary/log"),
            [],
            [new Param("limit", request.Limit), new Param("before", request.Before)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1NotaryLogV1NotaryLogGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Notary Proof
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1NotaryProofV1NotaryLogIdxProofGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// INCLUSION PROOF for a log entry: the consecutive chain of entries from this index to the most
    /// recently ANCHORED head (or the current head if no anchor covers it yet), plus the anchor record.
    /// Recompute each entry_hash and you have proven this entry is in the history the Bitcoin anchor
    /// commits to — no trust in Dynamic Feed required. Keyless.
    /// </remarks>
    public Task<object> V1NotaryProofV1NotaryLogIdxProofGet(V1NotaryProofV1NotaryLogIdxProofGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/notary/log/{idx}/proof"),
            [new TemplateParam("idx", request.Idx)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1NotaryProofV1NotaryLogIdxProofGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Pro Asof
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// PREMIUM keyless AS-OF REPLAY — pay-per-call (x402, USDC on Base) signed time-machine over Dynamic
    /// Feed's append-only archive. Body {"tool":"current_weather","t":"2026-06-10T14:30:00Z"} (or ?tool=&amp;t=)
    /// -&gt; the archived observation for <c>tool</c> nearest at-or-before <c>t</c>, replayed VERBATIM, Ed25519-signed
    /// (verify against GET /.well-known/keys). The keyless paid channel to the SAME engine as the key-gated
    /// GET /v1/asof — for agent backtesting, audit trails and 'what did we know when we decided' disputes.
    /// No signup, no human; discoverable via the x402 bazaar. Honest about coverage: a time the archive
    /// didn't capture returns a clear miss, never a fabricated past.
    /// </remarks>
    public Task<object> V1ProAsofV1ProAsofPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/pro/asof"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Pro Batch
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// PREMIUM, pay-per-call data batch — the commercial tier of /v1/batch, paid AGENT-NATIVELY via x402
    /// (HTTP 402): an agent gets a price, pays from its wallet, re-calls with the X-PAYMENT header, and is
    /// served — no human, no signup. Up to 100 signed tool calls per request (free /v1/batch is fair-use,
    /// capped at 20). Dynamic Feed charges for its OWN service; a third-party facilitator settles the payment
    /// — DF never custodies funds (witness-not-money). Body: {"calls":[{"tool":...,"args":{...}}, ...]}.
    /// </remarks>
    public Task<object> V1ProBatchV1ProBatchPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/pro/batch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Pro Catalog
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Machine-readable MENU of Dynamic Feed's x402 pay-per-call SKUs (USDC on Base) — the 'price list'
    /// an agent or x402 facilitator shops in one call: every paid endpoint, its price (live from
    /// X402_PRICE_ATOMIC), input/output schema, the recipient wallet (when connected), and the facilitator.
    /// Boundary: DF is the merchant; the facilitator settles — DF never custodies funds.
    /// </remarks>
    public Task<object> V1ProCatalogV1ProCatalogGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/pro/catalog"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Pro Tool Discover
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1ProToolDiscoverV1ProToolToolGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Discovery for the paid single-call endpoint. A GET returns the x402 402 challenge — so an agent that
    /// probes with GET (instead of a 'Method Not Allowed' dead end) still learns the price, the asset, and that
    /// it must POST with an X-PAYMENT header + {"args":{...}} body. NO payment is taken on GET; settlement only
    /// ever happens on POST. Pure discovery, no money path.
    /// </remarks>
    public Task<object> V1ProToolDiscoverV1ProToolToolGet(V1ProToolDiscoverV1ProToolToolGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/pro/tool/{tool}"),
            [new TemplateParam("tool", request.Tool)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1ProToolDiscoverV1ProToolToolGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Pro Tool
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1ProToolV1ProToolToolPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// PREMIUM single signed tool call — pay-per-call (x402, USDC on Base) for ANY one of Dynamic Feed's
    /// live tools. An agent pays once, gets one Ed25519-signed datapoint. No signup, no human. Body:
    /// {"args":{...}}. Discoverable via the x402 bazaar. (Free alternative: keyless /v1/batch, fair-use.)
    /// </remarks>
    public Task<object> V1ProToolV1ProToolToolPost(V1ProToolV1ProToolToolPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/pro/tool/{tool}"),
            [new TemplateParam("tool", request.Tool)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1ProToolV1ProToolToolPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Proxy Witness
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1ProxyWitnessV1ProxyWitnessPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// PROXY WITNESS, route any third-party API call through Dynamic Feed and get a signed, archived
    /// receipt of exactly what that URL returned to us at this moment. Body:
    /// {"url": "https://...", "method": "GET"|"POST"|..., "headers": {...}, "body": "...", "echo": false, "subject": "..."}.
    /// We fetch server-side under an SSRF guard (only public http/https targets; private and reserved
    /// addresses blocked; redirects not followed), redact your request credentials from the record, and
    /// sign a proxy-witness/v1 envelope carrying the response status, content-type, size and SHA-256 (the
    /// full body only when echo:true and small; our archive is hash-first and never keeps the body).
    /// Witnesses what the URL returned to us, not that the content is true; never the money path.
    /// Auth: X-API-Key (free key at POST /signup).
    /// </remarks>
    public Task<object> V1ProxyWitnessV1ProxyWitnessPost(V1ProxyWitnessV1ProxyWitnessPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/proxy-witness"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1ProxyWitnessV1ProxyWitnessPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Receipt
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Evidence receipt — wrap any fact/claim/data in a timestamped, Ed25519-SIGNED record: provable
    /// evidence of what an AI was told (or asserted), and when. Body: {"data": } or {"claim":"..."}.
    /// Returns the receipt + a detached signature (verify against GET /.well-known/keys); anchor its hash to
    /// RFC 3161 via POST /v1/anchor. Keyless. An audit-trail input for regulated AI (fintech / legal / medical).
    /// </remarks>
    public Task<object> V1ReceiptV1ReceiptPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/receipt"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Snapshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1SnapshotV1SnapshotGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Historical world-state — what Dynamic Feed reported on a given day. ?date=YYYY-MM-DD returns that
    /// day's stored snapshot (the cross-domain world_pulse digest); no date returns today's, captured on
    /// read. Honest about coverage: a date before the earliest snapshot returns the available range, never
    /// a fabricated past. Keyless. The auditable companion to the signed/RFC 3161 timestamped awareness layer.
    /// </remarks>
    public Task<object> V1SnapshotV1SnapshotGet(V1SnapshotV1SnapshotGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/snapshot"),
            [],
            [new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1SnapshotV1SnapshotGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Sources
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The authoritative source catalog — every upstream feed Dynamic Feed serves, with its publisher,
    /// official URL, licence, whether commercial use + redistribution is permitted, update cadence, and the
    /// tools it backs. Keyless. Each datapoint is provenance-stamped (source, licence, timestamp) so you can
    /// cite it and verify usage rights yourself.
    /// </remarks>
    public Task<object> V1SourcesV1SourcesGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sources"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Stamp
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1StampV1StampPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an independently verifiable record of submitted JSON.
    /// <para>
    /// ``X-API-Key`` is optional so the existing keyless signing behaviour remains available. When a
    /// key is supplied it is always validated: portal ``fx_live_`` keys use the isolated Fluxdyne
    /// runtime database boundary, while legacy keys keep their existing validation and metering path.
    /// A signature establishes integrity and issuer identity; it does not establish that submitted
    /// content is complete, scientifically valid, or true.
    /// </para>
    /// </remarks>
    public Task<object> V1StampV1StampPost(V1StampV1StampPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/stamp"),
            [],
            [],
            [new HeaderParam("x-api-key", request.XApiKey), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1StampV1StampPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Station Get
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1StationGetV1StationStationIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The public descriptor of a registered station (no owner identity). Keyless, so a verifier of a
    /// station-receipt can see what the station is and what it reports.
    /// </remarks>
    public Task<object> V1StationGetV1StationStationIdGet(V1StationGetV1StationStationIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/station/{station_id}"),
            [new TemplateParam("station_id", request.StationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1StationGetV1StationStationIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Station Reading
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1StationReadingV1StationReadingPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Witness one reading your station reported: get back a signed station-receipt/v1 stating, in
    /// words, that the value is self-reported by your station and only WITNESSED (not measured) by
    /// Dynamic Feed. Body: {"station_id": "stn_...", "quantity": "wind_kmh", "value": 12.4, "unit": "km/h",
    /// "observed_at": "..."}. Keyless verification against /.well-known/keys. Auth: X-API-Key.
    /// </remarks>
    public Task<object> V1StationReadingV1StationReadingPost(V1StationReadingV1StationReadingPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/station/reading"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1StationReadingV1StationReadingPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Station Register
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1StationRegisterV1StationRegisterPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// WE SIGN YOUR STATION, register your own sensor so its readings can be witnessed as signed
    /// receipts. Body: {"name": "...", "location": {"lat": .., "lon": ..}, "quantities": ["wind_kmh", ...]}.
    /// Returns a station_id + provenance. Dynamic Feed witnesses what your station reports; it does not
    /// measure the value. Your key is stored only as a non-reversible hash. Auth: X-API-Key (free key at
    /// POST /signup).
    /// </remarks>
    public Task<object> V1StationRegisterV1StationRegisterPost(V1StationRegisterV1StationRegisterPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/station/register"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1StationRegisterV1StationRegisterPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Stream
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1StreamV1StreamGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Server-Sent Events stream of a LIVE value. Point an EventSource at
    /// /v1/stream?tool=&amp;args=&amp;interval=&amp;count= and receive the tool's current value every
    /// <c>interval</c> seconds as a <c>value</c> event, until <c>count</c> updates or you disconnect. Keyless. Bounded for
    /// fair use: interval 5-300s, count 1-60. Example: /v1/stream?tool=cite&amp;args={"subject":"BTC"}&amp;interval=10
    /// </remarks>
    public Task<object> V1StreamV1StreamGet(V1StreamV1StreamGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/stream"),
            [],
            [
                new Param("tool", request.Tool),
                new Param("args", request.Args),
                new Param("interval", request.Interval),
                new Param("count", request.Count),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1StreamV1StreamGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Trigger Receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1TriggerReceiptV1TriggerReceiptGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Parametric catastrophe TRIGGER RECEIPT (DF-VERIFY/1 <c>trigger-receipt/v1</c>) — the dispute-proof oracle a
    /// parametric payout settles against. Evaluates 'metric op threshold' at a location against the live official
    /// reading and returns an Ed25519-signed receipt carrying the four properties that end a parametric dispute:
    /// (1) a pinned + hashed methodology (nobody moves the goalposts after the event); (2) the exact re-fetchable
    /// source_url + a raw_reading_hash anyone can reproduce (independent verifiability, not 'trust us');
    /// (3) a deterministic determination — triggered + payout_factor + rationale, re-computable by any party;
    /// (4) the signature (timestamp via POST /v1/anchor (RFC 3161) for proof of when). Neutral calculation-agent-of-
    /// record: attests what the official source reported and what the pinned methodology implies — NOT ground-truth
    /// physical loss. v0.1 metrics: wind_kmh | temperature_c | feels_like_c | precipitation_mm (Open-Meteo).
    /// op: gt | gte | lt | lte. Verify against GET /.well-known/keys; schema at /schemas/trigger-receipt-v1.json.
    /// </remarks>
    public Task<object> V1TriggerReceiptV1TriggerReceiptGet(V1TriggerReceiptV1TriggerReceiptGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/trigger-receipt"),
            [],
            [
                new Param("metric", request.Metric),
                new Param("threshold", request.Threshold),
                new Param("op", request.Op),
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("city", request.City),
                new Param("peril", request.Peril),
                new Param("contract_ref", request.ContractRef),
                new Param("methodology", request.Methodology),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1TriggerReceiptV1TriggerReceiptGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Vc
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Security quarantine: legacy VC wrapping did not verify the inner receipt or role boundaries.
    /// </remarks>
    public Task<object> V1VcV1VcPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/vc"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Watchlist Delete
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1WatchlistDeleteV1WatchlistDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove one item from your watchlist (?label=BTC) or clear it entirely (no label). Per-user.
    /// </remarks>
    public Task<object> V1WatchlistDeleteV1WatchlistDelete(V1WatchlistDeleteV1WatchlistDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watchlist"),
            [],
            [new Param("label", request.Label)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1WatchlistDeleteV1WatchlistDeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Watchlist Get
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1WatchlistGetV1WatchlistGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Your saved watchlist — the subjects/tools you monitor. ?pull=true runs every watched tool and
    /// returns each one's CURRENT value in a single call (your whole dashboard at once). Per-user, keyed by
    /// your API key (X-API-Key).
    /// </remarks>
    public Task<object> V1WatchlistGetV1WatchlistGet(V1WatchlistGetV1WatchlistGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watchlist"),
            [],
            [new Param("pull", request.Pull)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1WatchlistGetV1WatchlistGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Watchlist Post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1WatchlistPostV1WatchlistPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add to or replace your watchlist. Body {"label":"BTC","tool":"cite","args":{"subject":"BTC"}} adds
    /// one item; body {"items":[...]} replaces the whole list (max 25). Each item's <c>tool</c> must be a real
    /// Dynamic Feed tool. Per-user, keyed by your API key.
    /// </remarks>
    public Task<object> V1WatchlistPostV1WatchlistPost(V1WatchlistPostV1WatchlistPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watchlist"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1WatchlistPostV1WatchlistPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Webhooks Create
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1WebhooksCreateV1WebhooksPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Register a webhook that fires when a tool's value CHANGES. Body:
    /// {"url":"https://you.example/hook","tool":"exploited_vulnerabilities","args":{}}. The URL is validated
    /// SSRF-safe (public http/https only). Returns a one-time <c>secret</c> — every delivery is HMAC-SHA256 signed
    /// with it (header X-DynamicFeed-Signature: sha256=…), so you can verify it came from us. Per-user (X-API-Key).
    /// </remarks>
    public Task<object> V1WebhooksCreateV1WebhooksPost(V1WebhooksCreateV1WebhooksPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1WebhooksCreateV1WebhooksPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Webhooks Delete
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1WebhooksDeleteV1WebhooksDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete one of your webhook subscriptions by ?id=. Per-user.
    /// </remarks>
    public Task<object> V1WebhooksDeleteV1WebhooksDelete(V1WebhooksDeleteV1WebhooksDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks"),
            [],
            [new Param("id", request.Id)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1WebhooksDeleteV1WebhooksDeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Webhooks List
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1WebhooksListV1WebhooksGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List your webhook subscriptions (secrets are never returned). Per-user.
    /// </remarks>
    public Task<object> V1WebhooksListV1WebhooksGet(V1WebhooksListV1WebhooksGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1WebhooksListV1WebhooksGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Webhooks Test
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1WebhooksTestV1WebhooksTestPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a signed TEST delivery to one of your subscriptions now — confirm your endpoint receives it and
    /// the HMAC validates. Body: {"id": }. Per-user.
    /// </remarks>
    public Task<object> V1WebhooksTestV1WebhooksTestPost(V1WebhooksTestV1WebhooksTestPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks/test"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1WebhooksTestV1WebhooksTestPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Witness Inclusion
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1WitnessInclusionV1WitnessIdxInclusionGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// SUCCINCT, browser-verifiable inclusion proof that witness/notary entry {idx} is in the
    /// append-only log — an O(log n) RFC-6962 Merkle audit path to a tree root we Ed25519-SIGN (the
    /// checkpoint). Any party folds leaf -&gt; root in their own browser and checks the checkpoint signature
    /// against /.well-known/keys, with NO trust in Dynamic Feed's word (only its published key). Keyless.
    /// Recipe: leaf = sha256(0x00 ‖ content_hash_bytes); node = sha256(0x01 ‖ left ‖ right); fold the
    /// audit_path (each {sibling, side}) up to root_sha256; confirm it equals the signed
    /// checkpoint.root_sha256, then verify the checkpoint Ed25519 signature. In-browser via
    /// /verify.js verifyInclusion(). Complements GET /v1/notary/log/{idx}/proof (the O(n) chain replay):
    /// the chain proves append-order, this proves succinct membership in a signed tree.
    /// </remarks>
    public Task<object> V1WitnessInclusionV1WitnessIdxInclusionGet(V1WitnessInclusionV1WitnessIdxInclusionGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/witness/{idx}/inclusion"),
            [new TemplateParam("idx", request.Idx)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1WitnessInclusionV1WitnessIdxInclusionGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Witness Sample
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A keyless, signed SAMPLE txn-receipt/v1 — for the /witness demo. Shows exactly what POST
    /// /v1/witness returns (without writing to the log or needing a key): a neutral witness of a sample
    /// machine-to-machine transaction record, with the recent-Bitcoin-block NOT-BEFORE time marker.
    /// Verify it in-browser via /verify.js, then flip a byte and watch verification fail.
    /// </remarks>
    public Task<object> V1WitnessSampleV1WitnessSampleGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/witness/sample"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Witness
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1WitnessV1WitnessPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// WITNESS a machine-to-machine / agent-to-agent transaction RECORD — a neutral, third-party,
    /// Ed25519-signed, transparency-logged, RFC 3161 timestampable receipt that this exact record EXISTED and
    /// is INTACT. Dynamic Feed sits BESIDE the transaction, NEVER in the value path: it only signs +
    /// timestamps + anchors a HASH of a record you give it. It never accepts, holds, routes, converts or
    /// custodies funds or anything of value. Send the record ({"payload": }) or keep it private
    /// ({"content_hash": ""}). Optional: parties[] (opaque ids — NO PII), txn_ref (opaque),
    /// and a BYO-key agent co-signature (provider_pubkey + provider_sig, Ed25519 over the ascii-hex hash)
    /// so the receipt reads "agent attested, Dynamic Feed witnessed". Auth: a FREE key (POST /signup) —
    /// no KYC. PROVES: the record existed at issued_at, is intact (tamper-EVIDENT, verifiable via
    /// /verify.js against /.well-known/keys), and which agent key co-signed. Does NOT prove the
    /// transaction was authorized, correct, lawful, completed, or that any value moved. Profile of
    /// receipt/v1. Anchor independently via POST /v1/anchor.
    /// </remarks>
    public Task<object> V1WitnessV1WitnessPost(V1WitnessV1WitnessPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/witness"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1WitnessV1WitnessPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
