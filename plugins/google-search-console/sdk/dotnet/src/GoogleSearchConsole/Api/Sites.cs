using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleSearchConsole.Core;
using GoogleSearchConsole.Core.Authentication;
using GoogleSearchConsole.Core.Exceptions;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Core.Request;
using GoogleSearchConsole.Core.Response;
using GoogleSearchConsole.Errors;
using GoogleSearchConsole.Models;
using GoogleSearchConsole.Requests.Sites;

namespace GoogleSearchConsole.Api;

public sealed class Sites
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Sites(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add sites
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebmastersSitesAddError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a site to the set of the user's sites in Search Console.
    /// </remarks>
    public Task WebmastersSitesAdd(WebmastersSitesAddRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webmasters/v3/sites/{siteUrl}"),
            [new TemplateParam("siteUrl", request.SiteUrl)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            WebmastersSitesAddError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete sites
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebmastersSitesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a site from the set of the user's Search Console sites.
    /// </remarks>
    public Task WebmastersSitesDelete(WebmastersSitesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webmasters/v3/sites/{siteUrl}"),
            [new TemplateParam("siteUrl", request.SiteUrl)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            WebmastersSitesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get sites
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WmxSite"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebmastersSitesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves information about specific site.
    /// </remarks>
    public Task<WmxSite> WebmastersSitesGet(WebmastersSitesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webmasters/v3/sites/{siteUrl}"),
            [new TemplateParam("siteUrl", request.SiteUrl)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WmxSite>(),
            WebmastersSitesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List sites
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SitesListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebmastersSitesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the user's Search Console sites.
    /// </remarks>
    public Task<SitesListResponse> WebmastersSitesList(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webmasters/v3/sites"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SitesListResponse>(),
            WebmastersSitesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
