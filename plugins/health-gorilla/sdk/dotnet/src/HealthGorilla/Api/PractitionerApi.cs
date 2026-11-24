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
using HealthGorilla.Requests.PractitionerApi;

namespace HealthGorilla.Api;

/// <summary>
/// Ordering and rendering providers.
/// </summary>
public sealed class PractitionerApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PractitionerApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Read a Practitioner resource by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Practitioner"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Practitioner> ReadPractitioner(ReadPractitionerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Practitioner/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Practitioner>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Practitioner resources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Bundle"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Bundle> SearchPractitioners(SearchPractitionersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Practitioner"),
            [],
            [
                new Param("identifier", request.Identifier),
                new Param("name", request.Name),
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
