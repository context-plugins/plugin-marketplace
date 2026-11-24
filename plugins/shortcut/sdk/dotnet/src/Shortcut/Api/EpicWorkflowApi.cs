using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;

namespace Shortcut.Api;

public sealed class EpicWorkflowApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal EpicWorkflowApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Epic Workflow
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EpicWorkflow"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEpicWorkflowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the Epic Workflow for the Workspace.
    /// </remarks>
    public Task<EpicWorkflow> GetEpicWorkflow(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epic-workflow"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EpicWorkflow>(),
            GetEpicWorkflowError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
