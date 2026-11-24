using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using StayingApi.Core;
using StayingApi.Core.Exceptions;
using StayingApi.Core.Request;
using StayingApi.Core.Response;
using StayingApi.Errors;
using StayingApi.Models;

namespace StayingApi.Api;

/// <summary>
/// Account, plan and credit balance
/// </summary>
public sealed class AccountApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AccountApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Account, plan, credit balance and rate limit (0 credits)
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Programmatic introspection of the authenticated key: credit balance, plan (code/name/status), key env (live | sandbox) and the per-plan rate limit (requests/minute). Works for live and sandbox keys; free and never billed.
    /// </remarks>
    public Task<AccountEnvelope> Account(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/account"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccountEnvelope>(),
            AccountError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
