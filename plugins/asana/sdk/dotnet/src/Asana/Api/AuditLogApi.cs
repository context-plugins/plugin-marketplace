using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Extensions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.AuditLogApi;

namespace Asana.Api;

/// <summary>
/// Asana's audit log is an immutable log of important events in your organization's Asana instance.
/// <para>
/// The audit log API allows you to monitor and act upon important security and compliance-related changes. Organizations might use this API endpoint to:
/// </para>
/// <list type="bullet">
///   <item><description>Set up proactive alerting with a Security Information and Event Management (SIEM) tool like Splunk</description></item>
///   <item><description>Conduct reactive investigations when a security incident takes place</description></item>
///   <item><description>Visualize key domain data in aggregate to identify security trends</description></item>
/// </list>
/// <para>
/// Note that since the API provides insight into what is happening in an Asana instance, the data is read-only. That is, there are no "write" or "update" endpoints for audit log events.
/// </para>
/// <para>
/// Only Service Accounts in Enterprise Domains can access audit log API endpoints. Authentication with a Service Account's personal access token is required.
/// </para>
/// <para>
/// For a full list of supported events, see supported AuditLogEvents.
/// </para>
/// </summary>
public sealed class AuditLogApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AuditLogApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get audit log events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacesAuditLogEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAuditLogEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the audit log events that have been captured in your domain.
    /// <para>
    /// This endpoint will return a list of AuditLogEvent objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.
    /// </para>
    /// <para>
    /// There are a number of query parameters (below) that can be used to filter the set of AuditLogEvent objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.
    /// </para>
    /// <para>
    /// The list of events will always be paginated. The default limit is 1000 events. The next set of events can be retrieved using the <c>offset</c> from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return <c>null</c> for the <c>next_page</c> field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a <c>next_page</c> with an <c>offset</c>, subsequent requests can be made with the latest <c>offset</c> to poll for new events that match the provided filters.
    /// </para>
    /// <para>
    /// When no <c>offset</c> is provided, the response will begin with the oldest events that match the provided filters. It is important to note that AuditLogEvent objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.
    /// </para>
    /// </remarks>
    public Task<WorkspacesAuditLogEventsResponse> GetAuditLogEvents(GetAuditLogEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace_gid}/audit_log_events"),
            [new TemplateParam("workspace_gid", request.WorkspaceGid)],
            [
                new Param("start_at", request.StartAt?.ToIso8601()),
                new Param("end_at", request.EndAt?.ToIso8601()),
                new Param("event_type", request.EventType),
                new Param("actor_type", request.ActorType),
                new Param("actor_gid", request.ActorGid),
                new Param("resource_gid", request.ResourceGid),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspacesAuditLogEventsResponse>(),
            GetAuditLogEventsError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
