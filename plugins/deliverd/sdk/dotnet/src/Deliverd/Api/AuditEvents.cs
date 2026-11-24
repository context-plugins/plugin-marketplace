using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Extensions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Models;
using Deliverd.Requests.AuditEvents;

namespace Deliverd.Api;

public sealed class AuditEvents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AuditEvents(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List audit events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AuditEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The organisation's audit trail, newest first, a page at a time, for a SIEM, a warehouse or an auditor's script. Each entry carries its position in the organisation's hash chain (<c>chainSeq</c>), the hash before it (<c>prevHash</c>) and its own (<c>rowHash</c>). Needs <c>audit:read</c> and a key bound to an owner, an administrator or a security administrator, read on every call; an agent key is refused (<c>403 agent_not_permitted</c>), as is anybody else (<c>403 not_permitted</c>). To tail the log, pass <c>afterSeq</c> (the last <c>chainSeq</c> you have): entries then come oldest first by chain position, which cannot miss an entry written late with an earlier time, as <c>since</c> can. For a live feed, subscribe a webhook endpoint to <c>audit.event</c> instead.
    /// </remarks>
    public Task<ApiV1AuditEventsResponse> GetApiV1AuditEvents(GetApiV1AuditEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/audit-events"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("since", request.Since?.ToIso8601()),
                new Param("until", request.Until?.ToIso8601()),
                new Param("eventType", request.EventType),
                new Param("actorId", request.ActorId),
                new Param("actorType", request.ActorType),
                new Param("resourceType", request.ResourceType),
                new Param("resourceId", request.ResourceId),
                new Param("flowId", request.FlowId),
                new Param("afterSeq", request.AfterSeq),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AuditEventsResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
