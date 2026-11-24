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
using CircleCi.Requests.RunnerTask;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for querying task counts and managing tasks assigned to self-hosted runners.
/// </summary>
public sealed class RunnerTask
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal RunnerTask(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get running task count
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunnerTasksRunningResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRunningTaskCountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the number of running tasks for a given resource class. This endpoint is scoped to a single resource class, so it must be called per resource class to get totals across all classes.
    /// </remarks>
    public Task<RunnerTasksRunningResponse> GetRunningTaskCount(GetRunningTaskCountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runner/tasks/running"),
            [],
            [new Param("resource-class", request.ResourceClass)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RunnerTasksRunningResponse>(),
            GetRunningTaskCountError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get unclaimed task count
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunnerTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUnclaimedTaskCountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the number of unclaimed tasks for a given resource class. This endpoint is scoped to a single resource class, so it must be called per resource class to get totals across all classes.
    /// </remarks>
    public Task<RunnerTasksResponse> GetUnclaimedTaskCount(GetUnclaimedTaskCountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runner/tasks"),
            [],
            [new Param("resource-class", request.ResourceClass)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RunnerTasksResponse>(),
            GetUnclaimedTaskCountError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
