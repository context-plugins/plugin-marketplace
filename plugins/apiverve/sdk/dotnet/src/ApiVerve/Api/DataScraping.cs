using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.DataScraping;

namespace ApiVerve.Api;

public sealed class DataScraping
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataScraping(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Contact Extractor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ContactextractorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactextractorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract contact data from a web page
    /// </remarks>
    public Task<V1ContactextractorResponse> Contactextractor(ContactextractorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contactextractor"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1ContactextractorResponse>(),
            ContactextractorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Link Scraper
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LinkscraperResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LinkscraperError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Scrape all the links on a web page
    /// </remarks>
    public Task<V1LinkscraperResponse> Linkscraper(LinkscraperRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/linkscraper"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1LinkscraperResponse>(),
            LinkscraperError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SEO Data Scraper
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SeoscraperResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SeoscraperError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Scrape SEO data from a web page
    /// </remarks>
    public Task<V1SeoscraperResponse> Seoscraper(SeoscraperRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/seoscraper"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SeoscraperResponse>(),
            SeoscraperError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Website Images Scraper
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WebimagescraperResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebimagescraperError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Web Image Scraper is a simple tool for scraping images from a website. It returns the URLs of the images found on the website.
    /// </remarks>
    public Task<V1WebimagescraperResponse> Webimagescraper(WebimagescraperRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webimagescraper"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1WebimagescraperResponse>(),
            WebimagescraperError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Website Screenshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WebscreenshotsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebscreenshotsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Capture a screenshot of a web page
    /// </remarks>
    public Task<V1WebscreenshotsResponse> Webscreenshots(WebscreenshotsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webscreenshots"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1WebscreenshotsResponse>(),
            WebscreenshotsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
