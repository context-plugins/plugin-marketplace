using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Requests.IntegrationsJira;

namespace DevCycle.Api;

public sealed class IntegrationsJira
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal IntegrationsJira(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// [Deprecated] Remove Jira Integration Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DEPRECATED - Not recommended to be used. Use /integrations/jira/organization/:token or /integrations/jira/project/:token instead.
    /// </remarks>
    public Task JiraIntegrationControllerRemove(JiraIntegrationControllerRemoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/integrations/jira/{token}"),
            [new TemplateParam("token", request.Token)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Jira Organization Integration Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JiraIntegrationControllerRemoveOrganizationConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove the Jira integration configuration for an organization. This will remove the integration for an organization wide connection, but not project connections.
    /// </remarks>
    public Task JiraIntegrationControllerRemoveOrganizationConnection(JiraIntegrationControllerRemoveOrganizationConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/integrations/jira/organization/{token}"),
            [new TemplateParam("token", request.Token)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            JiraIntegrationControllerRemoveOrganizationConnectionError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Jira Project Integration Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JiraIntegrationControllerRemoveProjectConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a specific project
    /// </remarks>
    public Task JiraIntegrationControllerRemoveProjectConnection(JiraIntegrationControllerRemoveProjectConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/integrations/jira/project/{token}"),
            [new TemplateParam("token", request.Token)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            JiraIntegrationControllerRemoveProjectConnectionError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
