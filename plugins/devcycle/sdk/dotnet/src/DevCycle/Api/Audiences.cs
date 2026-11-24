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
using DevCycle.Requests.Audiences;

namespace DevCycle.Api;

public sealed class Audiences
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Audiences(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Audience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Audience"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AudiencesControllerCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new Audience
    /// </remarks>
    public Task<Audience> AudiencesControllerCreate(AudiencesControllerCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/audiences"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Audience>(),
            AudiencesControllerCreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Audiences
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Audience"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AudiencesControllerFindAllError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<Audience>> AudiencesControllerFindAll(AudiencesControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/audiences"),
            [new TemplateParam("project", request.Project)],
            [
                new Param("page", request.Page),
                new Param("perPage", request.PerPage),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("createdBy", request.CreatedBy),
                new Param("includeUsage", request.IncludeUsage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Audience>>(),
            AudiencesControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an Audience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Audience"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AudiencesControllerFindOneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an Audience by ID or key
    /// </remarks>
    public Task<Audience> AudiencesControllerFindOne(AudiencesControllerFindOneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/audiences/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Audience>(),
            AudiencesControllerFindOneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all direct usages of an Audience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AudienceUsage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AudiencesControllerFindUsagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the direct usages of an Audiences Usage by Features OR other Audiences by ID or key
    /// </remarks>
    public Task<AudienceUsage> AudiencesControllerFindUsages(AudiencesControllerFindUsagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/audiences/{key}/usage"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AudienceUsage>(),
            AudiencesControllerFindUsagesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an Audience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AudiencesControllerRemoveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an Audience by ID or key
    /// </remarks>
    public Task AudiencesControllerRemove(AudiencesControllerRemoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/audiences/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AudiencesControllerRemoveError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an Audience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Audience"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AudiencesControllerUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an Audience by ID or key
    /// </remarks>
    public Task<Audience> AudiencesControllerUpdate(AudiencesControllerUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/audiences/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Audience>(),
            AudiencesControllerUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
