using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Extensions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Models;
using DevCycle.Requests.Metrics;

namespace DevCycle.Api;

public sealed class Metrics
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Metrics(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Metric
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MetricDevCycleManagementMetricsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetricsControllerCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new Metric
    /// </remarks>
    public Task<MetricDevCycleManagementMetricsApi> MetricsControllerCreate(MetricsControllerCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/metrics"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MetricDevCycleManagementMetricsApi>(),
            MetricsControllerCreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch results for a Metric
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MetricResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetricsControllerFetchResultsError"/> when the server returns an error response.</exception>
    public Task<MetricResult> MetricsControllerFetchResults(MetricsControllerFetchResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/metrics/{key}/results"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [
                new Param("feature", request.Feature),
                new Param("startDate", request.StartDate.ToIso8601()),
                new Param("endDate", request.EndDate.ToIso8601()),
                new Param("environment", request.Environment),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MetricResult>(),
            MetricsControllerFetchResultsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get All Metrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="MetricDevCycleManagementMetricsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetricsControllerFindAllError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<MetricDevCycleManagementMetricsApi>> MetricsControllerFindAll(MetricsControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/metrics"),
            [new TemplateParam("project", request.Project)],
            [
                new Param("page", request.Page),
                new Param("perPage", request.PerPage),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("dimension", request.Dimension),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<MetricDevCycleManagementMetricsApi>>(),
            MetricsControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Metric
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MetricDevCycleManagementMetricsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetricsControllerFindOneError"/> when the server returns an error response.</exception>
    public Task<MetricDevCycleManagementMetricsApi> MetricsControllerFindOne(MetricsControllerFindOneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/metrics/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MetricDevCycleManagementMetricsApi>(),
            MetricsControllerFindOneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Metric
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetricsControllerRemoveError"/> when the server returns an error response.</exception>
    public Task MetricsControllerRemove(MetricsControllerRemoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/metrics/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            MetricsControllerRemoveError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Metric
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MetricDevCycleManagementMetricsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetricsControllerUpdateError"/> when the server returns an error response.</exception>
    public Task<MetricDevCycleManagementMetricsApi> MetricsControllerUpdate(MetricsControllerUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/metrics/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MetricDevCycleManagementMetricsApi>(),
            MetricsControllerUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test Metric Results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MetricResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TestMetricResultsControllerFetchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch metric results with the given parameters
    /// </remarks>
    public Task<MetricResult> TestMetricResultsControllerFetch(TestMetricResultsControllerFetchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/test-metric-results"),
            [new TemplateParam("project", request.Project)],
            [
                new Param("feature", request.Feature),
                new Param("control", request.Control),
                new Param("optimize", request.Optimize),
                new Param("event", request.Event),
                new Param("dimension", request.Dimension),
                new Param("startDate", request.StartDate.ToIso8601()),
                new Param("endDate", request.EndDate.ToIso8601()),
                new Param("environment", request.Environment),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MetricResult>(),
            TestMetricResultsControllerFetchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
