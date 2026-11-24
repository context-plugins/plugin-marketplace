using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Instacart.Core;
using Instacart.Core.Authentication;
using Instacart.Core.Exceptions;
using Instacart.Core.Models;
using Instacart.Core.Request;
using Instacart.Core.Response;
using Instacart.Errors;
using Instacart.Models;
using Instacart.Requests.AuthenticationApi;

namespace Instacart.Api;

/// <summary>
/// Endpoints for obtaining and managing OAuth 2.0 access tokens used to authenticate API requests.
/// </summary>
public sealed class AuthenticationApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AuthenticationApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Generate an access token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GenerateAccessTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates an OAuth 2.0 access token using client credentials. The token is valid for 24 hours and must be included as a Bearer token in all subsequent API requests. During the validity period, reuse the same token rather than generating a new one.
    /// </remarks>
    public Task<TokenResponse> GenerateAccessToken(GenerateAccessTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/oauth/token"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TokenResponse>(),
            GenerateAccessTokenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
