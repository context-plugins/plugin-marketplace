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
using ParallelSdk.Requests.Extract;

namespace ParallelSdk.Api;

/// <summary>
/// Extract returns excerpts or full content from one or more URLs. Inputs are a list of URLs and an optional search objective and keyword queries. The returned excerpts or full content is formatted as markdown and suitable for LLM consumption.
/// - Result: excerpts or full content from the URL formatted as markdown
/// </summary>
public sealed class Extract
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Extract(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Extract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ExtractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExtractV1ExtractPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extracts relevant content from specific web URLs.
    /// <para>
    /// The legacy Extract API reference (<c>/v1beta/extract</c> endpoint) is available
    /// here, and
    /// migration guide is here.
    /// </para>
    /// </remarks>
    public Task<V1ExtractResponse> ExtractV1ExtractPost(ExtractV1ExtractPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/extract"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1ExtractResponse>(),
            ExtractV1ExtractPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
