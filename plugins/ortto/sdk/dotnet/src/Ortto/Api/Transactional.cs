using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Ortto.Core;
using Ortto.Core.Exceptions;
using Ortto.Core.Models;
using Ortto.Core.Request;
using Ortto.Core.Response;
using Ortto.Errors;
using Ortto.Requests.Transactional;

namespace Ortto.Api;

/// <summary>
/// Send transactional email and SMS.
/// </summary>
public sealed class Transactional
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Transactional(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Send a transactional email
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendTransactionalEmailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends a transactional email. Set non_transactional to true to send as a marketing email. Up to 5 base64-encoded attachments are supported. A successful request returns a 202 Accepted.
    /// </remarks>
    public Task SendTransactionalEmail(SendTransactionalEmailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transactional/send"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SendTransactionalEmailError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send a transactional SMS
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendTransactionalSmsError"/> when the server returns an error response.</exception>
    public Task SendTransactionalSms(SendTransactionalSmsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transactional/send-sms"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SendTransactionalSmsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
