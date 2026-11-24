using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Models;
using DevCycle.Requests.FeatureChangeRequests;

namespace DevCycle.Api;

public sealed class FeatureChangeRequests
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal FeatureChangeRequests(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Review a Pending Feature Change Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeatureChangeRequestsControllerApplyFeatureChangeRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a Feature Change Request by ID
    /// </remarks>
    public Task FeatureChangeRequestsControllerApplyFeatureChangeRequest(FeatureChangeRequestsControllerApplyFeatureChangeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/change-requests/{id}/apply"),
            [
                new TemplateParam("id", request.Id),
                new TemplateParam("feature", request.Feature),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            FeatureChangeRequestsControllerApplyFeatureChangeRequestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel a Pending Feature Change Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeatureChangeRequestsControllerCancelFeatureChangeRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a Feature Change Request by ID
    /// </remarks>
    public Task FeatureChangeRequestsControllerCancelFeatureChangeRequest(FeatureChangeRequestsControllerCancelFeatureChangeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/change-requests/{id}/cancel"),
            [
                new TemplateParam("id", request.Id),
                new TemplateParam("feature", request.Feature),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            EmptyBody.Instance,
            VoidResponse.Instance,
            FeatureChangeRequestsControllerCancelFeatureChangeRequestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Feature Change Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureChangeRequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeatureChangeRequestsControllerCreateChangeRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new Feature Change Request
    /// </remarks>
    public Task<FeatureChangeRequest> FeatureChangeRequestsControllerCreateChangeRequest(FeatureChangeRequestsControllerCreateChangeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/change-requests"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureChangeRequest>(),
            FeatureChangeRequestsControllerCreateChangeRequestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Feature Change Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureChangeRequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeatureChangeRequestsControllerGetFeatureChangeRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a Feature Change Request by ID
    /// </remarks>
    public Task<FeatureChangeRequest> FeatureChangeRequestsControllerGetFeatureChangeRequest(FeatureChangeRequestsControllerGetFeatureChangeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/change-requests/{id}"),
            [
                new TemplateParam("id", request.Id),
                new TemplateParam("feature", request.Feature),
                new TemplateParam("project", request.Project),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FeatureChangeRequest>(),
            FeatureChangeRequestsControllerGetFeatureChangeRequestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the latest non-draft Feature Change Request for a Feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureChangeRequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the latest Feature Change Request for a Feature that is NOT in the 'draft' state
    /// </remarks>
    public Task<FeatureChangeRequest> FeatureChangeRequestsControllerGetLatestFeatureChangeRequest(FeatureChangeRequestsControllerGetLatestFeatureChangeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/change-requests/latest"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FeatureChangeRequest>(),
            FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a list of Pending Feature Change Requests for a Feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="FeatureChangeRequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get all pending Feature Change Requests for a Feature
    /// </remarks>
    public Task<IReadOnlyList<FeatureChangeRequest>> FeatureChangeRequestsControllerGetPendingFeatureChangeRequests(FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/change-requests"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<FeatureChangeRequest>>(),
            FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Review a Pending Feature Change Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeatureChangeRequestsControllerReviewFeatureChangeRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a Feature Change Request by ID
    /// </remarks>
    public Task FeatureChangeRequestsControllerReviewFeatureChangeRequest(FeatureChangeRequestsControllerReviewFeatureChangeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/change-requests/{id}/review"),
            [
                new TemplateParam("id", request.Id),
                new TemplateParam("feature", request.Feature),
                new TemplateParam("project", request.Project),
            ],
            [new Param("apply", request.Apply)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            FeatureChangeRequestsControllerReviewFeatureChangeRequestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit Feature Change Request for Review
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeatureChangeRequest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeatureChangeRequestsControllerSubmitChangeRequestForReviewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit a Feature Change Request for Review
    /// </remarks>
    public Task<FeatureChangeRequest> FeatureChangeRequestsControllerSubmitChangeRequestForReview(FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/features/{feature}/change-requests/{id}/submit"),
            [
                new TemplateParam("id", request.Id),
                new TemplateParam("feature", request.Feature),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeatureChangeRequest>(),
            FeatureChangeRequestsControllerSubmitChangeRequestForReviewError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
