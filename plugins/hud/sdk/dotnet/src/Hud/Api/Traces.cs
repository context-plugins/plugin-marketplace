using System;
using System.Collections.Generic;
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
using Hud.Requests.Traces;

namespace Hud.Api;

public sealed class Traces
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Traces(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Batch Validate Traces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceBatchValidateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchValidateTracesV2TraceBatchValidatePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mark a batch of traces as valid or invalid for leaderboard calculations.
    /// </remarks>
    public Task<TraceBatchValidateResponse> BatchValidateTracesV2TraceBatchValidatePost(BatchValidateTracesV2TraceBatchValidatePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/batch-validate"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TraceBatchValidateResponse>(),
            BatchValidateTracesV2TraceBatchValidatePostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Trace Analysis Context
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceAnalysisContextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Aggregate context for analysis environments (QA agents).
    /// </remarks>
    public Task<TraceAnalysisContextResponse> GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGet(GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}/analysis-context"),
            [new TemplateParam("trace_id", request.TraceId)],
            [
                new Param("include_spans", request.IncludeSpans),
                new Param("include_env_logs", request.IncludeEnvLogs),
                new Param("include_worker_logs", request.IncludeWorkerLogs),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceAnalysisContextResponse>(),
            GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Trace Analysis Prompt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceAnalysisPromptResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Size-bounded debugging prompt: error, task, trajectory, and log tails.
    /// </remarks>
    public Task<TraceAnalysisPromptResponse> GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet(GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}/analysis-prompt"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceAnalysisPromptResponse>(),
            GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Trace Env Logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvLogsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Environment logs — the customer container's stdout/stderr.
    /// <para>
    /// Fetched from the daemon's S3 debug bundle.
    /// </para>
    /// </remarks>
    public Task<EnvLogsResponse> GetTraceEnvLogsV2TraceTraceIdEnvLogsGet(GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}/env-logs"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnvLogsResponse>(),
            GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Trace Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTraceEventsV2TraceTraceIdEventsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Projected, typed view of a trace's telemetry — drives the trace viewer.
    /// </remarks>
    public Task<TraceEventsResponse> GetTraceEventsV2TraceTraceIdEventsGet(GetTraceEventsV2TraceTraceIdEventsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}/events"),
            [new TemplateParam("trace_id", request.TraceId)],
            [new Param("since_seq", request.SinceSeq), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceEventsResponse>(),
            GetTraceEventsV2TraceTraceIdEventsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Trace Info
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceInfoResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTraceInfoV2TraceTraceIdInfoGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a trace with its task, job, and model context for the trace viewer.
    /// </remarks>
    public Task<TraceInfoResponse> GetTraceInfoV2TraceTraceIdInfoGet(GetTraceInfoV2TraceTraceIdInfoGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}/info"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceInfoResponse>(),
            GetTraceInfoV2TraceTraceIdInfoGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Trace Logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceLogsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTraceLogsV2TraceTraceIdLogsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a trace's captured worker logs.
    /// </remarks>
    public Task<TraceLogsResponse> GetTraceLogsV2TraceTraceIdLogsGet(GetTraceLogsV2TraceTraceIdLogsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}/logs"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceLogsResponse>(),
            GetTraceLogsV2TraceTraceIdLogsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Trace Usage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceUsageBreakdown"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTraceUsageV2TraceTraceIdUsageGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a trace's compute and inference cost breakdown.
    /// </remarks>
    public Task<TraceUsageBreakdown> GetTraceUsageV2TraceTraceIdUsageGet(GetTraceUsageV2TraceTraceIdUsageGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}/usage"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceUsageBreakdown>(),
            GetTraceUsageV2TraceTraceIdUsageGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Trace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceDetailResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTraceV2TraceTraceIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a trace by id.
    /// </remarks>
    public Task<TraceDetailResponse> GetTraceV2TraceTraceIdGet(GetTraceV2TraceTraceIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceDetailResponse>(),
            GetTraceV2TraceTraceIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Related Traces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="TraceThumbnail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRelatedTracesV2TraceTraceIdRelatedGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trace thumbnails related to ``trace_id``.
    /// </remarks>
    public Task<IReadOnlyList<TraceThumbnail>> ListRelatedTracesV2TraceTraceIdRelatedGet(ListRelatedTracesV2TraceTraceIdRelatedGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}/related"),
            [new TemplateParam("trace_id", request.TraceId)],
            [
                new Param("kind", request.Kind),
                new Param("limit", request.Limit),
                new Param("scope_to_job", request.ScopeToJob),
                new Param("status", request.Status),
                new Param("order", request.Order),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<TraceThumbnail>>(),
            ListRelatedTracesV2TraceTraceIdRelatedGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish Trace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublishTraceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PublishTraceV2TraceTraceIdPublishPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set ``traces.public=true`` so anyone with the link can view the trace.
    /// </remarks>
    public Task<PublishTraceResponse> PublishTraceV2TraceTraceIdPublishPost(PublishTraceV2TraceTraceIdPublishPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}/publish"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<PublishTraceResponse>(),
            PublishTraceV2TraceTraceIdPublishPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unpublish Trace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnpublishTraceV2TraceTraceIdPublishDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set ``traces.public=false``; the trace returns to invited-only visibility.
    /// </remarks>
    public Task<StatusResponse> UnpublishTraceV2TraceTraceIdPublishDelete(UnpublishTraceV2TraceTraceIdPublishDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}/publish"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<StatusResponse>(),
            UnpublishTraceV2TraceTraceIdPublishDeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Trace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceInfoResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTraceV2TraceTraceIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a trace's metadata fields.
    /// </remarks>
    public Task<TraceInfoResponse> UpdateTraceV2TraceTraceIdPatch(UpdateTraceV2TraceTraceIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trace/{trace_id}"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TraceInfoResponse>(),
            UpdateTraceV2TraceTraceIdPatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
