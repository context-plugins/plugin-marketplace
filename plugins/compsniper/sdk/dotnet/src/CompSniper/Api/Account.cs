using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core;
using CompSniper.Core.Exceptions;
using CompSniper.Core.Request;
using CompSniper.Core.Response;
using CompSniper.Errors;
using CompSniper.Models;

namespace CompSniper.Api;

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
    /// Get account quota and purchased-credit usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the authenticated account's monthly allowance, current usage, billing period, rate limit, purchased-credit balance, and total available requests.
    /// </remarks>
    public Task<AccountUsageResponse> GetAccountUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/account/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccountUsageResponse>(),
            GetAccountUsageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
