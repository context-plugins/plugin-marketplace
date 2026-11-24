import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { confidenceSchema, type Confidence } from "../models/unions/confidence.js";
import { detectedAtSchema, type DetectedAt } from "../models/unions/detected-at.js";
import { organisationSchema, type Organisation } from "../models/unions/organisation.js";
import { placeSchema, type Place } from "../models/unions/place.js";
import { useCaseSchema, type UseCase } from "../models/unions/use-case.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Agent {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * V1 Explain
   *
   * @remarks
   * Explain the source / chain of custody for one subject. Pass ?subject= (GET) or
   * {"subject":"..."} (POST) — a tool name (earthquakes), a source (USGS), or a topic. Returns the
   * upstream source(s), licence, official URL, update cadence and the full custody trail (origin ->
   * ingest -> normalize -> serve, plus sign/anchor for awareness), so you can trace and verify
   * where a number came from. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.PostV1ExplainError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postV1Explain(
    request: Agent.PostV1ExplainRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.PostV1ExplainError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/explain"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "subject", value: request.subject, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.PostV1ExplainError,
      },
      options,
    );
  }

  /**
   * Schemas Index
   *
   * @remarks
   * The Dynamic Feed receipt-schema family, self-describing (DF-VERIFY/1). Scans the schema
   * directory at request time so it never drifts: every profile's $id, title and active mint
   * endpoint when one exists. Deprecated/quarantined schemas remain visible as history, not as
   * executable capabilities. Schema conformance and signature mathematics are separate from
   * lifecycle acceptance.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  schemasIndexSchemasIndexJsonGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/schemas/index.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Agent Receipt
   *
   * @remarks
   * Agent receipt. A signed, re-checkable record of what an AI agent acted on and what it decided.
   * The operational-integrity primitive for the agent economy: prove, after the fact, the inputs
   * behind an agent's action. Body: {"agent": "...", "action": "...", "inputs": }, plus optional
   * "model", "decision", "context". Returns an agent-receipt/v1 with a detached Ed25519 signature
   * (verify against GET /.well-known/keys: drop the `signature` field, canonicalize
   * json-sorted-compact). Anchor the hash via RFC 3161 via POST /v1/anchor. Keyless. Advisory
   * evidence and a neutral witness: it proves what the agent was given and did, never that the
   * decision was correct, and it never moves anything. Spec: https://dynamicfeed.ai/standard
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1AgentReceiptV1AgentReceiptPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/agent/receipt"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Asof
   *
   * @remarks
   * TIME-MACHINE REPLAY — what did the data say at decision time? Returns the archived observation
   * for `tool` nearest at-or-before time `t`, replayed VERBATIM from Dynamic Feed's append-only
   * archive (capturing every served datapoint since 2026-06-07) — the value as served then, never a
   * re-fetch or reconstruction. The response carries honest metadata (`archived_at`,
   * `distance_seconds` from your requested instant, the exact archive object, where coverage
   * begins) and is Ed25519-signed (verify against GET /.well-known/keys) — built for agent
   * backtesting, audit trails and "what did we know when we decided" disputes. Honest about
   * coverage: a time the archive didn't capture returns a clear miss with the nearest captured day,
   * never a fabricated past. Paid plans (Pro and up); auth via the X-API-Key header. Upgrade:
   * https://dynamicfeed.ai/dashboard
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1AsofV1AsofGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1AsofV1AsofGet(
    request: Agent.V1AsofV1AsofGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1AsofV1AsofGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/asof"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "tool", value: request.tool, schema: s.string() },
          { name: "t", value: request.t, schema: s.string() },
        ],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1AsofV1AsofGetError,
      },
      options,
    );
  }

  /**
   * V1 Attest
   *
   * @remarks
   * Signed parametric-trigger attestation — evaluate 'metric op threshold' at a location against
   * the live measurement and return a tamper-evident, Ed25519-signed MET / NOT-MET record. The
   * dispute-proof oracle a parametric-insurance payout can settle against. metric: wind_kmh |
   * temperature_c | feels_like_c | precipitation_mm. op: gt | gte | lt | lte. Verify against GET
   * /.well-known/keys; timestamp via POST /v1/anchor (RFC 3161) for independent proof of when.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1AttestV1AttestGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1AttestV1AttestGet(
    request: Agent.V1AttestV1AttestGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1AttestV1AttestGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/attest"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "metric", value: request.metric, schema: s.string() },
          { name: "threshold", value: request.threshold, schema: s.float64() },
          { name: "op", value: request.op, schema: s.defaulted(s.string(), "gte") },
          { name: "lat", value: request.lat, schema: s.optional(s.float64()) },
          { name: "lon", value: request.lon, schema: s.optional(s.float64()) },
          { name: "city", value: request.city, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1AttestV1AttestGetError,
      },
      options,
    );
  }

  /**
   * V1 Batch
   *
   * @remarks
   * Run up to 20 read-only data-tool calls in ONE request — cuts agent round-trips. Keyless. Body:
   * {"calls":[{"tool":"current_weather","args":{"city":"London"}},
   * {"tool":"earthquakes","args":{}}]}. Returns {"results":[{"tool","ok","data"|"error"}, ...]} in
   * the same order. Tool names are the keyless MCP tools; POST with no `calls` returns the
   * available list. Each call has its own 20s deadline, so a slow upstream degrades that one item
   * rather than blocking the batch.
   *
   * Add "facts": true to the body to get each result as a canonical, reliability-graded fact
   * instead of raw data: {"tool","ok","fact":{value, provenance, verification,
   * reliability{confidence,basis,sources, verified,vantage,conflict}}}. The whole response is
   * Ed25519-signed (verify against /.well-known/keys), so this is verifiable, reliability-graded,
   * multi-tool data in one round-trip. Default shape is unchanged.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1BatchV1BatchPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/batch"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Benchmark History
   *
   * @remarks
   * DRIFT OVER TIME — daily snapshots of the live-facts benchmark (GET /v1/benchmark), oldest
   * first. Each snapshot is the items array exactly as measured that day, so diffing consecutive
   * snapshots shows how fast reality moves away from any fixed training cutoff: rates shift,
   * releases ship, CVEs land. History starts at first_snapshot_at and grows one snapshot per day.
   * Human-readable charts at /benchmark/history. Ed25519-signed. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1BenchmarkHistoryV1BenchmarkHistoryGet(
    request: Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/benchmark/history"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "days", value: request.days, schema: s.defaulted(s.int(), 90) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1BenchmarkHistoryV1BenchmarkHistoryGetError,
      },
      options,
    );
  }

  /**
   * V1 Benchmark
   *
   * @remarks
   * The LIVE-FACTS BENCHMARK — a continuously-refreshed eval of facts that move after a model's
   * training cutoff. Ask a model these questions WITHOUT tools and grade against the answers
   * measured from authoritative sources at call time: every frozen model fails; a grounded agent
   * passes. Each item carries its grading rule, source and measured_at; the whole set is
   * Ed25519-signed so a published score is verifiable evidence, not a claim. Regenerate per run —
   * answers are time-sensitive by design. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1BenchmarkV1BenchmarkGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/benchmark"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Bundle
   *
   * @remarks
   * One curated tool bundle by id (e.g. devsecops, weather-climate, finance-markets).
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1BundleV1BundlesBundleIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1BundleV1BundlesBundleIdGet(
    request: Agent.V1BundleV1BundlesBundleIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1BundleV1BundlesBundleIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bundles/{bundle_id}"),
        auth: noneAuth,
        pathParams: [{ name: "bundle_id", value: request.bundleId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1BundleV1BundlesBundleIdGetError,
      },
      options,
    );
  }

  /**
   * V1 Bundles
   *
   * @remarks
   * Curated tool BUNDLES per domain — pick the right tools for your agent's use-case fast (instead
   * of sifting all tools). Keyless: call any tool via POST /v1/batch; pay-per-call via /v1/pro/*.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1BundlesV1BundlesGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bundles"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Bushfire
   *
   * @remarks
   * Signed Australian bushfire/fire hotspots (last ~3 days) from Geoscience Australia / Digital
   * Earth Australia Hotspots — keyless, CC BY 4.0. lat & lon (+ radius_km) for hotspots near a
   * point, a state code (NSW/QLD/VIC/SA/WA/TAS/NT/ACT), or neither for recent Australia-wide.
   * Ed25519-signed; verify against GET /.well-known/keys. A hotspot is a satellite thermal anomaly
   * — not every one is a confirmed bushfire.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1BushfireV1BushfireGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1BushfireV1BushfireGet(
    request: Agent.V1BushfireV1BushfireGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1BushfireV1BushfireGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bushfire"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.optional(s.float64()) },
          { name: "lon", value: request.lon, schema: s.optional(s.float64()) },
          { name: "radius_km", value: request.radiusKm, schema: s.defaulted(s.float64(), 150) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1BushfireV1BushfireGetError,
      },
      options,
    );
  }

  /**
   * V1 Checkpoint Proof
   *
   * @remarks
   * The raw witness proof for one day's archive checkpoint. kind=ots (default) returns the
   * DLT-timestamp .ots bytes (verify: ots verify -d checkpoint-.ots); kind=rfc3161 returns the RFC
   * 3161 timestamp token DER from the independent TSA (verify: openssl ts -reply -in
   * checkpoint-.tsr -text, then openssl ts -verify -digest -sha256 -in checkpoint-.tsr). Offline
   * runner for both witnesses: scripts/verify_checkpoint.py. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1CheckpointProofV1CheckpointsDayProofGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1CheckpointProofV1CheckpointsDayProofGet(
    request: Agent.V1CheckpointProofV1CheckpointsDayProofGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1CheckpointProofV1CheckpointsDayProofGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/checkpoints/{day}/proof"),
        auth: noneAuth,
        pathParams: [{ name: "day", value: request.day, schema: s.string() }],
        query: [{ name: "kind", value: request.kind, schema: s.defaulted(s.string(), "ots") }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1CheckpointProofV1CheckpointsDayProofGetError,
      },
      options,
    );
  }

  /**
   * V1 Checkpoints
   *
   * @remarks
   * Daily ARCHIVE CHECKPOINTS, newest first — the append-only claim made independently checkable.
   * Each entry carries the signed archive-day/v1 document: a SHA-256 digest of that day's full
   * archive listing, per-feed object counts, the previous day's digest (the chain), and the anchor
   * status of a DLT-timestamp proof committing the digest to a public distributed ledger (RFC 3161
   * on fallback). Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1CheckpointsV1CheckpointsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1CheckpointsV1CheckpointsGet(
    request: Agent.V1CheckpointsV1CheckpointsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1CheckpointsV1CheckpointsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/checkpoints"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "limit", value: request.limit, schema: s.defaulted(s.int(), 30) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1CheckpointsV1CheckpointsGetError,
      },
      options,
    );
  }

  /**
   * V1 Discover Get
   *
   * @remarks
   * CAPABILITY DISCOVERY — ask in plain words what you need ("live rainfall in Brisbane",
   * "sanctions screening", "satellite positions") and get a ranked, Ed25519-signed list of
   * candidate capabilities: Dynamic Feed's own tools with MEASURED 24h uptime/latency and a keyless
   * call recipe, plus matching external MCP servers from the official registry index, honestly
   * marked registry-reported and unmeasured. Advisory discovery with an explicit vantage per
   * candidate, not an endorsement. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1DiscoverGetV1DiscoverGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1DiscoverGetV1DiscoverGet(
    request: Agent.V1DiscoverGetV1DiscoverGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1DiscoverGetV1DiscoverGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/discover"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "need", value: request.need, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 8) },
          { name: "external", value: request.external, schema: s.defaulted(s.int(), 1) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1DiscoverGetV1DiscoverGetError,
      },
      options,
    );
  }

  /**
   * V1 Discover Post
   *
   * @remarks
   * POST twin of GET /v1/discover: {"need": "...", "limit": 8, "external": true}.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1DiscoverPostV1DiscoverPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/discover"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Drift
   *
   * @remarks
   * Drift detection — audit an AI's stated facts against live ground-truth, graded by severity.
   * Keyless. Body: {"claims":["The latest Python is 3.11","Node.js is on 18"]} or {"text":""}.
   * Returns {checked, drifted_count, overall, results:[{claim, status, drifted, severity,
   * correction, source}]}.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1DriftV1DriftPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/drift"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Eval Receipt Sample
   *
   * @remarks
   * A keyless, signed SAMPLE eval-receipt/v1 — a 'Verified Eval' run against a sealed, committed
   * test set (the set stays private; only its commitment is signed). Verify it in-browser via
   * /verify.js, then flip a byte and watch verification fail. Advisory evidence only — DF witnesses
   * the committed run, it does not re-run or certify the benchmark.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1EvalReceiptSampleV1EvalReceiptSampleGet(
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/eval-receipt/sample"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Eval Receipt
   *
   * @remarks
   * WITNESS an AI EVALUATION run — the neutral 'Verified Eval' stamp for the contamination-proof-
   * benchmark era. The lab commits its test set as a salted sha256 BEFORE the run
   * (`set_commitment`), so the set stays PRIVATE while the run becomes un-retunable after the fact
   * — solving the evaluator's dilemma of having to expose a private set to be trusted.
   * Ed25519-signed, transparency-logged, RFC 3161 timestampable. Body: {"eval_name": "",
   * "model_id": "", "metric": "pass@1", "score": 0.58, "set_commitment": ""} plus optional n,
   * run_sha256 (hash of the full transcript), harness, and a BYO-key co-signature. Auth: a FREE key
   * (POST /signup). ADVISORY EVIDENCE ONLY — Dynamic Feed does NOT re-run or verify the score, and
   * does NOT certify the benchmark is fair/representative/contamination-free; it witnesses the
   * COMMITTED run so no party can retune it retroactively. Profile of receipt/v1. Anchor via POST
   * /v1/anchor.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1EvalReceiptV1EvalReceiptPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1EvalReceiptV1EvalReceiptPost(
    request: Agent.V1EvalReceiptV1EvalReceiptPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1EvalReceiptV1EvalReceiptPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/eval-receipt"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1EvalReceiptV1EvalReceiptPostError,
      },
      options,
    );
  }

  /**
   * V1 Evidence Wildfire
   *
   * @remarks
   * Chain-of-custody EVIDENCE record for a wildfire detection. Wraps a SELF-REPORTED detection
   * (detector, lat/lon, time) with Dynamic Feed's INDEPENDENT context captured at that location the
   * moment it's requested — fire-weather, near-term forecast, air quality (smoke), and tracked
   * EONET wildfire events — each datapoint carrying its source, licence and age. The whole record
   * is Ed25519-signed so any party can verify it OFFLINE against /.well-known/keys, WITHOUT
   * trusting the detector or Dynamic Feed. Advisory evidence + audit layer: it does NOT make,
   * certify, or sit in the safety-critical path of the detection — it makes the surrounding context
   * provable later (an insurer claim, a liability review, an SLA). Keyless. Anchor via RFC 3161 via
   * POST /v1/anchor for proof-of-when independent of us.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1EvidenceWildfireV1EvidenceWildfireGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1EvidenceWildfireV1EvidenceWildfireGet(
    request: Agent.V1EvidenceWildfireV1EvidenceWildfireGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1EvidenceWildfireV1EvidenceWildfireGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/evidence/wildfire"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.float64() },
          { name: "lon", value: request.lon, schema: s.float64() },
          {
            name: "detected_at",
            value: request.detectedAt,
            schema: s.optional(s.lazy(() => detectedAtSchema)),
          },
          { name: "detector", value: request.detector, schema: s.defaulted(s.string(), "the detector") },
          { name: "place", value: request.place, schema: s.optional(s.lazy(() => placeSchema)) },
          {
            name: "confidence",
            value: request.confidence,
            schema: s.optional(s.lazy(() => confidenceSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1EvidenceWildfireV1EvidenceWildfireGetError,
      },
      options,
    );
  }

  /**
   * V1 Explain
   *
   * @remarks
   * Explain the source / chain of custody for one subject. Pass ?subject= (GET) or
   * {"subject":"..."} (POST) — a tool name (earthquakes), a source (USGS), or a topic. Returns the
   * upstream source(s), licence, official URL, update cadence and the full custody trail (origin ->
   * ingest -> normalize -> serve, plus sign/anchor for awareness), so you can trace and verify
   * where a number came from. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1ExplainV1ExplainGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1ExplainV1ExplainGet(
    request: Agent.V1ExplainV1ExplainGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1ExplainV1ExplainGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/explain"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "subject", value: request.subject, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1ExplainV1ExplainGetError,
      },
      options,
    );
  }

  /**
   * V1 Exposure Report
   *
   * @remarks
   * Automated, signed EXPOSURE REPORT. Maps the perils a decision depends on to the external
   * readings that decide them, flags where those readings are unverifiable today, and attaches a
   * LIVE signed sample observation for each, so an organisation can see where its decisions rely on
   * data it cannot independently check. Fully automated, no human in the loop. Ed25519-signed;
   * verify offline at /.well-known/keys. Advisory evidence, not a certification or legal/financial
   * advice.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1ExposureReportV1ExposureReportGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1ExposureReportV1ExposureReportGet(
    request: Agent.V1ExposureReportV1ExposureReportGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1ExposureReportV1ExposureReportGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/exposure-report"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "perils", value: request.perils, schema: s.defaulted(s.string(), "wind,flood,wildfire") },
          { name: "lat", value: request.lat, schema: s.defaulted(s.float64(), -33.8688) },
          { name: "lon", value: request.lon, schema: s.defaulted(s.float64(), 151.2093) },
          { name: "place", value: request.place, schema: s.optional(s.lazy(() => placeSchema)) },
          {
            name: "organisation",
            value: request.organisation,
            schema: s.optional(s.lazy(() => organisationSchema)),
          },
          { name: "use_case", value: request.useCase, schema: s.optional(s.lazy(() => useCaseSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1ExposureReportV1ExposureReportGetError,
      },
      options,
    );
  }

  /**
   * V1 Guard
   *
   * @remarks
   * Pre-answer guard — the anti-hallucination middleware. POST the draft answer your AI is about to
   * send; get back a verdict of "pass" or "revise" plus the exact corrections, so you can fix it
   * BEFORE the user sees it. Keyless. Wrap it around any LLM response pipeline. Body: {"answer":""}
   * or {"claims":["...","..."]}. Returns {verdict:"pass"|"revise", checked, issues:[{claim,
   * subject, severity, correction, source}], confirmed, unverifiable, guidance}. Only claims that
   * CONTRADICT live data trigger "revise"; opinions and facts no live feed can cover pass through
   * untouched. Verifies prices, software versions, market open/closed and service up/down against
   * Dynamic Feed's live ground-truth.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1GuardV1GuardPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/guard"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Index
   *
   * @remarks
   * The Dynamic Feed agent & robot API at a glance — every /v1 capability, what it does, and a
   * copy-paste example. The fastest way for a developer (or an agent) to discover the whole
   * surface. Keyless unless noted.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1IndexV1Get(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Inference Receipt Sample
   *
   * @remarks
   * A keyless, signed SAMPLE inference-receipt/v1 — for the /receipts demo. Shows what POST
   * /v1/inference-receipt returns: a neutral witness of a sample inference where the provider
   * served a DIFFERENT model than requested and set its own fallback flag (illustrative,
   * vendor-neutral). Verify it in-browser via /verify.js, then flip a byte and watch verification
   * fail.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1InferenceReceiptSampleV1InferenceReceiptSampleGet(
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/inference-receipt/sample"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Inference Receipt
   *
   * @remarks
   * WITNESS a single AI model INFERENCE — a neutral, Ed25519-signed, transparency-logged, RFC 3161
   * timestampable receipt that this inference record EXISTED and is INTACT. Privacy by
   * CONSTRUCTION: the caller hashes the prompt + response LOCALLY and sends ONLY fixed-length
   * sha256 hashes + non-PII metadata. Body: {"claimed_model": "", "prompt_sha256": "",
   * "response_sha256": ""} plus optional requested_model, latency_ms, token_count, fallback_flag
   * (the provider's OWN flag), provider, region, and a BYO-key agent co-signature (provider_pubkey
   * + provider_sig). Auth: a FREE key (POST /signup) — no KYC. PROVES: the record existed at
   * issued_at and is intact (tamper-EVIDENT, verifiable via /verify.js against /.well-known/keys).
   * Does NOT independently verify which model actually ran, does NOT adjudicate that a 'downgrade'
   * occurred, does NOT score quality — model_match is a literal string comparison and the holder
   * draws any inference. Profile of receipt/v1. Anchor via POST /v1/anchor.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1InferenceReceiptV1InferenceReceiptPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1InferenceReceiptV1InferenceReceiptPost(
    request: Agent.V1InferenceReceiptV1InferenceReceiptPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1InferenceReceiptV1InferenceReceiptPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/inference-receipt"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1InferenceReceiptV1InferenceReceiptPostError,
      },
      options,
    );
  }

  /**
   * V1 Intensity
   *
   * @remarks
   * INTENSITY-AT-LOCATION (DF-VERIFY/1 `intensity/v1`) — the parameter value at an exact
   * coordinate, signed and reproducible: the settlement-grade reading a parametric trigger
   * evaluates against. Not 'an event happened' but 'the value at this lat/lon, from the region's
   * authoritative source'. v1 peril: flood — routed by coordinate to the nearest official river
   * gauge: AU -> BoM Water Data Online (water-course level m; CC BY 4.0), US -> USGS NWIS (gage
   * height ft / discharge ft3/s). Point-resolved, no interpolation. drought, wildfire and
   * earthquake (ShakeMap) intensity are rolling in. Verify the Ed25519 signature against GET
   * /.well-known/keys; re-fetch source_url to reproduce raw_reading_hash (see hash_method). SCOPE:
   * attests the reading at the cited official gauge — NOT a basin-wide determination or physical
   * loss.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1IntensityV1IntensityGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1IntensityV1IntensityGet(
    request: Agent.V1IntensityV1IntensityGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1IntensityV1IntensityGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/intensity"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.float64() },
          { name: "lon", value: request.lon, schema: s.float64() },
          { name: "peril", value: request.peril, schema: s.defaulted(s.string(), "flood") },
          { name: "metric", value: request.metric, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1IntensityV1IntensityGetError,
      },
      options,
    );
  }

  /**
   * V1 Me
   *
   * @remarks
   * Your key at a glance — plan, calls used today, daily quota and remaining. The per-user usage
   * view (the keyless MCP endpoint is unmetered fair-use).
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1MeV1MeGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1MeV1MeGet(
    request: Agent.V1MeV1MeGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1MeV1MeGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/me"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1MeV1MeGetError,
      },
      options,
    );
  }

  /**
   * V1 Nearby
   *
   * @remarks
   * Signed situational scan: live hazards near a point — earthquakes (USGS), natural events (NASA
   * EONET: wildfires/volcanoes/floods/storms), major disasters (GDACS) and, in Australia, live
   * satellite bushfire hotspots (Geoscience Australia) within radius_km, nearest first.
   * Ed25519-signed (verify against GET /.well-known/keys). The 'what's around me' ping for any
   * machine that moves — robots, drones, in-car AI assistants, fleet telematics — complements the
   * go/caution/no-go verdict from /v1/awareness.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1NearbyV1NearbyGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1NearbyV1NearbyGet(
    request: Agent.V1NearbyV1NearbyGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1NearbyV1NearbyGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/nearby"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.float64() },
          { name: "lon", value: request.lon, schema: s.float64() },
          { name: "radius_km", value: request.radiusKm, schema: s.defaulted(s.float64(), 500) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1NearbyV1NearbyGetError,
      },
      options,
    );
  }

  /**
   * V1 Notarize
   *
   * @remarks
   * NOTARY for any data feed — a neutral third party witnesses YOUR data and returns a timestamped,
   * Ed25519-signed notarization: proof these exact bytes existed at this moment, independently
   * verifiable forever. Two modes — send the data ({"payload": }), or keep it private and send only
   * its hash ({"payload_sha256": ""}). Optional "subject" names the publisher; "echo": false omits
   * the payload from the record (hash retained). This attests that Dynamic Feed WITNESSED these
   * bytes (or this hash) at witnessed_at — not that the content is true. Anchor via POST /v1/anchor
   * for proof-of-when independent of us. Auth: X-API-Key (free key at POST /signup). 'Let's Encrypt
   * for data feeds' — your feed, signed, without building a signing stack.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1NotarizeV1NotarizePostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1NotarizeV1NotarizePost(
    request: Agent.V1NotarizeV1NotarizePostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1NotarizeV1NotarizePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/notarize"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1NotarizeV1NotarizePostError,
      },
      options,
    );
  }

  /**
   * V1 Notary Entry
   *
   * @remarks
   * One transparency-log entry by index, Ed25519-signed, with the recipe to recompute its
   * entry_hash and verify chain linkage. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1NotaryEntryV1NotaryLogIdxGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1NotaryEntryV1NotaryLogIdxGet(
    request: Agent.V1NotaryEntryV1NotaryLogIdxGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1NotaryEntryV1NotaryLogIdxGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/notary/log/{idx}"),
        auth: noneAuth,
        pathParams: [{ name: "idx", value: request.idx, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1NotaryEntryV1NotaryLogIdxGetError,
      },
      options,
    );
  }

  /**
   * V1 Notary Feed Register
   *
   * @remarks
   * CONTINUOUS NOTARIZATION — register a feed URL and Dynamic Feed fetches it on your interval,
   * notarizing every CHANGE into the public transparency log automatically: a standing,
   * tamper-evident history of what your feed published, when. Body: {"url": "https://...",
   * "subject": "Your Co", "interval_minutes": 180 (min 60)}. Beta: 3 active feeds per key. The
   * first fetch happens immediately and its notarization is returned.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1NotaryFeedRegisterV1NotaryFeedsPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1NotaryFeedRegisterV1NotaryFeedsPost(
    request: Agent.V1NotaryFeedRegisterV1NotaryFeedsPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1NotaryFeedRegisterV1NotaryFeedsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/notary/feeds"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1NotaryFeedRegisterV1NotaryFeedsPostError,
      },
      options,
    );
  }

  /**
   * V1 Notary Feeds List
   *
   * @remarks
   * Your registered continuous-notarization feeds (same X-API-Key): status, last hash, last log
   * index, next-run cadence.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1NotaryFeedsListV1NotaryFeedsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1NotaryFeedsListV1NotaryFeedsGet(
    request: Agent.V1NotaryFeedsListV1NotaryFeedsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1NotaryFeedsListV1NotaryFeedsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/notary/feeds"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1NotaryFeedsListV1NotaryFeedsGetError,
      },
      options,
    );
  }

  /**
   * V1 Notary Head
   *
   * @remarks
   * The transparency-log HEAD — count + chain head hash, Ed25519-signed. The anchorable artifact:
   * altering ANY past notarization breaks every entry_hash after it and contradicts the anchored
   * head. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1NotaryHeadV1NotaryLogHeadGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/notary/log/head"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Notary Log
   *
   * @remarks
   * The PUBLIC TRANSPARENCY LOG of all notarizations — append-only, hash-chained (CT-style), newest
   * first. Payload hashes only (never payloads): private by construction, tamper-evident by recipe.
   * Page back with ?before=. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1NotaryLogV1NotaryLogGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1NotaryLogV1NotaryLogGet(
    request: Agent.V1NotaryLogV1NotaryLogGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1NotaryLogV1NotaryLogGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/notary/log"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "before", value: request.before, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1NotaryLogV1NotaryLogGetError,
      },
      options,
    );
  }

  /**
   * V1 Notary Proof
   *
   * @remarks
   * INCLUSION PROOF for a log entry: the consecutive chain of entries from this index to the most
   * recently ANCHORED head (or the current head if no anchor covers it yet), plus the anchor
   * record. Recompute each entry_hash and you have proven this entry is in the history the Bitcoin
   * anchor commits to — no trust in Dynamic Feed required. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1NotaryProofV1NotaryLogIdxProofGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1NotaryProofV1NotaryLogIdxProofGet(
    request: Agent.V1NotaryProofV1NotaryLogIdxProofGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1NotaryProofV1NotaryLogIdxProofGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/notary/log/{idx}/proof"),
        auth: noneAuth,
        pathParams: [{ name: "idx", value: request.idx, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1NotaryProofV1NotaryLogIdxProofGetError,
      },
      options,
    );
  }

  /**
   * V1 Pro Asof
   *
   * @remarks
   * PREMIUM keyless AS-OF REPLAY — pay-per-call (x402, USDC on Base) signed time-machine over
   * Dynamic Feed's append-only archive. Body {"tool":"current_weather","t":"2026-06-10T14:30:00Z"}
   * (or ?tool=&t=) -> the archived observation for `tool` nearest at-or-before `t`, replayed
   * VERBATIM, Ed25519-signed (verify against GET /.well-known/keys). The keyless paid channel to
   * the SAME engine as the key-gated GET /v1/asof — for agent backtesting, audit trails and 'what
   * did we know when we decided' disputes. No signup, no human; discoverable via the x402 bazaar.
   * Honest about coverage: a time the archive didn't capture returns a clear miss, never a
   * fabricated past.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1ProAsofV1ProAsofPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/pro/asof"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Pro Batch
   *
   * @remarks
   * PREMIUM, pay-per-call data batch — the commercial tier of /v1/batch, paid AGENT-NATIVELY via
   * x402 (HTTP 402): an agent gets a price, pays from its wallet, re-calls with the X-PAYMENT
   * header, and is served — no human, no signup. Up to 100 signed tool calls per request (free
   * /v1/batch is fair-use, capped at 20). Dynamic Feed charges for its OWN service; a third-party
   * facilitator settles the payment — DF never custodies funds (witness-not-money). Body:
   * {"calls":[{"tool":...,"args":{...}}, ...]}.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1ProBatchV1ProBatchPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/pro/batch"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Pro Catalog
   *
   * @remarks
   * Machine-readable MENU of Dynamic Feed's x402 pay-per-call SKUs (USDC on Base) — the 'price
   * list' an agent or x402 facilitator shops in one call: every paid endpoint, its price (live from
   * X402_PRICE_ATOMIC), input/output schema, the recipient wallet (when connected), and the
   * facilitator. Boundary: DF is the merchant; the facilitator settles — DF never custodies funds.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1ProCatalogV1ProCatalogGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/pro/catalog"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Pro Tool Discover
   *
   * @remarks
   * Discovery for the paid single-call endpoint. A GET returns the x402 402 challenge — so an agent
   * that probes with GET (instead of a 'Method Not Allowed' dead end) still learns the price, the
   * asset, and that it must POST with an X-PAYMENT header + {"args":{...}} body. NO payment is
   * taken on GET; settlement only ever happens on POST. Pure discovery, no money path.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1ProToolDiscoverV1ProToolToolGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1ProToolDiscoverV1ProToolToolGet(
    request: Agent.V1ProToolDiscoverV1ProToolToolGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1ProToolDiscoverV1ProToolToolGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/pro/tool/{tool}"),
        auth: noneAuth,
        pathParams: [{ name: "tool", value: request.tool, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1ProToolDiscoverV1ProToolToolGetError,
      },
      options,
    );
  }

  /**
   * V1 Pro Tool
   *
   * @remarks
   * PREMIUM single signed tool call — pay-per-call (x402, USDC on Base) for ANY one of Dynamic
   * Feed's live tools. An agent pays once, gets one Ed25519-signed datapoint. No signup, no human.
   * Body: {"args":{...}}. Discoverable via the x402 bazaar. (Free alternative: keyless /v1/batch,
   * fair-use.)
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1ProToolV1ProToolToolPostError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1ProToolV1ProToolToolPost(
    request: Agent.V1ProToolV1ProToolToolPostRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1ProToolV1ProToolToolPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/pro/tool/{tool}"),
        auth: noneAuth,
        pathParams: [{ name: "tool", value: request.tool, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1ProToolV1ProToolToolPostError,
      },
      options,
    );
  }

  /**
   * V1 Proxy Witness
   *
   * @remarks
   * PROXY WITNESS, route any third-party API call through Dynamic Feed and get a signed, archived
   * receipt of exactly what that URL returned to us at this moment. Body: {"url": "https://...",
   * "method": "GET"|"POST"|..., "headers": {...}, "body": "...", "echo": false, "subject": "..."}.
   * We fetch server-side under an SSRF guard (only public http/https targets; private and reserved
   * addresses blocked; redirects not followed), redact your request credentials from the record,
   * and sign a proxy-witness/v1 envelope carrying the response status, content-type, size and
   * SHA-256 (the full body only when echo:true and small; our archive is hash-first and never keeps
   * the body). Witnesses what the URL returned to us, not that the content is true; never the money
   * path. Auth: X-API-Key (free key at POST /signup).
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1ProxyWitnessV1ProxyWitnessPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1ProxyWitnessV1ProxyWitnessPost(
    request: Agent.V1ProxyWitnessV1ProxyWitnessPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1ProxyWitnessV1ProxyWitnessPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/proxy-witness"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1ProxyWitnessV1ProxyWitnessPostError,
      },
      options,
    );
  }

  /**
   * V1 Receipt
   *
   * @remarks
   * Evidence receipt — wrap any fact/claim/data in a timestamped, Ed25519-SIGNED record: provable
   * evidence of what an AI was told (or asserted), and when. Body: {"data": } or {"claim":"..."}.
   * Returns the receipt + a detached signature (verify against GET /.well-known/keys); anchor its
   * hash to RFC 3161 via POST /v1/anchor. Keyless. An audit-trail input for regulated AI (fintech /
   * legal / medical).
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1ReceiptV1ReceiptPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/receipt"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Snapshot
   *
   * @remarks
   * Historical world-state — what Dynamic Feed reported on a given day. ?date=YYYY-MM-DD returns
   * that day's stored snapshot (the cross-domain world_pulse digest); no date returns today's,
   * captured on read. Honest about coverage: a date before the earliest snapshot returns the
   * available range, never a fabricated past. Keyless. The auditable companion to the signed/RFC
   * 3161 timestamped awareness layer.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1SnapshotV1SnapshotGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1SnapshotV1SnapshotGet(
    request: Agent.V1SnapshotV1SnapshotGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1SnapshotV1SnapshotGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/snapshot"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1SnapshotV1SnapshotGetError,
      },
      options,
    );
  }

  /**
   * V1 Sources
   *
   * @remarks
   * The authoritative source catalog — every upstream feed Dynamic Feed serves, with its publisher,
   * official URL, licence, whether commercial use + redistribution is permitted, update cadence,
   * and the tools it backs. Keyless. Each datapoint is provenance-stamped (source, licence,
   * timestamp) so you can cite it and verify usage rights yourself.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1SourcesV1SourcesGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/sources"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Stamp
   *
   * @remarks
   * Create an independently verifiable record of submitted JSON.
   *
   * ``X-API-Key`` is optional so the existing keyless signing behaviour remains available. When a
   * key is supplied it is always validated: portal ``fx_live_`` keys use the isolated Fluxdyne
   * runtime database boundary, while legacy keys keep their existing validation and metering path.
   * A signature establishes integrity and issuer identity; it does not establish that submitted
   * content is complete, scientifically valid, or true.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1StampV1StampPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1StampV1StampPost(
    request: Agent.V1StampV1StampPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1StampV1StampPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/stamp"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1StampV1StampPostError,
      },
      options,
    );
  }

  /**
   * V1 Station Get
   *
   * @remarks
   * The public descriptor of a registered station (no owner identity). Keyless, so a verifier of a
   * station-receipt can see what the station is and what it reports.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1StationGetV1StationStationIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1StationGetV1StationStationIdGet(
    request: Agent.V1StationGetV1StationStationIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1StationGetV1StationStationIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/station/{station_id}"),
        auth: noneAuth,
        pathParams: [{ name: "station_id", value: request.stationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1StationGetV1StationStationIdGetError,
      },
      options,
    );
  }

  /**
   * V1 Station Reading
   *
   * @remarks
   * Witness one reading your station reported: get back a signed station-receipt/v1 stating, in
   * words, that the value is self-reported by your station and only WITNESSED (not measured) by
   * Dynamic Feed. Body: {"station_id": "stn_...", "quantity": "wind_kmh", "value": 12.4, "unit":
   * "km/h", "observed_at": "..."}. Keyless verification against /.well-known/keys. Auth: X-API-Key.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1StationReadingV1StationReadingPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1StationReadingV1StationReadingPost(
    request: Agent.V1StationReadingV1StationReadingPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1StationReadingV1StationReadingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/station/reading"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1StationReadingV1StationReadingPostError,
      },
      options,
    );
  }

  /**
   * V1 Station Register
   *
   * @remarks
   * WE SIGN YOUR STATION, register your own sensor so its readings can be witnessed as signed
   * receipts. Body: {"name": "...", "location": {"lat": .., "lon": ..}, "quantities": ["wind_kmh",
   * ...]}. Returns a station_id + provenance. Dynamic Feed witnesses what your station reports; it
   * does not measure the value. Your key is stored only as a non-reversible hash. Auth: X-API-Key
   * (free key at POST /signup).
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1StationRegisterV1StationRegisterPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1StationRegisterV1StationRegisterPost(
    request: Agent.V1StationRegisterV1StationRegisterPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1StationRegisterV1StationRegisterPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/station/register"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1StationRegisterV1StationRegisterPostError,
      },
      options,
    );
  }

  /**
   * V1 Stream
   *
   * @remarks
   * Server-Sent Events stream of a LIVE value. Point an EventSource at
   * /v1/stream?tool=&args=&interval=&count= and receive the tool's current value every `interval`
   * seconds as a `value` event, until `count` updates or you disconnect. Keyless. Bounded for fair
   * use: interval 5-300s, count 1-60. Example:
   * /v1/stream?tool=cite&args={"subject":"BTC"}&interval=10
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1StreamV1StreamGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1StreamV1StreamGet(
    request: Agent.V1StreamV1StreamGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1StreamV1StreamGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/stream"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "tool", value: request.tool, schema: s.optional(s.string()) },
          { name: "args", value: request.args, schema: s.optional(s.string()) },
          { name: "interval", value: request.interval, schema: s.defaulted(s.float64(), 15) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1StreamV1StreamGetError,
      },
      options,
    );
  }

  /**
   * V1 Trigger Receipt
   *
   * @remarks
   * Parametric catastrophe TRIGGER RECEIPT (DF-VERIFY/1 `trigger-receipt/v1`) — the dispute-proof
   * oracle a parametric payout settles against. Evaluates 'metric op threshold' at a location
   * against the live official reading and returns an Ed25519-signed receipt carrying the four
   * properties that end a parametric dispute: (1) a pinned + hashed methodology (nobody moves the
   * goalposts after the event); (2) the exact re-fetchable source_url + a raw_reading_hash anyone
   * can reproduce (independent verifiability, not 'trust us'); (3) a deterministic determination —
   * triggered + payout_factor + rationale, re-computable by any party; (4) the signature (timestamp
   * via POST /v1/anchor (RFC 3161) for proof of when). Neutral calculation-agent-of- record:
   * attests what the official source reported and what the pinned methodology implies — NOT
   * ground-truth physical loss. v0.1 metrics: wind_kmh | temperature_c | feels_like_c |
   * precipitation_mm (Open-Meteo). op: gt | gte | lt | lte. Verify against GET /.well-known/keys;
   * schema at /schemas/trigger-receipt-v1.json.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1TriggerReceiptV1TriggerReceiptGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1TriggerReceiptV1TriggerReceiptGet(
    request: Agent.V1TriggerReceiptV1TriggerReceiptGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1TriggerReceiptV1TriggerReceiptGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/trigger-receipt"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "metric", value: request.metric, schema: s.string() },
          { name: "threshold", value: request.threshold, schema: s.float64() },
          { name: "op", value: request.op, schema: s.defaulted(s.string(), "gte") },
          { name: "lat", value: request.lat, schema: s.optional(s.float64()) },
          { name: "lon", value: request.lon, schema: s.optional(s.float64()) },
          { name: "city", value: request.city, schema: s.optional(s.string()) },
          { name: "peril", value: request.peril, schema: s.optional(s.string()) },
          { name: "contract_ref", value: request.contractRef, schema: s.optional(s.string()) },
          { name: "methodology", value: request.methodology, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1TriggerReceiptV1TriggerReceiptGetError,
      },
      options,
    );
  }

  /**
   * V1 Vc
   *
   * @remarks
   * Security quarantine: legacy VC wrapping did not verify the inner receipt or role boundaries.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1VcV1VcPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/vc"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Watchlist Delete
   *
   * @remarks
   * Remove one item from your watchlist (?label=BTC) or clear it entirely (no label). Per-user.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1WatchlistDeleteV1WatchlistDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1WatchlistDeleteV1WatchlistDelete(
    request: Agent.V1WatchlistDeleteV1WatchlistDeleteRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1WatchlistDeleteV1WatchlistDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/watchlist"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "label", value: request.label, schema: s.optional(s.string()) }],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1WatchlistDeleteV1WatchlistDeleteError,
      },
      options,
    );
  }

  /**
   * V1 Watchlist Get
   *
   * @remarks
   * Your saved watchlist — the subjects/tools you monitor. ?pull=true runs every watched tool and
   * returns each one's CURRENT value in a single call (your whole dashboard at once). Per-user,
   * keyed by your API key (X-API-Key).
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1WatchlistGetV1WatchlistGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1WatchlistGetV1WatchlistGet(
    request: Agent.V1WatchlistGetV1WatchlistGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1WatchlistGetV1WatchlistGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/watchlist"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "pull", value: request.pull, schema: s.defaulted(s.boolean(), false) }],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1WatchlistGetV1WatchlistGetError,
      },
      options,
    );
  }

  /**
   * V1 Watchlist Post
   *
   * @remarks
   * Add to or replace your watchlist. Body {"label":"BTC","tool":"cite","args":{"subject":"BTC"}}
   * adds one item; body {"items":[...]} replaces the whole list (max 25). Each item's `tool` must
   * be a real Dynamic Feed tool. Per-user, keyed by your API key.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1WatchlistPostV1WatchlistPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1WatchlistPostV1WatchlistPost(
    request: Agent.V1WatchlistPostV1WatchlistPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1WatchlistPostV1WatchlistPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/watchlist"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1WatchlistPostV1WatchlistPostError,
      },
      options,
    );
  }

  /**
   * V1 Webhooks Create
   *
   * @remarks
   * Register a webhook that fires when a tool's value CHANGES. Body:
   * {"url":"https://you.example/hook","tool":"exploited_vulnerabilities","args":{}}. The URL is
   * validated SSRF-safe (public http/https only). Returns a one-time `secret` — every delivery is
   * HMAC-SHA256 signed with it (header X-DynamicFeed-Signature: sha256=…), so you can verify it
   * came from us. Per-user (X-API-Key).
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1WebhooksCreateV1WebhooksPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1WebhooksCreateV1WebhooksPost(
    request: Agent.V1WebhooksCreateV1WebhooksPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1WebhooksCreateV1WebhooksPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/webhooks"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1WebhooksCreateV1WebhooksPostError,
      },
      options,
    );
  }

  /**
   * V1 Webhooks Delete
   *
   * @remarks
   * Delete one of your webhook subscriptions by ?id=. Per-user.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1WebhooksDeleteV1WebhooksDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1WebhooksDeleteV1WebhooksDelete(
    request: Agent.V1WebhooksDeleteV1WebhooksDeleteRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1WebhooksDeleteV1WebhooksDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/webhooks"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "id", value: request.id, schema: s.defaulted(s.int(), 0) }],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1WebhooksDeleteV1WebhooksDeleteError,
      },
      options,
    );
  }

  /**
   * V1 Webhooks List
   *
   * @remarks
   * List your webhook subscriptions (secrets are never returned). Per-user.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1WebhooksListV1WebhooksGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1WebhooksListV1WebhooksGet(
    request: Agent.V1WebhooksListV1WebhooksGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1WebhooksListV1WebhooksGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/webhooks"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1WebhooksListV1WebhooksGetError,
      },
      options,
    );
  }

  /**
   * V1 Webhooks Test
   *
   * @remarks
   * Send a signed TEST delivery to one of your subscriptions now — confirm your endpoint receives
   * it and the HMAC validates. Body: {"id": }. Per-user.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1WebhooksTestV1WebhooksTestPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1WebhooksTestV1WebhooksTestPost(
    request: Agent.V1WebhooksTestV1WebhooksTestPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1WebhooksTestV1WebhooksTestPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/webhooks/test"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1WebhooksTestV1WebhooksTestPostError,
      },
      options,
    );
  }

  /**
   * V1 Witness Inclusion
   *
   * @remarks
   * SUCCINCT, browser-verifiable inclusion proof that witness/notary entry {idx} is in the
   * append-only log — an O(log n) RFC-6962 Merkle audit path to a tree root we Ed25519-SIGN (the
   * checkpoint). Any party folds leaf -> root in their own browser and checks the checkpoint
   * signature against /.well-known/keys, with NO trust in Dynamic Feed's word (only its published
   * key). Keyless. Recipe: leaf = sha256(0x00 ‖ content_hash_bytes); node = sha256(0x01 ‖ left ‖
   * right); fold the audit_path (each {sibling, side}) up to root_sha256; confirm it equals the
   * signed checkpoint.root_sha256, then verify the checkpoint Ed25519 signature. In-browser via
   * /verify.js verifyInclusion(). Complements GET /v1/notary/log/{idx}/proof (the O(n) chain
   * replay): the chain proves append-order, this proves succinct membership in a signed tree.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1WitnessInclusionV1WitnessIdxInclusionGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1WitnessInclusionV1WitnessIdxInclusionGet(
    request: Agent.V1WitnessInclusionV1WitnessIdxInclusionGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1WitnessInclusionV1WitnessIdxInclusionGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/witness/{idx}/inclusion"),
        auth: noneAuth,
        pathParams: [{ name: "idx", value: request.idx, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1WitnessInclusionV1WitnessIdxInclusionGetError,
      },
      options,
    );
  }

  /**
   * V1 Witness Sample
   *
   * @remarks
   * A keyless, signed SAMPLE txn-receipt/v1 — for the /witness demo. Shows exactly what POST
   * /v1/witness returns (without writing to the log or needing a key): a neutral witness of a
   * sample machine-to-machine transaction record, with the recent-Bitcoin-block NOT-BEFORE time
   * marker. Verify it in-browser via /verify.js, then flip a byte and watch verification fail.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1WitnessSampleV1WitnessSampleGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/witness/sample"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Witness
   *
   * @remarks
   * WITNESS a machine-to-machine / agent-to-agent transaction RECORD — a neutral, third-party,
   * Ed25519-signed, transparency-logged, RFC 3161 timestampable receipt that this exact record
   * EXISTED and is INTACT. Dynamic Feed sits BESIDE the transaction, NEVER in the value path: it
   * only signs + timestamps + anchors a HASH of a record you give it. It never accepts, holds,
   * routes, converts or custodies funds or anything of value. Send the record ({"payload": }) or
   * keep it private ({"content_hash": ""}). Optional: parties[] (opaque ids — NO PII), txn_ref
   * (opaque), and a BYO-key agent co-signature (provider_pubkey + provider_sig, Ed25519 over the
   * ascii-hex hash) so the receipt reads "agent attested, Dynamic Feed witnessed". Auth: a FREE key
   * (POST /signup) — no KYC. PROVES: the record existed at issued_at, is intact (tamper-EVIDENT,
   * verifiable via /verify.js against /.well-known/keys), and which agent key co-signed. Does NOT
   * prove the transaction was authorized, correct, lawful, completed, or that any value moved.
   * Profile of receipt/v1. Anchor independently via POST /v1/anchor.
   *
   * @returns Successful Response
   *
   * @throws {@link Agent.V1WitnessV1WitnessPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1WitnessV1WitnessPost(
    request: Agent.V1WitnessV1WitnessPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agent.V1WitnessV1WitnessPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/witness"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agent.V1WitnessV1WitnessPostError,
      },
      options,
    );
  }
}

export namespace Agent {
  export type PostV1ExplainRequest = {
    subject?: string;
  };

  export class PostV1ExplainError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PostV1ExplainError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1AsofV1AsofGetRequest = {
    /** tool name, e.g. current_weather (the keyless MCP tool names) */
    tool: string;
    /** ISO-8601 timestamp, e.g. 2026-06-10T14:30:00Z */
    t: string;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1AsofV1AsofGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1AsofV1AsofGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1AttestV1AttestGetRequest = {
    metric: string;
    threshold: number;
    /** @default "gte" */
    op?: string;
    lat?: number;
    lon?: number;
    city?: string;
  };

  export class V1AttestV1AttestGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1AttestV1AttestGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1BenchmarkHistoryV1BenchmarkHistoryGetRequest = {
    /** @default 90 */
    days?: number;
  };

  export const v1BenchmarkHistoryV1BenchmarkHistoryGetRequestSchema: Schema<V1BenchmarkHistoryV1BenchmarkHistoryGetRequest> =
    s.lazySchema(() =>
      s.object<V1BenchmarkHistoryV1BenchmarkHistoryGetRequest>({
        days: s.defaulted(s.int().check(s.gte(1), s.lte(365)), 90),
      }),
    );

  export class V1BenchmarkHistoryV1BenchmarkHistoryGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1BenchmarkHistoryV1BenchmarkHistoryGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1BundleV1BundlesBundleIdGetRequest = {
    bundleId: string;
  };

  export class V1BundleV1BundlesBundleIdGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1BundleV1BundlesBundleIdGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1BushfireV1BushfireGetRequest = {
    lat?: number;
    lon?: number;
    /** @default 150 */
    radiusKm?: number;
    state?: string;
    /** @default 20 */
    limit?: number;
  };

  export class V1BushfireV1BushfireGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1BushfireV1BushfireGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1CheckpointProofV1CheckpointsDayProofGetRequest = {
    day: string;
    /** @default "ots" */
    kind?: string;
  };

  export class V1CheckpointProofV1CheckpointsDayProofGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1CheckpointProofV1CheckpointsDayProofGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1CheckpointsV1CheckpointsGetRequest = {
    /** @default 30 */
    limit?: number;
  };

  export class V1CheckpointsV1CheckpointsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1CheckpointsV1CheckpointsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1DiscoverGetV1DiscoverGetRequest = {
    need?: string;
    /** @default 8 */
    limit?: number;
    /** @default 1 */
    external?: number;
  };

  export const v1DiscoverGetV1DiscoverGetRequestSchema: Schema<V1DiscoverGetV1DiscoverGetRequest> =
    s.lazySchema(() =>
      s.object<V1DiscoverGetV1DiscoverGetRequest>({
        need: s.optional(s.string().check(s.maxLength(300))),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(20)), 8),
        external: s.defaulted(s.int(), 1),
      }),
    );

  export class V1DiscoverGetV1DiscoverGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1DiscoverGetV1DiscoverGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1EvalReceiptV1EvalReceiptPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1EvalReceiptV1EvalReceiptPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1EvalReceiptV1EvalReceiptPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1EvidenceWildfireV1EvidenceWildfireGetRequest = {
    lat: number;
    lon: number;
    detectedAt?: DetectedAt;
    /** @default "the detector" */
    detector?: string;
    place?: Place;
    confidence?: Confidence;
  };

  export class V1EvidenceWildfireV1EvidenceWildfireGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1EvidenceWildfireV1EvidenceWildfireGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1ExplainV1ExplainGetRequest = {
    subject?: string;
  };

  export class V1ExplainV1ExplainGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1ExplainV1ExplainGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1ExposureReportV1ExposureReportGetRequest = {
    /** @default "wind,flood,wildfire" */
    perils?: string;
    /** @default -33.8688 */
    lat?: number;
    /** @default 151.2093 */
    lon?: number;
    place?: Place;
    organisation?: Organisation;
    useCase?: UseCase;
  };

  export class V1ExposureReportV1ExposureReportGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1ExposureReportV1ExposureReportGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1InferenceReceiptV1InferenceReceiptPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1InferenceReceiptV1InferenceReceiptPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1InferenceReceiptV1InferenceReceiptPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1IntensityV1IntensityGetRequest = {
    lat: number;
    lon: number;
    /** @default "flood" */
    peril?: string;
    metric?: string;
  };

  export class V1IntensityV1IntensityGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1IntensityV1IntensityGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1MeV1MeGetRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1MeV1MeGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1MeV1MeGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1NearbyV1NearbyGetRequest = {
    lat: number;
    lon: number;
    /** @default 500 */
    radiusKm?: number;
  };

  export class V1NearbyV1NearbyGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1NearbyV1NearbyGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1NotarizeV1NotarizePostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1NotarizeV1NotarizePostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1NotarizeV1NotarizePostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1NotaryEntryV1NotaryLogIdxGetRequest = {
    idx: number;
  };

  export class V1NotaryEntryV1NotaryLogIdxGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1NotaryEntryV1NotaryLogIdxGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1NotaryFeedRegisterV1NotaryFeedsPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1NotaryFeedRegisterV1NotaryFeedsPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1NotaryFeedRegisterV1NotaryFeedsPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1NotaryFeedsListV1NotaryFeedsGetRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1NotaryFeedsListV1NotaryFeedsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1NotaryFeedsListV1NotaryFeedsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1NotaryLogV1NotaryLogGetRequest = {
    /** @default 50 */
    limit?: number;
    before?: number;
  };

  export class V1NotaryLogV1NotaryLogGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1NotaryLogV1NotaryLogGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1NotaryProofV1NotaryLogIdxProofGetRequest = {
    idx: number;
  };

  export class V1NotaryProofV1NotaryLogIdxProofGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1NotaryProofV1NotaryLogIdxProofGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1ProToolDiscoverV1ProToolToolGetRequest = {
    tool: string;
  };

  export class V1ProToolDiscoverV1ProToolToolGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1ProToolDiscoverV1ProToolToolGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1ProToolV1ProToolToolPostRequest = {
    tool: string;
  };

  export class V1ProToolV1ProToolToolPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1ProToolV1ProToolToolPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1ProxyWitnessV1ProxyWitnessPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1ProxyWitnessV1ProxyWitnessPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1ProxyWitnessV1ProxyWitnessPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1SnapshotV1SnapshotGetRequest = {
    date?: string;
  };

  export class V1SnapshotV1SnapshotGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1SnapshotV1SnapshotGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1StampV1StampPostRequest = {
    xApiKey?: XApiKey;
  };

  export class V1StampV1StampPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1StampV1StampPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1StationGetV1StationStationIdGetRequest = {
    stationId: string;
  };

  export class V1StationGetV1StationStationIdGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1StationGetV1StationStationIdGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1StationReadingV1StationReadingPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1StationReadingV1StationReadingPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1StationReadingV1StationReadingPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1StationRegisterV1StationRegisterPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1StationRegisterV1StationRegisterPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1StationRegisterV1StationRegisterPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1StreamV1StreamGetRequest = {
    tool?: string;
    args?: string;
    /** @default 15 */
    interval?: number;
    /** @default 20 */
    count?: number;
  };

  export class V1StreamV1StreamGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1StreamV1StreamGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1TriggerReceiptV1TriggerReceiptGetRequest = {
    metric: string;
    threshold: number;
    /** @default "gte" */
    op?: string;
    lat?: number;
    lon?: number;
    city?: string;
    peril?: string;
    contractRef?: string;
    methodology?: string;
  };

  export class V1TriggerReceiptV1TriggerReceiptGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1TriggerReceiptV1TriggerReceiptGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1WatchlistDeleteV1WatchlistDeleteRequest = {
    label?: string;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1WatchlistDeleteV1WatchlistDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1WatchlistDeleteV1WatchlistDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1WatchlistGetV1WatchlistGetRequest = {
    /** @default false */
    pull?: boolean;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1WatchlistGetV1WatchlistGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1WatchlistGetV1WatchlistGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1WatchlistPostV1WatchlistPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1WatchlistPostV1WatchlistPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1WatchlistPostV1WatchlistPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1WebhooksCreateV1WebhooksPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1WebhooksCreateV1WebhooksPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1WebhooksCreateV1WebhooksPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1WebhooksDeleteV1WebhooksDeleteRequest = {
    /** @default 0 */
    id?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1WebhooksDeleteV1WebhooksDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1WebhooksDeleteV1WebhooksDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1WebhooksListV1WebhooksGetRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1WebhooksListV1WebhooksGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1WebhooksListV1WebhooksGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1WebhooksTestV1WebhooksTestPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1WebhooksTestV1WebhooksTestPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1WebhooksTestV1WebhooksTestPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1WitnessInclusionV1WitnessIdxInclusionGetRequest = {
    idx: number;
  };

  export class V1WitnessInclusionV1WitnessIdxInclusionGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1WitnessInclusionV1WitnessIdxInclusionGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1WitnessV1WitnessPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1WitnessV1WitnessPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1WitnessV1WitnessPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
