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
using AmazonDevOpsGuru.Requests.ListLogAnomalies;

namespace AmazonDevOpsGuru.Api;

public sealed class ListLogAnomalies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ListLogAnomalies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Anomalous Log Groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAnomalousLogGroupsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAnomalousLogGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the list of log groups that contain log anomalies.
    /// </remarks>
    public Task<ListAnomalousLogGroupsResponse> ListAnomalousLogGroups(ListAnomalousLogGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/list-log-anomalies"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListAnomalousLogGroupsResponse>(),
            ListAnomalousLogGroupsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
