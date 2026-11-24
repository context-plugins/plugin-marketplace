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
using WhoisFreaks.Requests.DomainReputation;

namespace WhoisFreaks.Api;

/// <summary>
/// Real-time domain threat assessment and trust scoring
/// </summary>
public sealed class DomainReputation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DomainReputation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Domain Reputation Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DomainReputationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DomainReputationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Real-time domain threat assessment. Returns risk verdict, trust score, DGA analysis, threat intelligence matches, and security signals. 1 credit.
    /// </remarks>
    public Task<DomainReputationResponse> DomainReputationInvoke(DomainReputationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domain/security"),
            [],
            [new Param("domainName", request.DomainName), new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DomainReputationResponse>(),
            DomainReputationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
