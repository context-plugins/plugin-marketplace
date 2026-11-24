using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cosmic.Core;
using Cosmic.Core.Exceptions;
using Cosmic.Core.Models;
using Cosmic.Core.Request;
using Cosmic.Core.Response;
using Cosmic.Errors;
using Cosmic.Models;
using Cosmic.Requests.Blocks;

namespace Cosmic.Api;

/// <summary>
/// Content Blocks configured on the Bucket.
/// </summary>
public sealed class Blocks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Blocks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List content Blocks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BlocksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBlocksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the content Blocks configured on the Bucket. Returns an empty array when the Bucket has none.
    /// </remarks>
    public Task<BlocksResponse> ListBlocks(ListBlocksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/blocks"),
            [new TemplateParam("slug", request.Slug)],
            [new Param("read_key", request.ReadKey), new Param("pretty", request.Pretty)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BlocksResponse>(),
            ListBlocksError.Response,
            _auth.ReadKey,
            requestOptions,
            cancellationToken);
}
