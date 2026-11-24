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
using DynamicFeed.Requests.Robot;

namespace DynamicFeed.Api;

public sealed class Robot
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Robot(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// V1 Anchor Daily
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1AnchorDailyV1AnchorDailyGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// L2 — the day's world-state snapshot timestamped via RFC 3161 (one hash per day, free &amp;
    /// batched via RFC 3161): a durable, tamper-evident record of what Dynamic Feed reported. Anchors
    /// on first call (idempotent), then returns the proof. ?date=YYYY-MM-DD; keyless.
    /// </remarks>
    public Task<object> V1AnchorDailyV1AnchorDailyGet(V1AnchorDailyV1AnchorDailyGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/anchor/daily"),
            [],
            [new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1AnchorDailyV1AnchorDailyGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Anchor Upgrade
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Re-check a stored timestamp proof. RFC 3161 tokens are final at issue (nothing to upgrade); a
    /// legacy OpenTimestamps proof is folded into its block attestation. Body: {"token_b64": "..."}
    /// (legacy {"proof_ots_b64": "..."} still accepted).
    /// </remarks>
    public Task<object> V1AnchorUpgradeV1AnchorUpgradePost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/anchor/upgrade"),
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
    /// V1 Anchor
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Timestamp a snapshot's hash with an independent RFC 3161 authority — returns a signed timestamp
    /// token proving the record existed at time T, independently verifiable, even against us. Body:
    /// {"snapshot": {...}} (its canonical SHA-256 is timestamped) or {"digest_hex": ""}.
    /// Hashes ONLY, never data. Off the verdict hot path (Rung C).
    /// </remarks>
    public Task<object> V1AnchorV1AnchorPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/anchor"),
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
    /// V1 Awareness
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Robot situational-awareness v1: ONE call returns a go / caution / no-go verdict plus the grounded
    /// facts behind it, for a robot (ground|humanoid|aerial|marine|orbital) at a location. NEVER blocks: the
    /// feeds fan out under a hard deadline and any laggard is dropped with the snapshot flagged <c>degraded</c>
    /// (fail-safe → the verdict can never be <c>go</c> when degraded, it floors to <c>caution</c>). Keyless in v1.
    /// <para>
    /// Body: {"robot":{"id","class"},"location":{"lat","lon","alt_m"},"radius_km"?,"domains"?,
    /// "max_staleness_s"?,"limits"?,"deadline_ms"?,"require_signed"?}. Every response is signed with Ed25519
    /// (Rung B) · verify against GET /.well-known/keys. Timestamp a snapshot's hash via POST /v1/anchor (Rung C).
    /// </para>
    /// </remarks>
    public Task<object> V1AwarenessV1AwarenessPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/awareness"),
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
    /// V1 Humanoid
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Humanoid PRE-OPERATION check: a preset over /v1/awareness for class=humanoid (a bipedal robot
    /// working AMONG PEOPLE). POST {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go
    /// verdict fused from wind (topple risk, high centre of mass), precipitation (slip/footing), temperature
    /// (ice underfoot + actuator/battery envelope), air quality (tighter, people nearby) and nearby
    /// earthquakes · Ed25519-signed, hard-deadline (never hangs; degraded floors to caution).
    /// ADVISORY EVIDENCE ONLY: proof of what was true at a time, NOT a safety certification and NOT a
    /// guarantee it is safe to act; the robot's own stack owns every action. Keyless.
    /// </remarks>
    public Task<object> V1HumanoidV1HumanoidPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/humanoid"),
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
    /// V1 Marine
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Marine vessel / USV PRE-OPERATION check: a preset over /v1/awareness for class=marine. POST
    /// {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from live
    /// significant WAVE HEIGHT (the primary driver), wind, a heavy-precipitation storm proxy, geomagnetic
    /// activity (GPS/comms) and nearby earthquakes (tsunami) · Ed25519-signed, hard-deadline (never hangs;
    /// degraded floors to caution). Inland points simply omit the sea-state factor. ADVISORY EVIDENCE only:
    /// not a safety certification and not a claim it is safe to sail; the vessel's own stack owns every
    /// action. Keyless.
    /// </remarks>
    public Task<object> V1MarineV1MarinePost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/marine"),
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
    /// V1 Preflight
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Drone PRE-FLIGHT safety check: a preset over /v1/awareness for class=aerial. POST
    /// {"location":{"lat","lon","alt_m"?},"radius_km"?}. Returns a go / caution / no-go take-off verdict
    /// fused from wind &amp; weather, air quality, space weather (GPS/comms integrity) and nearby hazards ·
    /// Ed25519-signed, hard-deadline (never hangs; degraded floors to caution). Keyless.
    /// </remarks>
    public Task<object> V1PreflightV1PreflightPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/preflight"),
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
    /// V1 Road
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Ground / autonomous-vehicle OVER-THE-HORIZON hazard check: a preset over /v1/awareness for
    /// class=ground. POST {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict
    /// fused from weather, air quality and nearby earthquakes/hazards along the route · signed, never hangs.
    /// Keyless.
    /// </remarks>
    public Task<object> V1RoadV1RoadPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/road"),
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
    /// V1 Robot Receipt Sample
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A keyless, signed SAMPLE robot-receipt/v1: the 'black box' record of an embodied-AI decision (an
    /// aerial robot told CAUTION on degraded GPS, which held). Verify it in-browser via /verify.js, then flip
    /// a byte and watch verification fail. Advisory evidence only: not a safety system.
    /// </remarks>
    public Task<object> V1RobotReceiptSampleV1RobotReceiptSampleGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/robot-receipt/sample"),
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
    /// V1 Robot Receipt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1RobotReceiptV1RobotReceiptPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// WITNESS a single robot / embodied-AI DECISION: the neutral 'black box' receipt of what a robot
    /// was told and which model/policy decided, at the moment it acted. Ed25519-signed, transparency-logged,
    /// RFC 3161 timestampable. Privacy by CONSTRUCTION: the caller hashes the decision inputs (sensor/awareness
    /// context) LOCALLY and sends ONLY a fixed-length sha256 + non-PII labels. Body: {"robot_class":
    /// "ground|aerial|marine|orbital|humanoid", "model_id": "", "verdict":
    /// "go|caution|no-go", "inputs_sha256": ""} plus optional decision, awareness_ref (a prior
    /// /v1/awareness snapshot_id), region (COARSE, no precise coords), latency_ms, and a BYO-key co-signature.
    /// Auth: a FREE key (POST /signup). ADVISORY EVIDENCE ONLY: proves the decision record existed and is
    /// intact (tamper-EVIDENT, verifiable via /verify.js); it does NOT certify the action was safe/correct/
    /// lawful, is NOT a safety system, and is NOT the actuator (the robot's own certified safety layer decides).
    /// Profile of receipt/v1. Anchor via POST /v1/anchor.
    /// </remarks>
    public Task<object> V1RobotReceiptV1RobotReceiptPost(V1RobotReceiptV1RobotReceiptPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/robot-receipt"),
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
            V1RobotReceiptV1RobotReceiptPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
