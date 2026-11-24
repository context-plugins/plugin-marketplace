using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using HealthGorilla.Core;
using HealthGorilla.Core.ErrorResponse;
using HealthGorilla.Core.Exceptions;
using HealthGorilla.Core.Models;
using HealthGorilla.Core.Request;
using HealthGorilla.Core.Response;
using HealthGorilla.Models;
using HealthGorilla.Requests.Observation;

namespace HealthGorilla.Api;

/// <summary>
/// Individual result observations.
/// </summary>
public sealed class Observation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Observation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search Observation resources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Bundle"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Bundle> SearchObservations(SearchObservationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Observation"),
            [],
            [
                new Param("patient", request.Patient),
                new Param("code", request.Code),
                new Param("_count", request.Count),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Bundle>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
