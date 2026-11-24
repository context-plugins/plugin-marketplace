using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fillo.Core;
using Fillo.Core.Authentication;
using Fillo.Core.ErrorResponse;
using Fillo.Core.Exceptions;
using Fillo.Core.Request;
using Fillo.Core.Response;

namespace Fillo.Api;

public sealed class FilloManagementApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal FilloManagementApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Discover Fillo developer resources
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Signed-out index of the Management API, authentication docs, OpenAPI contract, webhooks, MCP server, and official CLI.
    /// </remarks>
    public Task<object> DiscoverFilloApi(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
