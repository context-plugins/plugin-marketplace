using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Postscript.Core;
using Postscript.Core.Exceptions;
using Postscript.Core.Models;
using Postscript.Core.Request;
using Postscript.Core.Response;
using Postscript.Errors;
using Postscript.Models;
using Postscript.Requests.Messages;

namespace Postscript.Api;

/// <summary>
/// Send messages and read message requests and sent messages.
/// </summary>
public sealed class Messages
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Messages(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Send Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2MessageRequestsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a message to a subscriber.
    /// </remarks>
    public Task<ApiV2MessageRequestsResponse> CreateMessage(CreateMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/message_requests"),
            [],
            [],
            [
                new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2MessageRequestsResponse>(),
            CreateMessageError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Message Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2MessageRequestsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMessageRequestError"/> when the server returns an error response.</exception>
    public Task<ApiV2MessageRequestsResponse> GetMessageRequest(GetMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/message_requests/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2MessageRequestsResponse>(),
            GetMessageRequestError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Sent Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2SentMessagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSentMessageError"/> when the server returns an error response.</exception>
    public Task<ApiV2SentMessagesResponse> GetSentMessage(GetSentMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/sent_messages/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2SentMessagesResponse>(),
            GetSentMessageError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);
}
