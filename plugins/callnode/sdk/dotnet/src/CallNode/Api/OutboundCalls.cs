using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CallNode.Core;
using CallNode.Core.Authentication;
using CallNode.Core.Exceptions;
using CallNode.Core.Models;
using CallNode.Core.Request;
using CallNode.Core.Response;
using CallNode.Errors;
using CallNode.Models;
using CallNode.Requests.OutboundCalls;

namespace CallNode.Api;

/// <summary>
/// Originate, retrieve, list, and cancel outbound voice calls.
/// </summary>
public sealed class OutboundCalls
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal OutboundCalls(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel a call
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1OutboundCallsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelCallError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Hangs up an in-progress call, or cancels one that has not yet connected.
    /// Calls already in a terminal state are returned unchanged (also 202) — the
    /// operation is safe to retry.
    /// </remarks>
    public Task<ApiV1OutboundCallsResponse1> CancelCall(CancelCallRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/outbound/calls/{callId}"),
            [new TemplateParam("callId", request.CallId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1OutboundCallsResponse1>(),
            CancelCallError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a call
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Call"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCallError"/> when the server returns an error response.</exception>
    public Task<Call> GetCall(GetCallRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/outbound/calls/{callId}"),
            [new TemplateParam("callId", request.CallId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Call>(),
            GetCallError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List calls
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1OutboundCallsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCallsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns your outbound calls, newest first, with cursor pagination.
    /// </remarks>
    public Task<ApiV1OutboundCallsResponse> ListCalls(ListCallsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/outbound/calls"),
            [],
            [
                new Param("status", request.Status),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1OutboundCallsResponse>(),
            ListCallsError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Originate a call
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OriginateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OriginateCallError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Places an outbound call. Returns 202 once CallNode accepts the originate command.
    /// The call lifecycle is then visible via GET on the same <c>callId</c>, or via the
    /// optional status webhook.
    /// <para>
    /// The destination takes one of three mutually exclusive forms:
    /// </para>
    /// <para>
    /// 1. <b>PSTN</b> — <c>to</c> is E.164; the call is completed over the phone network.
    /// 2. <b>Direct SIP URI</b> — <c>to</c> is <c>sip:user@host[:port][;transport=udp|tcp]</c>;
    /// the call is delivered straight to your SIP endpoint.
    /// 3. <b>Saved trunk (BYOC)</b> — <c>sipTrunkId</c> selects a trunk created in the
    /// dashboard, and <c>to</c> is an E.164 number (terminated by your carrier) or an
    /// extension your host understands.
    /// </para>
    /// <para>
    /// In every form <c>from</c> must be a CallNode number you own — it becomes the
    /// caller ID presented to the called party or your SIP endpoint. SIP
    /// destinations bill at your plan's SIP egress rate and must accept traffic
    /// from 198.27.122.194 or 192.95.44.47 (audio G.711 PCMU/PCMA at 8 kHz, DTMF RFC 2833).
    /// </para>
    /// </remarks>
    public Task<OriginateResponse> OriginateCall(OriginateCallRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/outbound/calls"),
            [],
            [],
            [
                new HeaderParam("X-Idempotency-Key", request.XIdempotencyKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OriginateResponse>(),
            OriginateCallError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Transfer a live call to another destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CallsTransferResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TransferCallError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Moves the caller on an in-progress call to another destination, and
    /// hangs up whatever they were connected to.
    /// <para>
    /// Built for calls delivered to your own SIP endpoint via a number's
    /// <c>voice.sipUri</c>: those bridge straight to you without running the
    /// conversational webhook, so returning <c>transfer: true</c> from a webhook is
    /// not available on them. It also works on calls answered by a CallNode AI
    /// agent.
    /// </para>
    /// <para>
    /// Every transfer originates a new leg on your behalf, so it clears the
    /// same gates as placing an outbound call: KYC, DNC/suppression, and the
    /// destination-class guard. A CallLog and UsageRecord are written for the
    /// transferred leg, so it is attributed and billable.
    /// </para>
    /// <para>
    /// A transfer blocked by a gate returns the caller to the agent rather
    /// than hanging up, so the agent can take a message.
    /// </para>
    /// <para>
    /// <c>202</c> means accepted, not yet connected; the bridge follows
    /// immediately.
    /// </para>
    /// </remarks>
    public Task<ApiV1CallsTransferResponse> TransferCall(TransferCallRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/calls/{callId}/transfer"),
            [new TemplateParam("callId", request.CallId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1CallsTransferResponse>(),
            TransferCallError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);
}
