using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Extensions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.AuditLogs;

namespace UiPath.Api;

/// <summary>
/// Retrieve and download organization and tenant audit event logs
/// </summary>
public sealed class AuditLogs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AuditLogs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Get Organization Audit Event Sources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuditSources"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationAuditSourcesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves metadata about available audit event sources at the organization level. Returns the list of services that generate audit events along with available event types and categories for use as filters in the query events endpoint. Requires the PM.Audit or PM.Audit.Read OAuth scope.
    /// </remarks>
    public Task<AuditSources> GetOrganizationAuditSources(GetOrganizationAuditSourcesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathPlatformManagementAuditLogsApi("/{organizationName}/orgaudit_/api/query/sources"),
            [new TemplateParam("organizationName", request.OrganizationName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AuditSources>(),
            GetOrganizationAuditSourcesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Query Organization Audit Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuditEventCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryOrganizationAuditEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves audit events at the organization level filtered by time range, event source, event type, user, and other criteria. Returns a paginated list of audit events with actor information, event details, and status. Requires the PM.Audit or PM.Audit.Read OAuth scope.
    /// </remarks>
    public Task<AuditEventCollection> QueryOrganizationAuditEvents(QueryOrganizationAuditEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathPlatformManagementAuditLogsApi("/{organizationName}/orgaudit_/api/query/events"),
            [new TemplateParam("organizationName", request.OrganizationName)],
            [
                new Param("from", request.From?.ToIso8601()),
                new Param("to", request.To?.ToIso8601()),
                new Param("source", request.Source),
                new Param("maxCount", request.MaxCount),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AuditEventCollection>(),
            QueryOrganizationAuditEventsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Query Tenant Audit Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuditEventCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryTenantAuditEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves audit events scoped to a specific tenant, filtered by time range, event source, event type, user, and other criteria. Tenant-level audit events cover actions within Orchestrator, Document Understanding, and other tenant-scoped services. Requires the PM.Audit or PM.Audit.Read OAuth scope.
    /// </remarks>
    public Task<AuditEventCollection> QueryTenantAuditEvents(QueryTenantAuditEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathPlatformManagementAuditLogsApi(
                "/{organizationName}/{tenantName}/tenantaudit_/api/query/events"),
            [
                new TemplateParam("organizationName", request.OrganizationName),
                new TemplateParam("tenantName", request.TenantName),
            ],
            [
                new Param("from", request.From?.ToIso8601()),
                new Param("to", request.To?.ToIso8601()),
                new Param("source", request.Source),
                new Param("maxCount", request.MaxCount),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AuditEventCollection>(),
            QueryTenantAuditEventsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
