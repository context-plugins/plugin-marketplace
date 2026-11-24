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
using ParallelSdk.Requests.MemoryApi;

namespace ParallelSdk.Api;

/// <summary>
/// The Memory API retrieves and manages memories created by Tasks, Monitors, and FindAll runs. Memories can be personal or isolated with a <c>memory_scope_key</c>.
/// </summary>
public sealed class MemoryApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MemoryApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Clear Memory
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClearMemoryV1BetaMemoryClearPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Clears all entries from the selected memory without deleting the underlying tasks, monitors, or FindAll runs.
    /// </remarks>
    public Task ClearMemoryV1BetaMemoryClearPost(ClearMemoryV1BetaMemoryClearPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/memory/clear"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            ClearMemoryV1BetaMemoryClearPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Evict from Memory
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EvictMemorySourceV1BetaMemoryEvictPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a task run, monitor, or FindAll run from the selected memory without deleting the original resource.
    /// </remarks>
    public Task EvictMemorySourceV1BetaMemoryEvictPost(EvictMemorySourceV1BetaMemoryEvictPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/memory/evict"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            EvictMemorySourceV1BetaMemoryEvictPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Memory
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MemoryRetrieveResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetrieveMemoryV1BetaMemoryRetrievePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves relevant or recent runs from the selected memory. Provide a query to rank results by relevance; leave it empty to return the most recent runs.
    /// </remarks>
    public Task<MemoryRetrieveResponse> RetrieveMemoryV1BetaMemoryRetrievePost(RetrieveMemoryV1BetaMemoryRetrievePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/memory/retrieve"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MemoryRetrieveResponse>(),
            RetrieveMemoryV1BetaMemoryRetrievePostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
