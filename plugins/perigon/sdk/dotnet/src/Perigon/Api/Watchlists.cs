using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Perigon.Core;
using Perigon.Core.Exceptions;
using Perigon.Core.Models;
using Perigon.Core.Request;
using Perigon.Core.Response;
using Perigon.Errors;
using Perigon.Models;
using Perigon.Requests.Watchlists;

namespace Perigon.Api;

/// <summary>
/// Manage watchlists of people and companies for use with monitors. Watchlists can contain up to 100 combined entities and are used to track mentions across news content.
/// </summary>
public sealed class Watchlists
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Watchlists(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create watchlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WatchlistResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWatchlistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new watchlist under the organization associated with the API key. A watchlist can contain up to 100 combined people and companies.
    /// </remarks>
    public Task<WatchlistResult> CreateWatchlist(CreateWatchlistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/watchlists"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WatchlistResult>(),
            CreateWatchlistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete watchlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WatchlistResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWatchlistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a watchlist owned by the organization associated with the API key. A watchlist cannot be deleted if it is attached to active monitors.
    /// </remarks>
    public Task<WatchlistResult> DeleteWatchlist(DeleteWatchlistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/watchlists/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<WatchlistResult>(),
            DeleteWatchlistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get watchlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WatchlistResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWatchlistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a watchlist by ID. Only returns watchlists owned by the organization associated with the API key.
    /// </remarks>
    public Task<WatchlistResult> GetWatchlist(GetWatchlistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/watchlists/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WatchlistResult>(),
            GetWatchlistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List watchlists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WatchlistListResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWatchlistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List watchlists owned by the organization associated with the API key, as well as publicly visible watchlists. Supports filtering by name.
    /// </remarks>
    public Task<WatchlistListResult> ListWatchlists(ListWatchlistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/watchlists"),
            [],
            [
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("name", request.Name),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("nulls", request.Nulls),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WatchlistListResult>(),
            ListWatchlistsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resolve watchlists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WatchlistResolveResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResolveWatchlistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve watchlists by name. For each name, returns the organization's private watchlist if one exists, otherwise falls back to the matching public watchlist.
    /// </remarks>
    public Task<WatchlistResolveResult> ResolveWatchlists(ResolveWatchlistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/watchlists/resolve"),
            [],
            [new Param("name", request.Name)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WatchlistResolveResult>(),
            ResolveWatchlistsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update watchlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WatchlistResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWatchlistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially update a watchlist owned by the organization associated with the API key. Only provided fields will be updated.
    /// </remarks>
    public Task<WatchlistResult> UpdateWatchlist(UpdateWatchlistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/watchlists/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WatchlistResult>(),
            UpdateWatchlistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
