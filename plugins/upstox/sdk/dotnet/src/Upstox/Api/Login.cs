using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Authentication;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.Login;

namespace Upstox.Api;

public sealed class Login
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Login(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Authorize API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AuthorizeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This provides details on the login endpoint.
    /// </remarks>
    public Task Authorize(AuthorizeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/login/authorization/dialog"),
            [],
            [
                new Param("client_id", request.ClientId),
                new Param("redirect_uri", request.RedirectUri),
                new Param("state", request.State),
                new Param("scope", request.Scope),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AuthorizeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Init token API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InitTokenRequestForIndieUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the initialize the generate token and it's expiry for an indie user
    /// </remarks>
    public Task<TokenResponse> InitTokenRequestForIndieUser(InitTokenRequestForIndieUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/login/auth/token/request/{client_id}"),
            [new TemplateParam("client_id", request.ClientId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TokenResponse>(),
            InitTokenRequestForIndieUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Logout
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LogoutResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LogoutError"/> when the server returns an error response.</exception>
    public Task<LogoutResponse> Logout(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/logout"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<LogoutResponse>(),
            LogoutError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get token API
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to obtain opaque token from authorization_code exchange and also provides the user’s profile in the same response.
    /// </remarks>
    public Task<TokenResponse> Token(TokenOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/login/authorization/token"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create(
                new Param("code", request.Code),
                new Param("client_id", request.ClientId),
                new Param("client_secret", request.ClientSecret),
                new Param("redirect_uri", request.RedirectUri),
                new Param("grant_type", request.GrantType),
                new Param("refresh_extended_token", request.RefreshExtendedToken)),
            JsonResponse.Create<TokenResponse>(),
            TokenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
