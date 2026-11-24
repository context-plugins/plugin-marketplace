using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Rendex.Core;
using Rendex.Core.Exceptions;
using Rendex.Core.Request;
using Rendex.Core.Response;
using Rendex.Errors;
using Rendex.Models;

namespace Rendex.Api;

/// <summary>
/// Plan, usage, and upgrade information
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
    /// Get plan, usage, and upgrade info
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AccountResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the authenticated account's plan, this month's usage
    /// (used / limit / remaining and the reset date), the per-minute rate limit,
    /// and a recommended upgrade with a one-tap link. Read-only and free — it
    /// does not consume credits.
    /// </remarks>
    public Task<V1AccountResponse> GetAccount(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/account"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AccountResponse>(),
            GetAccountError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
