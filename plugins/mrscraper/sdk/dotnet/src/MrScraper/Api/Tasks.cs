using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MrScraper.Core;
using MrScraper.Core.Authentication;
using MrScraper.Core.ErrorResponse;
using MrScraper.Core.Exceptions;
using MrScraper.Core.Models;
using MrScraper.Core.Request;
using MrScraper.Core.Response;
using MrScraper.Models;
using MrScraper.Requests.Tasks;

namespace MrScraper.Api;

public sealed class Tasks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tasks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<TasksResponse> GetTasks(GetTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/tasks"),
            [],
            [
                new Param("startAt", request.StartAt),
                new Param("endAt", request.EndAt),
                new Param("pageSize", request.PageSize),
                new Param("page", request.Page),
                new Param("sortField", request.SortField),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("dateRangeColumn", request.DateRangeColumn),
                new Param("domain", request.Domain),
                new Param("action", request.Action),
                new Param("status", request.Status),
                new Param("jobId", request.JobId),
                new Param("isParent", request.IsParent),
                new Param("countOnly", request.CountOnly),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TasksResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get tasks by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<TasksResponse3> GetTasksById(GetTasksByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/tasks/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("result", request.Result)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TasksResponse3>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<TasksResponse1> PostTasks(PostTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/tasks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksResponse1>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create tasks bulk
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksBulkResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<TasksBulkResponse1> PostTasksBulk(PostTasksBulkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/tasks/bulk"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksBulkResponse1>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace tasks bulk
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksBulkResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<TasksBulkResponse> PutTasksBulk(PutTasksBulkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/tasks/bulk"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksBulkResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace tasks by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<TasksResponse1> PutTasksById(PutTasksByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/tasks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksResponse1>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace tasks by id status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<TasksStatusResponse> PutTasksByIdStatus(PutTasksByIdStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/tasks/{id}/status"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksStatusResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
