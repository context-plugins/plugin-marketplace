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
using WhoisFreaks.Requests.IpWhois;

namespace WhoisFreaks.Api;

/// <summary>
/// IP address WHOIS
/// </summary>
public sealed class IpWhois
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal IpWhois(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// IP WHOIS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IpWhoisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IpWhoisError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// WHOIS for an IP address. 1 credit.
    /// </remarks>
    public Task<IpWhoisResponse> IpWhoisInvoke(IpWhoisRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1.0/ip-whois"),
            [],
            [new Param("ip", request.Ip), new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IpWhoisResponse>(),
            IpWhoisError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
