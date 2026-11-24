using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.AuditLogs;

namespace Contentstack.Api;

/// <summary>
/// Audit logs track all administrative actions taken within an automation project, providing a history of configuration changes.
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
    /// Get all audit logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuditLogList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllAuditLogsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all audit log entries for administrative actions taken within the project such as creating, updating, or deleting automations and configuration changes.
    /// </remarks>
    public Task<AuditLogList> GetAllAuditLogs(GetAllAuditLogsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAutomateManagementAccountsApi(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/audit-logs"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AuditLogList>(),
            GetAllAuditLogsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
