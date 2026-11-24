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
using ParallelSdk.Requests.Search;

namespace ParallelSdk.Api;

/// <summary>
/// Search returns ranked URLs with extended excerpts suitable for LLM consumption. Inputs are a natural-language objective and optional keyword queries. Source policies allow including or excluding specific domains and have configurable output sizes. The returned extended snippets contain dense, relevant information from relevant pages.
/// - Result: ranked list with URL, title, and long text excerpts
/// </summary>
public sealed class Search
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Search(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1SearchV1SearchPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches the web.
    /// <para>
    /// The legacy Search API reference (<c>/v1beta/search</c> endpoint) is available
    /// here, and
    /// migration guide is here.
    /// </para>
    /// </remarks>
    public Task<V1SearchResponse> V1SearchV1SearchPost(V1SearchV1SearchPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SearchResponse>(),
            V1SearchV1SearchPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
