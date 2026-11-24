using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Leadspace.Core;
using Leadspace.Core.Exceptions;
using Leadspace.Core.Models;
using Leadspace.Core.Request;
using Leadspace.Core.Response;
using Leadspace.Errors;
using Leadspace.Models;
using Leadspace.Requests.Results;

namespace Leadspace.Api;

/// <summary>
/// Polling for asynchronous discovery results
/// </summary>
public sealed class Results
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Results(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Poll for bulk enrichment results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBulkEnrichmentResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the results of a previously submitted bulk enrichment job.
    /// </remarks>
    public Task<BulkResults> GetBulkEnrichmentResults(GetBulkEnrichmentResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/enrichment/results/{bulkId}"),
            [new TemplateParam("bulkId", request.BulkId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BulkResults>(),
            GetBulkEnrichmentResultsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Poll for bulk discovery results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DiscoveryResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDiscoveryResultsError"/> when the server returns an error response.</exception>
    public Task<DiscoveryResults> GetDiscoveryResults(GetDiscoveryResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/expansion/results/{bulkId}"),
            [new TemplateParam("bulkId", request.BulkId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DiscoveryResults>(),
            GetDiscoveryResultsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Poll for intent scoring results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IntentResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIntentResultsError"/> when the server returns an error response.</exception>
    public Task<IntentResults> GetIntentResults(GetIntentResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/intent/results/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IntentResults>(),
            GetIntentResultsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
