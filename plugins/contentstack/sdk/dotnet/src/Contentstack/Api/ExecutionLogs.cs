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
using Contentstack.Requests.ExecutionLogs;

namespace Contentstack.Api;

/// <summary>
/// Execution logs record each time an automation runs, including the trigger context, steps executed, and success or failure status.
/// </summary>
public sealed class ExecutionLogs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ExecutionLogs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get all execution logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExecutionLogList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllExecutionLogsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of execution log entries for all automations in the project, showing each run with its trigger context, status, and completion time.
    /// </remarks>
    public Task<ExecutionLogList> GetAllExecutionLogs(GetAllExecutionLogsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAutomateManagementAccountsApi(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/executions"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExecutionLogList>(),
            GetAllExecutionLogsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an execution log
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExecutionLog"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExecutionLogError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the full details of a specific automation execution log entry, including step-by-step results and any error messages encountered.
    /// </remarks>
    public Task<ExecutionLog> GetExecutionLog(GetExecutionLogRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAutomateManagementAccountsApi(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/executions/{execution_uid}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
                new TemplateParam("execution_uid", request.ExecutionUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExecutionLog>(),
            GetExecutionLogError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
