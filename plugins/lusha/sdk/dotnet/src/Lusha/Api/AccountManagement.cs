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
/// Manage your account and monitor usage.
/// <para>
/// Use this endpoint to:
/// - Monitor credit usage
/// - Understand consumption patterns
/// - Align API usage with plan limits
/// - Support governance and production operations
/// </para>
/// <para>
/// Account-level insights are especially important for teams running Lusha at scale or across multiple systems.
/// </para>
/// </summary>
public sealed class AccountManagement
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AccountManagement(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Account Usage Statistics
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountUsageStatsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountUsageStatsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve your current API credit usage statistics including used, remaining, and total credits.
    /// <para>
    /// *Endpoint*: <b>(GET) https://api.lusha.com/account/usage</b>
    /// </para>
    /// <para>
    /// <b>Rate Limits</b>: This endpoint has a specific rate limit of 5 requests per minute.
    /// </para>
    /// </remarks>
    public Task<AccountUsageStatsResponse> GetAccountUsageStats(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/account/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccountUsageStatsResponse>(),
            GetAccountUsageStatsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
