using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PrismaReviews.Core;
using PrismaReviews.Core.Exceptions;
using PrismaReviews.Core.Request;
using PrismaReviews.Core.Response;
using PrismaReviews.Errors;
using PrismaReviews.Models;

namespace PrismaReviews.Api;

/// <summary>
/// Your plan and this month's usage.
/// </summary>
public sealed class UsageApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal UsageApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Usage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The workspace's plan and what it has used in the current calendar month (UTC). The same numbers with a live key and a test key.
    /// </remarks>
    public Task<Usage> GetUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Usage>(),
            GetUsageError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
