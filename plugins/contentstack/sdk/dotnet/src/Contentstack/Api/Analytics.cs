using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;

namespace Contentstack.Api;

/// <summary>
/// Analytics endpoints provide usage metrics for Launch projects such as cache revalidation quota consumption.
/// </summary>
public sealed class Analytics
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Analytics(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get cache revalidation usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CacheUsage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCacheRevalidationUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the organization's current cache revalidation quota usage, showing how many revalidation requests have been used against the organization's plan limit.
    /// </remarks>
    public Task<CacheUsage> GetCacheRevalidationUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organizations/cache-revalidation-usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CacheUsage>(),
            GetCacheRevalidationUsageError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
