using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.Jobs;

namespace UiPath.Api;

/// <summary>
/// Manage automation job execution, including starting, stopping, and querying job state
/// </summary>
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
    /// UiPath Get a Job by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Job"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single job by its unique integer identifier. Returns full job details including state, start and end times, robot information, and associated process.
    /// </remarks>
    public Task<Job> GetJob(GetJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Jobs({key})"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Job>(),
            GetJobError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataJobCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of jobs in the current folder. Supports OData query options including $filter, $orderby, $top, $skip, and $select to control the result set. Jobs represent individual executions of automation processes by robots.
    /// </remarks>
    public Task<ODataJobCollection> ListJobs(ListJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Jobs"),
            [],
            [
                new Param("$filter", request.Filter),
                new Param("$orderby", request.Orderby),
                new Param("$top", request.Top),
                new Param("$skip", request.Skip),
                new Param("$select", request.Select),
            ],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataJobCollection>(),
            ListJobsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Start Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataJobCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts one or more automation jobs for a specified process. Allows specifying the strategy for robot allocation (e.g., ModernJobsCount, All, RobotIds), input arguments for the process, job priority, and the target folder. Returns details of the created jobs.
    /// </remarks>
    public Task<ODataJobCollection> StartJobs(StartJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs"),
            [],
            [],
            [
                new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ODataJobCollection>(),
            StartJobsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Stop a Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends a stop signal to a running job. The strategy can be SoftStop (waits for the current activity to finish) or Kill (forcefully terminates the job immediately). Requires the job ID.
    /// </remarks>
    public Task StopJob(StopJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Jobs/UiPath.Server.Configuration.OData.StopJob"),
            [],
            [],
            [
                new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            StopJobError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
