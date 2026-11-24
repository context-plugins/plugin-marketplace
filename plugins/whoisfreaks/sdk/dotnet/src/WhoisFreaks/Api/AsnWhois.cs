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
using WhoisFreaks.Requests.AsnWhois;

namespace WhoisFreaks.Api;

/// <summary>
/// Autonomous System Number WHOIS
/// </summary>
public sealed class AsnWhois
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AsnWhois(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// ASN WHOIS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AsnWhoisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AsnWhoisError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// WHOIS for an ASN. 1 credit.
    /// </remarks>
    public Task<AsnWhoisResponse> AsnWhoisInvoke(AsnWhoisRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.0/asn-whois"),
            [],
            [new Param("asn", request.Asn), new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AsnWhoisResponse>(),
            AsnWhoisError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
