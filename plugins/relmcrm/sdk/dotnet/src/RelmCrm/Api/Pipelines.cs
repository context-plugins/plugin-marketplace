using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using RelmCrm.Core;
using RelmCrm.Core.Authentication;
using RelmCrm.Core.ErrorResponse;
using RelmCrm.Core.Exceptions;
using RelmCrm.Core.Models;
using RelmCrm.Core.Request;
using RelmCrm.Core.Response;
using RelmCrm.Models;
using RelmCrm.Requests.Pipelines;

namespace RelmCrm.Api;

public sealed class Pipelines
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Pipelines(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add a stage to a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Pipeline> AddStage(AddStageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pipelines/{key}/stages"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Pipeline>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Pipeline> CreatePipeline(CreatePipelineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pipelines"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Pipeline>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a pipeline (fails if deals still use it)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deleted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Deleted> DeletePipeline(DeletePipelineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pipelines/{key}"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Deleted>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a stage (fails if deals use it)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Pipeline> DeleteStage(DeleteStageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pipelines/{key}/stages/{stage}"),
            [new TemplateParam("key", request.Key), new TemplateParam("stage", request.Stage)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Pipeline>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Pipeline> GetPipeline(GetPipelineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pipelines/{key}"),
            [new TemplateParam("key", request.Key)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Pipeline>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pipelines with their ordered stages
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<object> ListPipelines(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pipelines"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reorder stages (order = a permutation of every existing stage key)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Pipeline> ReorderStages(ReorderStagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pipelines/{key}/stages/reorder"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Pipeline>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Make this pipeline the workspace default
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Pipeline> SetDefaultPipeline(SetDefaultPipelineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pipelines/{key}/default"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Pipeline>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a pipeline: display <c>name</c>, <c>is_default</c>, and/or re-<c>key</c> it.
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Pipeline> UpdatePipeline(UpdatePipelineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pipelines/{key}"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Pipeline>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rename/retype a stage.
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Pipeline> UpdateStage(UpdateStageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pipelines/{key}/stages/{stage}"),
            [new TemplateParam("key", request.Key), new TemplateParam("stage", request.Stage)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Pipeline>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
