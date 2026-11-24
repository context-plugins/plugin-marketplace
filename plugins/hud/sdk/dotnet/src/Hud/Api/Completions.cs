using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Requests.Completions;

namespace Hud.Api;

public sealed class Completions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Completions(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Post Completion
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompletionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostCompletionV2CompletionsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One-shot chat completion proxied to the inference gateway.
    /// </remarks>
    public Task<CompletionResponse> PostCompletionV2CompletionsPost(PostCompletionV2CompletionsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/completions"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CompletionResponse>(),
            PostCompletionV2CompletionsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
