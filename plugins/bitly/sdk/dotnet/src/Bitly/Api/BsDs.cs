using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitly.Core;
using Bitly.Core.Exceptions;
using Bitly.Core.Request;
using Bitly.Core.Response;
using Bitly.Errors;
using Bitly.Models;

namespace Bitly.Api;

/// <summary>
/// Branded short domains (BSDs) are the custom domains used to brand your links. A BSD can be added to a Bitly organization and may be assigned to one or more groups. They can contain up to 32 characters.
/// </summary>
public sealed class BsDs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BsDs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get BSDs
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BsDsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBsDsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch all Branded Short Domains
    /// </remarks>
    public Task<BsDsResponse> GetBsDs(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bsds"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BsDsResponse>(),
            GetBsDsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
