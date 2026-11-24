using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Perigon.Core;
using Perigon.Core.Exceptions;
using Perigon.Core.Extensions;
using Perigon.Core.Models;
using Perigon.Core.Request;
using Perigon.Core.Response;
using Perigon.Errors;
using Perigon.Models;
using Perigon.Requests.Wikipedia;

namespace Perigon.Api;

/// <summary>
/// Endpoints for searching ingested Wikipedia content. Provides keyword and filtered search capabilities along with vector-based semantic search across Wikipedia pages.
/// </summary>
public sealed class Wikipedia
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Wikipedia(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Wikipedia
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WikipediaSearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchWikipediaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search and filter all Wikipedia pages available via the Perigon API. The result includes a list of individual pages that were matched to your specific criteria.
    /// </remarks>
    public Task<WikipediaSearchResult> SearchWikipedia(SearchWikipediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/wikipedia/all"),
            [],
            [
                new Param("q", request.Q),
                new Param("title", request.Title),
                new Param("summary", request.Summary),
                new Param("text", request.Text),
                new Param("reference", request.Reference),
                new Param("id", request.Id),
                new Param("wikiPageId", request.WikiPageId),
                new Param("wikiRevisionId", request.WikiRevisionId),
                new Param("wikiCode", request.WikiCode),
                new Param("wikiNamespace", request.WikiNamespace),
                new Param("wikidataId", request.WikidataId),
                new Param("wikidataInstanceOfId", request.WikidataInstanceOfId),
                new Param("wikidataInstanceOfLabel", request.WikidataInstanceOfLabel),
                new Param("category", request.Category),
                new Param("sectionId", request.SectionId),
                new Param("wikiRevisionFrom", request.WikiRevisionFrom?.ToIso8601()),
                new Param("wikiRevisionTo", request.WikiRevisionTo?.ToIso8601()),
                new Param("scrapedAtFrom", request.ScrapedAtFrom?.ToIso8601()),
                new Param("scrapedAtTo", request.ScrapedAtTo?.ToIso8601()),
                new Param("pageviewsFrom", request.PageviewsFrom),
                new Param("pageviewsTo", request.PageviewsTo),
                new Param("withPageviews", request.WithPageviews),
                new Param("showNumResults", request.ShowNumResults),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("sortBy", request.SortBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WikipediaSearchResult>(),
            SearchWikipediaError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Wikipedia (Vector)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WikipediaVectorSearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VectorSearchWikipediaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Perform a natural language search over Wikipedia pages using semantic relevance. The result includes a list of page sections most closely matched to your query intent.
    /// </remarks>
    public Task<WikipediaVectorSearchResult> VectorSearchWikipedia(VectorSearchWikipediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/vector/wikipedia/all"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WikipediaVectorSearchResult>(),
            VectorSearchWikipediaError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
