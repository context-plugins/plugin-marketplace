using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CircleCi.Core;
using CircleCi.Core.Exceptions;
using CircleCi.Core.Models;
using CircleCi.Core.Request;
using CircleCi.Core.Response;
using CircleCi.Errors;
using CircleCi.Models;
using CircleCi.Requests.RunnerApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for listing and querying self-hosted runners and their status within a namespace or resource class.
/// </summary>
public sealed class RunnerApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal RunnerApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List self-hosted runners
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunnerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRunnersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of self-hosted runners filtered by namespace or resource class. At least one filter parameter must be provided to return results. Returns details including hostname, name, connection timestamps, version, and resource class.
    /// </remarks>
    public Task<RunnerResponse> ListRunners(ListRunnersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runner"),
            [],
            [new Param("namespace", request.Namespace), new Param("resource-class", request.ResourceClass)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RunnerResponse>(),
            ListRunnersError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
