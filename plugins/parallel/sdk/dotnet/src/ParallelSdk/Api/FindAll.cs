using System;
using System.Collections.Generic;
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
using ParallelSdk.Models.OneOf;
using ParallelSdk.Requests.FindAll;

namespace ParallelSdk.Api;

/// <summary>
/// The FindAll API discovers and evaluates entities that match complex criteria from natural language objectives. Submit a high-level goal and the service automatically generates structured match conditions, discovers relevant candidates, and evaluates each against the criteria. Returns comprehensive results with detailed reasoning, citations, and confidence scores for each match decision. Streaming events and webhooks are supported.
/// </summary>
public sealed class FindAll
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal FindAll(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel FindAll Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a FindAll run.
    /// </remarks>
    public Task CancelFindallRunV1BetaFindallRunsFindallIdCancelPost(CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/findall/runs/{findall_id}/cancel"),
            [new TemplateParam("findall_id", request.FindallId)],
            [],
            [
                new HeaderParam("parallel-beta", request.ParallelBeta),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add Enrichment to FindAll Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FindAllSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add an enrichment to a FindAll run.
    /// </remarks>
    public Task<FindAllSchema> EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPost(EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/findall/runs/{findall_id}/enrich"),
            [new TemplateParam("findall_id", request.FindallId)],
            [],
            [
                new HeaderParam("parallel-beta", request.ParallelBeta),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FindAllSchema>(),
            EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Extend FindAll Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FindAllSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extend a FindAll run by adding additional matches to the current match limit.
    /// </remarks>
    public Task<FindAllSchema> ExtendFindallRunV1BetaFindallRunsFindallIdExtendPost(ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/findall/runs/{findall_id}/extend"),
            [new TemplateParam("findall_id", request.FindallId)],
            [],
            [
                new HeaderParam("parallel-beta", request.ParallelBeta),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FindAllSchema>(),
            ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fast Entity Search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FindAllEntitySearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FindallEntitySearchV1BetaFindallEntitySearchPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return ranked entities matching a natural language objective.
    /// <para>
    /// This endpoint performs a best-effort search optimized for low latency. To keep
    /// responses fast, it returns a fixed set of attributes and supports queries of
    /// limited complexity.
    /// </para>
    /// <para>
    /// For comprehensive match evaluation and enrichment, use the
    /// FindAll API.
    /// </para>
    /// </remarks>
    public Task<FindAllEntitySearchResponse> FindallEntitySearchV1BetaFindallEntitySearchPost(FindallEntitySearchV1BetaFindallEntitySearchPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/findall/entity-search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FindAllEntitySearchResponse>(),
            FindallEntitySearchV1BetaFindallEntitySearchPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve FindAll Run Status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FindAllRun"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FindallRunsV1GetV1BetaFindallRunsFindallIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a FindAll run.
    /// </remarks>
    public Task<FindAllRun> FindallRunsV1GetV1BetaFindallRunsFindallIdGet(FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/findall/runs/{findall_id}"),
            [new TemplateParam("findall_id", request.FindallId)],
            [],
            [new HeaderParam("parallel-beta", request.ParallelBeta)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FindAllRun>(),
            FindallRunsV1GetV1BetaFindallRunsFindallIdGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create FindAll Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FindAllRun"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FindallRunsV1V1BetaFindallRunsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a FindAll run.
    /// <para>
    /// This endpoint immediately returns a FindAll run object with status set to 'queued'.
    /// You can get the run result snapshot using the GET /v1beta/findall/runs/{findall_id}/result endpoint.
    /// You can track the progress of the run by:
    /// - Polling the status using the GET /v1beta/findall/runs/{findall_id} endpoint,
    /// - Subscribing to real-time updates via the /v1beta/findall/runs/{findall_id}/events
    /// endpoint,
    /// - Or specifying a webhook with relevant event types during run creation to receive
    /// notifications.
    /// </para>
    /// </remarks>
    public Task<FindAllRun> FindallRunsV1V1BetaFindallRunsPost(FindallRunsV1V1BetaFindallRunsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/findall/runs"),
            [],
            [],
            [
                new HeaderParam("parallel-beta", request.ParallelBeta),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FindAllRun>(),
            FindallRunsV1V1BetaFindallRunsPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stream FindAll Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IAsyncEnumerable{T}"/> of <see cref="Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stream events from a FindAll run.
    /// <para>
    /// Args:
    /// request: The Shapi request
    /// findall_id: The FindAll run ID
    /// last_event_id: Optional event ID to resume from.
    /// timeout: Optional timeout in seconds. If None, keep connection alive
    /// as long as the run is going. If set, stop after specified duration.
    /// </para>
    ///
    /// The returned sequence is single-shot and lazy: enumerate it (or dispose the enumerator) to
    /// release the underlying connection — a sequence that is never enumerated never releases it.
    /// Enumeration can throw <see cref="SdkTimeoutException"/> if the server stalls between frames,
    /// <see cref="ResponseDeserializationException"/> on a frame that cannot be parsed,
    /// or <see cref="SdkConnectionException"/> if the connection drops mid-stream.
    /// </remarks>
    public Task<IAsyncEnumerable<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet>> GetFindallEventsV1BetaFindallRunsFindallIdEventsGet(GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/findall/runs/{findall_id}/events"),
            [new TemplateParam("findall_id", request.FindallId)],
            [new Param("last_event_id", request.LastEventId), new Param("timeout", request.Timeout)],
            [new HeaderParam("parallel-beta", request.ParallelBeta)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonSseResponse.Create<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet>(),
            GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// FindAll Run Result
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FindAllRunResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFindallResultV1BetaFindallRunsFindallIdResultGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the FindAll run result at the time of the request.
    /// </remarks>
    public Task<FindAllRunResult> GetFindallResultV1BetaFindallRunsFindallIdResultGet(GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/findall/runs/{findall_id}/result"),
            [new TemplateParam("findall_id", request.FindallId)],
            [],
            [new HeaderParam("parallel-beta", request.ParallelBeta)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FindAllRunResult>(),
            GetFindallResultV1BetaFindallRunsFindallIdResultGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get FindAll Run Schema
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FindAllSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError"/> when the server returns an error response.</exception>
    public Task<FindAllSchema> GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGet(GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/findall/runs/{findall_id}/schema"),
            [new TemplateParam("findall_id", request.FindallId)],
            [],
            [new HeaderParam("parallel-beta", request.ParallelBeta)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FindAllSchema>(),
            GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ingest FindAll Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FindAllSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IngestFindallRunV1BetaFindallIngestPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Transforms a natural language search objective into a structured FindAll spec.
    /// <para>
    /// The generated specification serves as a suggested starting point and can be further
    /// customized by the user.
    /// </para>
    /// </remarks>
    public Task<FindAllSchema> IngestFindallRunV1BetaFindallIngestPost(IngestFindallRunV1BetaFindallIngestPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/findall/ingest"),
            [],
            [],
            [
                new HeaderParam("parallel-beta", request.ParallelBeta),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FindAllSchema>(),
            IngestFindallRunV1BetaFindallIngestPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
