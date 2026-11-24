using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.Tokens;

namespace Beehiiv.Api;

public sealed class Tokens
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Tokens(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Introspect token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IntrospectionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IntrospectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns whether a token is active and metadata about the token. Send parameters as <c>application/x-www-form-urlencoded</c>.
    /// </remarks>
    public Task<IntrospectionResponse> Introspect(IntrospectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultOAuth2AuthorizationsApi("/oauth/introspect"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IntrospectionResponse>(),
            IntrospectError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revoke token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevokeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Revokes an access token or refresh token. Send parameters as <c>application/x-www-form-urlencoded</c>.
    /// </remarks>
    public Task<object> Revoke(RevokeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultOAuth2AuthorizationsApi("/oauth/revoke"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            RevokeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exchanges an authorization code for an access token, or exchanges a refresh token for a new access token. Send parameters as application/x-www-form-urlencoded.
    /// </remarks>
    public Task<TokenResponse> Token(TokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultOAuth2AuthorizationsApi("/oauth/token"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TokenResponse>(),
            TokenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get token info
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TokenInfoResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TokenInfoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns metadata for the current access token.
    /// </remarks>
    public Task<TokenInfoResponse> TokenInfo(TokenInfoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultOAuth2AuthorizationsApi("/oauth/token/info"),
            [],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TokenInfoResponse>(),
            TokenInfoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
