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
using DevCycle.Requests.MetricAssociations;

namespace DevCycle.Api;

public sealed class MetricAssociations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal MetricAssociations(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Associate a Metric with a Feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MetricAssociation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetricAssociationsControllerCreateError"/> when the server returns an error response.</exception>
    public Task<MetricAssociation> MetricAssociationsControllerCreate(MetricAssociationsControllerCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/metric-associations"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MetricAssociation>(),
            MetricAssociationsControllerCreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Metric Associations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="MetricAssociation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetricAssociationsControllerFindAllError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<MetricAssociation>> MetricAssociationsControllerFindAll(MetricAssociationsControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/metric-associations"),
            [new TemplateParam("project", request.Project)],
            [new Param("metric", request.Metric), new Param("feature", request.Feature)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<MetricAssociation>>(),
            MetricAssociationsControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an Association of a Metric and a Feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetricAssociationsControllerRemoveError"/> when the server returns an error response.</exception>
    public Task MetricAssociationsControllerRemove(MetricAssociationsControllerRemoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/metric-associations"),
            [new TemplateParam("project", request.Project)],
            [new Param("metric", request.Metric), new Param("feature", request.Feature)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            MetricAssociationsControllerRemoveError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
