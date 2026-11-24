using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AgentReady.Core;
using AgentReady.Core.Authentication;
using AgentReady.Core.Exceptions;
using AgentReady.Core.Extensions;
using AgentReady.Core.Models;
using AgentReady.Core.Request;
using AgentReady.Core.Response;
using AgentReady.Errors;
using AgentReady.Models;
using AgentReady.Requests.Scans;

namespace AgentReady.Api;

public sealed class Scans
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Scans(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a scan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Scan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full scan including per-check results. Returns 404 if the scan does not exist or is not owned by the API key's user.
    /// </remarks>
    public Task<Scan> GetScan(GetScanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/scans/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Scan>(),
            GetScanError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List recent scans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScanListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListScansError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns scans owned by the API key's user, newest first. Cursor-paginate by passing the <c>nextCursor</c> value from a previous response as the <c>cursor</c> query parameter on the next request; <c>nextCursor</c> is only returned when the page filled exactly to <c>limit</c>.
    /// </remarks>
    public Task<ScanListResponse> ListScans(ListScansRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/scans"),
            [],
            [new Param("limit", request.Limit), new Param("cursor", request.Cursor?.ToIso8601())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScanListResponse>(),
            ListScansError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start a scan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartScanResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartScanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Queues an asynchronous scan and returns a 202 with the scan id. Poll GET /api/v1/scans/{id} until status is 'completed' or 'failed'.
    /// <para>
    /// Supply an optional <c>Idempotency-Key</c> header to make retries safe: the first request runs the scan and any retry carrying the same key replays the original 202 (with <c>Idempotency-Replayed: true</c>) instead of starting a duplicate. Reusing a key with a different request body returns 422; a retry that arrives while the first is still in flight returns 409. Keys are retained for 24 hours.
    /// </para>
    /// </remarks>
    public Task<StartScanResponse> StartScan(StartScanOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/scans"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartScanResponse>(),
            StartScanError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run a scan, paid via x402
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaidScanResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="X402ScanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Runs an agent-readability scan paid via x402 v2 (no account or subscription). Without a valid <c>X-PAYMENT</c> header this returns a v2 402 challenge; sign the EIP-3009 USDC authorization for one of the advertised tiers and resend the v2 payment payload in the <c>X-PAYMENT</c> header to run the scan. Settlement is on Base mainnet (CAIP-2 eip155:8453; the facilitator pays gas); the response carries an <c>X-PAYMENT-RESPONSE</c> header. Tiers: $0.02 (25 pages), $0.25 (250 pages).
    /// </remarks>
    public Task<PaidScanResponse> X402Scan(X402ScanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/x402/scan"),
            [],
            [],
            [new HeaderParam("X-PAYMENT", request.XPayment), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaidScanResponse>(),
            X402ScanError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// x402 payment challenge for a paid scan
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="X402ScanChallengeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an HTTP 402 payment-requirements challenge for the paid scan resource (x402 v2). This is the discovery/probe surface: it always 402s with the v2 PaymentRequired delivered in the base64 <c>PAYMENT-REQUIRED</c> response header (and mirrored in the JSON body) — x402Version 2 + resource + accepts[] + Bazaar discovery extensions. To run a scan, POST to this path with a signed PAYMENT-SIGNATURE (x402 v2) or X-PAYMENT (v1) header.
    /// </remarks>
    public Task X402ScanChallenge(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/x402/scan"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            X402ScanChallengeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
