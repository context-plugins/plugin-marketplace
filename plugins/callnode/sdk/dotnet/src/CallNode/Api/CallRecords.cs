using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CallNode.Core;
using CallNode.Core.Authentication;
using CallNode.Core.Exceptions;
using CallNode.Core.Extensions;
using CallNode.Core.Models;
using CallNode.Core.Request;
using CallNode.Core.Response;
using CallNode.Errors;
using CallNode.Models;
using CallNode.Requests.CallRecords;

namespace CallNode.Api;

/// <summary>
/// Read-only records of calls on your numbers — inbound and outbound,
/// with timings, status, end reason, and the SIP-level hangup cause.
/// </summary>
public sealed class CallRecords
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CallRecords(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a call record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CallsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCallRecordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One record by call id — the same uuid CallNode hands you everywhere
    /// else for that call: the <c>X-CallNode-Call-Id</c> header on a BYOC delivery
    /// INVITE, and the <c>callId</c> in webhook and audio-stream query strings.
    /// Returns 404 for a call that does not exist <b>or is not yours</b>.
    /// </remarks>
    public Task<ApiV1CallsResponse1> GetCallRecord(GetCallRecordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/calls/{callId}"),
            [new TemplateParam("callId", request.CallId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CallsResponse1>(),
            GetCallRecordError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List call records
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CallsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCallRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Records of calls on your numbers, newest first — the same rows the
    /// dashboard's call history shows. Covers inbound calls (webhook-answered,
    /// BYOC <c>voice.sipUri</c> deliveries, SIP-trunk ingress) and outbound calls
    /// logged against your numbers.
    /// <para>
    /// <c>endReason</c> and <c>sipCause</c> say <b>why a call ended</b>: <c>endReason</c> is
    /// CallNode's own vocabulary (for example <c>idle_timeout</c> or
    /// <c>insufficient_balance</c>; null means an ordinary hangup), and <c>sipCause</c>
    /// is the SIP-level hangup cause of the caller leg (for example
    /// <c>NORMAL_CLEARING</c> or <c>RECOVERY_ON_TIMER_EXPIRE</c>). Records from before
    /// 2026-09-22 predate these fields and return null for both.
    /// </para>
    /// </remarks>
    public Task<ApiV1CallsResponse> ListCallRecords(ListCallRecordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/calls"),
            [],
            [
                new Param("number", request.Number),
                new Param("direction", request.Direction),
                new Param("status", request.Status),
                new Param("since", request.Since?.ToIso8601()),
                new Param("until", request.Until?.ToIso8601()),
                new Param("before", request.Before?.ToIso8601()),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CallsResponse>(),
            ListCallRecordsError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);
}
