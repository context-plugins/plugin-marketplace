using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Errors;
using Audioscrape.Models;

namespace Audioscrape.Api;

/// <summary>
/// Current-user introspection: plan, limits, usage
/// </summary>
public sealed class Account
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Account(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Current user, plan, and key info
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the authenticated user, their current plan + per-resource limits, the API key that authenticated the request (if any), and the effective dated API version. Use this as the first call in any integration to verify credentials and discover capabilities.
    /// </remarks>
    public Task<MeResponse> GetMe(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/me"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MeResponse>(),
            GetMeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Current usage and limits
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMeUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns this calendar month's usage counters (searches, semantic searches, data calls, keyword alerts) alongside the plan's configured limits. Use it to handle 429 responses proactively — check usage before a heavy burst and back off if you're close to a cap.
    /// </remarks>
    public Task<UsageResponse> GetMeUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/me/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsageResponse>(),
            GetMeUsageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
