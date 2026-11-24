using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ParallelSdk.Core;
using ParallelSdk.Core.Exceptions;
using ParallelSdk.Core.Models;
using ParallelSdk.Core.Request;
using ParallelSdk.Core.Response;
using ParallelSdk.Errors;
using ParallelSdk.Models;
using ParallelSdk.Requests.ChatApiBeta;

namespace ParallelSdk.Api;

/// <summary>
/// The Chat API provides a programmatic chat-style text generation interface. It accepts a sequence of messages and returns model responses. Intended for assistant-like interactions and evaluation. Streaming responses are supported.
/// </summary>
public sealed class ChatApiBeta
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ChatApiBeta(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Chat Completions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChatCompletion"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChatCompletionsV1BetaChatCompletionsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Chat completions.
    /// <para>
    /// This endpoint can be used to get realtime chat completions. It can also be used
    /// with the Task API processors to get structured, research outputs via a chat
    /// interface.
    /// </para>
    /// </remarks>
    public Task<ChatCompletion> ChatCompletionsV1BetaChatCompletionsPost(ChatCompletionsV1BetaChatCompletionsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/chat/completions"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ChatCompletion>(),
            ChatCompletionsV1BetaChatCompletionsPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
