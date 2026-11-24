using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.Search;

namespace Shortcut.Api;

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
    /// Search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the <c>next</c> value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
    /// </remarks>
    public Task<SearchResults> SearchInvoke(SearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/search"),
            [],
            [
                new Param("query", request.Query),
                new Param("page_size", request.PageSize),
                new Param("detail", request.Detail),
                new Param("next", request.Next),
                new Param("entity_types", request.EntityTypes),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchResults>(),
            SearchError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Documents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocSearchResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Documents lets you search Documents based on desired parameters.
    /// Supports structured filters: title, archived, created_by_me, followed_by_me.
    /// </remarks>
    public Task<DocSearchResults> SearchDocuments(SearchDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/search/documents"),
            [],
            [
                new Param("title", request.Title),
                new Param("archived", request.Archived),
                new Param("created_by_me", request.CreatedByMe),
                new Param("followed_by_me", request.FollowedByMe),
                new Param("page_size", request.PageSize),
                new Param("next", request.Next),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DocSearchResults>(),
            SearchDocumentsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Epics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EpicSearchResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchEpicsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the <c>next</c> value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
    /// </remarks>
    public Task<EpicSearchResults> SearchEpics(SearchEpicsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/search/epics"),
            [],
            [
                new Param("query", request.Query),
                new Param("page_size", request.PageSize),
                new Param("detail", request.Detail),
                new Param("next", request.Next),
                new Param("entity_types", request.EntityTypes),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EpicSearchResults>(),
            SearchEpicsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Iterations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IterationSearchResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchIterationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the <c>next</c> value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
    /// </remarks>
    public Task<IterationSearchResults> SearchIterations(SearchIterationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/search/iterations"),
            [],
            [
                new Param("query", request.Query),
                new Param("page_size", request.PageSize),
                new Param("detail", request.Detail),
                new Param("next", request.Next),
                new Param("entity_types", request.EntityTypes),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IterationSearchResults>(),
            SearchIterationsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Milestones
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObjectiveSearchResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchMilestonesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the <c>next</c> value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
    /// </remarks>
    public Task<ObjectiveSearchResults> SearchMilestones(SearchMilestonesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/search/milestones"),
            [],
            [
                new Param("query", request.Query),
                new Param("page_size", request.PageSize),
                new Param("detail", request.Detail),
                new Param("next", request.Next),
                new Param("entity_types", request.EntityTypes),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ObjectiveSearchResults>(),
            SearchMilestonesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Objectives
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObjectiveSearchResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchObjectivesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the <c>next</c> value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
    /// </remarks>
    public Task<ObjectiveSearchResults> SearchObjectives(SearchObjectivesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/search/objectives"),
            [],
            [
                new Param("query", request.Query),
                new Param("page_size", request.PageSize),
                new Param("detail", request.Detail),
                new Param("next", request.Next),
                new Param("entity_types", request.EntityTypes),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ObjectiveSearchResults>(),
            SearchObjectivesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StorySearchResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the <c>next</c> value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
    /// </remarks>
    public Task<StorySearchResults> SearchStories(SearchStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/search/stories"),
            [],
            [
                new Param("query", request.Query),
                new Param("page_size", request.PageSize),
                new Param("detail", request.Detail),
                new Param("next", request.Next),
                new Param("entity_types", request.EntityTypes),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StorySearchResults>(),
            SearchStoriesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
