using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Crawl4Ai.Core;
using Crawl4Ai.Core.Authentication;
using Crawl4Ai.Core.Configuration;
using Crawl4Ai.Core.Exceptions;
using Crawl4Ai.Core.Logging;
using Crawl4Ai.Core.Models;
using Crawl4Ai.Core.Request;
using Crawl4Ai.Core.Response;
using Crawl4Ai.Errors;
using Crawl4Ai.Requests;

namespace Crawl4Ai;

/// <summary>
/// AI-powered web scraping and crawling API
/// </summary>
public sealed class Crawl4AiClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    public Crawl4AiClient(HttpClient httpClient, Crawl4AiClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "Crawl4AiClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CRAWL4_AI_LOG"),
            "Crawl4AiClient",
            options.TimeProvider);
        var responseContexts = new ResponseContextFactory(options.TimeProvider, options.StreamReadTimeout);
        _rawClient =
            new RawClient(
                httpClient,
                urlFactory,
                httpStatusPolicy,
                headersFactory,
                resiliencePipelineFactory,
                httpLogger,
                options.Hooks,
                responseContexts);
    }

    /// <summary>
    /// Get Crawl Job Status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCrawlJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the status and results of a crawl job
    /// </remarks>
    public Task GetCrawlJob(GetCrawlJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/crawl/job/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetCrawlJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit Crawl Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubmitCrawlJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit a new web crawling job
    /// </remarks>
    public Task SubmitCrawlJob(SubmitCrawlJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/crawl/job"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SubmitCrawlJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
