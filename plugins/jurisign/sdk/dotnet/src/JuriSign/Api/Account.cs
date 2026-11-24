using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using JuriSign.Core;
using JuriSign.Core.Exceptions;
using JuriSign.Core.Request;
using JuriSign.Core.Response;
using JuriSign.Errors;
using JuriSign.Models;

namespace JuriSign.Api;

/// <summary>
/// Credit balance and plan
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
    /// Get Credit Balance
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountCreditsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountCreditsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve your organization's real-time signature credit consumption. Scoped strictly to the organization of the authenticated token.
    /// </remarks>
    public Task<AccountCreditsResponse> GetAccountCredits(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/account/credits"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccountCreditsResponse>(),
            GetAccountCreditsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
