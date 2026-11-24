using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Statable.Core;
using Statable.Core.Authentication;
using Statable.Core.Exceptions;
using Statable.Core.Models;
using Statable.Core.Request;
using Statable.Core.Response;
using Statable.Errors;
using Statable.Models;
using Statable.Requests.Bootstrap;

namespace Statable.Api;

/// <summary>
/// Register an account and obtain its first API key without a browser. The only operations in this spec that take NO bearer token. Behind the server-side <c>API_BOOTSTRAP_ENABLED</c> flag; while it is off both routes answer 404 <c>write_disabled</c>. See docs/api-v1-write-surface.md §2.
/// </summary>
public sealed class Bootstrap
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Bootstrap(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Email a one-time code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BootstrapSendOtpResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BootstrapSendOtpError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends a 6-digit code to the address, valid for a short window and usable once. Takes no credential — this is the entry point for a client that has none. Rate limited per email (2/minute), per IP (5/hour) and per IP across the whole bootstrap branch (20/hour). The response is identical whether or not the address already has an account, so it cannot be used to test for one.
    /// </remarks>
    public Task<BootstrapSendOtpResponse> BootstrapSendOtp(BootstrapSendOtpOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/auth/send-otp"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BootstrapSendOtpResponse>(),
            BootstrapSendOtpError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Consume the code and receive the first API key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BootstrapVerifyOtpResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BootstrapVerifyOtpError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Verifies the code, creates the account if the address is new, records the terms acceptance, and returns a freshly minted key — the raw token EXACTLY ONCE. <c>accept_terms</c> must be true. Requested <c>scopes</c> must be within <c>API_BOOTSTRAP_SCOPES</c> (default <c>read,sites:write</c>); omitting them yields that whole set, and <c>billing:write</c> is never obtainable here. Everything that can be rejected without the code is validated first, so a bad field does not burn a valid code. The key is always all-sites and always expires (90 days by default, 365 max).
    /// </remarks>
    public Task<BootstrapVerifyOtpResponse> BootstrapVerifyOtp(BootstrapVerifyOtpOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/auth/verify-otp"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BootstrapVerifyOtpResponse>(),
            BootstrapVerifyOtpError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
