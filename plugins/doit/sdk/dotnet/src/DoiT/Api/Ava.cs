using System;
using System.Collections.Generic;
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
using DoiT.Requests.Ava;

namespace DoiT.Api;

/// <summary>
/// Interact with Ava, DoiT's AI-powered cloud assistant.
/// </summary>
public sealed class Ava
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Ava(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Ask Ava (streaming)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IAsyncEnumerable{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AskAvaStreamingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a question to Ava and receive a streaming response via Server-Sent Events (SSE).
    /// The response streams back events containing the answer text, conversation ID, and message metadata.
    ///
    /// The returned sequence is single-shot and lazy: enumerate it (or dispose the enumerator) to
    /// release the underlying connection — a sequence that is never enumerated never releases it.
    /// Enumeration can throw <see cref="SdkTimeoutException"/> if the server stalls between frames,
    /// or <see cref="SdkConnectionException"/> if the connection drops mid-stream.
    /// </remarks>
    public Task<IAsyncEnumerable<string>> AskAvaStreaming(AskAvaStreamingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ava/v1/ask"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            PlainTextSseResponse.CreateString(),
            AskAvaStreamingError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ask Ava
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AvaAskSyncResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AskAvaSyncError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a question to Ava and receive a synchronous response.
    /// Set <c>ephemeral</c> to <c>true</c> to skip conversation persistence (recommended for programmatic consumers).
    /// When <c>ephemeral</c> is <c>false</c> (default), the response includes a <c>conversationId</c> that can be used with the delete endpoint.
    /// </remarks>
    public Task<AvaAskSyncResponse> AskAvaSync(AskAvaSyncRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ava/v1/askSync"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AvaAskSyncResponse>(),
            AskAvaSyncError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit feedback
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AvaFeedbackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit feedback on an Ava answer to help improve response quality.
    /// </remarks>
    public Task AvaFeedback(AvaFeedbackOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ava/v1/feedback"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            AvaFeedbackError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a conversation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAvaConversationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an Ava conversation by its ID.
    /// </remarks>
    public Task DeleteAvaConversation(DeleteAvaConversationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ava/v1/deleteConversation"),
            [],
            [new Param("conversationId", request.ConversationId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAvaConversationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
