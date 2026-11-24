using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Apibara.Core;
using Apibara.Core.Exceptions;
using Apibara.Core.Request;
using Apibara.Core.Response;
using Apibara.Errors;
using Apibara.Models;

namespace Apibara.Api;

/// <summary>
/// API usage and plan limit information.
/// </summary>
public sealed class Usage
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Usage(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get API usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve current API request usage and plan limit information.
    /// </remarks>
    public Task<UsageResponse> GetApiUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsageResponse>(),
            GetApiUsageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
