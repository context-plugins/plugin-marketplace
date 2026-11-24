using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CallNode.Core;
using CallNode.Core.Authentication;
using CallNode.Core.Exceptions;
using CallNode.Core.Models;
using CallNode.Core.Request;
using CallNode.Core.Response;
using CallNode.Errors;
using CallNode.Models;
using CallNode.Requests.MessagingApi;

namespace CallNode.Api;

/// <summary>
/// Send and retrieve SMS/MMS messages.
/// </summary>
public sealed class MessagingApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MessagingApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Message"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMessageError"/> when the server returns an error response.</exception>
    public Task<Message> GetMessage(GetMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/messages/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Message>(),
            GetMessageError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send an SMS or MMS
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SendMessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends a message from one of your numbers. Supplying <c>media</c> makes it an MMS.
    /// Four gates run in order: number ownership, recipient opt-out status, the TCPA
    /// window, and carrier registration (10DLC for local numbers, Toll-Free
    /// Verification for toll-free).
    /// </remarks>
    public Task<SendMessageResponse> SendMessage(SendMessageOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/messages"),
            [],
            [],
            [
                new HeaderParam("X-Idempotency-Key", request.XIdempotencyKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SendMessageResponse>(),
            SendMessageError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);
}
