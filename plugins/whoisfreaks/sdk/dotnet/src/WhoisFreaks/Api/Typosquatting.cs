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
using WhoisFreaks.Requests.Typosquatting;

namespace WhoisFreaks.Api;

/// <summary>
/// Detect typo variants of brand domains
/// </summary>
public sealed class Typosquatting
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Typosquatting(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Typosquatting Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TyposquattingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TyposquattingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find typo variants of a brand. 5 credits per page.
    /// </remarks>
    public Task<TyposquattingResponse> TyposquattingInvoke(TyposquattingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.0/domain/typos"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("pattern", request.Pattern),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TyposquattingResponse>(),
            TyposquattingError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
