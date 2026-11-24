using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cloro.Core;
using Cloro.Core.Exceptions;
using Cloro.Core.Models;
using Cloro.Core.Request;
using Cloro.Core.Response;
using Cloro.Errors;
using Cloro.Models;
using Cloro.Requests.MonitorApi;

namespace Cloro.Api;

public sealed class MonitorApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MonitorApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a Google shopping card product
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleProductResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGoogleProductError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the product panel that a Google Search shopping card or a Google AI Mode product opens: merchant offers, description, specifications, reviews, images and related products. Send the <c>productResultToken</c> from a Google Search <c>result.shoppingCards</c> card, or from a Google AI Mode <c>result.shoppingCards</c> or <c>result.inlineProducts</c> entry.
    /// <para>
    /// Costs 1 credit, plus the 2-credit sync surcharge, and only when the request succeeds. A token expires five minutes after the scrape that issued it. If you send the request async, set a high <c>priority</c>, so that the token does not expire in the queue.
    /// </para>
    /// </remarks>
    public Task<GoogleProductResponse> GetGoogleProduct(GetGoogleProductRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/google/product"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleProductResponse>(),
            GetGoogleProductError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Monitor AI Mode Responses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AiModeMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MonitorAiModeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract structured data from AI Mode about your brand, products, or any topic across various regions
    /// </remarks>
    public Task<AiModeMonitorResponse> MonitorAiMode(MonitorAiModeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/aimode"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AiModeMonitorResponse>(),
            MonitorAiModeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Monitor Bing AI Mode Responses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BingAiModeMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MonitorBingAiModeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract the answer, sources and citation pills from Bing AI Mode (bing.com/copilotsearch) for a prompt, in the country you select.
    /// </remarks>
    public Task<BingAiModeMonitorResponse> MonitorBingAiMode(MonitorBingAiModeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/bing/aimode"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BingAiModeMonitorResponse>(),
            MonitorBingAiModeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Monitor ChatGPT Responses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChatGptMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MonitorChatgptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract structured data from ChatGPT — answer text, cited sources, shopping cards, brand entities, and ads — for any prompt across supported regions
    /// </remarks>
    public Task<ChatGptMonitorResponse> MonitorChatgpt(MonitorChatgptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/chatgpt"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ChatGptMonitorResponse>(),
            MonitorChatgptError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Monitor Copilot Responses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CopilotMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MonitorCopilotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract structured data from Microsoft Copilot about your brand, products, or any topic across various regions
    /// </remarks>
    public Task<CopilotMonitorResponse> MonitorCopilot(MonitorCopilotRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/copilot"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CopilotMonitorResponse>(),
            MonitorCopilotError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Monitor Gemini Responses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeminiMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MonitorGeminiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract structured data from Google Gemini — generated answer text and cited sources for any prompt, with Markdown and HTML export formats
    /// </remarks>
    public Task<GeminiMonitorResponse> MonitorGemini(MonitorGeminiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/gemini"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GeminiMonitorResponse>(),
            MonitorGeminiError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Monitor Google Search Results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MonitorGoogleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract structured data from Google Search including organic results, People Also Ask, related searches, and optional AI Overview
    /// </remarks>
    public Task<GoogleMonitorResponse> MonitorGoogle(MonitorGoogleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/google"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleMonitorResponse>(),
            MonitorGoogleError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Monitor Google News Results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleNewsMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MonitorGoogleNewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract structured news articles from Google News including titles, links, snippets, sources, dates, and thumbnails
    /// </remarks>
    public Task<GoogleNewsMonitorResponse> MonitorGoogleNews(MonitorGoogleNewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/google/news"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleNewsMonitorResponse>(),
            MonitorGoogleNewsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Monitor Grok Responses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GrokMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MonitorGrokError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract structured data from Grok — answer text and cited sources, including X/Twitter references — for any prompt across supported regions
    /// </remarks>
    public Task<GrokMonitorResponse> MonitorGrok(MonitorGrokRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/grok"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GrokMonitorResponse>(),
            MonitorGrokError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Monitor Perplexity Responses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PerplexityMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MonitorPerplexityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extract structured data from Perplexity AI about your brand, products, or any topic across various regions
    /// </remarks>
    public Task<PerplexityMonitorResponse> MonitorPerplexity(MonitorPerplexityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/perplexity"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PerplexityMonitorResponse>(),
            MonitorPerplexityError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resolve a Google redirect link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleGotoResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResolveGoogleGotoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve one Google redirect link to its destination URL. Send the <c>redirectLink</c> that ships beside every resolved link on a Google Search, Google News, or AI Mode response, and the response gives you the URL it points to.
    /// <para>
    /// Charges no credits, does not use a concurrency slot, and counts against the per-second rate limit like any other call. Each request resolves one link, and Google gets at most 10 seconds to answer.
    /// </para>
    /// </remarks>
    public Task<GoogleGotoResponse> ResolveGoogleGoto(ResolveGoogleGotoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitor/google/goto"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleGotoResponse>(),
            ResolveGoogleGotoError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
