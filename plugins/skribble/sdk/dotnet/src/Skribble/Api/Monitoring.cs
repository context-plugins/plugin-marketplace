using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Authentication;
using Skribble.Core.Exceptions;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Models;

namespace Skribble.Api;

/// <summary>
/// Endpoints for monitoring system health.
/// </summary>
public sealed class Monitoring
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Monitoring(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// System Health
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SystemHealthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSystemHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current health status of the Skribble API. Use this endpoint
    /// to monitor system availability and responsiveness.
    /// <para>
    /// <c>status:UP</c> indicates that the system is operational.
    /// </para>
    /// </remarks>
    public Task<SystemHealthResponse> GetSystemHealth(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleMonitoringApi("/management/health"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SystemHealthResponse>(),
            GetSystemHealthError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
