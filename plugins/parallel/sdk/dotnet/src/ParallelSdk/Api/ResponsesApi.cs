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
using ParallelSdk.Requests.ResponsesApi;

namespace ParallelSdk.Api;

/// <summary>
/// An OpenAI-Responses-compatible interface for answers grounded in live web research, with URL citations.
/// </summary>
public sealed class ResponsesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ResponsesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Response
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResponseModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateResponseV1ResponsesPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a response.
    /// <para>
    /// Generates an answer to the given input, grounded in live web research and
    /// annotated with URL citations. Set <c>model</c> to <c>parallel</c>; <c>reasoning.effort</c>
    /// (<c>low</c>/<c>medium</c>/<c>high</c>) controls how much research is performed, trading
    /// response time for answer quality. Returns an OpenAI-format <c>Response</c> as
    /// <c>application/json</c>, or a <c>text/event-stream</c> of OpenAI Responses SSE
    /// events when <c>stream=true</c>.
    /// </para>
    /// </remarks>
    public Task<ResponseModel> CreateResponseV1ResponsesPost(CreateResponseV1ResponsesPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/responses"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ResponseModel>(),
            CreateResponseV1ResponsesPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
