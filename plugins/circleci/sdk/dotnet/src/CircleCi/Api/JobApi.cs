using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CircleCi.Core;
using CircleCi.Core.Exceptions;
using CircleCi.Core.Models;
using CircleCi.Core.Request;
using CircleCi.Core.Response;
using CircleCi.Errors;
using CircleCi.Models;
using CircleCi.Requests.JobApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for retrieving job details, artifacts, and test metadata associated with pipeline jobs.
/// </summary>
public sealed class JobApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal JobApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel a job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels a running job by its job number.
    /// </remarks>
    public Task<MessageResponse> CancelJob(CancelJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/project/{project-slug}/job/{job-number}/cancel"),
            [
                new TemplateParam("project-slug", request.ProjectSlug),
                new TemplateParam("job-number", request.JobNumber),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            CancelJobError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get job details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Job"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed information about a specific job, including its status, duration, and executor configuration.
    /// </remarks>
    public Task<Job> GetJob(GetJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/project/{project-slug}/job/{job-number}"),
            [
                new TemplateParam("project-slug", request.ProjectSlug),
                new TemplateParam("job-number", request.JobNumber),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Job>(),
            GetJobError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List artifacts for a job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ArtifactList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListJobArtifactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of artifacts produced by a given job.
    /// </remarks>
    public Task<ArtifactList> ListJobArtifacts(ListJobArtifactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/project/{project-slug}/{job-number}/artifacts"),
            [
                new TemplateParam("project-slug", request.ProjectSlug),
                new TemplateParam("job-number", request.JobNumber),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ArtifactList>(),
            ListJobArtifactsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List test metadata for a job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListJobTestsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns test metadata for a given job, collected from JUnit XML or similar test result files.
    /// </remarks>
    public Task<TestList> ListJobTests(ListJobTestsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/project/{project-slug}/{job-number}/tests"),
            [
                new TemplateParam("project-slug", request.ProjectSlug),
                new TemplateParam("job-number", request.JobNumber),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TestList>(),
            ListJobTestsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
