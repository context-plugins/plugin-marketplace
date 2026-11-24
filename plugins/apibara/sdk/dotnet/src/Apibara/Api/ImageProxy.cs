using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Apibara.Core;
using Apibara.Core.Exceptions;
using Apibara.Core.Models;
using Apibara.Core.Request;
using Apibara.Core.Response;
using Apibara.Errors;
using Apibara.Requests.ImageProxy;

namespace Apibara.Api;

/// <summary>
/// Proxy supported auction vehicle images.
/// </summary>
public sealed class ImageProxy
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ImageProxy(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Proxy an auction vehicle image
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProxyAuctionImageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a supported auction vehicle image through the Apibara image proxy.
    /// </remarks>
    public Task<BinaryContent> ProxyAuctionImage(ProxyAuctionImageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/image-proxy"),
            [],
            [new Param("url", request.Url)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            ProxyAuctionImageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
