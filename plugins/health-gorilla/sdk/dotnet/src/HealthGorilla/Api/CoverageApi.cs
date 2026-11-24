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
using HealthGorilla.Requests.CoverageApi;

namespace HealthGorilla.Api;

/// <summary>
/// Patient insurance coverage / eligibility.
/// </summary>
public sealed class CoverageApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CoverageApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Read a Coverage resource by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Coverage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Coverage> ReadCoverage(ReadCoverageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Coverage/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Coverage>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Coverage resources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Bundle"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Bundle> SearchCoverage(SearchCoverageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Coverage"),
            [],
            [new Param("patient", request.Patient), new Param("_count", request.Count)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Bundle>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
