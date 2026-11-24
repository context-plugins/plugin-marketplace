using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.Versions;

namespace DynamicFeed.Api;

public sealed class Versions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Versions(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VersionsVersionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Latest stable versions &amp; end-of-life dates for languages, runtimes, frameworks,
    /// databases &amp; OSes. Answers 'what's the latest X?' and 'is version Y still supported?'.
    /// Each row has a <c>status</c> (supported/nearing-eol/end-of-life) + provenance. (Requires API key.)
    /// </remarks>
    public Task<object> VersionsVersionsGet(VersionsVersionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/versions"),
            [],
            [
                new Param("product", request.Product),
                new Param("q", request.Q),
                new Param("category", request.Category),
                new Param("only_supported", request.OnlySupported),
                new Param("only_lts", request.OnlyLts),
                new Param("limit", request.Limit),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            VersionsVersionsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
