using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;

namespace UiPath.Api;

/// <summary>
/// Retrieve automation pipeline data and status views
/// </summary>
public sealed class Pipeline
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Pipeline(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Get Automation Pipeline Data
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineData"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAutomationPipelineError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves aggregated pipeline data showing the distribution of automations across phases and statuses. Used for reporting and dashboard views by CoE administrators to understand the overall health and throughput of the automation program.
    /// </remarks>
    public Task<PipelineData> GetAutomationPipeline(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/automationpipeline"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineData>(),
            GetAutomationPipelineError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
