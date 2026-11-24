using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AppstoreSpy.Core;
using AppstoreSpy.Core.Exceptions;
using AppstoreSpy.Core.Extensions;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Core.Request;
using AppstoreSpy.Core.Response;
using AppstoreSpy.Errors;
using AppstoreSpy.Models;
using AppstoreSpy.Requests.Jobs;

namespace AppstoreSpy.Api;

/// <summary>
/// Asynchronous keyword crawl jobs: submit a term for a store and country, then poll for the results.
/// </summary>
public sealed class Jobs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Jobs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a keyword crawl job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSearchJobsSearchPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits a keyword crawl job for one search term in one store and country. Returns the created job immediately; poll <c>GET /jobs/search</c> with the returned id to collect the results.
    /// </remarks>
    public Task<SearchResult> CreateSearchJobsSearchPost(CreateSearchJobsSearchPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/jobs/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchResult>(),
            CreateSearchJobsSearchPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List keyword crawl jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="SearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSearchJobsSearchGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the keyword crawl jobs you have submitted, filtered by store, term, country or last-updated window. Each result carries the job's current state and, once finished, its results.
    /// </remarks>
    public Task<IReadOnlyList<SearchResult>> GetSearchJobsSearchGet(GetSearchJobsSearchGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/jobs/search"),
            [],
            [
                new Param("store", request.Store),
                new Param("term", request.Term),
                new Param("id_user", request.IdUser),
                new Param("country", request.Country),
                new Param("search_id", request.SearchId),
                new Param("updated_gte", request.UpdatedGte?.ToIso8601()),
                new Param("updated_lte", request.UpdatedLte?.ToIso8601()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<SearchResult>>(),
            GetSearchJobsSearchGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
