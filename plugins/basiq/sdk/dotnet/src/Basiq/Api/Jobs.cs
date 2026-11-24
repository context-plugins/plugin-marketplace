using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Models.AnyOf;
using Basiq.Requests.Jobs;

namespace Basiq.Api;

public sealed class Jobs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Jobs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobsResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of an existing job. You need only supply the unique job identifier that was returned upon job creation.
    /// </remarks>
    public Task<JobsResponse3> GetJobs(GetJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/jobs/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobsResponse3>(),
            GetJobsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get user jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of all existing and previous jobs associated with a user.
    /// <para>
    /// <b>Note:</b> This endpoint only returns jobs that are less than 7 days old.
    /// </para>
    /// </remarks>
    public Task<UsersJobsResponse> GetUserJobs(GetUserJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/jobs"),
            [new TemplateParam("userId", request.UserId)],
            [new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersJobsResponse>(),
            GetUserJobsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create MFA response
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionResponseResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostJobMfaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Ensure that you generate an authentication token with
    /// scope = CLIENT_ACCESS and basiq-version = 3.0 to create this resource
    /// </remarks>
    public Task<ConnectionResponseResource> PostJobMfa(PostJobMfaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/jobs/{jobId}/mfa"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ConnectionResponseResource>(),
            PostJobMfaError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
