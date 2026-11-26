using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using EinsteinBots.Core;
using EinsteinBots.Core.Authentication;
using EinsteinBots.Core.Exceptions;
using EinsteinBots.Core.Models;
using EinsteinBots.Core.Request;
using EinsteinBots.Core.Response;
using EinsteinBots.Errors;
using EinsteinBots.Models;
using EinsteinBots.Requests.Bot;

namespace EinsteinBots.Api;

public sealed class Bot
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Bot(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Continue an active session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChatMessageResponseEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContinueSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a message to the bots API on an active session.
    /// </remarks>
    public Task<ChatMessageResponseEnvelope> ContinueSession(ContinueSessionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v5.3.0/sessions/{session-id}/messages"),
            [new TemplateParam("session-id", request.SessionId)],
            [],
            [
                new HeaderParam("X-Org-Id", request.XOrgId),
                new HeaderParam("X-Request-ID", request.XRequestId),
                new HeaderParam("X-Runtime-CRC", request.XRuntimeCrc),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ChatMessageResponseEnvelope>(),
            ContinueSessionError.Response,
            AuthScheme.Any(_auth.ChatbotAuthAuthorizationCode, _auth.ChatbotAuthImplicit, _auth.JwtBearer),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// End an active session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChatMessageResponseEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EndSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a message to the bots API to end a session
    /// </remarks>
    public Task<ChatMessageResponseEnvelope> EndSession(EndSessionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v5.3.0/sessions/{session-id}"),
            [new TemplateParam("session-id", request.SessionId)],
            [],
            [
                new HeaderParam("X-Org-Id", request.XOrgId),
                new HeaderParam("X-Session-End-Reason", request.XSessionEndReason),
                new HeaderParam("X-Request-ID", request.XRequestId),
                new HeaderParam("X-Runtime-CRC", request.XRuntimeCrc),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ChatMessageResponseEnvelope>(),
            EndSessionError.Response,
            AuthScheme.Any(_auth.ChatbotAuthAuthorizationCode, _auth.ChatbotAuthImplicit, _auth.JwtBearer),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start a session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResponseEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a message to the bots API to start a new session.
    /// </remarks>
    public Task<ResponseEnvelope> StartSession(StartSessionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v5.3.0/bots/{bot-id}/sessions"),
            [new TemplateParam("bot-id", request.BotId)],
            [],
            [
                new HeaderParam("X-Org-Id", request.XOrgId),
                new HeaderParam("X-Request-ID", request.XRequestId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ResponseEnvelope>(),
            StartSessionError.Response,
            AuthScheme.Any(_auth.ChatbotAuthAuthorizationCode, _auth.ChatbotAuthImplicit, _auth.JwtBearer),
            requestOptions,
            cancellationToken);
}
