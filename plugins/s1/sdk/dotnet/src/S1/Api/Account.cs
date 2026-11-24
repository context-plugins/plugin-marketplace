using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using S1.Core;
using S1.Core.Exceptions;
using S1.Core.Models;
using S1.Core.Request;
using S1.Core.Response;
using S1.Errors;
using S1.Models;
using S1.Requests.Account;

namespace S1.Api;

public sealed class Account
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Account(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get API key usage statistics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the remaining credit balance for the authenticated account. Use it to check headroom before starting an expensive job such as a deepcrawl, or to confirm an API key works. Free to call.
    /// </remarks>
    public Task<UsageResponse> Usage(UsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/usage"),
            [],
            [new Param("period", request.Period)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsageResponse>(),
            UsageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
