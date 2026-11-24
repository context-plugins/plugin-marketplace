from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.post_v1_explain_error import PostV1ExplainErrorBody, post_v1_explain_error_mapper
from ..errors.v1_asof_v1_asof_get_error import V1AsofV1AsofGetErrorBody, v1_asof_v1_asof_get_error_mapper
from ..errors.v1_attest_v1_attest_get_error import V1AttestV1AttestGetErrorBody, v1_attest_v1_attest_get_error_mapper
from ..errors.v1_benchmark_history_v1_benchmark_history_get_error import (
    V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody,
    v1_benchmark_history_v1_benchmark_history_get_error_mapper,
)
from ..errors.v1_bundle_v1_bundles_bundle_id_get_error import (
    V1BundleV1BundlesBundleIdGetErrorBody,
    v1_bundle_v1_bundles_bundle_id_get_error_mapper,
)
from ..errors.v1_bushfire_v1_bushfire_get_error import (
    V1BushfireV1BushfireGetErrorBody,
    v1_bushfire_v1_bushfire_get_error_mapper,
)
from ..errors.v1_checkpoint_proof_v1_checkpoints_day_proof_get_error import (
    V1CheckpointProofV1CheckpointsDayProofGetErrorBody,
    v1_checkpoint_proof_v1_checkpoints_day_proof_get_error_mapper,
)
from ..errors.v1_checkpoints_v1_checkpoints_get_error import (
    V1CheckpointsV1CheckpointsGetErrorBody,
    v1_checkpoints_v1_checkpoints_get_error_mapper,
)
from ..errors.v1_discover_get_v1_discover_get_error import (
    V1DiscoverGetV1DiscoverGetErrorBody,
    v1_discover_get_v1_discover_get_error_mapper,
)
from ..errors.v1_eval_receipt_v1_eval_receipt_post_error import (
    V1EvalReceiptV1EvalReceiptPostErrorBody,
    v1_eval_receipt_v1_eval_receipt_post_error_mapper,
)
from ..errors.v1_evidence_wildfire_v1_evidence_wildfire_get_error import (
    V1EvidenceWildfireV1EvidenceWildfireGetErrorBody,
    v1_evidence_wildfire_v1_evidence_wildfire_get_error_mapper,
)
from ..errors.v1_explain_v1_explain_get_error import (
    V1ExplainV1ExplainGetErrorBody,
    v1_explain_v1_explain_get_error_mapper,
)
from ..errors.v1_exposure_report_v1_exposure_report_get_error import (
    V1ExposureReportV1ExposureReportGetErrorBody,
    v1_exposure_report_v1_exposure_report_get_error_mapper,
)
from ..errors.v1_inference_receipt_v1_inference_receipt_post_error import (
    V1InferenceReceiptV1InferenceReceiptPostErrorBody,
    v1_inference_receipt_v1_inference_receipt_post_error_mapper,
)
from ..errors.v1_intensity_v1_intensity_get_error import (
    V1IntensityV1IntensityGetErrorBody,
    v1_intensity_v1_intensity_get_error_mapper,
)
from ..errors.v1_me_v1_me_get_error import V1MeV1MeGetErrorBody, v1_me_v1_me_get_error_mapper
from ..errors.v1_nearby_v1_nearby_get_error import V1NearbyV1NearbyGetErrorBody, v1_nearby_v1_nearby_get_error_mapper
from ..errors.v1_notarize_v1_notarize_post_error import (
    V1NotarizeV1NotarizePostErrorBody,
    v1_notarize_v1_notarize_post_error_mapper,
)
from ..errors.v1_notary_entry_v1_notary_log_idx_get_error import (
    V1NotaryEntryV1NotaryLogIdxGetErrorBody,
    v1_notary_entry_v1_notary_log_idx_get_error_mapper,
)
from ..errors.v1_notary_feed_register_v1_notary_feeds_post_error import (
    V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody,
    v1_notary_feed_register_v1_notary_feeds_post_error_mapper,
)
from ..errors.v1_notary_feeds_list_v1_notary_feeds_get_error import (
    V1NotaryFeedsListV1NotaryFeedsGetErrorBody,
    v1_notary_feeds_list_v1_notary_feeds_get_error_mapper,
)
from ..errors.v1_notary_log_v1_notary_log_get_error import (
    V1NotaryLogV1NotaryLogGetErrorBody,
    v1_notary_log_v1_notary_log_get_error_mapper,
)
from ..errors.v1_notary_proof_v1_notary_log_idx_proof_get_error import (
    V1NotaryProofV1NotaryLogIdxProofGetErrorBody,
    v1_notary_proof_v1_notary_log_idx_proof_get_error_mapper,
)
from ..errors.v1_pro_tool_discover_v1_pro_tool_tool_get_error import (
    V1ProToolDiscoverV1ProToolToolGetErrorBody,
    v1_pro_tool_discover_v1_pro_tool_tool_get_error_mapper,
)
from ..errors.v1_pro_tool_v1_pro_tool_tool_post_error import (
    V1ProToolV1ProToolToolPostErrorBody,
    v1_pro_tool_v1_pro_tool_tool_post_error_mapper,
)
from ..errors.v1_proxy_witness_v1_proxy_witness_post_error import (
    V1ProxyWitnessV1ProxyWitnessPostErrorBody,
    v1_proxy_witness_v1_proxy_witness_post_error_mapper,
)
from ..errors.v1_snapshot_v1_snapshot_get_error import (
    V1SnapshotV1SnapshotGetErrorBody,
    v1_snapshot_v1_snapshot_get_error_mapper,
)
from ..errors.v1_stamp_v1_stamp_post_error import V1StampV1StampPostErrorBody, v1_stamp_v1_stamp_post_error_mapper
from ..errors.v1_station_get_v1_station_station_id_get_error import (
    V1StationGetV1StationStationIdGetErrorBody,
    v1_station_get_v1_station_station_id_get_error_mapper,
)
from ..errors.v1_station_reading_v1_station_reading_post_error import (
    V1StationReadingV1StationReadingPostErrorBody,
    v1_station_reading_v1_station_reading_post_error_mapper,
)
from ..errors.v1_station_register_v1_station_register_post_error import (
    V1StationRegisterV1StationRegisterPostErrorBody,
    v1_station_register_v1_station_register_post_error_mapper,
)
from ..errors.v1_stream_v1_stream_get_error import V1StreamV1StreamGetErrorBody, v1_stream_v1_stream_get_error_mapper
from ..errors.v1_trigger_receipt_v1_trigger_receipt_get_error import (
    V1TriggerReceiptV1TriggerReceiptGetErrorBody,
    v1_trigger_receipt_v1_trigger_receipt_get_error_mapper,
)
from ..errors.v1_watchlist_delete_v1_watchlist_delete_error import (
    V1WatchlistDeleteV1WatchlistDeleteErrorBody,
    v1_watchlist_delete_v1_watchlist_delete_error_mapper,
)
from ..errors.v1_watchlist_get_v1_watchlist_get_error import (
    V1WatchlistGetV1WatchlistGetErrorBody,
    v1_watchlist_get_v1_watchlist_get_error_mapper,
)
from ..errors.v1_watchlist_post_v1_watchlist_post_error import (
    V1WatchlistPostV1WatchlistPostErrorBody,
    v1_watchlist_post_v1_watchlist_post_error_mapper,
)
from ..errors.v1_webhooks_create_v1_webhooks_post_error import (
    V1WebhooksCreateV1WebhooksPostErrorBody,
    v1_webhooks_create_v1_webhooks_post_error_mapper,
)
from ..errors.v1_webhooks_delete_v1_webhooks_delete_error import (
    V1WebhooksDeleteV1WebhooksDeleteErrorBody,
    v1_webhooks_delete_v1_webhooks_delete_error_mapper,
)
from ..errors.v1_webhooks_list_v1_webhooks_get_error import (
    V1WebhooksListV1WebhooksGetErrorBody,
    v1_webhooks_list_v1_webhooks_get_error_mapper,
)
from ..errors.v1_webhooks_test_v1_webhooks_test_post_error import (
    V1WebhooksTestV1WebhooksTestPostErrorBody,
    v1_webhooks_test_v1_webhooks_test_post_error_mapper,
)
from ..errors.v1_witness_inclusion_v1_witness_idx_inclusion_get_error import (
    V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody,
    v1_witness_inclusion_v1_witness_idx_inclusion_get_error_mapper,
)
from ..errors.v1_witness_v1_witness_post_error import (
    V1WitnessV1WitnessPostErrorBody,
    v1_witness_v1_witness_post_error_mapper,
)
from ..server.server import Server


class Agent:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AgentWithRawResponse(client, server)

    def post_v1_explain(self, *, subject: str | None = "", request_options: RequestOptionsOrDict | None = None) -> Any:
        """Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."} (POST) — a
        tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s), licence, official URL,
        update cadence and the full custody trail (origin -> ingest -> normalize -> serve, plus sign/anchor for
        awareness), so you can trace and verify where a number came from. Keyless.

        Args:
            subject: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.post_v1_explain(subject=subject, request_options=request_options))

    def schemas_index_schemas_index_json_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """The Dynamic Feed receipt-schema family, self-describing (DF-VERIFY/1). Scans the schema directory at request
        time so it never drifts: every profile's $id, title and active mint endpoint when one exists.
        Deprecated/quarantined schemas remain visible as history, not as executable capabilities. Schema conformance and
        signature mathematics are separate from lifecycle acceptance.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.schemas_index_schemas_index_json_get(request_options=request_options))

    def v1_agent_receipt_v1_agent_receipt_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Agent receipt. A signed, re-checkable record of what an AI agent acted on and what it decided. The
        operational-integrity primitive for the agent economy: prove, after the fact, the inputs behind an agent's
        action. Body: {"agent": "...", "action": "...", "inputs": }, plus optional "model", "decision", "context".
        Returns an agent-receipt/v1 with a detached Ed25519 signature (verify against GET /.well-known/keys: drop the
        ``signature`` field, canonicalize json-sorted-compact). Anchor the hash via RFC 3161 via POST /v1/anchor.
        Keyless. Advisory evidence and a neutral witness: it proves what the agent was given and did, never that the
        decision was correct, and it never moves anything. Spec: https://dynamicfeed.ai/standard

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_agent_receipt_v1_agent_receipt_post(request_options=request_options))

    def v1_asof_v1_asof_get(
        self,
        tool: str,
        t: str,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """TIME-MACHINE REPLAY — what did the data say at decision time? Returns the archived observation for ``tool``
        nearest at-or-before time ``t``, replayed VERBATIM from Dynamic Feed's append-only archive (capturing every
        served datapoint since 2026-06-07) — the value as served then, never a re-fetch or reconstruction. The response
        carries honest metadata (``archived_at``, ``distance_seconds`` from your requested instant, the exact archive
        object, where coverage begins) and is Ed25519-signed (verify against GET /.well-known/keys) — built for agent
        backtesting, audit trails and "what did we know when we decided" disputes. Honest about coverage: a time the
        archive didn't capture returns a clear miss with the nearest captured day, never a fabricated past. Paid plans
        (Pro and up); auth via the X-API-Key header. Upgrade: https://dynamicfeed.ai/dashboard

        Args:
            tool: tool name, e.g. current_weather (the keyless MCP tool names)
            t: ISO-8601 timestamp, e.g. 2026-06-10T14:30:00Z
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_asof_v1_asof_get(
                tool,
                t,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_attest_v1_attest_get(
        self,
        metric: str,
        threshold: float,
        *,
        op: str | None = "gte",
        lat: float | None = None,
        lon: float | None = None,
        city: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Signed parametric-trigger attestation — evaluate 'metric op threshold' at a location against the live
        measurement and return a tamper-evident, Ed25519-signed MET / NOT-MET record. The dispute-proof oracle a
        parametric-insurance payout can settle against. metric: wind_kmh | temperature_c | feels_like_c |
        precipitation_mm. op: gt | gte | lt | lte. Verify against GET /.well-known/keys; timestamp via POST /v1/anchor
        (RFC 3161) for independent proof of when.

        Args:
            metric: Value sent with the request.
            threshold: Value sent with the request.
            op: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            city: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_attest_v1_attest_get(
                metric, threshold, op=op, lat=lat, lon=lon, city=city, request_options=request_options
            ),
        )

    def v1_batch_v1_batch_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Run up to 20 read-only data-tool calls in ONE request — cuts agent round-trips. Keyless. Body:
        {"calls":[{"tool":"current_weather","args":{"city":"London"}}, {"tool":"earthquakes","args":{}}]}. Returns
        {"results":[{"tool","ok","data"|"error"}, ...]} in the same order. Tool names are the keyless MCP tools; POST
        with no ``calls`` returns the available list. Each call has its own 20s deadline, so a slow upstream degrades
        that one item rather than blocking the batch.

        Add "facts": true to the body to get each result as a canonical, reliability-graded fact instead of raw data:
        {"tool","ok","fact":{value, provenance, verification, reliability{confidence,basis,sources,
        verified,vantage,conflict}}}. The whole response is Ed25519-signed (verify against /.well-known/keys), so this
        is verifiable, reliability-graded, multi-tool data in one round-trip. Default shape is unchanged.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_batch_v1_batch_post(request_options=request_options))

    def v1_benchmark_history_v1_benchmark_history_get(
        self, *, days: int | None = 90, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """DRIFT OVER TIME — daily snapshots of the live-facts benchmark (GET /v1/benchmark), oldest first. Each
        snapshot is the items array exactly as measured that day, so diffing consecutive snapshots shows how fast
        reality moves away from any fixed training cutoff: rates shift, releases ship, CVEs land. History starts at
        first_snapshot_at and grows one snapshot per day. Human-readable charts at /benchmark/history. Ed25519-signed.
        Keyless.

        Args:
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_benchmark_history_v1_benchmark_history_get(
                days=days, request_options=request_options
            ),
        )

    def v1_benchmark_v1_benchmark_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """The LIVE-FACTS BENCHMARK — a continuously-refreshed eval of facts that move after a model's training cutoff.
        Ask a model these questions WITHOUT tools and grade against the answers measured from authoritative sources at
        call time: every frozen model fails; a grounded agent passes. Each item carries its grading rule, source and
        measured_at; the whole set is Ed25519-signed so a published score is verifiable evidence, not a claim.
        Regenerate per run — answers are time-sensitive by design. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_benchmark_v1_benchmark_get(request_options=request_options))

    def v1_bundle_v1_bundles_bundle_id_get(
        self, bundle_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """One curated tool bundle by id (e.g. devsecops, weather-climate, finance-markets).

        Args:
            bundle_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_bundle_v1_bundles_bundle_id_get(bundle_id, request_options=request_options)
        )

    def v1_bundles_v1_bundles_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Curated tool BUNDLES per domain — pick the right tools for your agent's use-case fast (instead of sifting all
        tools). Keyless: call any tool via POST /v1/batch; pay-per-call via /v1/pro/*.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_bundles_v1_bundles_get(request_options=request_options))

    def v1_bushfire_v1_bushfire_get(
        self,
        *,
        lat: float | None = None,
        lon: float | None = None,
        radius_km: float | None = 150.0,
        state: str | None = "",
        limit: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Signed Australian bushfire/fire hotspots (last ~3 days) from Geoscience Australia / Digital Earth Australia
        Hotspots — keyless, CC BY 4.0. lat & lon (+ radius_km) for hotspots near a point, a state code
        (NSW/QLD/VIC/SA/WA/TAS/NT/ACT), or neither for recent Australia-wide. Ed25519-signed; verify against GET
        /.well-known/keys. A hotspot is a satellite thermal anomaly — not every one is a confirmed bushfire.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            radius_km: Value sent with the request.
            state: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_bushfire_v1_bushfire_get(
                lat=lat, lon=lon, radius_km=radius_km, state=state, limit=limit, request_options=request_options
            ),
        )

    def v1_checkpoint_proof_v1_checkpoints_day_proof_get(
        self, day: str, *, kind: str | None = "ots", request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """The raw witness proof for one day's archive checkpoint. kind=ots (default) returns the DLT-timestamp .ots
        bytes (verify: ots verify -d checkpoint-.ots); kind=rfc3161 returns the RFC 3161 timestamp token DER from the
        independent TSA (verify: openssl ts -reply -in checkpoint-.tsr -text, then openssl ts -verify -digest -sha256
        -in checkpoint-.tsr). Offline runner for both witnesses: scripts/verify_checkpoint.py. Keyless.

        Args:
            day: Value sent with the request.
            kind: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_checkpoint_proof_v1_checkpoints_day_proof_get(
                day, kind=kind, request_options=request_options
            ),
        )

    def v1_checkpoints_v1_checkpoints_get(
        self, *, limit: int | None = 30, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Daily ARCHIVE CHECKPOINTS, newest first — the append-only claim made independently checkable. Each entry
        carries the signed archive-day/v1 document: a SHA-256 digest of that day's full archive listing, per-feed object
        counts, the previous day's digest (the chain), and the anchor status of a DLT-timestamp proof committing the
        digest to a public distributed ledger (RFC 3161 on fallback). Keyless.

        Args:
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_checkpoints_v1_checkpoints_get(limit=limit, request_options=request_options)
        )

    def v1_discover_get_v1_discover_get(
        self,
        *,
        need: str | None = "",
        limit: int | None = 8,
        external: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """CAPABILITY DISCOVERY — ask in plain words what you need ("live rainfall in Brisbane", "sanctions screening",
        "satellite positions") and get a ranked, Ed25519-signed list of candidate capabilities: Dynamic Feed's own tools
        with MEASURED 24h uptime/latency and a keyless call recipe, plus matching external MCP servers from the official
        registry index, honestly marked registry-reported and unmeasured. Advisory discovery with an explicit vantage
        per candidate, not an endorsement. Keyless.

        Args:
            need: Value sent with the request.
            limit: Value sent with the request.
            external: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_discover_get_v1_discover_get(
                need=need, limit=limit, external=external, request_options=request_options
            ),
        )

    def v1_discover_post_v1_discover_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """POST twin of GET /v1/discover: {"need": "...", "limit": 8, "external": true}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_discover_post_v1_discover_post(request_options=request_options))

    def v1_drift_v1_drift_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Drift detection — audit an AI's stated facts against live ground-truth, graded by severity. Keyless. Body:
        {"claims":["The latest Python is 3.11","Node.js is on 18"]} or {"text":""}. Returns {checked, drifted_count,
        overall, results:[{claim, status, drifted, severity, correction, source}]}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_drift_v1_drift_post(request_options=request_options))

    def v1_eval_receipt_sample_v1_eval_receipt_sample_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """A keyless, signed SAMPLE eval-receipt/v1 — a 'Verified Eval' run against a sealed, committed test set (the
        set stays private; only its commitment is signed). Verify it in-browser via /verify.js, then flip a byte and
        watch verification fail. Advisory evidence only — DF witnesses the committed run, it does not re-run or certify
        the benchmark.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.v1_eval_receipt_sample_v1_eval_receipt_sample_get(request_options=request_options)
        )

    def v1_eval_receipt_v1_eval_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """WITNESS an AI EVALUATION run — the neutral 'Verified Eval' stamp for the contamination-proof- benchmark era.
        The lab commits its test set as a salted sha256 BEFORE the run (``set_commitment``), so the set stays PRIVATE
        while the run becomes un-retunable after the fact — solving the evaluator's dilemma of having to expose a
        private set to be trusted. Ed25519-signed, transparency-logged, RFC 3161 timestampable. Body: {"eval_name": "",
        "model_id": "", "metric": "pass@1", "score": 0.58, "set_commitment": ""} plus optional n, run_sha256 (hash of
        the full transcript), harness, and a BYO-key co-signature. Auth: a FREE key (POST /signup). ADVISORY EVIDENCE
        ONLY — Dynamic Feed does NOT re-run or verify the score, and does NOT certify the benchmark is
        fair/representative/contamination-free; it witnesses the COMMITTED run so no party can retune it retroactively.
        Profile of receipt/v1. Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_eval_receipt_v1_eval_receipt_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_evidence_wildfire_v1_evidence_wildfire_get(
        self,
        lat: float,
        lon: float,
        *,
        detected_at: str | None = None,
        detector: str | None = "the detector",
        place: str | None = None,
        confidence: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Chain-of-custody EVIDENCE record for a wildfire detection. Wraps a SELF-REPORTED detection (detector,
        lat/lon, time) with Dynamic Feed's INDEPENDENT context captured at that location the moment it's requested —
        fire-weather, near-term forecast, air quality (smoke), and tracked EONET wildfire events — each datapoint
        carrying its source, licence and age. The whole record is Ed25519-signed so any party can verify it OFFLINE
        against /.well-known/keys, WITHOUT trusting the detector or Dynamic Feed. Advisory evidence + audit layer: it
        does NOT make, certify, or sit in the safety-critical path of the detection — it makes the surrounding context
        provable later (an insurer claim, a liability review, an SLA). Keyless. Anchor via RFC 3161 via POST /v1/anchor
        for proof-of-when independent of us.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            detected_at: Value sent with the request.
            detector: Value sent with the request.
            place: Value sent with the request.
            confidence: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_evidence_wildfire_v1_evidence_wildfire_get(
                lat,
                lon,
                detected_at=detected_at,
                detector=detector,
                place=place,
                confidence=confidence,
                request_options=request_options,
            ),
        )

    def v1_explain_v1_explain_get(
        self, *, subject: str | None = "", request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."} (POST) — a
        tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s), licence, official URL,
        update cadence and the full custody trail (origin -> ingest -> normalize -> serve, plus sign/anchor for
        awareness), so you can trace and verify where a number came from. Keyless.

        Args:
            subject: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_explain_v1_explain_get(subject=subject, request_options=request_options)
        )

    def v1_exposure_report_v1_exposure_report_get(
        self,
        *,
        perils: str | None = "wind,flood,wildfire",
        lat: float | None = -33.8688,
        lon: float | None = 151.2093,
        place: str | None = None,
        organisation: str | None = None,
        use_case: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Automated, signed EXPOSURE REPORT. Maps the perils a decision depends on to the external readings that decide
        them, flags where those readings are unverifiable today, and attaches a LIVE signed sample observation for each,
        so an organisation can see where its decisions rely on data it cannot independently check. Fully automated, no
        human in the loop. Ed25519-signed; verify offline at /.well-known/keys. Advisory evidence, not a certification
        or legal/financial advice.

        Args:
            perils: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            place: Value sent with the request.
            organisation: Value sent with the request.
            use_case: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_exposure_report_v1_exposure_report_get(
                perils=perils,
                lat=lat,
                lon=lon,
                place=place,
                organisation=organisation,
                use_case=use_case,
                request_options=request_options,
            ),
        )

    def v1_guard_v1_guard_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Pre-answer guard — the anti-hallucination middleware. POST the draft answer your AI is about to send; get
        back a verdict of "pass" or "revise" plus the exact corrections, so you can fix it BEFORE the user sees it.
        Keyless. Wrap it around any LLM response pipeline. Body: {"answer":""} or {"claims":["...","..."]}. Returns
        {verdict:"pass"|"revise", checked, issues:[{claim, subject, severity, correction, source}], confirmed,
        unverifiable, guidance}. Only claims that CONTRADICT live data trigger "revise"; opinions and facts no live feed
        can cover pass through untouched. Verifies prices, software versions, market open/closed and service up/down
        against Dynamic Feed's live ground-truth.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_guard_v1_guard_post(request_options=request_options))

    def v1_index_v1_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """The Dynamic Feed agent & robot API at a glance — every /v1 capability, what it does, and a copy-paste
        example. The fastest way for a developer (or an agent) to discover the whole surface. Keyless unless noted.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_index_v1_get(request_options=request_options))

    def v1_inference_receipt_sample_v1_inference_receipt_sample_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """A keyless, signed SAMPLE inference-receipt/v1 — for the /receipts demo. Shows what POST /v1/inference-receipt
        returns: a neutral witness of a sample inference where the provider served a DIFFERENT model than requested and
        set its own fallback flag (illustrative, vendor-neutral). Verify it in-browser via /verify.js, then flip a byte
        and watch verification fail.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.v1_inference_receipt_sample_v1_inference_receipt_sample_get(
                request_options=request_options
            ),
        )

    def v1_inference_receipt_v1_inference_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """WITNESS a single AI model INFERENCE — a neutral, Ed25519-signed, transparency-logged, RFC 3161 timestampable
        receipt that this inference record EXISTED and is INTACT. Privacy by CONSTRUCTION: the caller hashes the prompt
        + response LOCALLY and sends ONLY fixed-length sha256 hashes + non-PII metadata. Body: {"claimed_model": "",
        "prompt_sha256": "", "response_sha256": ""} plus optional requested_model, latency_ms, token_count,
        fallback_flag (the provider's OWN flag), provider, region, and a BYO-key agent co-signature (provider_pubkey +
        provider_sig). Auth: a FREE key (POST /signup) — no KYC. PROVES: the record existed at issued_at and is intact
        (tamper-EVIDENT, verifiable via /verify.js against /.well-known/keys). Does NOT independently verify which model
        actually ran, does NOT adjudicate that a 'downgrade' occurred, does NOT score quality — model_match is a literal
        string comparison and the holder draws any inference. Profile of receipt/v1. Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_inference_receipt_v1_inference_receipt_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_intensity_v1_intensity_get(
        self,
        lat: float,
        lon: float,
        *,
        peril: str | None = "flood",
        metric: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """INTENSITY-AT-LOCATION (DF-VERIFY/1 ``intensity/v1``) — the parameter value at an exact coordinate, signed and
        reproducible: the settlement-grade reading a parametric trigger evaluates against. Not 'an event happened' but
        'the value at this lat/lon, from the region's authoritative source'. v1 peril: flood — routed by coordinate to
        the nearest official river gauge: AU -> BoM Water Data Online (water-course level m; CC BY 4.0), US -> USGS NWIS
        (gage height ft / discharge ft3/s). Point-resolved, no interpolation. drought, wildfire and earthquake
        (ShakeMap) intensity are rolling in. Verify the Ed25519 signature against GET /.well-known/keys; re-fetch
        source_url to reproduce raw_reading_hash (see hash_method). SCOPE: attests the reading at the cited official
        gauge — NOT a basin-wide determination or physical loss.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            peril: Value sent with the request.
            metric: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_intensity_v1_intensity_get(
                lat, lon, peril=peril, metric=metric, request_options=request_options
            ),
        )

    def v1_me_v1_me_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Your key at a glance — plan, calls used today, daily quota and remaining. The per-user usage view (the
        keyless MCP endpoint is unmetered fair-use).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_me_v1_me_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_nearby_v1_nearby_get(
        self,
        lat: float,
        lon: float,
        *,
        radius_km: float | None = 500.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Signed situational scan: live hazards near a point — earthquakes (USGS), natural events (NASA EONET:
        wildfires/volcanoes/floods/storms), major disasters (GDACS) and, in Australia, live satellite bushfire hotspots
        (Geoscience Australia) within radius_km, nearest first. Ed25519-signed (verify against GET /.well-known/keys).
        The 'what's around me' ping for any machine that moves — robots, drones, in-car AI assistants, fleet telematics
        — complements the go/caution/no-go verdict from /v1/awareness.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            radius_km: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_nearby_v1_nearby_get(
                lat, lon, radius_km=radius_km, request_options=request_options
            ),
        )

    def v1_notarize_v1_notarize_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """NOTARY for any data feed — a neutral third party witnesses YOUR data and returns a timestamped,
        Ed25519-signed notarization: proof these exact bytes existed at this moment, independently verifiable forever.
        Two modes — send the data ({"payload": }), or keep it private and send only its hash ({"payload_sha256": ""}).
        Optional "subject" names the publisher; "echo": false omits the payload from the record (hash retained). This
        attests that Dynamic Feed WITNESSED these bytes (or this hash) at witnessed_at — not that the content is true.
        Anchor via POST /v1/anchor for proof-of-when independent of us. Auth: X-API-Key (free key at POST /signup).
        'Let's Encrypt for data feeds' — your feed, signed, without building a signing stack.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_notarize_v1_notarize_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_notary_entry_v1_notary_log_idx_get(
        self, idx: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """One transparency-log entry by index, Ed25519-signed, with the recipe to recompute its entry_hash and verify
        chain linkage. Keyless.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_notary_entry_v1_notary_log_idx_get(idx, request_options=request_options)
        )

    def v1_notary_feed_register_v1_notary_feeds_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """CONTINUOUS NOTARIZATION — register a feed URL and Dynamic Feed fetches it on your interval, notarizing every
        CHANGE into the public transparency log automatically: a standing, tamper-evident history of what your feed
        published, when. Body: {"url": "https://...", "subject": "Your Co", "interval_minutes": 180 (min 60)}. Beta: 3
        active feeds per key. The first fetch happens immediately and its notarization is returned.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_notary_feed_register_v1_notary_feeds_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_notary_feeds_list_v1_notary_feeds_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Your registered continuous-notarization feeds (same X-API-Key): status, last hash, last log index, next-run
        cadence.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_notary_feeds_list_v1_notary_feeds_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_notary_head_v1_notary_log_head_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """The transparency-log HEAD — count + chain head hash, Ed25519-signed. The anchorable artifact: altering ANY
        past notarization breaks every entry_hash after it and contradicts the anchored head. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_notary_head_v1_notary_log_head_get(request_options=request_options))

    def v1_notary_log_v1_notary_log_get(
        self, *, limit: int | None = 50, before: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """The PUBLIC TRANSPARENCY LOG of all notarizations — append-only, hash-chained (CT-style), newest first.
        Payload hashes only (never payloads): private by construction, tamper-evident by recipe. Page back with
        ?before=. Keyless.

        Args:
            limit: Value sent with the request.
            before: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_notary_log_v1_notary_log_get(
                limit=limit, before=before, request_options=request_options
            ),
        )

    def v1_notary_proof_v1_notary_log_idx_proof_get(
        self, idx: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """INCLUSION PROOF for a log entry: the consecutive chain of entries from this index to the most recently
        ANCHORED head (or the current head if no anchor covers it yet), plus the anchor record. Recompute each
        entry_hash and you have proven this entry is in the history the Bitcoin anchor commits to — no trust in Dynamic
        Feed required. Keyless.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_notary_proof_v1_notary_log_idx_proof_get(idx, request_options=request_options)
        )

    def v1_pro_asof_v1_pro_asof_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """PREMIUM keyless AS-OF REPLAY — pay-per-call (x402, USDC on Base) signed time-machine over Dynamic Feed's
        append-only archive. Body {"tool":"current_weather","t":"2026-06-10T14:30:00Z"} (or ?tool=&t=) -> the archived
        observation for ``tool`` nearest at-or-before ``t``, replayed VERBATIM, Ed25519-signed (verify against GET
        /.well-known/keys). The keyless paid channel to the SAME engine as the key-gated GET /v1/asof — for agent
        backtesting, audit trails and 'what did we know when we decided' disputes. No signup, no human; discoverable via
        the x402 bazaar. Honest about coverage: a time the archive didn't capture returns a clear miss, never a
        fabricated past.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_pro_asof_v1_pro_asof_post(request_options=request_options))

    def v1_pro_batch_v1_pro_batch_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """PREMIUM, pay-per-call data batch — the commercial tier of /v1/batch, paid AGENT-NATIVELY via x402 (HTTP 402):
        an agent gets a price, pays from its wallet, re-calls with the X-PAYMENT header, and is served — no human, no
        signup. Up to 100 signed tool calls per request (free /v1/batch is fair-use, capped at 20). Dynamic Feed charges
        for its OWN service; a third-party facilitator settles the payment — DF never custodies funds
        (witness-not-money). Body: {"calls":[{"tool":...,"args":{...}}, ...]}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_pro_batch_v1_pro_batch_post(request_options=request_options))

    def v1_pro_catalog_v1_pro_catalog_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Machine-readable MENU of Dynamic Feed's x402 pay-per-call SKUs (USDC on Base) — the 'price list' an agent or
        x402 facilitator shops in one call: every paid endpoint, its price (live from X402_PRICE_ATOMIC), input/output
        schema, the recipient wallet (when connected), and the facilitator. Boundary: DF is the merchant; the
        facilitator settles — DF never custodies funds.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_pro_catalog_v1_pro_catalog_get(request_options=request_options))

    def v1_pro_tool_discover_v1_pro_tool_tool_get(
        self, tool: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Discovery for the paid single-call endpoint. A GET returns the x402 402 challenge — so an agent that probes
        with GET (instead of a 'Method Not Allowed' dead end) still learns the price, the asset, and that it must POST
        with an X-PAYMENT header + {"args":{...}} body. NO payment is taken on GET; settlement only ever happens on
        POST. Pure discovery, no money path.

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_pro_tool_discover_v1_pro_tool_tool_get(tool, request_options=request_options)
        )

    def v1_pro_tool_v1_pro_tool_tool_post(
        self, tool: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """PREMIUM single signed tool call — pay-per-call (x402, USDC on Base) for ANY one of Dynamic Feed's live tools.
        An agent pays once, gets one Ed25519-signed datapoint. No signup, no human. Body: {"args":{...}}. Discoverable
        via the x402 bazaar. (Free alternative: keyless /v1/batch, fair-use.)

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.v1_pro_tool_v1_pro_tool_tool_post(tool, request_options=request_options))

    def v1_proxy_witness_v1_proxy_witness_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """PROXY WITNESS, route any third-party API call through Dynamic Feed and get a signed, archived receipt of
        exactly what that URL returned to us at this moment. Body: {"url": "https://...", "method": "GET"|"POST"|...,
        "headers": {...}, "body": "...", "echo": false, "subject": "..."}. We fetch server-side under an SSRF guard
        (only public http/https targets; private and reserved addresses blocked; redirects not followed), redact your
        request credentials from the record, and sign a proxy-witness/v1 envelope carrying the response status,
        content-type, size and SHA-256 (the full body only when echo:true and small; our archive is hash-first and never
        keeps the body). Witnesses what the URL returned to us, not that the content is true; never the money path.
        Auth: X-API-Key (free key at POST /signup).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_proxy_witness_v1_proxy_witness_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_receipt_v1_receipt_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Evidence receipt — wrap any fact/claim/data in a timestamped, Ed25519-SIGNED record: provable evidence of
        what an AI was told (or asserted), and when. Body: {"data": } or {"claim":"..."}. Returns the receipt + a
        detached signature (verify against GET /.well-known/keys); anchor its hash to RFC 3161 via POST /v1/anchor.
        Keyless. An audit-trail input for regulated AI (fintech / legal / medical).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_receipt_v1_receipt_post(request_options=request_options))

    def v1_snapshot_v1_snapshot_get(
        self, *, date: str | None = "", request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Historical world-state — what Dynamic Feed reported on a given day. ?date=YYYY-MM-DD returns that day's
        stored snapshot (the cross-domain world_pulse digest); no date returns today's, captured on read. Honest about
        coverage: a date before the earliest snapshot returns the available range, never a fabricated past. Keyless. The
        auditable companion to the signed/RFC 3161 timestamped awareness layer.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.v1_snapshot_v1_snapshot_get(date=date, request_options=request_options))

    def v1_sources_v1_sources_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """The authoritative source catalog — every upstream feed Dynamic Feed serves, with its publisher, official URL,
        licence, whether commercial use + redistribution is permitted, update cadence, and the tools it backs. Keyless.
        Each datapoint is provenance-stamped (source, licence, timestamp) so you can cite it and verify usage rights
        yourself.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_sources_v1_sources_get(request_options=request_options))

    def v1_stamp_v1_stamp_post(
        self, *, x_api_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Create an independently verifiable record of submitted JSON.

        ``X-API-Key`` is optional so the existing keyless signing behaviour remains available. When a key is supplied it
        is always validated: portal ``fx_live_`` keys use the isolated Fluxdyne runtime database boundary, while legacy
        keys keep their existing validation and metering path. A signature establishes integrity and issuer identity; it
        does not establish that submitted content is complete, scientifically valid, or true.

        Args:
            x_api_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_stamp_v1_stamp_post(x_api_key=x_api_key, request_options=request_options)
        )

    def v1_station_get_v1_station_station_id_get(
        self, station_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """The public descriptor of a registered station (no owner identity). Keyless, so a verifier of a
        station-receipt can see what the station is and what it reports.

        Args:
            station_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_station_get_v1_station_station_id_get(
                station_id, request_options=request_options
            ),
        )

    def v1_station_reading_v1_station_reading_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Witness one reading your station reported: get back a signed station-receipt/v1 stating, in words, that the
        value is self-reported by your station and only WITNESSED (not measured) by Dynamic Feed. Body: {"station_id":
        "stn_...", "quantity": "wind_kmh", "value": 12.4, "unit": "km/h", "observed_at": "..."}. Keyless verification
        against /.well-known/keys. Auth: X-API-Key.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_station_reading_v1_station_reading_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_station_register_v1_station_register_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """WE SIGN YOUR STATION, register your own sensor so its readings can be witnessed as signed receipts. Body:
        {"name": "...", "location": {"lat": .., "lon": ..}, "quantities": ["wind_kmh", ...]}. Returns a station_id +
        provenance. Dynamic Feed witnesses what your station reports; it does not measure the value. Your key is stored
        only as a non-reversible hash. Auth: X-API-Key (free key at POST /signup).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_station_register_v1_station_register_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_stream_v1_stream_get(
        self,
        *,
        tool: str | None = "",
        args: str | None = "",
        interval: float | None = 15.0,
        count: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Server-Sent Events stream of a LIVE value. Point an EventSource at /v1/stream?tool=&args=&interval=&count=
        and receive the tool's current value every ``interval`` seconds as a ``value`` event, until ``count`` updates or
        you disconnect. Keyless. Bounded for fair use: interval 5-300s, count 1-60. Example:
        /v1/stream?tool=cite&args={"subject":"BTC"}&interval=10

        Args:
            tool: Value sent with the request.
            args: Value sent with the request.
            interval: Value sent with the request.
            count: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_stream_v1_stream_get(
                tool=tool, args=args, interval=interval, count=count, request_options=request_options
            ),
        )

    def v1_trigger_receipt_v1_trigger_receipt_get(
        self,
        metric: str,
        threshold: float,
        *,
        op: str | None = "gte",
        lat: float | None = None,
        lon: float | None = None,
        city: str | None = None,
        peril: str | None = None,
        contract_ref: str | None = None,
        methodology: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Parametric catastrophe TRIGGER RECEIPT (DF-VERIFY/1 ``trigger-receipt/v1``) — the dispute-proof oracle a
        parametric payout settles against. Evaluates 'metric op threshold' at a location against the live official
        reading and returns an Ed25519-signed receipt carrying the four properties that end a parametric dispute: (1) a
        pinned + hashed methodology (nobody moves the goalposts after the event); (2) the exact re-fetchable source_url
        + a raw_reading_hash anyone can reproduce (independent verifiability, not 'trust us'); (3) a deterministic
        determination — triggered + payout_factor + rationale, re-computable by any party; (4) the signature (timestamp
        via POST /v1/anchor (RFC 3161) for proof of when). Neutral calculation-agent-of- record: attests what the
        official source reported and what the pinned methodology implies — NOT ground-truth physical loss. v0.1 metrics:
        wind_kmh | temperature_c | feels_like_c | precipitation_mm (Open-Meteo). op: gt | gte | lt | lte. Verify against
        GET /.well-known/keys; schema at /schemas/trigger-receipt-v1.json.

        Args:
            metric: Value sent with the request.
            threshold: Value sent with the request.
            op: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            city: Value sent with the request.
            peril: Value sent with the request.
            contract_ref: Value sent with the request.
            methodology: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_trigger_receipt_v1_trigger_receipt_get(
                metric,
                threshold,
                op=op,
                lat=lat,
                lon=lon,
                city=city,
                peril=peril,
                contract_ref=contract_ref,
                methodology=methodology,
                request_options=request_options,
            ),
        )

    def v1_vc_v1_vc_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Security quarantine: legacy VC wrapping did not verify the inner receipt or role boundaries.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_vc_v1_vc_post(request_options=request_options))

    def v1_watchlist_delete_v1_watchlist_delete(
        self,
        *,
        label: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Remove one item from your watchlist (?label=BTC) or clear it entirely (no label). Per-user.

        Args:
            label: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_watchlist_delete_v1_watchlist_delete(
                label=label,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_watchlist_get_v1_watchlist_get(
        self,
        *,
        pull: bool | None = False,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Your saved watchlist — the subjects/tools you monitor. ?pull=true runs every watched tool and returns each
        one's CURRENT value in a single call (your whole dashboard at once). Per-user, keyed by your API key
        (X-API-Key).

        Args:
            pull: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_watchlist_get_v1_watchlist_get(
                pull=pull,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_watchlist_post_v1_watchlist_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Add to or replace your watchlist. Body {"label":"BTC","tool":"cite","args":{"subject":"BTC"}} adds one item;
        body {"items":[...]} replaces the whole list (max 25). Each item's ``tool`` must be a real Dynamic Feed tool.
        Per-user, keyed by your API key.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_watchlist_post_v1_watchlist_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_webhooks_create_v1_webhooks_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Register a webhook that fires when a tool's value CHANGES. Body:
        {"url":"https://you.example/hook","tool":"exploited_vulnerabilities","args":{}}. The URL is validated SSRF-safe
        (public http/https only). Returns a one-time ``secret`` — every delivery is HMAC-SHA256 signed with it (header
        X-DynamicFeed-Signature: sha256=…), so you can verify it came from us. Per-user (X-API-Key).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_webhooks_create_v1_webhooks_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_webhooks_delete_v1_webhooks_delete(
        self,
        *,
        id_: int | None = 0,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete one of your webhook subscriptions by ?id=. Per-user.

        Args:
            id_: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_webhooks_delete_v1_webhooks_delete(
                id_=id_,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_webhooks_list_v1_webhooks_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """List your webhook subscriptions (secrets are never returned). Per-user.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_webhooks_list_v1_webhooks_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_webhooks_test_v1_webhooks_test_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a signed TEST delivery to one of your subscriptions now — confirm your endpoint receives it and the HMAC
        validates. Body: {"id": }. Per-user.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_webhooks_test_v1_webhooks_test_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def v1_witness_inclusion_v1_witness_idx_inclusion_get(
        self, idx: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """SUCCINCT, browser-verifiable inclusion proof that witness/notary entry {idx} is in the append-only log — an
        O(log n) RFC-6962 Merkle audit path to a tree root we Ed25519-SIGN (the checkpoint). Any party folds leaf ->
        root in their own browser and checks the checkpoint signature against /.well-known/keys, with NO trust in
        Dynamic Feed's word (only its published key). Keyless. Recipe: leaf = sha256(0x00 ‖ content_hash_bytes); node =
        sha256(0x01 ‖ left ‖ right); fold the audit_path (each {sibling, side}) up to root_sha256; confirm it equals the
        signed checkpoint.root_sha256, then verify the checkpoint Ed25519 signature. In-browser via /verify.js
        verifyInclusion(). Complements GET /v1/notary/log/{idx}/proof (the O(n) chain replay): the chain proves
        append-order, this proves succinct membership in a signed tree.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_witness_inclusion_v1_witness_idx_inclusion_get(
                idx, request_options=request_options
            ),
        )

    def v1_witness_sample_v1_witness_sample_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """A keyless, signed SAMPLE txn-receipt/v1 — for the /witness demo. Shows exactly what POST /v1/witness returns
        (without writing to the log or needing a key): a neutral witness of a sample machine-to-machine transaction
        record, with the recent-Bitcoin-block NOT-BEFORE time marker. Verify it in-browser via /verify.js, then flip a
        byte and watch verification fail.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_witness_sample_v1_witness_sample_get(request_options=request_options))

    def v1_witness_v1_witness_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """WITNESS a machine-to-machine / agent-to-agent transaction RECORD — a neutral, third-party, Ed25519-signed,
        transparency-logged, RFC 3161 timestampable receipt that this exact record EXISTED and is INTACT. Dynamic Feed
        sits BESIDE the transaction, NEVER in the value path: it only signs + timestamps + anchors a HASH of a record
        you give it. It never accepts, holds, routes, converts or custodies funds or anything of value. Send the record
        ({"payload": }) or keep it private ({"content_hash": ""}). Optional: parties[] (opaque ids — NO PII), txn_ref
        (opaque), and a BYO-key agent co-signature (provider_pubkey + provider_sig, Ed25519 over the ascii-hex hash) so
        the receipt reads "agent attested, Dynamic Feed witnessed". Auth: a FREE key (POST /signup) — no KYC. PROVES:
        the record existed at issued_at, is intact (tamper-EVIDENT, verifiable via /verify.js against
        /.well-known/keys), and which agent key co-signed. Does NOT prove the transaction was authorized, correct,
        lawful, completed, or that any value moved. Profile of receipt/v1. Anchor independently via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_witness_v1_witness_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AgentWithRawResponse:
        return self._with_raw_response


class AsyncAgent:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAgentWithRawResponse(client, server)

    async def post_v1_explain(
        self, *, subject: str | None = "", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."} (POST) — a
        tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s), licence, official URL,
        update cadence and the full custody trail (origin -> ingest -> normalize -> serve, plus sign/anchor for
        awareness), so you can trace and verify where a number came from. Keyless.

        Args:
            subject: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.post_v1_explain(subject=subject, request_options=request_options))

    async def schemas_index_schemas_index_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """The Dynamic Feed receipt-schema family, self-describing (DF-VERIFY/1). Scans the schema directory at request
        time so it never drifts: every profile's $id, title and active mint endpoint when one exists.
        Deprecated/quarantined schemas remain visible as history, not as executable capabilities. Schema conformance and
        signature mathematics are separate from lifecycle acceptance.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.schemas_index_schemas_index_json_get(request_options=request_options)
        )

    async def v1_agent_receipt_v1_agent_receipt_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Agent receipt. A signed, re-checkable record of what an AI agent acted on and what it decided. The
        operational-integrity primitive for the agent economy: prove, after the fact, the inputs behind an agent's
        action. Body: {"agent": "...", "action": "...", "inputs": }, plus optional "model", "decision", "context".
        Returns an agent-receipt/v1 with a detached Ed25519 signature (verify against GET /.well-known/keys: drop the
        ``signature`` field, canonicalize json-sorted-compact). Anchor the hash via RFC 3161 via POST /v1/anchor.
        Keyless. Advisory evidence and a neutral witness: it proves what the agent was given and did, never that the
        decision was correct, and it never moves anything. Spec: https://dynamicfeed.ai/standard

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.v1_agent_receipt_v1_agent_receipt_post(request_options=request_options)
        )

    async def v1_asof_v1_asof_get(
        self,
        tool: str,
        t: str,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """TIME-MACHINE REPLAY — what did the data say at decision time? Returns the archived observation for ``tool``
        nearest at-or-before time ``t``, replayed VERBATIM from Dynamic Feed's append-only archive (capturing every
        served datapoint since 2026-06-07) — the value as served then, never a re-fetch or reconstruction. The response
        carries honest metadata (``archived_at``, ``distance_seconds`` from your requested instant, the exact archive
        object, where coverage begins) and is Ed25519-signed (verify against GET /.well-known/keys) — built for agent
        backtesting, audit trails and "what did we know when we decided" disputes. Honest about coverage: a time the
        archive didn't capture returns a clear miss with the nearest captured day, never a fabricated past. Paid plans
        (Pro and up); auth via the X-API-Key header. Upgrade: https://dynamicfeed.ai/dashboard

        Args:
            tool: tool name, e.g. current_weather (the keyless MCP tool names)
            t: ISO-8601 timestamp, e.g. 2026-06-10T14:30:00Z
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_asof_v1_asof_get(
                tool,
                t,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_attest_v1_attest_get(
        self,
        metric: str,
        threshold: float,
        *,
        op: str | None = "gte",
        lat: float | None = None,
        lon: float | None = None,
        city: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Signed parametric-trigger attestation — evaluate 'metric op threshold' at a location against the live
        measurement and return a tamper-evident, Ed25519-signed MET / NOT-MET record. The dispute-proof oracle a
        parametric-insurance payout can settle against. metric: wind_kmh | temperature_c | feels_like_c |
        precipitation_mm. op: gt | gte | lt | lte. Verify against GET /.well-known/keys; timestamp via POST /v1/anchor
        (RFC 3161) for independent proof of when.

        Args:
            metric: Value sent with the request.
            threshold: Value sent with the request.
            op: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            city: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_attest_v1_attest_get(
                metric, threshold, op=op, lat=lat, lon=lon, city=city, request_options=request_options
            ),
        )

    async def v1_batch_v1_batch_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Run up to 20 read-only data-tool calls in ONE request — cuts agent round-trips. Keyless. Body:
        {"calls":[{"tool":"current_weather","args":{"city":"London"}}, {"tool":"earthquakes","args":{}}]}. Returns
        {"results":[{"tool","ok","data"|"error"}, ...]} in the same order. Tool names are the keyless MCP tools; POST
        with no ``calls`` returns the available list. Each call has its own 20s deadline, so a slow upstream degrades
        that one item rather than blocking the batch.

        Add "facts": true to the body to get each result as a canonical, reliability-graded fact instead of raw data:
        {"tool","ok","fact":{value, provenance, verification, reliability{confidence,basis,sources,
        verified,vantage,conflict}}}. The whole response is Ed25519-signed (verify against /.well-known/keys), so this
        is verifiable, reliability-graded, multi-tool data in one round-trip. Default shape is unchanged.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_batch_v1_batch_post(request_options=request_options))

    async def v1_benchmark_history_v1_benchmark_history_get(
        self, *, days: int | None = 90, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """DRIFT OVER TIME — daily snapshots of the live-facts benchmark (GET /v1/benchmark), oldest first. Each
        snapshot is the items array exactly as measured that day, so diffing consecutive snapshots shows how fast
        reality moves away from any fixed training cutoff: rates shift, releases ship, CVEs land. History starts at
        first_snapshot_at and grows one snapshot per day. Human-readable charts at /benchmark/history. Ed25519-signed.
        Keyless.

        Args:
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_benchmark_history_v1_benchmark_history_get(
                days=days, request_options=request_options
            ),
        )

    async def v1_benchmark_v1_benchmark_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """The LIVE-FACTS BENCHMARK — a continuously-refreshed eval of facts that move after a model's training cutoff.
        Ask a model these questions WITHOUT tools and grade against the answers measured from authoritative sources at
        call time: every frozen model fails; a grounded agent passes. Each item carries its grading rule, source and
        measured_at; the whole set is Ed25519-signed so a published score is verifiable evidence, not a claim.
        Regenerate per run — answers are time-sensitive by design. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_benchmark_v1_benchmark_get(request_options=request_options))

    async def v1_bundle_v1_bundles_bundle_id_get(
        self, bundle_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """One curated tool bundle by id (e.g. devsecops, weather-climate, finance-markets).

        Args:
            bundle_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_bundle_v1_bundles_bundle_id_get(bundle_id, request_options=request_options)
        )

    async def v1_bundles_v1_bundles_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Curated tool BUNDLES per domain — pick the right tools for your agent's use-case fast (instead of sifting all
        tools). Keyless: call any tool via POST /v1/batch; pay-per-call via /v1/pro/*.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_bundles_v1_bundles_get(request_options=request_options))

    async def v1_bushfire_v1_bushfire_get(
        self,
        *,
        lat: float | None = None,
        lon: float | None = None,
        radius_km: float | None = 150.0,
        state: str | None = "",
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Signed Australian bushfire/fire hotspots (last ~3 days) from Geoscience Australia / Digital Earth Australia
        Hotspots — keyless, CC BY 4.0. lat & lon (+ radius_km) for hotspots near a point, a state code
        (NSW/QLD/VIC/SA/WA/TAS/NT/ACT), or neither for recent Australia-wide. Ed25519-signed; verify against GET
        /.well-known/keys. A hotspot is a satellite thermal anomaly — not every one is a confirmed bushfire.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            radius_km: Value sent with the request.
            state: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_bushfire_v1_bushfire_get(
                lat=lat, lon=lon, radius_km=radius_km, state=state, limit=limit, request_options=request_options
            ),
        )

    async def v1_checkpoint_proof_v1_checkpoints_day_proof_get(
        self, day: str, *, kind: str | None = "ots", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """The raw witness proof for one day's archive checkpoint. kind=ots (default) returns the DLT-timestamp .ots
        bytes (verify: ots verify -d checkpoint-.ots); kind=rfc3161 returns the RFC 3161 timestamp token DER from the
        independent TSA (verify: openssl ts -reply -in checkpoint-.tsr -text, then openssl ts -verify -digest -sha256
        -in checkpoint-.tsr). Offline runner for both witnesses: scripts/verify_checkpoint.py. Keyless.

        Args:
            day: Value sent with the request.
            kind: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_checkpoint_proof_v1_checkpoints_day_proof_get(
                day, kind=kind, request_options=request_options
            ),
        )

    async def v1_checkpoints_v1_checkpoints_get(
        self, *, limit: int | None = 30, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Daily ARCHIVE CHECKPOINTS, newest first — the append-only claim made independently checkable. Each entry
        carries the signed archive-day/v1 document: a SHA-256 digest of that day's full archive listing, per-feed object
        counts, the previous day's digest (the chain), and the anchor status of a DLT-timestamp proof committing the
        digest to a public distributed ledger (RFC 3161 on fallback). Keyless.

        Args:
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_checkpoints_v1_checkpoints_get(
                limit=limit, request_options=request_options
            ),
        )

    async def v1_discover_get_v1_discover_get(
        self,
        *,
        need: str | None = "",
        limit: int | None = 8,
        external: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """CAPABILITY DISCOVERY — ask in plain words what you need ("live rainfall in Brisbane", "sanctions screening",
        "satellite positions") and get a ranked, Ed25519-signed list of candidate capabilities: Dynamic Feed's own tools
        with MEASURED 24h uptime/latency and a keyless call recipe, plus matching external MCP servers from the official
        registry index, honestly marked registry-reported and unmeasured. Advisory discovery with an explicit vantage
        per candidate, not an endorsement. Keyless.

        Args:
            need: Value sent with the request.
            limit: Value sent with the request.
            external: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_discover_get_v1_discover_get(
                need=need, limit=limit, external=external, request_options=request_options
            ),
        )

    async def v1_discover_post_v1_discover_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """POST twin of GET /v1/discover: {"need": "...", "limit": 8, "external": true}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_discover_post_v1_discover_post(request_options=request_options))

    async def v1_drift_v1_drift_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Drift detection — audit an AI's stated facts against live ground-truth, graded by severity. Keyless. Body:
        {"claims":["The latest Python is 3.11","Node.js is on 18"]} or {"text":""}. Returns {checked, drifted_count,
        overall, results:[{claim, status, drifted, severity, correction, source}]}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_drift_v1_drift_post(request_options=request_options))

    async def v1_eval_receipt_sample_v1_eval_receipt_sample_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """A keyless, signed SAMPLE eval-receipt/v1 — a 'Verified Eval' run against a sealed, committed test set (the
        set stays private; only its commitment is signed). Verify it in-browser via /verify.js, then flip a byte and
        watch verification fail. Advisory evidence only — DF witnesses the committed run, it does not re-run or certify
        the benchmark.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.v1_eval_receipt_sample_v1_eval_receipt_sample_get(
                request_options=request_options
            ),
        )

    async def v1_eval_receipt_v1_eval_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """WITNESS an AI EVALUATION run — the neutral 'Verified Eval' stamp for the contamination-proof- benchmark era.
        The lab commits its test set as a salted sha256 BEFORE the run (``set_commitment``), so the set stays PRIVATE
        while the run becomes un-retunable after the fact — solving the evaluator's dilemma of having to expose a
        private set to be trusted. Ed25519-signed, transparency-logged, RFC 3161 timestampable. Body: {"eval_name": "",
        "model_id": "", "metric": "pass@1", "score": 0.58, "set_commitment": ""} plus optional n, run_sha256 (hash of
        the full transcript), harness, and a BYO-key co-signature. Auth: a FREE key (POST /signup). ADVISORY EVIDENCE
        ONLY — Dynamic Feed does NOT re-run or verify the score, and does NOT certify the benchmark is
        fair/representative/contamination-free; it witnesses the COMMITTED run so no party can retune it retroactively.
        Profile of receipt/v1. Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_eval_receipt_v1_eval_receipt_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_evidence_wildfire_v1_evidence_wildfire_get(
        self,
        lat: float,
        lon: float,
        *,
        detected_at: str | None = None,
        detector: str | None = "the detector",
        place: str | None = None,
        confidence: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Chain-of-custody EVIDENCE record for a wildfire detection. Wraps a SELF-REPORTED detection (detector,
        lat/lon, time) with Dynamic Feed's INDEPENDENT context captured at that location the moment it's requested —
        fire-weather, near-term forecast, air quality (smoke), and tracked EONET wildfire events — each datapoint
        carrying its source, licence and age. The whole record is Ed25519-signed so any party can verify it OFFLINE
        against /.well-known/keys, WITHOUT trusting the detector or Dynamic Feed. Advisory evidence + audit layer: it
        does NOT make, certify, or sit in the safety-critical path of the detection — it makes the surrounding context
        provable later (an insurer claim, a liability review, an SLA). Keyless. Anchor via RFC 3161 via POST /v1/anchor
        for proof-of-when independent of us.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            detected_at: Value sent with the request.
            detector: Value sent with the request.
            place: Value sent with the request.
            confidence: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_evidence_wildfire_v1_evidence_wildfire_get(
                lat,
                lon,
                detected_at=detected_at,
                detector=detector,
                place=place,
                confidence=confidence,
                request_options=request_options,
            ),
        )

    async def v1_explain_v1_explain_get(
        self, *, subject: str | None = "", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."} (POST) — a
        tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s), licence, official URL,
        update cadence and the full custody trail (origin -> ingest -> normalize -> serve, plus sign/anchor for
        awareness), so you can trace and verify where a number came from. Keyless.

        Args:
            subject: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_explain_v1_explain_get(subject=subject, request_options=request_options)
        )

    async def v1_exposure_report_v1_exposure_report_get(
        self,
        *,
        perils: str | None = "wind,flood,wildfire",
        lat: float | None = -33.8688,
        lon: float | None = 151.2093,
        place: str | None = None,
        organisation: str | None = None,
        use_case: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Automated, signed EXPOSURE REPORT. Maps the perils a decision depends on to the external readings that decide
        them, flags where those readings are unverifiable today, and attaches a LIVE signed sample observation for each,
        so an organisation can see where its decisions rely on data it cannot independently check. Fully automated, no
        human in the loop. Ed25519-signed; verify offline at /.well-known/keys. Advisory evidence, not a certification
        or legal/financial advice.

        Args:
            perils: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            place: Value sent with the request.
            organisation: Value sent with the request.
            use_case: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_exposure_report_v1_exposure_report_get(
                perils=perils,
                lat=lat,
                lon=lon,
                place=place,
                organisation=organisation,
                use_case=use_case,
                request_options=request_options,
            ),
        )

    async def v1_guard_v1_guard_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Pre-answer guard — the anti-hallucination middleware. POST the draft answer your AI is about to send; get
        back a verdict of "pass" or "revise" plus the exact corrections, so you can fix it BEFORE the user sees it.
        Keyless. Wrap it around any LLM response pipeline. Body: {"answer":""} or {"claims":["...","..."]}. Returns
        {verdict:"pass"|"revise", checked, issues:[{claim, subject, severity, correction, source}], confirmed,
        unverifiable, guidance}. Only claims that CONTRADICT live data trigger "revise"; opinions and facts no live feed
        can cover pass through untouched. Verifies prices, software versions, market open/closed and service up/down
        against Dynamic Feed's live ground-truth.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_guard_v1_guard_post(request_options=request_options))

    async def v1_index_v1_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """The Dynamic Feed agent & robot API at a glance — every /v1 capability, what it does, and a copy-paste
        example. The fastest way for a developer (or an agent) to discover the whole surface. Keyless unless noted.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_index_v1_get(request_options=request_options))

    async def v1_inference_receipt_sample_v1_inference_receipt_sample_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """A keyless, signed SAMPLE inference-receipt/v1 — for the /receipts demo. Shows what POST /v1/inference-receipt
        returns: a neutral witness of a sample inference where the provider served a DIFFERENT model than requested and
        set its own fallback flag (illustrative, vendor-neutral). Verify it in-browser via /verify.js, then flip a byte
        and watch verification fail.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.v1_inference_receipt_sample_v1_inference_receipt_sample_get(
                request_options=request_options
            ),
        )

    async def v1_inference_receipt_v1_inference_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """WITNESS a single AI model INFERENCE — a neutral, Ed25519-signed, transparency-logged, RFC 3161 timestampable
        receipt that this inference record EXISTED and is INTACT. Privacy by CONSTRUCTION: the caller hashes the prompt
        + response LOCALLY and sends ONLY fixed-length sha256 hashes + non-PII metadata. Body: {"claimed_model": "",
        "prompt_sha256": "", "response_sha256": ""} plus optional requested_model, latency_ms, token_count,
        fallback_flag (the provider's OWN flag), provider, region, and a BYO-key agent co-signature (provider_pubkey +
        provider_sig). Auth: a FREE key (POST /signup) — no KYC. PROVES: the record existed at issued_at and is intact
        (tamper-EVIDENT, verifiable via /verify.js against /.well-known/keys). Does NOT independently verify which model
        actually ran, does NOT adjudicate that a 'downgrade' occurred, does NOT score quality — model_match is a literal
        string comparison and the holder draws any inference. Profile of receipt/v1. Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_inference_receipt_v1_inference_receipt_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_intensity_v1_intensity_get(
        self,
        lat: float,
        lon: float,
        *,
        peril: str | None = "flood",
        metric: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """INTENSITY-AT-LOCATION (DF-VERIFY/1 ``intensity/v1``) — the parameter value at an exact coordinate, signed and
        reproducible: the settlement-grade reading a parametric trigger evaluates against. Not 'an event happened' but
        'the value at this lat/lon, from the region's authoritative source'. v1 peril: flood — routed by coordinate to
        the nearest official river gauge: AU -> BoM Water Data Online (water-course level m; CC BY 4.0), US -> USGS NWIS
        (gage height ft / discharge ft3/s). Point-resolved, no interpolation. drought, wildfire and earthquake
        (ShakeMap) intensity are rolling in. Verify the Ed25519 signature against GET /.well-known/keys; re-fetch
        source_url to reproduce raw_reading_hash (see hash_method). SCOPE: attests the reading at the cited official
        gauge — NOT a basin-wide determination or physical loss.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            peril: Value sent with the request.
            metric: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_intensity_v1_intensity_get(
                lat, lon, peril=peril, metric=metric, request_options=request_options
            ),
        )

    async def v1_me_v1_me_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Your key at a glance — plan, calls used today, daily quota and remaining. The per-user usage view (the
        keyless MCP endpoint is unmetered fair-use).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_me_v1_me_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_nearby_v1_nearby_get(
        self,
        lat: float,
        lon: float,
        *,
        radius_km: float | None = 500.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Signed situational scan: live hazards near a point — earthquakes (USGS), natural events (NASA EONET:
        wildfires/volcanoes/floods/storms), major disasters (GDACS) and, in Australia, live satellite bushfire hotspots
        (Geoscience Australia) within radius_km, nearest first. Ed25519-signed (verify against GET /.well-known/keys).
        The 'what's around me' ping for any machine that moves — robots, drones, in-car AI assistants, fleet telematics
        — complements the go/caution/no-go verdict from /v1/awareness.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            radius_km: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_nearby_v1_nearby_get(
                lat, lon, radius_km=radius_km, request_options=request_options
            ),
        )

    async def v1_notarize_v1_notarize_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """NOTARY for any data feed — a neutral third party witnesses YOUR data and returns a timestamped,
        Ed25519-signed notarization: proof these exact bytes existed at this moment, independently verifiable forever.
        Two modes — send the data ({"payload": }), or keep it private and send only its hash ({"payload_sha256": ""}).
        Optional "subject" names the publisher; "echo": false omits the payload from the record (hash retained). This
        attests that Dynamic Feed WITNESSED these bytes (or this hash) at witnessed_at — not that the content is true.
        Anchor via POST /v1/anchor for proof-of-when independent of us. Auth: X-API-Key (free key at POST /signup).
        'Let's Encrypt for data feeds' — your feed, signed, without building a signing stack.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_notarize_v1_notarize_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_notary_entry_v1_notary_log_idx_get(
        self, idx: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """One transparency-log entry by index, Ed25519-signed, with the recipe to recompute its entry_hash and verify
        chain linkage. Keyless.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_notary_entry_v1_notary_log_idx_get(idx, request_options=request_options)
        )

    async def v1_notary_feed_register_v1_notary_feeds_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """CONTINUOUS NOTARIZATION — register a feed URL and Dynamic Feed fetches it on your interval, notarizing every
        CHANGE into the public transparency log automatically: a standing, tamper-evident history of what your feed
        published, when. Body: {"url": "https://...", "subject": "Your Co", "interval_minutes": 180 (min 60)}. Beta: 3
        active feeds per key. The first fetch happens immediately and its notarization is returned.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_notary_feed_register_v1_notary_feeds_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_notary_feeds_list_v1_notary_feeds_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Your registered continuous-notarization feeds (same X-API-Key): status, last hash, last log index, next-run
        cadence.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_notary_feeds_list_v1_notary_feeds_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_notary_head_v1_notary_log_head_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """The transparency-log HEAD — count + chain head hash, Ed25519-signed. The anchorable artifact: altering ANY
        past notarization breaks every entry_hash after it and contradicts the anchored head. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.v1_notary_head_v1_notary_log_head_get(request_options=request_options)
        )

    async def v1_notary_log_v1_notary_log_get(
        self,
        *,
        limit: int | None = 50,
        before: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """The PUBLIC TRANSPARENCY LOG of all notarizations — append-only, hash-chained (CT-style), newest first.
        Payload hashes only (never payloads): private by construction, tamper-evident by recipe. Page back with
        ?before=. Keyless.

        Args:
            limit: Value sent with the request.
            before: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_notary_log_v1_notary_log_get(
                limit=limit, before=before, request_options=request_options
            ),
        )

    async def v1_notary_proof_v1_notary_log_idx_proof_get(
        self, idx: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """INCLUSION PROOF for a log entry: the consecutive chain of entries from this index to the most recently
        ANCHORED head (or the current head if no anchor covers it yet), plus the anchor record. Recompute each
        entry_hash and you have proven this entry is in the history the Bitcoin anchor commits to — no trust in Dynamic
        Feed required. Keyless.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_notary_proof_v1_notary_log_idx_proof_get(
                idx, request_options=request_options
            ),
        )

    async def v1_pro_asof_v1_pro_asof_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """PREMIUM keyless AS-OF REPLAY — pay-per-call (x402, USDC on Base) signed time-machine over Dynamic Feed's
        append-only archive. Body {"tool":"current_weather","t":"2026-06-10T14:30:00Z"} (or ?tool=&t=) -> the archived
        observation for ``tool`` nearest at-or-before ``t``, replayed VERBATIM, Ed25519-signed (verify against GET
        /.well-known/keys). The keyless paid channel to the SAME engine as the key-gated GET /v1/asof — for agent
        backtesting, audit trails and 'what did we know when we decided' disputes. No signup, no human; discoverable via
        the x402 bazaar. Honest about coverage: a time the archive didn't capture returns a clear miss, never a
        fabricated past.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_pro_asof_v1_pro_asof_post(request_options=request_options))

    async def v1_pro_batch_v1_pro_batch_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """PREMIUM, pay-per-call data batch — the commercial tier of /v1/batch, paid AGENT-NATIVELY via x402 (HTTP 402):
        an agent gets a price, pays from its wallet, re-calls with the X-PAYMENT header, and is served — no human, no
        signup. Up to 100 signed tool calls per request (free /v1/batch is fair-use, capped at 20). Dynamic Feed charges
        for its OWN service; a third-party facilitator settles the payment — DF never custodies funds
        (witness-not-money). Body: {"calls":[{"tool":...,"args":{...}}, ...]}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_pro_batch_v1_pro_batch_post(request_options=request_options))

    async def v1_pro_catalog_v1_pro_catalog_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Machine-readable MENU of Dynamic Feed's x402 pay-per-call SKUs (USDC on Base) — the 'price list' an agent or
        x402 facilitator shops in one call: every paid endpoint, its price (live from X402_PRICE_ATOMIC), input/output
        schema, the recipient wallet (when connected), and the facilitator. Boundary: DF is the merchant; the
        facilitator settles — DF never custodies funds.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_pro_catalog_v1_pro_catalog_get(request_options=request_options))

    async def v1_pro_tool_discover_v1_pro_tool_tool_get(
        self, tool: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Discovery for the paid single-call endpoint. A GET returns the x402 402 challenge — so an agent that probes
        with GET (instead of a 'Method Not Allowed' dead end) still learns the price, the asset, and that it must POST
        with an X-PAYMENT header + {"args":{...}} body. NO payment is taken on GET; settlement only ever happens on
        POST. Pure discovery, no money path.

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_pro_tool_discover_v1_pro_tool_tool_get(
                tool, request_options=request_options
            ),
        )

    async def v1_pro_tool_v1_pro_tool_tool_post(
        self, tool: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """PREMIUM single signed tool call — pay-per-call (x402, USDC on Base) for ANY one of Dynamic Feed's live tools.
        An agent pays once, gets one Ed25519-signed datapoint. No signup, no human. Body: {"args":{...}}. Discoverable
        via the x402 bazaar. (Free alternative: keyless /v1/batch, fair-use.)

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_pro_tool_v1_pro_tool_tool_post(tool, request_options=request_options)
        )

    async def v1_proxy_witness_v1_proxy_witness_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """PROXY WITNESS, route any third-party API call through Dynamic Feed and get a signed, archived receipt of
        exactly what that URL returned to us at this moment. Body: {"url": "https://...", "method": "GET"|"POST"|...,
        "headers": {...}, "body": "...", "echo": false, "subject": "..."}. We fetch server-side under an SSRF guard
        (only public http/https targets; private and reserved addresses blocked; redirects not followed), redact your
        request credentials from the record, and sign a proxy-witness/v1 envelope carrying the response status,
        content-type, size and SHA-256 (the full body only when echo:true and small; our archive is hash-first and never
        keeps the body). Witnesses what the URL returned to us, not that the content is true; never the money path.
        Auth: X-API-Key (free key at POST /signup).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_proxy_witness_v1_proxy_witness_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_receipt_v1_receipt_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Evidence receipt — wrap any fact/claim/data in a timestamped, Ed25519-SIGNED record: provable evidence of
        what an AI was told (or asserted), and when. Body: {"data": } or {"claim":"..."}. Returns the receipt + a
        detached signature (verify against GET /.well-known/keys); anchor its hash to RFC 3161 via POST /v1/anchor.
        Keyless. An audit-trail input for regulated AI (fintech / legal / medical).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_receipt_v1_receipt_post(request_options=request_options))

    async def v1_snapshot_v1_snapshot_get(
        self, *, date: str | None = "", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Historical world-state — what Dynamic Feed reported on a given day. ?date=YYYY-MM-DD returns that day's
        stored snapshot (the cross-domain world_pulse digest); no date returns today's, captured on read. Honest about
        coverage: a date before the earliest snapshot returns the available range, never a fabricated past. Keyless. The
        auditable companion to the signed/RFC 3161 timestamped awareness layer.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_snapshot_v1_snapshot_get(date=date, request_options=request_options)
        )

    async def v1_sources_v1_sources_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """The authoritative source catalog — every upstream feed Dynamic Feed serves, with its publisher, official URL,
        licence, whether commercial use + redistribution is permitted, update cadence, and the tools it backs. Keyless.
        Each datapoint is provenance-stamped (source, licence, timestamp) so you can cite it and verify usage rights
        yourself.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_sources_v1_sources_get(request_options=request_options))

    async def v1_stamp_v1_stamp_post(
        self, *, x_api_key: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Create an independently verifiable record of submitted JSON.

        ``X-API-Key`` is optional so the existing keyless signing behaviour remains available. When a key is supplied it
        is always validated: portal ``fx_live_`` keys use the isolated Fluxdyne runtime database boundary, while legacy
        keys keep their existing validation and metering path. A signature establishes integrity and issuer identity; it
        does not establish that submitted content is complete, scientifically valid, or true.

        Args:
            x_api_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_stamp_v1_stamp_post(x_api_key=x_api_key, request_options=request_options)
        )

    async def v1_station_get_v1_station_station_id_get(
        self, station_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """The public descriptor of a registered station (no owner identity). Keyless, so a verifier of a
        station-receipt can see what the station is and what it reports.

        Args:
            station_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_station_get_v1_station_station_id_get(
                station_id, request_options=request_options
            ),
        )

    async def v1_station_reading_v1_station_reading_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Witness one reading your station reported: get back a signed station-receipt/v1 stating, in words, that the
        value is self-reported by your station and only WITNESSED (not measured) by Dynamic Feed. Body: {"station_id":
        "stn_...", "quantity": "wind_kmh", "value": 12.4, "unit": "km/h", "observed_at": "..."}. Keyless verification
        against /.well-known/keys. Auth: X-API-Key.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_station_reading_v1_station_reading_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_station_register_v1_station_register_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """WE SIGN YOUR STATION, register your own sensor so its readings can be witnessed as signed receipts. Body:
        {"name": "...", "location": {"lat": .., "lon": ..}, "quantities": ["wind_kmh", ...]}. Returns a station_id +
        provenance. Dynamic Feed witnesses what your station reports; it does not measure the value. Your key is stored
        only as a non-reversible hash. Auth: X-API-Key (free key at POST /signup).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_station_register_v1_station_register_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_stream_v1_stream_get(
        self,
        *,
        tool: str | None = "",
        args: str | None = "",
        interval: float | None = 15.0,
        count: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Server-Sent Events stream of a LIVE value. Point an EventSource at /v1/stream?tool=&args=&interval=&count=
        and receive the tool's current value every ``interval`` seconds as a ``value`` event, until ``count`` updates or
        you disconnect. Keyless. Bounded for fair use: interval 5-300s, count 1-60. Example:
        /v1/stream?tool=cite&args={"subject":"BTC"}&interval=10

        Args:
            tool: Value sent with the request.
            args: Value sent with the request.
            interval: Value sent with the request.
            count: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_stream_v1_stream_get(
                tool=tool, args=args, interval=interval, count=count, request_options=request_options
            ),
        )

    async def v1_trigger_receipt_v1_trigger_receipt_get(
        self,
        metric: str,
        threshold: float,
        *,
        op: str | None = "gte",
        lat: float | None = None,
        lon: float | None = None,
        city: str | None = None,
        peril: str | None = None,
        contract_ref: str | None = None,
        methodology: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Parametric catastrophe TRIGGER RECEIPT (DF-VERIFY/1 ``trigger-receipt/v1``) — the dispute-proof oracle a
        parametric payout settles against. Evaluates 'metric op threshold' at a location against the live official
        reading and returns an Ed25519-signed receipt carrying the four properties that end a parametric dispute: (1) a
        pinned + hashed methodology (nobody moves the goalposts after the event); (2) the exact re-fetchable source_url
        + a raw_reading_hash anyone can reproduce (independent verifiability, not 'trust us'); (3) a deterministic
        determination — triggered + payout_factor + rationale, re-computable by any party; (4) the signature (timestamp
        via POST /v1/anchor (RFC 3161) for proof of when). Neutral calculation-agent-of- record: attests what the
        official source reported and what the pinned methodology implies — NOT ground-truth physical loss. v0.1 metrics:
        wind_kmh | temperature_c | feels_like_c | precipitation_mm (Open-Meteo). op: gt | gte | lt | lte. Verify against
        GET /.well-known/keys; schema at /schemas/trigger-receipt-v1.json.

        Args:
            metric: Value sent with the request.
            threshold: Value sent with the request.
            op: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            city: Value sent with the request.
            peril: Value sent with the request.
            contract_ref: Value sent with the request.
            methodology: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_trigger_receipt_v1_trigger_receipt_get(
                metric,
                threshold,
                op=op,
                lat=lat,
                lon=lon,
                city=city,
                peril=peril,
                contract_ref=contract_ref,
                methodology=methodology,
                request_options=request_options,
            ),
        )

    async def v1_vc_v1_vc_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Security quarantine: legacy VC wrapping did not verify the inner receipt or role boundaries.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_vc_v1_vc_post(request_options=request_options))

    async def v1_watchlist_delete_v1_watchlist_delete(
        self,
        *,
        label: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Remove one item from your watchlist (?label=BTC) or clear it entirely (no label). Per-user.

        Args:
            label: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_watchlist_delete_v1_watchlist_delete(
                label=label,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_watchlist_get_v1_watchlist_get(
        self,
        *,
        pull: bool | None = False,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Your saved watchlist — the subjects/tools you monitor. ?pull=true runs every watched tool and returns each
        one's CURRENT value in a single call (your whole dashboard at once). Per-user, keyed by your API key
        (X-API-Key).

        Args:
            pull: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_watchlist_get_v1_watchlist_get(
                pull=pull,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_watchlist_post_v1_watchlist_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Add to or replace your watchlist. Body {"label":"BTC","tool":"cite","args":{"subject":"BTC"}} adds one item;
        body {"items":[...]} replaces the whole list (max 25). Each item's ``tool`` must be a real Dynamic Feed tool.
        Per-user, keyed by your API key.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_watchlist_post_v1_watchlist_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_webhooks_create_v1_webhooks_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Register a webhook that fires when a tool's value CHANGES. Body:
        {"url":"https://you.example/hook","tool":"exploited_vulnerabilities","args":{}}. The URL is validated SSRF-safe
        (public http/https only). Returns a one-time ``secret`` — every delivery is HMAC-SHA256 signed with it (header
        X-DynamicFeed-Signature: sha256=…), so you can verify it came from us. Per-user (X-API-Key).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_webhooks_create_v1_webhooks_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_webhooks_delete_v1_webhooks_delete(
        self,
        *,
        id_: int | None = 0,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete one of your webhook subscriptions by ?id=. Per-user.

        Args:
            id_: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_webhooks_delete_v1_webhooks_delete(
                id_=id_,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_webhooks_list_v1_webhooks_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """List your webhook subscriptions (secrets are never returned). Per-user.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_webhooks_list_v1_webhooks_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_webhooks_test_v1_webhooks_test_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a signed TEST delivery to one of your subscriptions now — confirm your endpoint receives it and the HMAC
        validates. Body: {"id": }. Per-user.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_webhooks_test_v1_webhooks_test_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def v1_witness_inclusion_v1_witness_idx_inclusion_get(
        self, idx: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """SUCCINCT, browser-verifiable inclusion proof that witness/notary entry {idx} is in the append-only log — an
        O(log n) RFC-6962 Merkle audit path to a tree root we Ed25519-SIGN (the checkpoint). Any party folds leaf ->
        root in their own browser and checks the checkpoint signature against /.well-known/keys, with NO trust in
        Dynamic Feed's word (only its published key). Keyless. Recipe: leaf = sha256(0x00 ‖ content_hash_bytes); node =
        sha256(0x01 ‖ left ‖ right); fold the audit_path (each {sibling, side}) up to root_sha256; confirm it equals the
        signed checkpoint.root_sha256, then verify the checkpoint Ed25519 signature. In-browser via /verify.js
        verifyInclusion(). Complements GET /v1/notary/log/{idx}/proof (the O(n) chain replay): the chain proves
        append-order, this proves succinct membership in a signed tree.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_witness_inclusion_v1_witness_idx_inclusion_get(
                idx, request_options=request_options
            ),
        )

    async def v1_witness_sample_v1_witness_sample_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """A keyless, signed SAMPLE txn-receipt/v1 — for the /witness demo. Shows exactly what POST /v1/witness returns
        (without writing to the log or needing a key): a neutral witness of a sample machine-to-machine transaction
        record, with the recent-Bitcoin-block NOT-BEFORE time marker. Verify it in-browser via /verify.js, then flip a
        byte and watch verification fail.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.v1_witness_sample_v1_witness_sample_get(request_options=request_options)
        )

    async def v1_witness_v1_witness_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """WITNESS a machine-to-machine / agent-to-agent transaction RECORD — a neutral, third-party, Ed25519-signed,
        transparency-logged, RFC 3161 timestampable receipt that this exact record EXISTED and is INTACT. Dynamic Feed
        sits BESIDE the transaction, NEVER in the value path: it only signs + timestamps + anchors a HASH of a record
        you give it. It never accepts, holds, routes, converts or custodies funds or anything of value. Send the record
        ({"payload": }) or keep it private ({"content_hash": ""}). Optional: parties[] (opaque ids — NO PII), txn_ref
        (opaque), and a BYO-key agent co-signature (provider_pubkey + provider_sig, Ed25519 over the ascii-hex hash) so
        the receipt reads "agent attested, Dynamic Feed witnessed". Auth: a FREE key (POST /signup) — no KYC. PROVES:
        the record existed at issued_at, is intact (tamper-EVIDENT, verifiable via /verify.js against
        /.well-known/keys), and which agent key co-signed. Does NOT prove the transaction was authorized, correct,
        lawful, completed, or that any value moved. Profile of receipt/v1. Anchor independently via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_witness_v1_witness_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAgentWithRawResponse:
        return self._with_raw_response


class AgentWithRawResponse(BaseRawResponse[RawClient, Server]):
    def post_v1_explain(
        self, *, subject: str | None = "", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, PostV1ExplainErrorBody]:
        """Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."} (POST) — a
        tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s), licence, official URL,
        update cadence and the full custody trail (origin -> ingest -> normalize -> serve, plus sign/anchor for
        awareness), so you can trace and verify where a number came from. Keyless.

        Args:
            subject: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/explain"),
            query_params=[param[str | None]("subject", subject)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=post_v1_explain_error_mapper,
            request_options=request_options,
        )

    def schemas_index_schemas_index_json_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """The Dynamic Feed receipt-schema family, self-describing (DF-VERIFY/1). Scans the schema directory at request
        time so it never drifts: every profile's $id, title and active mint endpoint when one exists.
        Deprecated/quarantined schemas remain visible as history, not as executable capabilities. Schema conformance and
        signature mathematics are separate from lifecycle acceptance.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/schemas/index.json"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_agent_receipt_v1_agent_receipt_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Agent receipt. A signed, re-checkable record of what an AI agent acted on and what it decided. The
        operational-integrity primitive for the agent economy: prove, after the fact, the inputs behind an agent's
        action. Body: {"agent": "...", "action": "...", "inputs": }, plus optional "model", "decision", "context".
        Returns an agent-receipt/v1 with a detached Ed25519 signature (verify against GET /.well-known/keys: drop the
        ``signature`` field, canonicalize json-sorted-compact). Anchor the hash via RFC 3161 via POST /v1/anchor.
        Keyless. Advisory evidence and a neutral witness: it proves what the agent was given and did, never that the
        decision was correct, and it never moves anything. Spec: https://dynamicfeed.ai/standard

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/agent/receipt"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_asof_v1_asof_get(
        self,
        tool: str,
        t: str,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1AsofV1AsofGetErrorBody]:
        """TIME-MACHINE REPLAY — what did the data say at decision time? Returns the archived observation for ``tool``
        nearest at-or-before time ``t``, replayed VERBATIM from Dynamic Feed's append-only archive (capturing every
        served datapoint since 2026-06-07) — the value as served then, never a re-fetch or reconstruction. The response
        carries honest metadata (``archived_at``, ``distance_seconds`` from your requested instant, the exact archive
        object, where coverage begins) and is Ed25519-signed (verify against GET /.well-known/keys) — built for agent
        backtesting, audit trails and "what did we know when we decided" disputes. Honest about coverage: a time the
        archive didn't capture returns a clear miss with the nearest captured day, never a fabricated past. Paid plans
        (Pro and up); auth via the X-API-Key header. Upgrade: https://dynamicfeed.ai/dashboard

        Args:
            tool: tool name, e.g. current_weather (the keyless MCP tool names)
            t: ISO-8601 timestamp, e.g. 2026-06-10T14:30:00Z
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/asof"),
            query_params=[param[str]("tool", tool), param[str]("t", t)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_asof_v1_asof_get_error_mapper,
            request_options=request_options,
        )

    def v1_attest_v1_attest_get(
        self,
        metric: str,
        threshold: float,
        *,
        op: str | None = "gte",
        lat: float | None = None,
        lon: float | None = None,
        city: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1AttestV1AttestGetErrorBody]:
        """Signed parametric-trigger attestation — evaluate 'metric op threshold' at a location against the live
        measurement and return a tamper-evident, Ed25519-signed MET / NOT-MET record. The dispute-proof oracle a
        parametric-insurance payout can settle against. metric: wind_kmh | temperature_c | feels_like_c |
        precipitation_mm. op: gt | gte | lt | lte. Verify against GET /.well-known/keys; timestamp via POST /v1/anchor
        (RFC 3161) for independent proof of when.

        Args:
            metric: Value sent with the request.
            threshold: Value sent with the request.
            op: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            city: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/attest"),
            query_params=[
                param[str]("metric", metric),
                param[float]("threshold", threshold),
                param[str | None]("op", op),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[str | None]("city", city),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_attest_v1_attest_get_error_mapper,
            request_options=request_options,
        )

    def v1_batch_v1_batch_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Run up to 20 read-only data-tool calls in ONE request — cuts agent round-trips. Keyless. Body:
        {"calls":[{"tool":"current_weather","args":{"city":"London"}}, {"tool":"earthquakes","args":{}}]}. Returns
        {"results":[{"tool","ok","data"|"error"}, ...]} in the same order. Tool names are the keyless MCP tools; POST
        with no ``calls`` returns the available list. Each call has its own 20s deadline, so a slow upstream degrades
        that one item rather than blocking the batch.

        Add "facts": true to the body to get each result as a canonical, reliability-graded fact instead of raw data:
        {"tool","ok","fact":{value, provenance, verification, reliability{confidence,basis,sources,
        verified,vantage,conflict}}}. The whole response is Ed25519-signed (verify against /.well-known/keys), so this
        is verifiable, reliability-graded, multi-tool data in one round-trip. Default shape is unchanged.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_benchmark_history_v1_benchmark_history_get(
        self, *, days: int | None = 90, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody]:
        """DRIFT OVER TIME — daily snapshots of the live-facts benchmark (GET /v1/benchmark), oldest first. Each
        snapshot is the items array exactly as measured that day, so diffing consecutive snapshots shows how fast
        reality moves away from any fixed training cutoff: rates shift, releases ship, CVEs land. History starts at
        first_snapshot_at and grows one snapshot per day. Human-readable charts at /benchmark/history. Ed25519-signed.
        Keyless.

        Args:
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/benchmark/history"),
            query_params=[param[int | None]("days", days)],
            decoder=json_decoder[Any],
            error_mapper=v1_benchmark_history_v1_benchmark_history_get_error_mapper,
            request_options=request_options,
        )

    def v1_benchmark_v1_benchmark_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """The LIVE-FACTS BENCHMARK — a continuously-refreshed eval of facts that move after a model's training cutoff.
        Ask a model these questions WITHOUT tools and grade against the answers measured from authoritative sources at
        call time: every frozen model fails; a grounded agent passes. Each item carries its grading rule, source and
        measured_at; the whole set is Ed25519-signed so a published score is verifiable evidence, not a claim.
        Regenerate per run — answers are time-sensitive by design. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/benchmark"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_bundle_v1_bundles_bundle_id_get(
        self, bundle_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1BundleV1BundlesBundleIdGetErrorBody]:
        """One curated tool bundle by id (e.g. devsecops, weather-climate, finance-markets).

        Args:
            bundle_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bundles/{bundle_id}"),
            path_params=[param[str]("bundle_id", bundle_id)],
            decoder=json_decoder[Any],
            error_mapper=v1_bundle_v1_bundles_bundle_id_get_error_mapper,
            request_options=request_options,
        )

    def v1_bundles_v1_bundles_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Curated tool BUNDLES per domain — pick the right tools for your agent's use-case fast (instead of sifting all
        tools). Keyless: call any tool via POST /v1/batch; pay-per-call via /v1/pro/*.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bundles"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_bushfire_v1_bushfire_get(
        self,
        *,
        lat: float | None = None,
        lon: float | None = None,
        radius_km: float | None = 150.0,
        state: str | None = "",
        limit: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1BushfireV1BushfireGetErrorBody]:
        """Signed Australian bushfire/fire hotspots (last ~3 days) from Geoscience Australia / Digital Earth Australia
        Hotspots — keyless, CC BY 4.0. lat & lon (+ radius_km) for hotspots near a point, a state code
        (NSW/QLD/VIC/SA/WA/TAS/NT/ACT), or neither for recent Australia-wide. Ed25519-signed; verify against GET
        /.well-known/keys. A hotspot is a satellite thermal anomaly — not every one is a confirmed bushfire.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            radius_km: Value sent with the request.
            state: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bushfire"),
            query_params=[
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[float | None]("radius_km", radius_km),
                param[str | None]("state", state),
                param[int | None]("limit", limit),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_bushfire_v1_bushfire_get_error_mapper,
            request_options=request_options,
        )

    def v1_checkpoint_proof_v1_checkpoints_day_proof_get(
        self, day: str, *, kind: str | None = "ots", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1CheckpointProofV1CheckpointsDayProofGetErrorBody]:
        """The raw witness proof for one day's archive checkpoint. kind=ots (default) returns the DLT-timestamp .ots
        bytes (verify: ots verify -d checkpoint-.ots); kind=rfc3161 returns the RFC 3161 timestamp token DER from the
        independent TSA (verify: openssl ts -reply -in checkpoint-.tsr -text, then openssl ts -verify -digest -sha256
        -in checkpoint-.tsr). Offline runner for both witnesses: scripts/verify_checkpoint.py. Keyless.

        Args:
            day: Value sent with the request.
            kind: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/checkpoints/{day}/proof"),
            path_params=[param[str]("day", day)],
            query_params=[param[str | None]("kind", kind)],
            decoder=json_decoder[Any],
            error_mapper=v1_checkpoint_proof_v1_checkpoints_day_proof_get_error_mapper,
            request_options=request_options,
        )

    def v1_checkpoints_v1_checkpoints_get(
        self, *, limit: int | None = 30, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1CheckpointsV1CheckpointsGetErrorBody]:
        """Daily ARCHIVE CHECKPOINTS, newest first — the append-only claim made independently checkable. Each entry
        carries the signed archive-day/v1 document: a SHA-256 digest of that day's full archive listing, per-feed object
        counts, the previous day's digest (the chain), and the anchor status of a DLT-timestamp proof committing the
        digest to a public distributed ledger (RFC 3161 on fallback). Keyless.

        Args:
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/checkpoints"),
            query_params=[param[int | None]("limit", limit)],
            decoder=json_decoder[Any],
            error_mapper=v1_checkpoints_v1_checkpoints_get_error_mapper,
            request_options=request_options,
        )

    def v1_discover_get_v1_discover_get(
        self,
        *,
        need: str | None = "",
        limit: int | None = 8,
        external: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1DiscoverGetV1DiscoverGetErrorBody]:
        """CAPABILITY DISCOVERY — ask in plain words what you need ("live rainfall in Brisbane", "sanctions screening",
        "satellite positions") and get a ranked, Ed25519-signed list of candidate capabilities: Dynamic Feed's own tools
        with MEASURED 24h uptime/latency and a keyless call recipe, plus matching external MCP servers from the official
        registry index, honestly marked registry-reported and unmeasured. Advisory discovery with an explicit vantage
        per candidate, not an endorsement. Keyless.

        Args:
            need: Value sent with the request.
            limit: Value sent with the request.
            external: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/discover"),
            query_params=[
                param[str | None]("need", need),
                param[int | None]("limit", limit),
                param[int | None]("external", external),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_discover_get_v1_discover_get_error_mapper,
            request_options=request_options,
        )

    def v1_discover_post_v1_discover_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """POST twin of GET /v1/discover: {"need": "...", "limit": 8, "external": true}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/discover"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_drift_v1_drift_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Drift detection — audit an AI's stated facts against live ground-truth, graded by severity. Keyless. Body:
        {"claims":["The latest Python is 3.11","Node.js is on 18"]} or {"text":""}. Returns {checked, drifted_count,
        overall, results:[{claim, status, drifted, severity, correction, source}]}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/drift"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_eval_receipt_sample_v1_eval_receipt_sample_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """A keyless, signed SAMPLE eval-receipt/v1 — a 'Verified Eval' run against a sealed, committed test set (the
        set stays private; only its commitment is signed). Verify it in-browser via /verify.js, then flip a byte and
        watch verification fail. Advisory evidence only — DF witnesses the committed run, it does not re-run or certify
        the benchmark.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/eval-receipt/sample"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_eval_receipt_v1_eval_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1EvalReceiptV1EvalReceiptPostErrorBody]:
        """WITNESS an AI EVALUATION run — the neutral 'Verified Eval' stamp for the contamination-proof- benchmark era.
        The lab commits its test set as a salted sha256 BEFORE the run (``set_commitment``), so the set stays PRIVATE
        while the run becomes un-retunable after the fact — solving the evaluator's dilemma of having to expose a
        private set to be trusted. Ed25519-signed, transparency-logged, RFC 3161 timestampable. Body: {"eval_name": "",
        "model_id": "", "metric": "pass@1", "score": 0.58, "set_commitment": ""} plus optional n, run_sha256 (hash of
        the full transcript), harness, and a BYO-key co-signature. Auth: a FREE key (POST /signup). ADVISORY EVIDENCE
        ONLY — Dynamic Feed does NOT re-run or verify the score, and does NOT certify the benchmark is
        fair/representative/contamination-free; it witnesses the COMMITTED run so no party can retune it retroactively.
        Profile of receipt/v1. Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/eval-receipt"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_eval_receipt_v1_eval_receipt_post_error_mapper,
            request_options=request_options,
        )

    def v1_evidence_wildfire_v1_evidence_wildfire_get(
        self,
        lat: float,
        lon: float,
        *,
        detected_at: str | None = None,
        detector: str | None = "the detector",
        place: str | None = None,
        confidence: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1EvidenceWildfireV1EvidenceWildfireGetErrorBody]:
        """Chain-of-custody EVIDENCE record for a wildfire detection. Wraps a SELF-REPORTED detection (detector,
        lat/lon, time) with Dynamic Feed's INDEPENDENT context captured at that location the moment it's requested —
        fire-weather, near-term forecast, air quality (smoke), and tracked EONET wildfire events — each datapoint
        carrying its source, licence and age. The whole record is Ed25519-signed so any party can verify it OFFLINE
        against /.well-known/keys, WITHOUT trusting the detector or Dynamic Feed. Advisory evidence + audit layer: it
        does NOT make, certify, or sit in the safety-critical path of the detection — it makes the surrounding context
        provable later (an insurer claim, a liability review, an SLA). Keyless. Anchor via RFC 3161 via POST /v1/anchor
        for proof-of-when independent of us.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            detected_at: Value sent with the request.
            detector: Value sent with the request.
            place: Value sent with the request.
            confidence: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/evidence/wildfire"),
            query_params=[
                param[float]("lat", lat),
                param[float]("lon", lon),
                param[str | None]("detected_at", detected_at),
                param[str | None]("detector", detector),
                param[str | None]("place", place),
                param[str | None]("confidence", confidence),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_evidence_wildfire_v1_evidence_wildfire_get_error_mapper,
            request_options=request_options,
        )

    def v1_explain_v1_explain_get(
        self, *, subject: str | None = "", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1ExplainV1ExplainGetErrorBody]:
        """Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."} (POST) — a
        tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s), licence, official URL,
        update cadence and the full custody trail (origin -> ingest -> normalize -> serve, plus sign/anchor for
        awareness), so you can trace and verify where a number came from. Keyless.

        Args:
            subject: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/explain"),
            query_params=[param[str | None]("subject", subject)],
            decoder=json_decoder[Any],
            error_mapper=v1_explain_v1_explain_get_error_mapper,
            request_options=request_options,
        )

    def v1_exposure_report_v1_exposure_report_get(
        self,
        *,
        perils: str | None = "wind,flood,wildfire",
        lat: float | None = -33.8688,
        lon: float | None = 151.2093,
        place: str | None = None,
        organisation: str | None = None,
        use_case: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1ExposureReportV1ExposureReportGetErrorBody]:
        """Automated, signed EXPOSURE REPORT. Maps the perils a decision depends on to the external readings that decide
        them, flags where those readings are unverifiable today, and attaches a LIVE signed sample observation for each,
        so an organisation can see where its decisions rely on data it cannot independently check. Fully automated, no
        human in the loop. Ed25519-signed; verify offline at /.well-known/keys. Advisory evidence, not a certification
        or legal/financial advice.

        Args:
            perils: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            place: Value sent with the request.
            organisation: Value sent with the request.
            use_case: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/exposure-report"),
            query_params=[
                param[str | None]("perils", perils),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[str | None]("place", place),
                param[str | None]("organisation", organisation),
                param[str | None]("use_case", use_case),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_exposure_report_v1_exposure_report_get_error_mapper,
            request_options=request_options,
        )

    def v1_guard_v1_guard_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Pre-answer guard — the anti-hallucination middleware. POST the draft answer your AI is about to send; get
        back a verdict of "pass" or "revise" plus the exact corrections, so you can fix it BEFORE the user sees it.
        Keyless. Wrap it around any LLM response pipeline. Body: {"answer":""} or {"claims":["...","..."]}. Returns
        {verdict:"pass"|"revise", checked, issues:[{claim, subject, severity, correction, source}], confirmed,
        unverifiable, guidance}. Only claims that CONTRADICT live data trigger "revise"; opinions and facts no live feed
        can cover pass through untouched. Verifies prices, software versions, market open/closed and service up/down
        against Dynamic Feed's live ground-truth.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/guard"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_index_v1_get(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """The Dynamic Feed agent & robot API at a glance — every /v1 capability, what it does, and a copy-paste
        example. The fastest way for a developer (or an agent) to discover the whole surface. Keyless unless noted.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_inference_receipt_sample_v1_inference_receipt_sample_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """A keyless, signed SAMPLE inference-receipt/v1 — for the /receipts demo. Shows what POST /v1/inference-receipt
        returns: a neutral witness of a sample inference where the provider served a DIFFERENT model than requested and
        set its own fallback flag (illustrative, vendor-neutral). Verify it in-browser via /verify.js, then flip a byte
        and watch verification fail.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/inference-receipt/sample"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_inference_receipt_v1_inference_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1InferenceReceiptV1InferenceReceiptPostErrorBody]:
        """WITNESS a single AI model INFERENCE — a neutral, Ed25519-signed, transparency-logged, RFC 3161 timestampable
        receipt that this inference record EXISTED and is INTACT. Privacy by CONSTRUCTION: the caller hashes the prompt
        + response LOCALLY and sends ONLY fixed-length sha256 hashes + non-PII metadata. Body: {"claimed_model": "",
        "prompt_sha256": "", "response_sha256": ""} plus optional requested_model, latency_ms, token_count,
        fallback_flag (the provider's OWN flag), provider, region, and a BYO-key agent co-signature (provider_pubkey +
        provider_sig). Auth: a FREE key (POST /signup) — no KYC. PROVES: the record existed at issued_at and is intact
        (tamper-EVIDENT, verifiable via /verify.js against /.well-known/keys). Does NOT independently verify which model
        actually ran, does NOT adjudicate that a 'downgrade' occurred, does NOT score quality — model_match is a literal
        string comparison and the holder draws any inference. Profile of receipt/v1. Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/inference-receipt"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_inference_receipt_v1_inference_receipt_post_error_mapper,
            request_options=request_options,
        )

    def v1_intensity_v1_intensity_get(
        self,
        lat: float,
        lon: float,
        *,
        peril: str | None = "flood",
        metric: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1IntensityV1IntensityGetErrorBody]:
        """INTENSITY-AT-LOCATION (DF-VERIFY/1 ``intensity/v1``) — the parameter value at an exact coordinate, signed and
        reproducible: the settlement-grade reading a parametric trigger evaluates against. Not 'an event happened' but
        'the value at this lat/lon, from the region's authoritative source'. v1 peril: flood — routed by coordinate to
        the nearest official river gauge: AU -> BoM Water Data Online (water-course level m; CC BY 4.0), US -> USGS NWIS
        (gage height ft / discharge ft3/s). Point-resolved, no interpolation. drought, wildfire and earthquake
        (ShakeMap) intensity are rolling in. Verify the Ed25519 signature against GET /.well-known/keys; re-fetch
        source_url to reproduce raw_reading_hash (see hash_method). SCOPE: attests the reading at the cited official
        gauge — NOT a basin-wide determination or physical loss.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            peril: Value sent with the request.
            metric: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/intensity"),
            query_params=[
                param[float]("lat", lat),
                param[float]("lon", lon),
                param[str | None]("peril", peril),
                param[str | None]("metric", metric),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_intensity_v1_intensity_get_error_mapper,
            request_options=request_options,
        )

    def v1_me_v1_me_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1MeV1MeGetErrorBody]:
        """Your key at a glance — plan, calls used today, daily quota and remaining. The per-user usage view (the
        keyless MCP endpoint is unmetered fair-use).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/me"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_me_v1_me_get_error_mapper,
            request_options=request_options,
        )

    def v1_nearby_v1_nearby_get(
        self,
        lat: float,
        lon: float,
        *,
        radius_km: float | None = 500.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1NearbyV1NearbyGetErrorBody]:
        """Signed situational scan: live hazards near a point — earthquakes (USGS), natural events (NASA EONET:
        wildfires/volcanoes/floods/storms), major disasters (GDACS) and, in Australia, live satellite bushfire hotspots
        (Geoscience Australia) within radius_km, nearest first. Ed25519-signed (verify against GET /.well-known/keys).
        The 'what's around me' ping for any machine that moves — robots, drones, in-car AI assistants, fleet telematics
        — complements the go/caution/no-go verdict from /v1/awareness.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            radius_km: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/nearby"),
            query_params=[
                param[float]("lat", lat), param[float]("lon", lon), param[float | None]("radius_km", radius_km)
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_nearby_v1_nearby_get_error_mapper,
            request_options=request_options,
        )

    def v1_notarize_v1_notarize_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1NotarizeV1NotarizePostErrorBody]:
        """NOTARY for any data feed — a neutral third party witnesses YOUR data and returns a timestamped,
        Ed25519-signed notarization: proof these exact bytes existed at this moment, independently verifiable forever.
        Two modes — send the data ({"payload": }), or keep it private and send only its hash ({"payload_sha256": ""}).
        Optional "subject" names the publisher; "echo": false omits the payload from the record (hash retained). This
        attests that Dynamic Feed WITNESSED these bytes (or this hash) at witnessed_at — not that the content is true.
        Anchor via POST /v1/anchor for proof-of-when independent of us. Auth: X-API-Key (free key at POST /signup).
        'Let's Encrypt for data feeds' — your feed, signed, without building a signing stack.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/notarize"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_notarize_v1_notarize_post_error_mapper,
            request_options=request_options,
        )

    def v1_notary_entry_v1_notary_log_idx_get(
        self, idx: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1NotaryEntryV1NotaryLogIdxGetErrorBody]:
        """One transparency-log entry by index, Ed25519-signed, with the recipe to recompute its entry_hash and verify
        chain linkage. Keyless.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/notary/log/{idx}"),
            path_params=[param[int]("idx", idx)],
            decoder=json_decoder[Any],
            error_mapper=v1_notary_entry_v1_notary_log_idx_get_error_mapper,
            request_options=request_options,
        )

    def v1_notary_feed_register_v1_notary_feeds_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody]:
        """CONTINUOUS NOTARIZATION — register a feed URL and Dynamic Feed fetches it on your interval, notarizing every
        CHANGE into the public transparency log automatically: a standing, tamper-evident history of what your feed
        published, when. Body: {"url": "https://...", "subject": "Your Co", "interval_minutes": 180 (min 60)}. Beta: 3
        active feeds per key. The first fetch happens immediately and its notarization is returned.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/notary/feeds"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_notary_feed_register_v1_notary_feeds_post_error_mapper,
            request_options=request_options,
        )

    def v1_notary_feeds_list_v1_notary_feeds_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1NotaryFeedsListV1NotaryFeedsGetErrorBody]:
        """Your registered continuous-notarization feeds (same X-API-Key): status, last hash, last log index, next-run
        cadence.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/notary/feeds"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_notary_feeds_list_v1_notary_feeds_get_error_mapper,
            request_options=request_options,
        )

    def v1_notary_head_v1_notary_log_head_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """The transparency-log HEAD — count + chain head hash, Ed25519-signed. The anchorable artifact: altering ANY
        past notarization breaks every entry_hash after it and contradicts the anchored head. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/notary/log/head"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_notary_log_v1_notary_log_get(
        self, *, limit: int | None = 50, before: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1NotaryLogV1NotaryLogGetErrorBody]:
        """The PUBLIC TRANSPARENCY LOG of all notarizations — append-only, hash-chained (CT-style), newest first.
        Payload hashes only (never payloads): private by construction, tamper-evident by recipe. Page back with
        ?before=. Keyless.

        Args:
            limit: Value sent with the request.
            before: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/notary/log"),
            query_params=[param[int | None]("limit", limit), param[int | None]("before", before)],
            decoder=json_decoder[Any],
            error_mapper=v1_notary_log_v1_notary_log_get_error_mapper,
            request_options=request_options,
        )

    def v1_notary_proof_v1_notary_log_idx_proof_get(
        self, idx: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1NotaryProofV1NotaryLogIdxProofGetErrorBody]:
        """INCLUSION PROOF for a log entry: the consecutive chain of entries from this index to the most recently
        ANCHORED head (or the current head if no anchor covers it yet), plus the anchor record. Recompute each
        entry_hash and you have proven this entry is in the history the Bitcoin anchor commits to — no trust in Dynamic
        Feed required. Keyless.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/notary/log/{idx}/proof"),
            path_params=[param[int]("idx", idx)],
            decoder=json_decoder[Any],
            error_mapper=v1_notary_proof_v1_notary_log_idx_proof_get_error_mapper,
            request_options=request_options,
        )

    def v1_pro_asof_v1_pro_asof_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """PREMIUM keyless AS-OF REPLAY — pay-per-call (x402, USDC on Base) signed time-machine over Dynamic Feed's
        append-only archive. Body {"tool":"current_weather","t":"2026-06-10T14:30:00Z"} (or ?tool=&t=) -> the archived
        observation for ``tool`` nearest at-or-before ``t``, replayed VERBATIM, Ed25519-signed (verify against GET
        /.well-known/keys). The keyless paid channel to the SAME engine as the key-gated GET /v1/asof — for agent
        backtesting, audit trails and 'what did we know when we decided' disputes. No signup, no human; discoverable via
        the x402 bazaar. Honest about coverage: a time the archive didn't capture returns a clear miss, never a
        fabricated past.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/pro/asof"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_pro_batch_v1_pro_batch_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """PREMIUM, pay-per-call data batch — the commercial tier of /v1/batch, paid AGENT-NATIVELY via x402 (HTTP 402):
        an agent gets a price, pays from its wallet, re-calls with the X-PAYMENT header, and is served — no human, no
        signup. Up to 100 signed tool calls per request (free /v1/batch is fair-use, capped at 20). Dynamic Feed charges
        for its OWN service; a third-party facilitator settles the payment — DF never custodies funds
        (witness-not-money). Body: {"calls":[{"tool":...,"args":{...}}, ...]}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/pro/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_pro_catalog_v1_pro_catalog_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Machine-readable MENU of Dynamic Feed's x402 pay-per-call SKUs (USDC on Base) — the 'price list' an agent or
        x402 facilitator shops in one call: every paid endpoint, its price (live from X402_PRICE_ATOMIC), input/output
        schema, the recipient wallet (when connected), and the facilitator. Boundary: DF is the merchant; the
        facilitator settles — DF never custodies funds.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/pro/catalog"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_pro_tool_discover_v1_pro_tool_tool_get(
        self, tool: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1ProToolDiscoverV1ProToolToolGetErrorBody]:
        """Discovery for the paid single-call endpoint. A GET returns the x402 402 challenge — so an agent that probes
        with GET (instead of a 'Method Not Allowed' dead end) still learns the price, the asset, and that it must POST
        with an X-PAYMENT header + {"args":{...}} body. NO payment is taken on GET; settlement only ever happens on
        POST. Pure discovery, no money path.

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/pro/tool/{tool}"),
            path_params=[param[str]("tool", tool)],
            decoder=json_decoder[Any],
            error_mapper=v1_pro_tool_discover_v1_pro_tool_tool_get_error_mapper,
            request_options=request_options,
        )

    def v1_pro_tool_v1_pro_tool_tool_post(
        self, tool: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1ProToolV1ProToolToolPostErrorBody]:
        """PREMIUM single signed tool call — pay-per-call (x402, USDC on Base) for ANY one of Dynamic Feed's live tools.
        An agent pays once, gets one Ed25519-signed datapoint. No signup, no human. Body: {"args":{...}}. Discoverable
        via the x402 bazaar. (Free alternative: keyless /v1/batch, fair-use.)

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/pro/tool/{tool}"),
            path_params=[param[str]("tool", tool)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=v1_pro_tool_v1_pro_tool_tool_post_error_mapper,
            request_options=request_options,
        )

    def v1_proxy_witness_v1_proxy_witness_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1ProxyWitnessV1ProxyWitnessPostErrorBody]:
        """PROXY WITNESS, route any third-party API call through Dynamic Feed and get a signed, archived receipt of
        exactly what that URL returned to us at this moment. Body: {"url": "https://...", "method": "GET"|"POST"|...,
        "headers": {...}, "body": "...", "echo": false, "subject": "..."}. We fetch server-side under an SSRF guard
        (only public http/https targets; private and reserved addresses blocked; redirects not followed), redact your
        request credentials from the record, and sign a proxy-witness/v1 envelope carrying the response status,
        content-type, size and SHA-256 (the full body only when echo:true and small; our archive is hash-first and never
        keeps the body). Witnesses what the URL returned to us, not that the content is true; never the money path.
        Auth: X-API-Key (free key at POST /signup).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/proxy-witness"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_proxy_witness_v1_proxy_witness_post_error_mapper,
            request_options=request_options,
        )

    def v1_receipt_v1_receipt_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Evidence receipt — wrap any fact/claim/data in a timestamped, Ed25519-SIGNED record: provable evidence of
        what an AI was told (or asserted), and when. Body: {"data": } or {"claim":"..."}. Returns the receipt + a
        detached signature (verify against GET /.well-known/keys); anchor its hash to RFC 3161 via POST /v1/anchor.
        Keyless. An audit-trail input for regulated AI (fintech / legal / medical).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/receipt"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_snapshot_v1_snapshot_get(
        self, *, date: str | None = "", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1SnapshotV1SnapshotGetErrorBody]:
        """Historical world-state — what Dynamic Feed reported on a given day. ?date=YYYY-MM-DD returns that day's
        stored snapshot (the cross-domain world_pulse digest); no date returns today's, captured on read. Honest about
        coverage: a date before the earliest snapshot returns the available range, never a fabricated past. Keyless. The
        auditable companion to the signed/RFC 3161 timestamped awareness layer.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/snapshot"),
            query_params=[param[str | None]("date", date)],
            decoder=json_decoder[Any],
            error_mapper=v1_snapshot_v1_snapshot_get_error_mapper,
            request_options=request_options,
        )

    def v1_sources_v1_sources_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """The authoritative source catalog — every upstream feed Dynamic Feed serves, with its publisher, official URL,
        licence, whether commercial use + redistribution is permitted, update cadence, and the tools it backs. Keyless.
        Each datapoint is provenance-stamped (source, licence, timestamp) so you can cite it and verify usage rights
        yourself.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sources"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_stamp_v1_stamp_post(
        self, *, x_api_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1StampV1StampPostErrorBody]:
        """Create an independently verifiable record of submitted JSON.

        ``X-API-Key`` is optional so the existing keyless signing behaviour remains available. When a key is supplied it
        is always validated: portal ``fx_live_`` keys use the isolated Fluxdyne runtime database boundary, while legacy
        keys keep their existing validation and metering path. A signature establishes integrity and issuer identity; it
        does not establish that submitted content is complete, scientifically valid, or true.

        Args:
            x_api_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/stamp"),
            headers=[param[str | None]("x-api-key", x_api_key), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=v1_stamp_v1_stamp_post_error_mapper,
            request_options=request_options,
        )

    def v1_station_get_v1_station_station_id_get(
        self, station_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1StationGetV1StationStationIdGetErrorBody]:
        """The public descriptor of a registered station (no owner identity). Keyless, so a verifier of a
        station-receipt can see what the station is and what it reports.

        Args:
            station_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/station/{station_id}"),
            path_params=[param[str]("station_id", station_id)],
            decoder=json_decoder[Any],
            error_mapper=v1_station_get_v1_station_station_id_get_error_mapper,
            request_options=request_options,
        )

    def v1_station_reading_v1_station_reading_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1StationReadingV1StationReadingPostErrorBody]:
        """Witness one reading your station reported: get back a signed station-receipt/v1 stating, in words, that the
        value is self-reported by your station and only WITNESSED (not measured) by Dynamic Feed. Body: {"station_id":
        "stn_...", "quantity": "wind_kmh", "value": 12.4, "unit": "km/h", "observed_at": "..."}. Keyless verification
        against /.well-known/keys. Auth: X-API-Key.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/station/reading"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_station_reading_v1_station_reading_post_error_mapper,
            request_options=request_options,
        )

    def v1_station_register_v1_station_register_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1StationRegisterV1StationRegisterPostErrorBody]:
        """WE SIGN YOUR STATION, register your own sensor so its readings can be witnessed as signed receipts. Body:
        {"name": "...", "location": {"lat": .., "lon": ..}, "quantities": ["wind_kmh", ...]}. Returns a station_id +
        provenance. Dynamic Feed witnesses what your station reports; it does not measure the value. Your key is stored
        only as a non-reversible hash. Auth: X-API-Key (free key at POST /signup).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/station/register"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_station_register_v1_station_register_post_error_mapper,
            request_options=request_options,
        )

    def v1_stream_v1_stream_get(
        self,
        *,
        tool: str | None = "",
        args: str | None = "",
        interval: float | None = 15.0,
        count: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1StreamV1StreamGetErrorBody]:
        """Server-Sent Events stream of a LIVE value. Point an EventSource at /v1/stream?tool=&args=&interval=&count=
        and receive the tool's current value every ``interval`` seconds as a ``value`` event, until ``count`` updates or
        you disconnect. Keyless. Bounded for fair use: interval 5-300s, count 1-60. Example:
        /v1/stream?tool=cite&args={"subject":"BTC"}&interval=10

        Args:
            tool: Value sent with the request.
            args: Value sent with the request.
            interval: Value sent with the request.
            count: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stream"),
            query_params=[
                param[str | None]("tool", tool),
                param[str | None]("args", args),
                param[float | None]("interval", interval),
                param[int | None]("count", count),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_stream_v1_stream_get_error_mapper,
            request_options=request_options,
        )

    def v1_trigger_receipt_v1_trigger_receipt_get(
        self,
        metric: str,
        threshold: float,
        *,
        op: str | None = "gte",
        lat: float | None = None,
        lon: float | None = None,
        city: str | None = None,
        peril: str | None = None,
        contract_ref: str | None = None,
        methodology: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1TriggerReceiptV1TriggerReceiptGetErrorBody]:
        """Parametric catastrophe TRIGGER RECEIPT (DF-VERIFY/1 ``trigger-receipt/v1``) — the dispute-proof oracle a
        parametric payout settles against. Evaluates 'metric op threshold' at a location against the live official
        reading and returns an Ed25519-signed receipt carrying the four properties that end a parametric dispute: (1) a
        pinned + hashed methodology (nobody moves the goalposts after the event); (2) the exact re-fetchable source_url
        + a raw_reading_hash anyone can reproduce (independent verifiability, not 'trust us'); (3) a deterministic
        determination — triggered + payout_factor + rationale, re-computable by any party; (4) the signature (timestamp
        via POST /v1/anchor (RFC 3161) for proof of when). Neutral calculation-agent-of- record: attests what the
        official source reported and what the pinned methodology implies — NOT ground-truth physical loss. v0.1 metrics:
        wind_kmh | temperature_c | feels_like_c | precipitation_mm (Open-Meteo). op: gt | gte | lt | lte. Verify against
        GET /.well-known/keys; schema at /schemas/trigger-receipt-v1.json.

        Args:
            metric: Value sent with the request.
            threshold: Value sent with the request.
            op: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            city: Value sent with the request.
            peril: Value sent with the request.
            contract_ref: Value sent with the request.
            methodology: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/trigger-receipt"),
            query_params=[
                param[str]("metric", metric),
                param[float]("threshold", threshold),
                param[str | None]("op", op),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[str | None]("city", city),
                param[str | None]("peril", peril),
                param[str | None]("contract_ref", contract_ref),
                param[str | None]("methodology", methodology),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_trigger_receipt_v1_trigger_receipt_get_error_mapper,
            request_options=request_options,
        )

    def v1_vc_v1_vc_post(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Security quarantine: legacy VC wrapping did not verify the inner receipt or role boundaries.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/vc"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_watchlist_delete_v1_watchlist_delete(
        self,
        *,
        label: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WatchlistDeleteV1WatchlistDeleteErrorBody]:
        """Remove one item from your watchlist (?label=BTC) or clear it entirely (no label). Per-user.

        Args:
            label: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/watchlist"),
            query_params=[param[str | None]("label", label)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_watchlist_delete_v1_watchlist_delete_error_mapper,
            request_options=request_options,
        )

    def v1_watchlist_get_v1_watchlist_get(
        self,
        *,
        pull: bool | None = False,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WatchlistGetV1WatchlistGetErrorBody]:
        """Your saved watchlist — the subjects/tools you monitor. ?pull=true runs every watched tool and returns each
        one's CURRENT value in a single call (your whole dashboard at once). Per-user, keyed by your API key
        (X-API-Key).

        Args:
            pull: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/watchlist"),
            query_params=[param[bool | None]("pull", pull)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_watchlist_get_v1_watchlist_get_error_mapper,
            request_options=request_options,
        )

    def v1_watchlist_post_v1_watchlist_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WatchlistPostV1WatchlistPostErrorBody]:
        """Add to or replace your watchlist. Body {"label":"BTC","tool":"cite","args":{"subject":"BTC"}} adds one item;
        body {"items":[...]} replaces the whole list (max 25). Each item's ``tool`` must be a real Dynamic Feed tool.
        Per-user, keyed by your API key.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/watchlist"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_watchlist_post_v1_watchlist_post_error_mapper,
            request_options=request_options,
        )

    def v1_webhooks_create_v1_webhooks_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WebhooksCreateV1WebhooksPostErrorBody]:
        """Register a webhook that fires when a tool's value CHANGES. Body:
        {"url":"https://you.example/hook","tool":"exploited_vulnerabilities","args":{}}. The URL is validated SSRF-safe
        (public http/https only). Returns a one-time ``secret`` — every delivery is HMAC-SHA256 signed with it (header
        X-DynamicFeed-Signature: sha256=…), so you can verify it came from us. Per-user (X-API-Key).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webhooks"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_webhooks_create_v1_webhooks_post_error_mapper,
            request_options=request_options,
        )

    def v1_webhooks_delete_v1_webhooks_delete(
        self,
        *,
        id_: int | None = 0,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WebhooksDeleteV1WebhooksDeleteErrorBody]:
        """Delete one of your webhook subscriptions by ?id=. Per-user.

        Args:
            id_: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/webhooks"),
            query_params=[param[int | None]("id", id_)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_webhooks_delete_v1_webhooks_delete_error_mapper,
            request_options=request_options,
        )

    def v1_webhooks_list_v1_webhooks_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WebhooksListV1WebhooksGetErrorBody]:
        """List your webhook subscriptions (secrets are never returned). Per-user.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_webhooks_list_v1_webhooks_get_error_mapper,
            request_options=request_options,
        )

    def v1_webhooks_test_v1_webhooks_test_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WebhooksTestV1WebhooksTestPostErrorBody]:
        """Send a signed TEST delivery to one of your subscriptions now — confirm your endpoint receives it and the HMAC
        validates. Body: {"id": }. Per-user.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webhooks/test"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_webhooks_test_v1_webhooks_test_post_error_mapper,
            request_options=request_options,
        )

    def v1_witness_inclusion_v1_witness_idx_inclusion_get(
        self, idx: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody]:
        """SUCCINCT, browser-verifiable inclusion proof that witness/notary entry {idx} is in the append-only log — an
        O(log n) RFC-6962 Merkle audit path to a tree root we Ed25519-SIGN (the checkpoint). Any party folds leaf ->
        root in their own browser and checks the checkpoint signature against /.well-known/keys, with NO trust in
        Dynamic Feed's word (only its published key). Keyless. Recipe: leaf = sha256(0x00 ‖ content_hash_bytes); node =
        sha256(0x01 ‖ left ‖ right); fold the audit_path (each {sibling, side}) up to root_sha256; confirm it equals the
        signed checkpoint.root_sha256, then verify the checkpoint Ed25519 signature. In-browser via /verify.js
        verifyInclusion(). Complements GET /v1/notary/log/{idx}/proof (the O(n) chain replay): the chain proves
        append-order, this proves succinct membership in a signed tree.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/witness/{idx}/inclusion"),
            path_params=[param[int]("idx", idx)],
            decoder=json_decoder[Any],
            error_mapper=v1_witness_inclusion_v1_witness_idx_inclusion_get_error_mapper,
            request_options=request_options,
        )

    def v1_witness_sample_v1_witness_sample_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """A keyless, signed SAMPLE txn-receipt/v1 — for the /witness demo. Shows exactly what POST /v1/witness returns
        (without writing to the log or needing a key): a neutral witness of a sample machine-to-machine transaction
        record, with the recent-Bitcoin-block NOT-BEFORE time marker. Verify it in-browser via /verify.js, then flip a
        byte and watch verification fail.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/witness/sample"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_witness_v1_witness_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WitnessV1WitnessPostErrorBody]:
        """WITNESS a machine-to-machine / agent-to-agent transaction RECORD — a neutral, third-party, Ed25519-signed,
        transparency-logged, RFC 3161 timestampable receipt that this exact record EXISTED and is INTACT. Dynamic Feed
        sits BESIDE the transaction, NEVER in the value path: it only signs + timestamps + anchors a HASH of a record
        you give it. It never accepts, holds, routes, converts or custodies funds or anything of value. Send the record
        ({"payload": }) or keep it private ({"content_hash": ""}). Optional: parties[] (opaque ids — NO PII), txn_ref
        (opaque), and a BYO-key agent co-signature (provider_pubkey + provider_sig, Ed25519 over the ascii-hex hash) so
        the receipt reads "agent attested, Dynamic Feed witnessed". Auth: a FREE key (POST /signup) — no KYC. PROVES:
        the record existed at issued_at, is intact (tamper-EVIDENT, verifiable via /verify.js against
        /.well-known/keys), and which agent key co-signed. Does NOT prove the transaction was authorized, correct,
        lawful, completed, or that any value moved. Profile of receipt/v1. Anchor independently via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/witness"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_witness_v1_witness_post_error_mapper,
            request_options=request_options,
        )


class AsyncAgentWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def post_v1_explain(
        self, *, subject: str | None = "", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, PostV1ExplainErrorBody]:
        """Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."} (POST) — a
        tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s), licence, official URL,
        update cadence and the full custody trail (origin -> ingest -> normalize -> serve, plus sign/anchor for
        awareness), so you can trace and verify where a number came from. Keyless.

        Args:
            subject: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/explain"),
            query_params=[param[str | None]("subject", subject)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=post_v1_explain_error_mapper,
            request_options=request_options,
        )

    async def schemas_index_schemas_index_json_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """The Dynamic Feed receipt-schema family, self-describing (DF-VERIFY/1). Scans the schema directory at request
        time so it never drifts: every profile's $id, title and active mint endpoint when one exists.
        Deprecated/quarantined schemas remain visible as history, not as executable capabilities. Schema conformance and
        signature mathematics are separate from lifecycle acceptance.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/schemas/index.json"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_agent_receipt_v1_agent_receipt_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Agent receipt. A signed, re-checkable record of what an AI agent acted on and what it decided. The
        operational-integrity primitive for the agent economy: prove, after the fact, the inputs behind an agent's
        action. Body: {"agent": "...", "action": "...", "inputs": }, plus optional "model", "decision", "context".
        Returns an agent-receipt/v1 with a detached Ed25519 signature (verify against GET /.well-known/keys: drop the
        ``signature`` field, canonicalize json-sorted-compact). Anchor the hash via RFC 3161 via POST /v1/anchor.
        Keyless. Advisory evidence and a neutral witness: it proves what the agent was given and did, never that the
        decision was correct, and it never moves anything. Spec: https://dynamicfeed.ai/standard

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/agent/receipt"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_asof_v1_asof_get(
        self,
        tool: str,
        t: str,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1AsofV1AsofGetErrorBody]:
        """TIME-MACHINE REPLAY — what did the data say at decision time? Returns the archived observation for ``tool``
        nearest at-or-before time ``t``, replayed VERBATIM from Dynamic Feed's append-only archive (capturing every
        served datapoint since 2026-06-07) — the value as served then, never a re-fetch or reconstruction. The response
        carries honest metadata (``archived_at``, ``distance_seconds`` from your requested instant, the exact archive
        object, where coverage begins) and is Ed25519-signed (verify against GET /.well-known/keys) — built for agent
        backtesting, audit trails and "what did we know when we decided" disputes. Honest about coverage: a time the
        archive didn't capture returns a clear miss with the nearest captured day, never a fabricated past. Paid plans
        (Pro and up); auth via the X-API-Key header. Upgrade: https://dynamicfeed.ai/dashboard

        Args:
            tool: tool name, e.g. current_weather (the keyless MCP tool names)
            t: ISO-8601 timestamp, e.g. 2026-06-10T14:30:00Z
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/asof"),
            query_params=[param[str]("tool", tool), param[str]("t", t)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_asof_v1_asof_get_error_mapper,
            request_options=request_options,
        )

    async def v1_attest_v1_attest_get(
        self,
        metric: str,
        threshold: float,
        *,
        op: str | None = "gte",
        lat: float | None = None,
        lon: float | None = None,
        city: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1AttestV1AttestGetErrorBody]:
        """Signed parametric-trigger attestation — evaluate 'metric op threshold' at a location against the live
        measurement and return a tamper-evident, Ed25519-signed MET / NOT-MET record. The dispute-proof oracle a
        parametric-insurance payout can settle against. metric: wind_kmh | temperature_c | feels_like_c |
        precipitation_mm. op: gt | gte | lt | lte. Verify against GET /.well-known/keys; timestamp via POST /v1/anchor
        (RFC 3161) for independent proof of when.

        Args:
            metric: Value sent with the request.
            threshold: Value sent with the request.
            op: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            city: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/attest"),
            query_params=[
                param[str]("metric", metric),
                param[float]("threshold", threshold),
                param[str | None]("op", op),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[str | None]("city", city),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_attest_v1_attest_get_error_mapper,
            request_options=request_options,
        )

    async def v1_batch_v1_batch_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Run up to 20 read-only data-tool calls in ONE request — cuts agent round-trips. Keyless. Body:
        {"calls":[{"tool":"current_weather","args":{"city":"London"}}, {"tool":"earthquakes","args":{}}]}. Returns
        {"results":[{"tool","ok","data"|"error"}, ...]} in the same order. Tool names are the keyless MCP tools; POST
        with no ``calls`` returns the available list. Each call has its own 20s deadline, so a slow upstream degrades
        that one item rather than blocking the batch.

        Add "facts": true to the body to get each result as a canonical, reliability-graded fact instead of raw data:
        {"tool","ok","fact":{value, provenance, verification, reliability{confidence,basis,sources,
        verified,vantage,conflict}}}. The whole response is Ed25519-signed (verify against /.well-known/keys), so this
        is verifiable, reliability-graded, multi-tool data in one round-trip. Default shape is unchanged.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_benchmark_history_v1_benchmark_history_get(
        self, *, days: int | None = 90, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody]:
        """DRIFT OVER TIME — daily snapshots of the live-facts benchmark (GET /v1/benchmark), oldest first. Each
        snapshot is the items array exactly as measured that day, so diffing consecutive snapshots shows how fast
        reality moves away from any fixed training cutoff: rates shift, releases ship, CVEs land. History starts at
        first_snapshot_at and grows one snapshot per day. Human-readable charts at /benchmark/history. Ed25519-signed.
        Keyless.

        Args:
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/benchmark/history"),
            query_params=[param[int | None]("days", days)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_benchmark_history_v1_benchmark_history_get_error_mapper,
            request_options=request_options,
        )

    async def v1_benchmark_v1_benchmark_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """The LIVE-FACTS BENCHMARK — a continuously-refreshed eval of facts that move after a model's training cutoff.
        Ask a model these questions WITHOUT tools and grade against the answers measured from authoritative sources at
        call time: every frozen model fails; a grounded agent passes. Each item carries its grading rule, source and
        measured_at; the whole set is Ed25519-signed so a published score is verifiable evidence, not a claim.
        Regenerate per run — answers are time-sensitive by design. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/benchmark"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_bundle_v1_bundles_bundle_id_get(
        self, bundle_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1BundleV1BundlesBundleIdGetErrorBody]:
        """One curated tool bundle by id (e.g. devsecops, weather-climate, finance-markets).

        Args:
            bundle_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bundles/{bundle_id}"),
            path_params=[param[str]("bundle_id", bundle_id)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_bundle_v1_bundles_bundle_id_get_error_mapper,
            request_options=request_options,
        )

    async def v1_bundles_v1_bundles_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Curated tool BUNDLES per domain — pick the right tools for your agent's use-case fast (instead of sifting all
        tools). Keyless: call any tool via POST /v1/batch; pay-per-call via /v1/pro/*.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bundles"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_bushfire_v1_bushfire_get(
        self,
        *,
        lat: float | None = None,
        lon: float | None = None,
        radius_km: float | None = 150.0,
        state: str | None = "",
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1BushfireV1BushfireGetErrorBody]:
        """Signed Australian bushfire/fire hotspots (last ~3 days) from Geoscience Australia / Digital Earth Australia
        Hotspots — keyless, CC BY 4.0. lat & lon (+ radius_km) for hotspots near a point, a state code
        (NSW/QLD/VIC/SA/WA/TAS/NT/ACT), or neither for recent Australia-wide. Ed25519-signed; verify against GET
        /.well-known/keys. A hotspot is a satellite thermal anomaly — not every one is a confirmed bushfire.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            radius_km: Value sent with the request.
            state: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bushfire"),
            query_params=[
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[float | None]("radius_km", radius_km),
                param[str | None]("state", state),
                param[int | None]("limit", limit),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_bushfire_v1_bushfire_get_error_mapper,
            request_options=request_options,
        )

    async def v1_checkpoint_proof_v1_checkpoints_day_proof_get(
        self, day: str, *, kind: str | None = "ots", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1CheckpointProofV1CheckpointsDayProofGetErrorBody]:
        """The raw witness proof for one day's archive checkpoint. kind=ots (default) returns the DLT-timestamp .ots
        bytes (verify: ots verify -d checkpoint-.ots); kind=rfc3161 returns the RFC 3161 timestamp token DER from the
        independent TSA (verify: openssl ts -reply -in checkpoint-.tsr -text, then openssl ts -verify -digest -sha256
        -in checkpoint-.tsr). Offline runner for both witnesses: scripts/verify_checkpoint.py. Keyless.

        Args:
            day: Value sent with the request.
            kind: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/checkpoints/{day}/proof"),
            path_params=[param[str]("day", day)],
            query_params=[param[str | None]("kind", kind)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_checkpoint_proof_v1_checkpoints_day_proof_get_error_mapper,
            request_options=request_options,
        )

    async def v1_checkpoints_v1_checkpoints_get(
        self, *, limit: int | None = 30, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1CheckpointsV1CheckpointsGetErrorBody]:
        """Daily ARCHIVE CHECKPOINTS, newest first — the append-only claim made independently checkable. Each entry
        carries the signed archive-day/v1 document: a SHA-256 digest of that day's full archive listing, per-feed object
        counts, the previous day's digest (the chain), and the anchor status of a DLT-timestamp proof committing the
        digest to a public distributed ledger (RFC 3161 on fallback). Keyless.

        Args:
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/checkpoints"),
            query_params=[param[int | None]("limit", limit)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_checkpoints_v1_checkpoints_get_error_mapper,
            request_options=request_options,
        )

    async def v1_discover_get_v1_discover_get(
        self,
        *,
        need: str | None = "",
        limit: int | None = 8,
        external: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1DiscoverGetV1DiscoverGetErrorBody]:
        """CAPABILITY DISCOVERY — ask in plain words what you need ("live rainfall in Brisbane", "sanctions screening",
        "satellite positions") and get a ranked, Ed25519-signed list of candidate capabilities: Dynamic Feed's own tools
        with MEASURED 24h uptime/latency and a keyless call recipe, plus matching external MCP servers from the official
        registry index, honestly marked registry-reported and unmeasured. Advisory discovery with an explicit vantage
        per candidate, not an endorsement. Keyless.

        Args:
            need: Value sent with the request.
            limit: Value sent with the request.
            external: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/discover"),
            query_params=[
                param[str | None]("need", need),
                param[int | None]("limit", limit),
                param[int | None]("external", external),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_discover_get_v1_discover_get_error_mapper,
            request_options=request_options,
        )

    async def v1_discover_post_v1_discover_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """POST twin of GET /v1/discover: {"need": "...", "limit": 8, "external": true}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/discover"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_drift_v1_drift_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Drift detection — audit an AI's stated facts against live ground-truth, graded by severity. Keyless. Body:
        {"claims":["The latest Python is 3.11","Node.js is on 18"]} or {"text":""}. Returns {checked, drifted_count,
        overall, results:[{claim, status, drifted, severity, correction, source}]}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/drift"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_eval_receipt_sample_v1_eval_receipt_sample_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """A keyless, signed SAMPLE eval-receipt/v1 — a 'Verified Eval' run against a sealed, committed test set (the
        set stays private; only its commitment is signed). Verify it in-browser via /verify.js, then flip a byte and
        watch verification fail. Advisory evidence only — DF witnesses the committed run, it does not re-run or certify
        the benchmark.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/eval-receipt/sample"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_eval_receipt_v1_eval_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1EvalReceiptV1EvalReceiptPostErrorBody]:
        """WITNESS an AI EVALUATION run — the neutral 'Verified Eval' stamp for the contamination-proof- benchmark era.
        The lab commits its test set as a salted sha256 BEFORE the run (``set_commitment``), so the set stays PRIVATE
        while the run becomes un-retunable after the fact — solving the evaluator's dilemma of having to expose a
        private set to be trusted. Ed25519-signed, transparency-logged, RFC 3161 timestampable. Body: {"eval_name": "",
        "model_id": "", "metric": "pass@1", "score": 0.58, "set_commitment": ""} plus optional n, run_sha256 (hash of
        the full transcript), harness, and a BYO-key co-signature. Auth: a FREE key (POST /signup). ADVISORY EVIDENCE
        ONLY — Dynamic Feed does NOT re-run or verify the score, and does NOT certify the benchmark is
        fair/representative/contamination-free; it witnesses the COMMITTED run so no party can retune it retroactively.
        Profile of receipt/v1. Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/eval-receipt"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_eval_receipt_v1_eval_receipt_post_error_mapper,
            request_options=request_options,
        )

    async def v1_evidence_wildfire_v1_evidence_wildfire_get(
        self,
        lat: float,
        lon: float,
        *,
        detected_at: str | None = None,
        detector: str | None = "the detector",
        place: str | None = None,
        confidence: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1EvidenceWildfireV1EvidenceWildfireGetErrorBody]:
        """Chain-of-custody EVIDENCE record for a wildfire detection. Wraps a SELF-REPORTED detection (detector,
        lat/lon, time) with Dynamic Feed's INDEPENDENT context captured at that location the moment it's requested —
        fire-weather, near-term forecast, air quality (smoke), and tracked EONET wildfire events — each datapoint
        carrying its source, licence and age. The whole record is Ed25519-signed so any party can verify it OFFLINE
        against /.well-known/keys, WITHOUT trusting the detector or Dynamic Feed. Advisory evidence + audit layer: it
        does NOT make, certify, or sit in the safety-critical path of the detection — it makes the surrounding context
        provable later (an insurer claim, a liability review, an SLA). Keyless. Anchor via RFC 3161 via POST /v1/anchor
        for proof-of-when independent of us.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            detected_at: Value sent with the request.
            detector: Value sent with the request.
            place: Value sent with the request.
            confidence: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/evidence/wildfire"),
            query_params=[
                param[float]("lat", lat),
                param[float]("lon", lon),
                param[str | None]("detected_at", detected_at),
                param[str | None]("detector", detector),
                param[str | None]("place", place),
                param[str | None]("confidence", confidence),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_evidence_wildfire_v1_evidence_wildfire_get_error_mapper,
            request_options=request_options,
        )

    async def v1_explain_v1_explain_get(
        self, *, subject: str | None = "", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1ExplainV1ExplainGetErrorBody]:
        """Explain the source / chain of custody for one subject. Pass ?subject= (GET) or {"subject":"..."} (POST) — a
        tool name (earthquakes), a source (USGS), or a topic. Returns the upstream source(s), licence, official URL,
        update cadence and the full custody trail (origin -> ingest -> normalize -> serve, plus sign/anchor for
        awareness), so you can trace and verify where a number came from. Keyless.

        Args:
            subject: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/explain"),
            query_params=[param[str | None]("subject", subject)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_explain_v1_explain_get_error_mapper,
            request_options=request_options,
        )

    async def v1_exposure_report_v1_exposure_report_get(
        self,
        *,
        perils: str | None = "wind,flood,wildfire",
        lat: float | None = -33.8688,
        lon: float | None = 151.2093,
        place: str | None = None,
        organisation: str | None = None,
        use_case: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1ExposureReportV1ExposureReportGetErrorBody]:
        """Automated, signed EXPOSURE REPORT. Maps the perils a decision depends on to the external readings that decide
        them, flags where those readings are unverifiable today, and attaches a LIVE signed sample observation for each,
        so an organisation can see where its decisions rely on data it cannot independently check. Fully automated, no
        human in the loop. Ed25519-signed; verify offline at /.well-known/keys. Advisory evidence, not a certification
        or legal/financial advice.

        Args:
            perils: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            place: Value sent with the request.
            organisation: Value sent with the request.
            use_case: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/exposure-report"),
            query_params=[
                param[str | None]("perils", perils),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[str | None]("place", place),
                param[str | None]("organisation", organisation),
                param[str | None]("use_case", use_case),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_exposure_report_v1_exposure_report_get_error_mapper,
            request_options=request_options,
        )

    async def v1_guard_v1_guard_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Pre-answer guard — the anti-hallucination middleware. POST the draft answer your AI is about to send; get
        back a verdict of "pass" or "revise" plus the exact corrections, so you can fix it BEFORE the user sees it.
        Keyless. Wrap it around any LLM response pipeline. Body: {"answer":""} or {"claims":["...","..."]}. Returns
        {verdict:"pass"|"revise", checked, issues:[{claim, subject, severity, correction, source}], confirmed,
        unverifiable, guidance}. Only claims that CONTRADICT live data trigger "revise"; opinions and facts no live feed
        can cover pass through untouched. Verifies prices, software versions, market open/closed and service up/down
        against Dynamic Feed's live ground-truth.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/guard"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_index_v1_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """The Dynamic Feed agent & robot API at a glance — every /v1 capability, what it does, and a copy-paste
        example. The fastest way for a developer (or an agent) to discover the whole surface. Keyless unless noted.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_inference_receipt_sample_v1_inference_receipt_sample_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """A keyless, signed SAMPLE inference-receipt/v1 — for the /receipts demo. Shows what POST /v1/inference-receipt
        returns: a neutral witness of a sample inference where the provider served a DIFFERENT model than requested and
        set its own fallback flag (illustrative, vendor-neutral). Verify it in-browser via /verify.js, then flip a byte
        and watch verification fail.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/inference-receipt/sample"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_inference_receipt_v1_inference_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1InferenceReceiptV1InferenceReceiptPostErrorBody]:
        """WITNESS a single AI model INFERENCE — a neutral, Ed25519-signed, transparency-logged, RFC 3161 timestampable
        receipt that this inference record EXISTED and is INTACT. Privacy by CONSTRUCTION: the caller hashes the prompt
        + response LOCALLY and sends ONLY fixed-length sha256 hashes + non-PII metadata. Body: {"claimed_model": "",
        "prompt_sha256": "", "response_sha256": ""} plus optional requested_model, latency_ms, token_count,
        fallback_flag (the provider's OWN flag), provider, region, and a BYO-key agent co-signature (provider_pubkey +
        provider_sig). Auth: a FREE key (POST /signup) — no KYC. PROVES: the record existed at issued_at and is intact
        (tamper-EVIDENT, verifiable via /verify.js against /.well-known/keys). Does NOT independently verify which model
        actually ran, does NOT adjudicate that a 'downgrade' occurred, does NOT score quality — model_match is a literal
        string comparison and the holder draws any inference. Profile of receipt/v1. Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/inference-receipt"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_inference_receipt_v1_inference_receipt_post_error_mapper,
            request_options=request_options,
        )

    async def v1_intensity_v1_intensity_get(
        self,
        lat: float,
        lon: float,
        *,
        peril: str | None = "flood",
        metric: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1IntensityV1IntensityGetErrorBody]:
        """INTENSITY-AT-LOCATION (DF-VERIFY/1 ``intensity/v1``) — the parameter value at an exact coordinate, signed and
        reproducible: the settlement-grade reading a parametric trigger evaluates against. Not 'an event happened' but
        'the value at this lat/lon, from the region's authoritative source'. v1 peril: flood — routed by coordinate to
        the nearest official river gauge: AU -> BoM Water Data Online (water-course level m; CC BY 4.0), US -> USGS NWIS
        (gage height ft / discharge ft3/s). Point-resolved, no interpolation. drought, wildfire and earthquake
        (ShakeMap) intensity are rolling in. Verify the Ed25519 signature against GET /.well-known/keys; re-fetch
        source_url to reproduce raw_reading_hash (see hash_method). SCOPE: attests the reading at the cited official
        gauge — NOT a basin-wide determination or physical loss.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            peril: Value sent with the request.
            metric: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/intensity"),
            query_params=[
                param[float]("lat", lat),
                param[float]("lon", lon),
                param[str | None]("peril", peril),
                param[str | None]("metric", metric),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_intensity_v1_intensity_get_error_mapper,
            request_options=request_options,
        )

    async def v1_me_v1_me_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1MeV1MeGetErrorBody]:
        """Your key at a glance — plan, calls used today, daily quota and remaining. The per-user usage view (the
        keyless MCP endpoint is unmetered fair-use).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/me"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_me_v1_me_get_error_mapper,
            request_options=request_options,
        )

    async def v1_nearby_v1_nearby_get(
        self,
        lat: float,
        lon: float,
        *,
        radius_km: float | None = 500.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1NearbyV1NearbyGetErrorBody]:
        """Signed situational scan: live hazards near a point — earthquakes (USGS), natural events (NASA EONET:
        wildfires/volcanoes/floods/storms), major disasters (GDACS) and, in Australia, live satellite bushfire hotspots
        (Geoscience Australia) within radius_km, nearest first. Ed25519-signed (verify against GET /.well-known/keys).
        The 'what's around me' ping for any machine that moves — robots, drones, in-car AI assistants, fleet telematics
        — complements the go/caution/no-go verdict from /v1/awareness.

        Args:
            lat: Value sent with the request.
            lon: Value sent with the request.
            radius_km: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/nearby"),
            query_params=[
                param[float]("lat", lat), param[float]("lon", lon), param[float | None]("radius_km", radius_km)
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_nearby_v1_nearby_get_error_mapper,
            request_options=request_options,
        )

    async def v1_notarize_v1_notarize_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1NotarizeV1NotarizePostErrorBody]:
        """NOTARY for any data feed — a neutral third party witnesses YOUR data and returns a timestamped,
        Ed25519-signed notarization: proof these exact bytes existed at this moment, independently verifiable forever.
        Two modes — send the data ({"payload": }), or keep it private and send only its hash ({"payload_sha256": ""}).
        Optional "subject" names the publisher; "echo": false omits the payload from the record (hash retained). This
        attests that Dynamic Feed WITNESSED these bytes (or this hash) at witnessed_at — not that the content is true.
        Anchor via POST /v1/anchor for proof-of-when independent of us. Auth: X-API-Key (free key at POST /signup).
        'Let's Encrypt for data feeds' — your feed, signed, without building a signing stack.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/notarize"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_notarize_v1_notarize_post_error_mapper,
            request_options=request_options,
        )

    async def v1_notary_entry_v1_notary_log_idx_get(
        self, idx: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1NotaryEntryV1NotaryLogIdxGetErrorBody]:
        """One transparency-log entry by index, Ed25519-signed, with the recipe to recompute its entry_hash and verify
        chain linkage. Keyless.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/notary/log/{idx}"),
            path_params=[param[int]("idx", idx)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_notary_entry_v1_notary_log_idx_get_error_mapper,
            request_options=request_options,
        )

    async def v1_notary_feed_register_v1_notary_feeds_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody]:
        """CONTINUOUS NOTARIZATION — register a feed URL and Dynamic Feed fetches it on your interval, notarizing every
        CHANGE into the public transparency log automatically: a standing, tamper-evident history of what your feed
        published, when. Body: {"url": "https://...", "subject": "Your Co", "interval_minutes": 180 (min 60)}. Beta: 3
        active feeds per key. The first fetch happens immediately and its notarization is returned.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/notary/feeds"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_notary_feed_register_v1_notary_feeds_post_error_mapper,
            request_options=request_options,
        )

    async def v1_notary_feeds_list_v1_notary_feeds_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1NotaryFeedsListV1NotaryFeedsGetErrorBody]:
        """Your registered continuous-notarization feeds (same X-API-Key): status, last hash, last log index, next-run
        cadence.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/notary/feeds"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_notary_feeds_list_v1_notary_feeds_get_error_mapper,
            request_options=request_options,
        )

    async def v1_notary_head_v1_notary_log_head_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """The transparency-log HEAD — count + chain head hash, Ed25519-signed. The anchorable artifact: altering ANY
        past notarization breaks every entry_hash after it and contradicts the anchored head. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/notary/log/head"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_notary_log_v1_notary_log_get(
        self,
        *,
        limit: int | None = 50,
        before: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1NotaryLogV1NotaryLogGetErrorBody]:
        """The PUBLIC TRANSPARENCY LOG of all notarizations — append-only, hash-chained (CT-style), newest first.
        Payload hashes only (never payloads): private by construction, tamper-evident by recipe. Page back with
        ?before=. Keyless.

        Args:
            limit: Value sent with the request.
            before: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/notary/log"),
            query_params=[param[int | None]("limit", limit), param[int | None]("before", before)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_notary_log_v1_notary_log_get_error_mapper,
            request_options=request_options,
        )

    async def v1_notary_proof_v1_notary_log_idx_proof_get(
        self, idx: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1NotaryProofV1NotaryLogIdxProofGetErrorBody]:
        """INCLUSION PROOF for a log entry: the consecutive chain of entries from this index to the most recently
        ANCHORED head (or the current head if no anchor covers it yet), plus the anchor record. Recompute each
        entry_hash and you have proven this entry is in the history the Bitcoin anchor commits to — no trust in Dynamic
        Feed required. Keyless.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/notary/log/{idx}/proof"),
            path_params=[param[int]("idx", idx)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_notary_proof_v1_notary_log_idx_proof_get_error_mapper,
            request_options=request_options,
        )

    async def v1_pro_asof_v1_pro_asof_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """PREMIUM keyless AS-OF REPLAY — pay-per-call (x402, USDC on Base) signed time-machine over Dynamic Feed's
        append-only archive. Body {"tool":"current_weather","t":"2026-06-10T14:30:00Z"} (or ?tool=&t=) -> the archived
        observation for ``tool`` nearest at-or-before ``t``, replayed VERBATIM, Ed25519-signed (verify against GET
        /.well-known/keys). The keyless paid channel to the SAME engine as the key-gated GET /v1/asof — for agent
        backtesting, audit trails and 'what did we know when we decided' disputes. No signup, no human; discoverable via
        the x402 bazaar. Honest about coverage: a time the archive didn't capture returns a clear miss, never a
        fabricated past.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/pro/asof"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_pro_batch_v1_pro_batch_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """PREMIUM, pay-per-call data batch — the commercial tier of /v1/batch, paid AGENT-NATIVELY via x402 (HTTP 402):
        an agent gets a price, pays from its wallet, re-calls with the X-PAYMENT header, and is served — no human, no
        signup. Up to 100 signed tool calls per request (free /v1/batch is fair-use, capped at 20). Dynamic Feed charges
        for its OWN service; a third-party facilitator settles the payment — DF never custodies funds
        (witness-not-money). Body: {"calls":[{"tool":...,"args":{...}}, ...]}.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/pro/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_pro_catalog_v1_pro_catalog_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Machine-readable MENU of Dynamic Feed's x402 pay-per-call SKUs (USDC on Base) — the 'price list' an agent or
        x402 facilitator shops in one call: every paid endpoint, its price (live from X402_PRICE_ATOMIC), input/output
        schema, the recipient wallet (when connected), and the facilitator. Boundary: DF is the merchant; the
        facilitator settles — DF never custodies funds.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/pro/catalog"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_pro_tool_discover_v1_pro_tool_tool_get(
        self, tool: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1ProToolDiscoverV1ProToolToolGetErrorBody]:
        """Discovery for the paid single-call endpoint. A GET returns the x402 402 challenge — so an agent that probes
        with GET (instead of a 'Method Not Allowed' dead end) still learns the price, the asset, and that it must POST
        with an X-PAYMENT header + {"args":{...}} body. NO payment is taken on GET; settlement only ever happens on
        POST. Pure discovery, no money path.

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/pro/tool/{tool}"),
            path_params=[param[str]("tool", tool)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_pro_tool_discover_v1_pro_tool_tool_get_error_mapper,
            request_options=request_options,
        )

    async def v1_pro_tool_v1_pro_tool_tool_post(
        self, tool: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1ProToolV1ProToolToolPostErrorBody]:
        """PREMIUM single signed tool call — pay-per-call (x402, USDC on Base) for ANY one of Dynamic Feed's live tools.
        An agent pays once, gets one Ed25519-signed datapoint. No signup, no human. Body: {"args":{...}}. Discoverable
        via the x402 bazaar. (Free alternative: keyless /v1/batch, fair-use.)

        Args:
            tool: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/pro/tool/{tool}"),
            path_params=[param[str]("tool", tool)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=v1_pro_tool_v1_pro_tool_tool_post_error_mapper,
            request_options=request_options,
        )

    async def v1_proxy_witness_v1_proxy_witness_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1ProxyWitnessV1ProxyWitnessPostErrorBody]:
        """PROXY WITNESS, route any third-party API call through Dynamic Feed and get a signed, archived receipt of
        exactly what that URL returned to us at this moment. Body: {"url": "https://...", "method": "GET"|"POST"|...,
        "headers": {...}, "body": "...", "echo": false, "subject": "..."}. We fetch server-side under an SSRF guard
        (only public http/https targets; private and reserved addresses blocked; redirects not followed), redact your
        request credentials from the record, and sign a proxy-witness/v1 envelope carrying the response status,
        content-type, size and SHA-256 (the full body only when echo:true and small; our archive is hash-first and never
        keeps the body). Witnesses what the URL returned to us, not that the content is true; never the money path.
        Auth: X-API-Key (free key at POST /signup).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/proxy-witness"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_proxy_witness_v1_proxy_witness_post_error_mapper,
            request_options=request_options,
        )

    async def v1_receipt_v1_receipt_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Evidence receipt — wrap any fact/claim/data in a timestamped, Ed25519-SIGNED record: provable evidence of
        what an AI was told (or asserted), and when. Body: {"data": } or {"claim":"..."}. Returns the receipt + a
        detached signature (verify against GET /.well-known/keys); anchor its hash to RFC 3161 via POST /v1/anchor.
        Keyless. An audit-trail input for regulated AI (fintech / legal / medical).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/receipt"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_snapshot_v1_snapshot_get(
        self, *, date: str | None = "", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1SnapshotV1SnapshotGetErrorBody]:
        """Historical world-state — what Dynamic Feed reported on a given day. ?date=YYYY-MM-DD returns that day's
        stored snapshot (the cross-domain world_pulse digest); no date returns today's, captured on read. Honest about
        coverage: a date before the earliest snapshot returns the available range, never a fabricated past. Keyless. The
        auditable companion to the signed/RFC 3161 timestamped awareness layer.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/snapshot"),
            query_params=[param[str | None]("date", date)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_snapshot_v1_snapshot_get_error_mapper,
            request_options=request_options,
        )

    async def v1_sources_v1_sources_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """The authoritative source catalog — every upstream feed Dynamic Feed serves, with its publisher, official URL,
        licence, whether commercial use + redistribution is permitted, update cadence, and the tools it backs. Keyless.
        Each datapoint is provenance-stamped (source, licence, timestamp) so you can cite it and verify usage rights
        yourself.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sources"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_stamp_v1_stamp_post(
        self, *, x_api_key: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1StampV1StampPostErrorBody]:
        """Create an independently verifiable record of submitted JSON.

        ``X-API-Key`` is optional so the existing keyless signing behaviour remains available. When a key is supplied it
        is always validated: portal ``fx_live_`` keys use the isolated Fluxdyne runtime database boundary, while legacy
        keys keep their existing validation and metering path. A signature establishes integrity and issuer identity; it
        does not establish that submitted content is complete, scientifically valid, or true.

        Args:
            x_api_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/stamp"),
            headers=[param[str | None]("x-api-key", x_api_key), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=v1_stamp_v1_stamp_post_error_mapper,
            request_options=request_options,
        )

    async def v1_station_get_v1_station_station_id_get(
        self, station_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1StationGetV1StationStationIdGetErrorBody]:
        """The public descriptor of a registered station (no owner identity). Keyless, so a verifier of a
        station-receipt can see what the station is and what it reports.

        Args:
            station_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/station/{station_id}"),
            path_params=[param[str]("station_id", station_id)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_station_get_v1_station_station_id_get_error_mapper,
            request_options=request_options,
        )

    async def v1_station_reading_v1_station_reading_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1StationReadingV1StationReadingPostErrorBody]:
        """Witness one reading your station reported: get back a signed station-receipt/v1 stating, in words, that the
        value is self-reported by your station and only WITNESSED (not measured) by Dynamic Feed. Body: {"station_id":
        "stn_...", "quantity": "wind_kmh", "value": 12.4, "unit": "km/h", "observed_at": "..."}. Keyless verification
        against /.well-known/keys. Auth: X-API-Key.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/station/reading"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_station_reading_v1_station_reading_post_error_mapper,
            request_options=request_options,
        )

    async def v1_station_register_v1_station_register_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1StationRegisterV1StationRegisterPostErrorBody]:
        """WE SIGN YOUR STATION, register your own sensor so its readings can be witnessed as signed receipts. Body:
        {"name": "...", "location": {"lat": .., "lon": ..}, "quantities": ["wind_kmh", ...]}. Returns a station_id +
        provenance. Dynamic Feed witnesses what your station reports; it does not measure the value. Your key is stored
        only as a non-reversible hash. Auth: X-API-Key (free key at POST /signup).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/station/register"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_station_register_v1_station_register_post_error_mapper,
            request_options=request_options,
        )

    async def v1_stream_v1_stream_get(
        self,
        *,
        tool: str | None = "",
        args: str | None = "",
        interval: float | None = 15.0,
        count: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1StreamV1StreamGetErrorBody]:
        """Server-Sent Events stream of a LIVE value. Point an EventSource at /v1/stream?tool=&args=&interval=&count=
        and receive the tool's current value every ``interval`` seconds as a ``value`` event, until ``count`` updates or
        you disconnect. Keyless. Bounded for fair use: interval 5-300s, count 1-60. Example:
        /v1/stream?tool=cite&args={"subject":"BTC"}&interval=10

        Args:
            tool: Value sent with the request.
            args: Value sent with the request.
            interval: Value sent with the request.
            count: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stream"),
            query_params=[
                param[str | None]("tool", tool),
                param[str | None]("args", args),
                param[float | None]("interval", interval),
                param[int | None]("count", count),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_stream_v1_stream_get_error_mapper,
            request_options=request_options,
        )

    async def v1_trigger_receipt_v1_trigger_receipt_get(
        self,
        metric: str,
        threshold: float,
        *,
        op: str | None = "gte",
        lat: float | None = None,
        lon: float | None = None,
        city: str | None = None,
        peril: str | None = None,
        contract_ref: str | None = None,
        methodology: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1TriggerReceiptV1TriggerReceiptGetErrorBody]:
        """Parametric catastrophe TRIGGER RECEIPT (DF-VERIFY/1 ``trigger-receipt/v1``) — the dispute-proof oracle a
        parametric payout settles against. Evaluates 'metric op threshold' at a location against the live official
        reading and returns an Ed25519-signed receipt carrying the four properties that end a parametric dispute: (1) a
        pinned + hashed methodology (nobody moves the goalposts after the event); (2) the exact re-fetchable source_url
        + a raw_reading_hash anyone can reproduce (independent verifiability, not 'trust us'); (3) a deterministic
        determination — triggered + payout_factor + rationale, re-computable by any party; (4) the signature (timestamp
        via POST /v1/anchor (RFC 3161) for proof of when). Neutral calculation-agent-of- record: attests what the
        official source reported and what the pinned methodology implies — NOT ground-truth physical loss. v0.1 metrics:
        wind_kmh | temperature_c | feels_like_c | precipitation_mm (Open-Meteo). op: gt | gte | lt | lte. Verify against
        GET /.well-known/keys; schema at /schemas/trigger-receipt-v1.json.

        Args:
            metric: Value sent with the request.
            threshold: Value sent with the request.
            op: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            city: Value sent with the request.
            peril: Value sent with the request.
            contract_ref: Value sent with the request.
            methodology: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/trigger-receipt"),
            query_params=[
                param[str]("metric", metric),
                param[float]("threshold", threshold),
                param[str | None]("op", op),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[str | None]("city", city),
                param[str | None]("peril", peril),
                param[str | None]("contract_ref", contract_ref),
                param[str | None]("methodology", methodology),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_trigger_receipt_v1_trigger_receipt_get_error_mapper,
            request_options=request_options,
        )

    async def v1_vc_v1_vc_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Security quarantine: legacy VC wrapping did not verify the inner receipt or role boundaries.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/vc"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_watchlist_delete_v1_watchlist_delete(
        self,
        *,
        label: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WatchlistDeleteV1WatchlistDeleteErrorBody]:
        """Remove one item from your watchlist (?label=BTC) or clear it entirely (no label). Per-user.

        Args:
            label: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/watchlist"),
            query_params=[param[str | None]("label", label)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_watchlist_delete_v1_watchlist_delete_error_mapper,
            request_options=request_options,
        )

    async def v1_watchlist_get_v1_watchlist_get(
        self,
        *,
        pull: bool | None = False,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WatchlistGetV1WatchlistGetErrorBody]:
        """Your saved watchlist — the subjects/tools you monitor. ?pull=true runs every watched tool and returns each
        one's CURRENT value in a single call (your whole dashboard at once). Per-user, keyed by your API key
        (X-API-Key).

        Args:
            pull: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/watchlist"),
            query_params=[param[bool | None]("pull", pull)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_watchlist_get_v1_watchlist_get_error_mapper,
            request_options=request_options,
        )

    async def v1_watchlist_post_v1_watchlist_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WatchlistPostV1WatchlistPostErrorBody]:
        """Add to or replace your watchlist. Body {"label":"BTC","tool":"cite","args":{"subject":"BTC"}} adds one item;
        body {"items":[...]} replaces the whole list (max 25). Each item's ``tool`` must be a real Dynamic Feed tool.
        Per-user, keyed by your API key.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/watchlist"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_watchlist_post_v1_watchlist_post_error_mapper,
            request_options=request_options,
        )

    async def v1_webhooks_create_v1_webhooks_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WebhooksCreateV1WebhooksPostErrorBody]:
        """Register a webhook that fires when a tool's value CHANGES. Body:
        {"url":"https://you.example/hook","tool":"exploited_vulnerabilities","args":{}}. The URL is validated SSRF-safe
        (public http/https only). Returns a one-time ``secret`` — every delivery is HMAC-SHA256 signed with it (header
        X-DynamicFeed-Signature: sha256=…), so you can verify it came from us. Per-user (X-API-Key).

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webhooks"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_webhooks_create_v1_webhooks_post_error_mapper,
            request_options=request_options,
        )

    async def v1_webhooks_delete_v1_webhooks_delete(
        self,
        *,
        id_: int | None = 0,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WebhooksDeleteV1WebhooksDeleteErrorBody]:
        """Delete one of your webhook subscriptions by ?id=. Per-user.

        Args:
            id_: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/webhooks"),
            query_params=[param[int | None]("id", id_)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_webhooks_delete_v1_webhooks_delete_error_mapper,
            request_options=request_options,
        )

    async def v1_webhooks_list_v1_webhooks_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WebhooksListV1WebhooksGetErrorBody]:
        """List your webhook subscriptions (secrets are never returned). Per-user.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_webhooks_list_v1_webhooks_get_error_mapper,
            request_options=request_options,
        )

    async def v1_webhooks_test_v1_webhooks_test_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WebhooksTestV1WebhooksTestPostErrorBody]:
        """Send a signed TEST delivery to one of your subscriptions now — confirm your endpoint receives it and the HMAC
        validates. Body: {"id": }. Per-user.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webhooks/test"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_webhooks_test_v1_webhooks_test_post_error_mapper,
            request_options=request_options,
        )

    async def v1_witness_inclusion_v1_witness_idx_inclusion_get(
        self, idx: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody]:
        """SUCCINCT, browser-verifiable inclusion proof that witness/notary entry {idx} is in the append-only log — an
        O(log n) RFC-6962 Merkle audit path to a tree root we Ed25519-SIGN (the checkpoint). Any party folds leaf ->
        root in their own browser and checks the checkpoint signature against /.well-known/keys, with NO trust in
        Dynamic Feed's word (only its published key). Keyless. Recipe: leaf = sha256(0x00 ‖ content_hash_bytes); node =
        sha256(0x01 ‖ left ‖ right); fold the audit_path (each {sibling, side}) up to root_sha256; confirm it equals the
        signed checkpoint.root_sha256, then verify the checkpoint Ed25519 signature. In-browser via /verify.js
        verifyInclusion(). Complements GET /v1/notary/log/{idx}/proof (the O(n) chain replay): the chain proves
        append-order, this proves succinct membership in a signed tree.

        Args:
            idx: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/witness/{idx}/inclusion"),
            path_params=[param[int]("idx", idx)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_witness_inclusion_v1_witness_idx_inclusion_get_error_mapper,
            request_options=request_options,
        )

    async def v1_witness_sample_v1_witness_sample_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """A keyless, signed SAMPLE txn-receipt/v1 — for the /witness demo. Shows exactly what POST /v1/witness returns
        (without writing to the log or needing a key): a neutral witness of a sample machine-to-machine transaction
        record, with the recent-Bitcoin-block NOT-BEFORE time marker. Verify it in-browser via /verify.js, then flip a
        byte and watch verification fail.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/witness/sample"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_witness_v1_witness_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1WitnessV1WitnessPostErrorBody]:
        """WITNESS a machine-to-machine / agent-to-agent transaction RECORD — a neutral, third-party, Ed25519-signed,
        transparency-logged, RFC 3161 timestampable receipt that this exact record EXISTED and is INTACT. Dynamic Feed
        sits BESIDE the transaction, NEVER in the value path: it only signs + timestamps + anchors a HASH of a record
        you give it. It never accepts, holds, routes, converts or custodies funds or anything of value. Send the record
        ({"payload": }) or keep it private ({"content_hash": ""}). Optional: parties[] (opaque ids — NO PII), txn_ref
        (opaque), and a BYO-key agent co-signature (provider_pubkey + provider_sig, Ed25519 over the ascii-hex hash) so
        the receipt reads "agent attested, Dynamic Feed witnessed". Auth: a FREE key (POST /signup) — no KYC. PROVES:
        the record existed at issued_at, is intact (tamper-EVIDENT, verifiable via /verify.js against
        /.well-known/keys), and which agent key co-signed. Does NOT prove the transaction was authorized, correct,
        lawful, completed, or that any value moved. Profile of receipt/v1. Anchor independently via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/witness"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_witness_v1_witness_post_error_mapper,
            request_options=request_options,
        )
