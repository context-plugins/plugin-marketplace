using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AgentReady.Core;
using AgentReady.Core.Authentication;
using AgentReady.Core.Exceptions;
using AgentReady.Core.Models;
using AgentReady.Core.Request;
using AgentReady.Core.Response;
using AgentReady.Errors;
using AgentReady.Models.AnyOf;
using AgentReady.Requests.NlWeb;

namespace AgentReady.Api;

public sealed class NlWeb
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal NlWeb(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Ask in natural language (NLWeb)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AskResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AskGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// NLWeb /ask endpoint, conventional GET form: /ask?query=. Natural-language search over Agent Ready's own content (methodology, check registry, specs, and the content library — explainers, comparisons, how-to guides, glossary). Public — no API key required. Returns NLWeb result objects with a nested Schema.org <c>schema_object</c>. Set stream=true for Server-Sent Events. Also served at the root path /ask.
    /// </remarks>
    public Task<AskResponse1> AskGet(AskGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ask"),
            [],
            [
                new Param("query", request.Query),
                new Param("mode", request.Mode),
                new Param("itemType", request.ItemType),
                new Param("stream", request.Stream),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AskResponse1>(),
            AskGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ask in natural language (NLWeb), JSON-body form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AskResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AskPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// NLWeb /ask endpoint, JSON-body form: { query: { q }, prefer: { mode, streaming } }. Same response as the GET form. Public — no API key required.
    /// </remarks>
    public Task<AskResponse1> AskPost(AskPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ask"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AskResponse1>(),
            AskPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
