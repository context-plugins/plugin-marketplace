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
using Hud.Requests.Jobs;

namespace Hud.Api;

public sealed class Jobs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Jobs(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Enrich Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnrichJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnrichJobsV2JobsEnrichPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch enrichment data (chart points, task coverage, models) for a batch of jobs.
    /// </remarks>
    public Task<EnrichJobsResponse> EnrichJobsV2JobsEnrichPost(EnrichJobsV2JobsEnrichPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/enrich"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnrichJobsResponse>(),
            EnrichJobsV2JobsEnrichPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Finish Imported Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobImportFinishResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FinishImportedJobV2JobsImportJobIdFinishPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Finish an imported job once each of its traces has been finished.
    /// </remarks>
    public Task<JobImportFinishResponse> FinishImportedJobV2JobsImportJobIdFinishPost(FinishImportedJobV2JobsImportJobIdFinishPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/import/{job_id}/finish"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<JobImportFinishResponse>(),
            FinishImportedJobV2JobsImportJobIdFinishPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Finish Imported Trace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobImportTraceResultResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Record the outcome of one imported trace after its trajectory is uploaded.
    /// </remarks>
    public Task<JobImportTraceResultResponse> FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost(FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/import/{job_id}/traces/{trace_id}/finish"),
            [new TemplateParam("job_id", request.JobId), new TemplateParam("trace_id", request.TraceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JobImportTraceResultResponse>(),
            FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Job Chart Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChartDataResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJobChartDataV2JobsJobIdChartDataGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get per-trace reward data points for charting a job's results.
    /// </remarks>
    public Task<ChartDataResponse> GetJobChartDataV2JobsJobIdChartDataGet(GetJobChartDataV2JobsJobIdChartDataGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/chart-data"),
            [new TemplateParam("job_id", request.JobId)],
            [new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ChartDataResponse>(),
            GetJobChartDataV2JobsJobIdChartDataGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Job Entity Links
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobEntityLinksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJobEntityLinksV2JobsJobIdEntityLinksGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List tasksets and registries linked to a job.
    /// </remarks>
    public Task<JobEntityLinksResponse> GetJobEntityLinksV2JobsJobIdEntityLinksGet(GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/entity-links"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobEntityLinksResponse>(),
            GetJobEntityLinksV2JobsJobIdEntityLinksGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Job Taskset Coverage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksetCoverageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get per-task coverage of the job's taskset, including unattempted tasks.
    /// </remarks>
    public Task<TasksetCoverageResponse> GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGet(GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/taskset-coverage"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TasksetCoverageResponse>(),
            GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Job Usage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJobUsageV2JobsJobIdUsageGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get per-trace compute and inference usage for a job.
    /// </remarks>
    public Task<JobUsageResponse> GetJobUsageV2JobsJobIdUsageGet(GetJobUsageV2JobsJobIdUsageGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/usage"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobUsageResponse>(),
            GetJobUsageV2JobsJobIdUsageGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJobV2JobsJobIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a job by id.
    /// </remarks>
    public Task<JobResponse> GetJobV2JobsJobIdGet(GetJobV2JobsJobIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobResponse>(),
            GetJobV2JobsJobIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ImportJobV2JobsImportPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add runs done outside HUD to an imported job, creating the job on first call.
    /// <para>
    /// Each trace is linked to its task by content digest and starts running. A
    /// running trace with no span upload for an hour is errored, so add traces as
    /// they are uploaded rather than all at once. Retried traces are reported as
    /// already imported.
    /// </para>
    /// </remarks>
    public Task<JobImportResponse> ImportJobV2JobsImportPost(ImportJobV2JobsImportPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/import"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JobImportResponse>(),
            ImportJobV2JobsImportPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Invalidate Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchValidateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InvalidateJobV2JobsJobIdInvalidatePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mark every trace in this job as invalid (excluded from leaderboards).
    /// </remarks>
    public Task<BatchValidateResponse> InvalidateJobV2JobsJobIdInvalidatePost(InvalidateJobV2JobsJobIdInvalidatePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/invalidate"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BatchValidateResponse>(),
            InvalidateJobV2JobsJobIdInvalidatePostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Job Summary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobSummaryV2JobsJobIdSummaryGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get aggregate trace statistics for a job.
    /// </remarks>
    public Task<JobSummary> JobSummaryV2JobsJobIdSummaryGet(JobSummaryV2JobsJobIdSummaryGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/summary"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobSummary>(),
            JobSummaryV2JobsJobIdSummaryGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Active Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="JobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListActiveJobsV2JobsActiveGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List a bounded page of currently running jobs for the caller's team.
    /// </remarks>
    public Task<IReadOnlyList<JobResponse>> ListActiveJobsV2JobsActiveGet(ListActiveJobsV2JobsActiveGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/active"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<JobResponse>>(),
            ListActiveJobsV2JobsActiveGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Enriched Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksetJobsEnrichedResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEnrichedJobsV2JobsEnrichedGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List enriched taskset jobs; public-only viewers receive public jobs.
    /// </remarks>
    public Task<TasksetJobsEnrichedResponse> ListEnrichedJobsV2JobsEnrichedGet(ListEnrichedJobsV2JobsEnrichedGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/enriched"),
            [],
            [
                new Param("taskset_id", request.TasksetId),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TasksetJobsEnrichedResponse>(),
            ListEnrichedJobsV2JobsEnrichedGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Job Thumbnails
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobThumbnailsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListJobThumbnailsV2JobsJobIdThumbnailsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List trace thumbnails for a job with presigned image URLs.
    /// </remarks>
    public Task<JobThumbnailsResponse> ListJobThumbnailsV2JobsJobIdThumbnailsGet(ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/thumbnails"),
            [new TemplateParam("job_id", request.JobId)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("status", request.Status),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobThumbnailsResponse>(),
            ListJobThumbnailsV2JobsJobIdThumbnailsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Job Traces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedResponseTraceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListJobTracesV2JobsJobIdTracesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List traces belonging to a job.
    /// </remarks>
    public Task<PaginatedResponseTraceResponse> ListJobTracesV2JobsJobIdTracesGet(ListJobTracesV2JobsJobIdTracesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/traces"),
            [new TemplateParam("job_id", request.JobId)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedResponseTraceResponse>(),
            ListJobTracesV2JobsJobIdTracesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedResponseJobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListJobsV2JobsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List jobs for the caller's team, optionally filtered by taskset or Project.
    /// </remarks>
    public Task<PaginatedResponseJobResponse> ListJobsV2JobsGet(ListJobsV2JobsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("taskset_id", request.TasksetId),
                new Param("project_id", request.ProjectId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedResponseJobResponse>(),
            ListJobsV2JobsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublishJobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PublishJobV2JobsJobIdPublishPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set ``jobs.public=true`` so the job is visible on the public taskset page.
    /// </remarks>
    public Task<PublishJobResponse> PublishJobV2JobsJobIdPublishPost(PublishJobV2JobsJobIdPublishPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/publish"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<PublishJobResponse>(),
            PublishJobV2JobsJobIdPublishPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revalidate Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchValidateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevalidateJobV2JobsJobIdRevalidatePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Re-include every trace in this job in leaderboard calculations.
    /// </remarks>
    public Task<BatchValidateResponse> RevalidateJobV2JobsJobIdRevalidatePost(RevalidateJobV2JobsJobIdRevalidatePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/revalidate"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BatchValidateResponse>(),
            RevalidateJobV2JobsJobIdRevalidatePostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unpublish Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnpublishJobV2JobsJobIdPublishDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set ``jobs.public=false``; the job and its traces return to invited-only visibility.
    /// </remarks>
    public Task<StatusResponse> UnpublishJobV2JobsJobIdPublishDelete(UnpublishJobV2JobsJobIdPublishDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}/publish"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<StatusResponse>(),
            UnpublishJobV2JobsJobIdPublishDeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateJobV2JobsJobIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a job's mutable fields, such as its name.
    /// </remarks>
    public Task<JobResponse> UpdateJobV2JobsJobIdPatch(UpdateJobV2JobsJobIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/{job_id}"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JobResponse>(),
            UpdateJobV2JobsJobIdPatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Imported Trajectory
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobImportTrajectoryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Store an ATIF agent trajectory as an imported trace's telemetry.
    /// <para>
    /// Upload it before finishing the trace. A trace keeps the first trajectory
    /// it receives; a repeated upload reports <c>ingested: false</c>.
    /// </para>
    /// </remarks>
    public Task<JobImportTrajectoryResponse> UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost(UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/jobs/import/{job_id}/traces/{trace_id}/trajectory"),
            [new TemplateParam("job_id", request.JobId), new TemplateParam("trace_id", request.TraceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JobImportTrajectoryResponse>(),
            UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
