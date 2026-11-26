using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Search1Api.Core;
using Search1Api.Core.Exceptions;
using Search1Api.Core.Models;
using Search1Api.Core.Request;
using Search1Api.Core.Response;
using Search1Api.Errors;
using Search1Api.Models;
using Search1Api.Models.AnyOf;
using Search1Api.Requests.Crawl;

namespace Search1Api.Api;

public sealed class Crawl
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Crawl(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Crawl a URL and extract its content
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CrawlResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CrawlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch one public URL and return its readable title and body as clean text, with navigation, boilerplate, and scripts stripped. Use it on a URL the user supplied or one returned by POST /search. To ingest a whole site rather than a single page, use POST /deepcrawl. Send an array of request objects to crawl several URLs in one call: the response is an array containing only the URLs that succeeded, in no guaranteed order, so match items back to your input by <c>crawlParameters.url</c>; failed URLs are omitted and not charged. <c>enable_fallback</c> is accepted as a snake_case alias of <c>enableFallback</c>. Costs 1 credit per request.
    /// </remarks>
    public Task<CrawlResponse1> CrawlInvoke(CrawlOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/crawl"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CrawlResponse1>(),
            CrawlError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Deep crawl a website across multiple pages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeepcrawlAcceptedResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeepcrawlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start an asynchronous crawl of an entire site and package the pages as documents. Use it for whole-site ingestion; a single page is POST /crawl. The call returns a task id immediately rather than the result — poll GET /deepcrawl/status/{taskId} until the task reports completion. Costs 20 credits per request.
    /// </remarks>
    public Task<DeepcrawlAcceptedResponse> Deepcrawl(DeepcrawlOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/deepcrawl"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeepcrawlAcceptedResponse>(),
            DeepcrawlError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check deepcrawl task status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeepcrawlStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeepcrawlStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Poll a deepcrawl task started by POST /deepcrawl. Returns the task's current state and, once it finishes, where to retrieve the packaged result. Safe to call repeatedly. Free to call.
    /// </remarks>
    public Task<DeepcrawlStatusResponse> DeepcrawlStatus(DeepcrawlStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/deepcrawl/status/{taskId}"),
            [new TemplateParam("taskId", request.TaskId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DeepcrawlStatusResponse>(),
            DeepcrawlStatusError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Extract structured content from a URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExtractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExtractError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pull structured data out of a single webpage using a natural-language prompt and a JSON schema you supply. Use it when you need specific fields — prices, specifications, contact details — rather than the whole document; when you want the full text, use POST /crawl. Costs 10 credits per request.
    /// </remarks>
    public Task<ExtractResponse> Extract(ExtractOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/extract"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExtractResponse>(),
            ExtractError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Extract sitemap URLs from a website
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SitemapResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SitemapError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Discover the public URLs of a site when you need to know which pages exist before fetching any of them — scoping a crawl, auditing coverage, or locating a section. With the default <c>type: "sitemap"</c> this reads the site's own sitemap: <c>Sitemap:</c> directives in robots.txt first, then the conventional paths, following sitemap index files and gzipped sitemaps, and returns the URLs it declares for the requested host. A site that publishes no sitemap falls back to the links found on the given page. Use <c>type: "all"</c> to skip the sitemap and get every link on that one page instead, including links to other hosts. Neither mode fetches page content. Costs 1 credit per request.
    /// </remarks>
    public Task<SitemapResponse> Sitemap(SitemapOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sitemap"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SitemapResponse>(),
            SitemapError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
