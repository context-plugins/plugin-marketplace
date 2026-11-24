using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Authentication;
using PlinthUsGrantsData.Core.ErrorResponse;
using PlinthUsGrantsData.Core.Exceptions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Core.Request;
using PlinthUsGrantsData.Core.Response;
using PlinthUsGrantsData.Errors;
using PlinthUsGrantsData.Models;
using PlinthUsGrantsData.Requests.Resolve;

namespace PlinthUsGrantsData.Api;

/// <summary>
/// Turn an organization name into an EIN and a canonical URL. No key required.
/// </summary>
public sealed class Resolve
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Resolve(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Resolve an organization name to an EIN and canonical URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1SearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches every US grantmaking foundation and funded nonprofit, or the Canadian charities register under <c>jurisdiction=ca</c>. <b>No API key required and not metered.</b>
    /// <para>
    /// <c>q</c> also accepts an EIN (<c>131684331</c> or <c>13-1684331</c>), which resolves against the index directly rather than as text. A parameter this endpoint does not accept comes back named in <c>x_plinth.warnings</c>, and <c>strict=1</c> turns that into a 400 — the same contract as the grant endpoints. Omitting <c>q</c> is a 400 rather than an empty result set, because an empty result set is indistinguishable from a genuine miss.
    /// </para>
    /// </remarks>
    public Task<ApiV1SearchResponse> GetApiV1Search(GetApiV1SearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/search"),
            [],
            [
                new Param("q", request.Q),
                new Param("jurisdiction", request.Jurisdiction),
                new Param("state", request.State),
                new Param("limit", request.Limit),
                new Param("min", request.Min),
                new Param("max", request.Max),
                new Param("strict", request.Strict),
                new Param("example", request.Example),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1SearchResponse>(),
            GetApiV1SearchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resolve an organization name to an EIN and canonical URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches every US grantmaking foundation and funded nonprofit. <b>No API key required and not metered.</b>
    /// </remarks>
    public Task<ApiSearchResponse> SearchOrganizations(SearchOrganizationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/search"),
            [],
            [new Param("q", request.Q), new Param("state", request.State), new Param("mode", request.Mode)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiSearchResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
