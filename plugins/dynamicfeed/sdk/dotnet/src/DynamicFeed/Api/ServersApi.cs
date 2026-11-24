using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.ServersApi;

namespace DynamicFeed.Api;

public sealed class ServersApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ServersApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Servers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ServersServersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search the MCP server registry — find AI agent tools. Most-starred first. (Requires API key.)
    /// </remarks>
    public Task<object> ServersServersGet(ServersServersGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/servers"),
            [],
            [
                new Param("q", request.Q),
                new Param("has_remote", request.HasRemote),
                new Param("min_stars", request.MinStars),
                new Param("limit", request.Limit),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ServersServersGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
