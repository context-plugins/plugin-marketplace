using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using SalesforceServiceCloud.Core;
using SalesforceServiceCloud.Core.Authentication;
using SalesforceServiceCloud.Core.ErrorResponse;
using SalesforceServiceCloud.Core.Exceptions;
using SalesforceServiceCloud.Core.Request;
using SalesforceServiceCloud.Core.Response;
using SalesforceServiceCloud.Models;

namespace SalesforceServiceCloud.Api;

public sealed class Health
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Health(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Check the health status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Status"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns whether the status of Einstein Bots API is up or down.
    /// </remarks>
    public Task<Status> CheckHealthStatus(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/status"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Status>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
