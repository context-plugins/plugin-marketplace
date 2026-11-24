using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Compabase.Core;
using Compabase.Core.Authentication;
using Compabase.Core.Exceptions;
using Compabase.Core.Models;
using Compabase.Core.Request;
using Compabase.Core.Response;
using Compabase.Errors;
using Compabase.Models;
using Compabase.Requests.Watchlist;

namespace Compabase.Api;

public sealed class Watchlist
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Watchlist(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Remove company from watchlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWatchlistKrsByKrsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a KRS company from the watchlist of the user linked to the API key.
    /// Reverses <c>POST /watchlist/krs/{krs}</c>; the company can be added again at any time.
    /// Idempotent: <c>removed: false</c> when the company was not on the list.
    /// Use <c>dry_run=true</c> to see the outcome (<c>would_remove</c>) without writing.
    /// </remarks>
    public Task<object> DeleteWatchlistKrsByKrs(DeleteWatchlistKrsByKrsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/watchlist/krs/{krs}"),
            [new TemplateParam("krs", request.Krs)],
            [new Param("dry_run", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteWatchlistKrsByKrsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List watchlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWatchlistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists companies on the watchlist of the <b>user account linked to the API key</b>.
    /// Requires <c>user_id</c> on the key.
    /// </remarks>
    public Task<object> GetWatchlist(GetWatchlistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/watchlist"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetWatchlistError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add company to watchlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WatchlistAddResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostWatchlistKrsByKrsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a company to the <b>watchlist of the user account linked to the API key</b>.
    /// <para>
    /// The company is identified by <b>KRS</b> (Polish court registry number). Digits only;
    /// leading zeros are optional (normalized to 10 digits server-side).
    /// </para>
    /// <para>
    /// <b>Create-or-keep in one call, keyed by KRS:</b> if the company is already on the watchlist,
    /// the response returns <c>already_following: true</c> and no duplicate entry is created, so the call
    /// is safe to retry. <c>already_following</c> tells which branch ran.
    /// </para>
    /// <para>
    /// <b>Reversible:</b> <c>DELETE /watchlist/krs/{krs}</c> removes the entry at any time.
    /// Use <c>dry_run=true</c> to check the plan limit and the outcome without writing.
    /// </para>
    /// <para>
    /// Requires an API key associated with a Compabase portal user account (<c>user_id</c> on the key).
    /// </para>
    /// </remarks>
    public Task<WatchlistAddResponse> PostWatchlistKrsByKrs(PostWatchlistKrsByKrsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/watchlist/krs/{krs}"),
            [new TemplateParam("krs", request.Krs)],
            [new Param("dry_run", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<WatchlistAddResponse>(),
            PostWatchlistKrsByKrsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
