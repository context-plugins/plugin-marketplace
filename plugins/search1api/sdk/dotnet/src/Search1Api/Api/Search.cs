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
using Search1Api.Requests.Search;

namespace Search1Api.Api;

public sealed class Search
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Search(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search the engines a natural-language request calls for
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AskResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Agentic search. Describe what you are looking for in plain language and let a decision model (currently TypeSafe Jev) decide where to look. It picks up to five engines (web search, Hacker News, Reddit, GitHub, X, arXiv, Wikipedia, IMDb, WeChat, YouTube), rewrites the request into search keywords, infers a publication window from phrases such as "this week", searches the engines in parallel, and returns only the results judged relevant, merged and ranked, so agents read fewer off-topic results. The request takes only <c>query</c>; engines, keywords, and the window are always chosen by the model, and the response reports them in <c>intent</c>. Use POST /search instead when you already know the engine and keywords and want its raw ranking. Costs 5 credits per request.
    /// </remarks>
    public Task<AskResponse> Ask(AskOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ask"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AskResponse>(),
            AskError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search news articles across multiple sources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search recent news when the question is about events, announcements, or coverage rather than reference material. Returns articles from verified publishers with title, URL, snippet, <c>published_date</c> (ISO 8601, when known), and optional full page content, filterable by site, language, and time range. For questions that are not time-sensitive, prefer POST /search. Costs 1 credit per request.
    /// </remarks>
    public Task<NewsResponse1> News(NewsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/news"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NewsResponse1>(),
            NewsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search the web using multiple search engines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search the live public web when the answer depends on current information, sources, or research a model's training data cannot cover. Returns ranked results with id, title, URL, snippet, and <c>published_date</c> (ISO 8601, when the engine exposes one) across 13+ engines, with optional images. Set <c>crawl_results</c> to pull the top N result pages in the same call — each crawled page is billed as an additional crawl — or pass a result URL to POST /crawl separately. Costs 1 credit per request.
    /// </remarks>
    public Task<SearchResponse1> SearchInvoke(SearchOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchResponse1>(),
            SearchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get trending topics from various platforms
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TrendingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TrendingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List what is currently popular on a supported platform, such as GitHub repositories or Hacker News stories, when the user asks what is trending or new right now. This reads a platform's own live ranking rather than performing a query — for topic searches use POST /search. Costs 1 credit per request.
    /// </remarks>
    public Task<TrendingResponse> Trending(TrendingOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/trending"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TrendingResponse>(),
            TrendingError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
