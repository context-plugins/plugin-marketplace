using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using JuriSign.Core;
using JuriSign.Core.Authentication;
using JuriSign.Core.ErrorResponse;
using JuriSign.Core.Exceptions;
using JuriSign.Core.Models;
using JuriSign.Core.Request;
using JuriSign.Core.Response;
using JuriSign.Errors;
using JuriSign.Models;
using JuriSign.Requests.AuthenticationApi;

namespace JuriSign.Api;

/// <summary>
/// Obtain and revoke API tokens
/// </summary>
public sealed class AuthenticationApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AuthenticationApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Sandbox API Token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuthSandboxTokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSandboxTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Authenticate with the same email/password as POST /auth/token, but obtain a sandbox token instead (prefixed sandbox_...). Requests made with this token never send real SMS or emails (SMS are logged, emails go through the log mailer) and never deduct signature credits. Documents and signature requests created in sandbox mode are isolated from your organization's real data: they never appear in a normal (non-sandbox) request, and vice versa. A sandbox token can only be used with the sandbox_ prefix, and a normal token can never be used with it — mixing the two returns 401. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute for the calling IP.
    /// </remarks>
    public Task<AuthSandboxTokenResponse> CreateSandboxToken(CreateSandboxTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/auth/sandbox-token"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AuthSandboxTokenResponse>(),
            CreateSandboxTokenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create API Token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuthTokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Authenticate with email/password to obtain a Bearer token, scoped to your organization. By default the token is granted all 5 available scopes (documents:read, documents:write, sign-requests:read, sign-requests:write, webhooks:manage). Pass <c>scopes</c> to request a restricted subset instead — every endpoint checks the token's abilities and returns 403 if the required scope is missing. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute for the calling IP.
    /// </remarks>
    public Task<AuthTokenResponse> CreateToken(CreateTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/auth/token"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AuthTokenResponse>(),
            CreateTokenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// API Status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResponseModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current API status and version information.
    /// </remarks>
    public Task<ResponseModel> GetStatus(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResponseModel>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revoke Current Token
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevokeTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Revoke the Bearer token used in this request.
    /// </remarks>
    public Task<MessageResponse> RevokeToken(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/auth/token"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            RevokeTokenError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
