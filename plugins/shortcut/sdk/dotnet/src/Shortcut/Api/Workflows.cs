using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.Workflows;

namespace Shortcut.Api;

public sealed class Workflows
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Workflows(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Workflow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Workflow"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkflowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Workflow returns information about a chosen Workflow.
    /// </remarks>
    public Task<Workflow> GetWorkflow(GetWorkflowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/workflows/{workflow-public-id}"),
            [new TemplateParam("workflow-public-id", request.WorkflowPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Workflow>(),
            GetWorkflowError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Workflows
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Workflow"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWorkflowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all Workflows in the Workspace.
    /// </remarks>
    public Task<IReadOnlyList<Workflow>> ListWorkflows(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/workflows"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Workflow>>(),
            ListWorkflowsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
