using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using WhoisFreaks.Core;
using WhoisFreaks.Core.Exceptions;
using WhoisFreaks.Core.Extensions;
using WhoisFreaks.Core.Models;
using WhoisFreaks.Core.Request;
using WhoisFreaks.Core.Response;
using WhoisFreaks.Errors;
using WhoisFreaks.Models;
using WhoisFreaks.Requests.Subdomains;

namespace WhoisFreaks.Api;

/// <summary>
/// Subdomain enumeration
/// </summary>
public sealed class Subdomains
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Subdomains(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Subdomains Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubdomainsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubdomainsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// All subdomains including nested. 2 credits per query.
    /// </remarks>
    public Task<SubdomainsResponse> SubdomainsInvoke(SubdomainsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1.0/subdomains"),
            [],
            [
                new Param("domain", request.Domain),
                new Param("after", request.After?.ToDate()),
                new Param("before", request.Before?.ToDate()),
                new Param("status", request.Status),
                new Param("page", request.Page),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubdomainsResponse>(),
            SubdomainsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
