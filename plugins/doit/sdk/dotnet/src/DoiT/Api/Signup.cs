using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Signup;

namespace DoiT.Api;

/// <summary>
/// Start a Cloud Intelligence trial for an organization that is not yet a DoiT customer. These operations require no API key: they are rate limited, idempotent, and provision nothing until the organization's admin verifies the request. Agents create a request and hand the returned consentUrl to the admin; the admin verifies by entering the emailed code (or signing the request on the console), after which the tenant is provisioned and the request reports its customer id.
/// </summary>
public sealed class Signup
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Signup(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a signup request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignupRequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSignupRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a Cloud Intelligence trial signup for the organization owning the email domain. Idempotent per Idempotency-Key: a retried create returns the same request. Nothing is provisioned until the admin verifies the request. Human channels (console, web) additionally require a Cloudflare Turnstile token and an accepted Terms of Service version; the emailed 6-digit verification code is then the consent act. Agents should present consentUrl to the organization's admin and poll getSignupRequest.
    /// </remarks>
    public Task<SignupRequest> CreateSignupRequest(CreateSignupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signup/v1/requests"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignupRequest>(),
            CreateSignupRequestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sign the verified prospect in
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignupSession"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSignupSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exchanges the one-time activationToken returned by verifySignupRequest for a Firebase custom token once the request is completed, so the browser that entered the code lands in the new tenant without a second email. The token is bound to the request, single-use and valid for 10 minutes. Sign in with signInWithCustomToken against tenantId, then open consoleUrl.
    /// </remarks>
    public Task<SignupSession> CreateSignupSession(CreateSignupSessionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signup/v1/requests/{signupRequestId}/session"),
            [new TemplateParam("signupRequestId", request.SignupRequestId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignupSession>(),
            CreateSignupSessionError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a signup request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignupRequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignupRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current state of a signup request. Poll at the returned pollAfterSeconds cadence; once status is completed the response carries customerId, consoleUrl and signInUrl. The response never includes the requester's email or the verification code.
    /// </remarks>
    public Task<SignupRequest> GetSignupRequest(GetSignupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signup/v1/requests/{signupRequestId}"),
            [new TemplateParam("signupRequestId", request.SignupRequestId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SignupRequest>(),
            GetSignupRequestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resend the verification code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignupRequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResendSignupVerificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Emails a fresh 6-digit code to the requester. At most three codes per request, at least 60 seconds apart.
    /// </remarks>
    public Task<SignupRequest> ResendSignupVerification(ResendSignupVerificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signup/v1/requests/{signupRequestId}/verification"),
            [new TemplateParam("signupRequestId", request.SignupRequestId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<SignupRequest>(),
            ResendSignupVerificationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Verify a signup request with the emailed code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignupRequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VerifySignupRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Confirms ownership of the admin email by entering the 6-digit code that was emailed when the request was created (or resent). Success records consent and starts provisioning; the request moves to consented and then completed. Five wrong codes lock the current code; request a new one with resendSignupVerification.
    /// </remarks>
    public Task<SignupRequest> VerifySignupRequest(VerifySignupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signup/v1/requests/{signupRequestId}/verify"),
            [new TemplateParam("signupRequestId", request.SignupRequestId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignupRequest>(),
            VerifySignupRequestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
