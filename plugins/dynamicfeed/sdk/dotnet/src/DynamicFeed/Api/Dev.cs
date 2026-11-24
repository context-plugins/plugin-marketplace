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
using DynamicFeed.Requests.Dev;

namespace DynamicFeed.Api;

public sealed class Dev
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Dev(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Dns Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DnsEpDnsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Live DNS records for a domain via Cloudflare DNS-over-HTTPS. (Requires API key.)
    /// </remarks>
    public Task<object> DnsEpDnsGet(DnsEpDnsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/dns"),
            [],
            [new Param("name", request.Name), new Param("type", request.Type)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DnsEpDnsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Github Releases Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GithubReleasesEpGithubReleasesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Latest GitHub releases for a repo (version, date, author, link) via the public atom feed —
    /// keyless source, no rate limit. (Requires API key on REST; the MCP tool is keyless.)
    /// </remarks>
    public Task<object> GithubReleasesEpGithubReleasesGet(GithubReleasesEpGithubReleasesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/github-releases"),
            [],
            [new Param("repo", request.Repo), new Param("limit", request.Limit)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GithubReleasesEpGithubReleasesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Hacker News Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HackerNewsEpHackerNewsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Live Hacker News stories — the tech/AI attention layer. Optional case-insensitive title filter. (Requires API key.)
    /// </remarks>
    public Task<object> HackerNewsEpHackerNewsGet(HackerNewsEpHackerNewsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/hacker-news"),
            [],
            [new Param("query", request.Query), new Param("kind", request.Kind), new Param("limit", request.Limit)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            HackerNewsEpHackerNewsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
