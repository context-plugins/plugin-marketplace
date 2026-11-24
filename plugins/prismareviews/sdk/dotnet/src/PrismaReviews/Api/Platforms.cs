using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PrismaReviews.Core;
using PrismaReviews.Core.Exceptions;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Request;
using PrismaReviews.Core.Response;
using PrismaReviews.Errors;
using PrismaReviews.Models;
using PrismaReviews.Requests.Platforms;

namespace PrismaReviews.Api;

/// <summary>
/// How each platform connects, the fields it needs and whether your workspace can connect it.
/// </summary>
public sealed class Platforms
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Platforms(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a platform
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Platform"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlatformError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One platform of <c>GET /v1/platforms</c>.
    /// </remarks>
    public Task<Platform> GetPlatform(GetPlatformRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/platforms/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Platform>(),
            GetPlatformError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List platforms
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlatformList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPlatformsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every platform with how it connects, the exact fields <c>POST /v1/connections</c> expects, setup steps for the account owner, an example body and whether this workspace can connect it now. Enough to connect a platform without reading the docs.
    /// </remarks>
    public Task<PlatformList> ListPlatforms(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/platforms"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlatformList>(),
            ListPlatformsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
