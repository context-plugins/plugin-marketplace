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
using Audioscrape.Requests.KnowledgeGraph;

namespace Audioscrape.Api;

/// <summary>
/// Named-entity search and trending topics
/// </summary>
public sealed class KnowledgeGraph
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal KnowledgeGraph(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get entity detail
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntityDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEntityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an entity (person, organisation, place, etc.) plus the episodes where it's most mentioned. Useful for building topic-specific feeds: pin to an entity, watch which episodes mention it.
    /// </remarks>
    public Task<EntityDetail> GetEntity(GetEntityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/entities/{entity_slug}"),
            [new TemplateParam("entity_slug", request.EntitySlug)],
            [new Param("dataset_id", request.DatasetId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntityDetail>(),
            GetEntityError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trending searches and entities
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TrendingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRealTrendingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns what's trending across Audioscrape in the last 7 days — most-searched queries and most-mentioned entities. Computed from anonymised search logs and live entity-mention counts.
    /// </remarks>
    public Task<TrendingResponse> GetRealTrending(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/trending"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TrendingResponse>(),
            GetRealTrendingError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search knowledge-graph entities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntitySearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchEntitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches the knowledge-graph index for entities (people, organisations, places, topics, products) extracted from podcast content. Results are sorted by total mention count across the corpus.
    /// </remarks>
    public Task<EntitySearchResponse> SearchEntities(SearchEntitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/entities"),
            [],
            [
                new Param("q", request.Q),
                new Param("type", request.Type),
                new Param("limit", request.Limit),
                new Param("dataset_id", request.DatasetId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntitySearchResponse>(),
            SearchEntitiesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
