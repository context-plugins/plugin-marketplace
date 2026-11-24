using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using WhoisFreaks.Core;
using WhoisFreaks.Core.Exceptions;
using WhoisFreaks.Core.Models;
using WhoisFreaks.Core.Request;
using WhoisFreaks.Core.Response;
using WhoisFreaks.Errors;
using WhoisFreaks.Models;
using WhoisFreaks.Requests.Ssl;

namespace WhoisFreaks.Api;

/// <summary>
/// SSL certificate lookup
/// </summary>
public sealed class Ssl
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Ssl(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// SSL Certificate Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SslResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SslLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Real-time SSL cert with optional chain.
    /// </remarks>
    public Task<SslResponse> SslLookup(SslLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1.0/ssl/live"),
            [],
            [
                new Param("domainName", request.DomainName),
                new Param("chain", request.Chain),
                new Param("sslRaw", request.SslRaw),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SslResponse>(),
            SslLookupError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
