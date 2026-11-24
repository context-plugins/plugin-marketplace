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
using GoogleSearchConsole.Requests.Sitemaps;

namespace GoogleSearchConsole.Api;

public sealed class Sitemaps
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Sitemaps(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete sitemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebmastersSitemapsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
    /// </remarks>
    public Task WebmastersSitemapsDelete(WebmastersSitemapsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
            [new TemplateParam("siteUrl", request.SiteUrl), new TemplateParam("feedpath", request.Feedpath)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            WebmastersSitemapsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get sitemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WmxSitemap"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebmastersSitemapsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves information about a specific sitemap.
    /// </remarks>
    public Task<WmxSitemap> WebmastersSitemapsGet(WebmastersSitemapsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
            [new TemplateParam("siteUrl", request.SiteUrl), new TemplateParam("feedpath", request.Feedpath)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WmxSitemap>(),
            WebmastersSitemapsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List sitemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SitemapsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebmastersSitemapsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if <c>sitemapIndex</c> is specified in the request).
    /// </remarks>
    public Task<SitemapsListResponse> WebmastersSitemapsList(WebmastersSitemapsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webmasters/v3/sites/{siteUrl}/sitemaps"),
            [new TemplateParam("siteUrl", request.SiteUrl)],
            [new Param("sitemapIndex", request.SitemapIndex)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SitemapsListResponse>(),
            WebmastersSitemapsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit sitemaps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebmastersSitemapsSubmitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits a sitemap for a site.
    /// </remarks>
    public Task WebmastersSitemapsSubmit(WebmastersSitemapsSubmitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
            [new TemplateParam("siteUrl", request.SiteUrl), new TemplateParam("feedpath", request.Feedpath)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            WebmastersSitemapsSubmitError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
