using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Lusha.Core;
using Lusha.Core.Exceptions;
using Lusha.Core.Request;
using Lusha.Core.Response;
using Lusha.Errors;
using Lusha.Models;

namespace Lusha.Api;

/// <summary>
/// <b>Account API:</b> Retrieve account usage, credit balance, rate limits, plan details, and pricing.
/// <para>
/// Use this endpoint to monitor consumption and understand the credit cost of each action type in the public API flow.
/// </para>
/// <para>
/// &gt; <b>Rate limit:</b> 5 requests per minute.
/// </para>
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
    /// Get Account Usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a full snapshot of your account status:
    /// - <b>Credits</b> — total, used, and remaining for the current billing cycle
    /// - <b>Rate limits</b> — current usage and reset times for daily, hourly, and per-minute windows
    /// - <b>Plan</b> — your current plan category and renewal dates
    /// - <b>Pricing</b> — credit cost per action type across all public API endpoints
    /// <para>
    /// &gt; <b>Rate limit:</b> This endpoint is limited to 5 requests per minute.
    /// </para>
    /// </remarks>
    public Task<AccountUsageResponse> GetAccountUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/account/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccountUsageResponse>(),
            GetAccountUsageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
