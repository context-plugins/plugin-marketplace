using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Models;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Errors;
using Audioscrape.Models;
using Audioscrape.Requests.Search;

namespace Audioscrape.Api;

/// <summary>
/// Hybrid, text, and semantic search across all audio content, regardless of source type
/// </summary>
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
    /// Hybrid, text, or semantic search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchApiV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches the audio corpus and returns segment-level results with timestamps, highlights, and the parent episode + podcast.
    /// The default <c>search_type</c> of <c>hybrid</c> combines keyword scoring with semantic vector matching; use <c>text</c> for boolean queries
    /// and quoted phrases, <c>semantic</c> for natural-language questions. Filter by podcast, speaker, or publish-date range via the
    /// <c>filters</c> object.
    /// </remarks>
    public Task<SearchResponse> SearchApiV1(SearchApiV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchResponse>(),
            SearchApiV1Error.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
