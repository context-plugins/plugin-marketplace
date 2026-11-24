using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Exceptions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Core.Request;
using PlinthUsGrantsData.Core.Response;
using PlinthUsGrantsData.Errors;

namespace PlinthUsGrantsData.Api;

/// <summary>
/// Plain-English questions answered with SQL the service writes itself.
/// </summary>
public sealed class Analyze
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Analyze(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Analyze
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AskQuestionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Ask a question about the corpus in plain English; the service writes and runs its own SQL and streams the answer back as Server-Sent Events. Metered separately from the REST endpoints: three free questions per visitor per day, then a paid key.
    /// </remarks>
    public Task<object> AskQuestion(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/analyze"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AskQuestionError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
