using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Instacart.Core;
using Instacart.Core.Exceptions;
using Instacart.Core.Models;
using Instacart.Core.Request;
using Instacart.Core.Response;
using Instacart.Errors;
using Instacart.Models;
using Instacart.Requests.Chat;

namespace Instacart.Api;

/// <summary>
/// Endpoints for shopper-customer communication including sending and retrieving chat messages.
/// </summary>
public sealed class Chat
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Chat(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get chat messages for an order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChatMessagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetChatMessagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all chat messages associated with an order between the customer and the shopper. Messages are returned in chronological order.
    /// </remarks>
    public Task<ChatMessagesResponse> GetChatMessages(GetChatMessagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/post_checkout/chat/{order_id}/messages"),
            [new TemplateParam("order_id", request.OrderId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ChatMessagesResponse>(),
            GetChatMessagesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send a message to the shopper
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChatMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendChatMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends a chat message from the customer to the shopper associated with the order. Used for communicating about replacements, additions, or delivery instructions.
    /// </remarks>
    public Task<ChatMessage> SendChatMessage(SendChatMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/post_checkout/chat/{order_id}/messages"),
            [new TemplateParam("order_id", request.OrderId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ChatMessage>(),
            SendChatMessageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
