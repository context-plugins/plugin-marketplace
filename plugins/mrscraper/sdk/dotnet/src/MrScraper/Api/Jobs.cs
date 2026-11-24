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
using MrScraper.Requests.Jobs;

namespace MrScraper.Api;

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
    /// Get jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<JobsResponse> GetJobs(GetJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/jobs"),
            [],
            [
                new Param("pageSize", request.PageSize),
                new Param("page", request.Page),
                new Param("sortField", request.SortField),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("startAt", request.StartAt),
                new Param("endAt", request.EndAt),
                new Param("dateRangeColumn", request.DateRangeColumn),
                new Param("name", request.Name),
                new Param("status", request.Status),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get jobs by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<JobsResponse1> GetJobsById(GetJobsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/jobs/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobsResponse1>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<JobsResponse1> PostJobs(PostJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/jobs"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JobsResponse1>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace jobs by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<JobsResponse1> PutJobsById(PutJobsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/jobs/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JobsResponse1>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
