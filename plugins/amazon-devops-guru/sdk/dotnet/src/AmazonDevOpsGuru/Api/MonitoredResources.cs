using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonDevOpsGuru.Core;
using AmazonDevOpsGuru.Core.Exceptions;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Core.Request;
using AmazonDevOpsGuru.Core.Response;
using AmazonDevOpsGuru.Errors;
using AmazonDevOpsGuru.Models;
using AmazonDevOpsGuru.Requests.MonitoredResources;

namespace AmazonDevOpsGuru.Api;

public sealed class MonitoredResources
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MonitoredResources(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Monitored Resources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListMonitoredResourcesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMonitoredResourcesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the list of all log groups that are being monitored and tagged by DevOps Guru.
    /// </remarks>
    public Task<ListMonitoredResourcesResponse> ListMonitoredResources(ListMonitoredResourcesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/monitoredResources"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListMonitoredResourcesResponse>(),
            ListMonitoredResourcesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
