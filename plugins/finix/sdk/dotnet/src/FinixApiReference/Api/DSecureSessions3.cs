using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.DSecureSessions3;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>3D Secure Session</c> represents one 3D Secure authentication that Finix runs on a card. Create the session, send the buyer through authentication, then reference the completed session when you create the <see href="/api/transfers">Transfer</see> or <see href="/api/authorizations">Authorization</see>.
/// <para>
/// The <c>state</c> of a session describes the authentication process, not its outcome. A session where the buyer was never authenticated still ends in <c>SUCCEEDED</c>. To find out whether the buyer was authenticated, and where chargeback liability sits, read <c>3d_secure_authentication.electronic_commerce_indicator</c>.
/// </para>
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/online-payments/fraud-and-risk/3d-secure">3D Secure</see>
/// </para>
/// </summary>
public sealed class DSecureSessions3
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DSecureSessions3(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a 3D Secure Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DSecureSession3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create3DSecureSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>3D Secure Session</c> to authenticate a buyer before you charge their card.
    /// <para>
    /// Create the session from a <c>payment_instrument_id</c> for the redirect flow or standalone <c>Finix.ThreeDSecure</c>, or from a <c>token_id</c> for the <c>ThreeDSecure</c> payment form option. For redirect flows, pass the session ID after <c>state</c> reaches <c>SUCCEEDED</c>. With Finix.js, pass it when the <c>succeeded</c> callback fires, even if the session resource still reads <c>PENDING</c>.
    /// </para>
    /// </remarks>
    public Task<DSecureSession3> Create3DSecureSession(Create3DSecureSessionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/3d_secure_sessions"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DSecureSession3>(),
            Create3DSecureSessionError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a 3D Secure Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DSecureSession3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Get3DSecureSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a <c>3D Secure Session</c> to check the state of the authentication and read the values the card network returned.
    /// </remarks>
    public Task<DSecureSession3> Get3DSecureSession(Get3DSecureSessionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/3d_secure_sessions/{3d_secure_session_id}"),
            [new TemplateParam("3d_secure_session_id", request.DSecureSessionId3)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DSecureSession3>(),
            Get3DSecureSessionError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
