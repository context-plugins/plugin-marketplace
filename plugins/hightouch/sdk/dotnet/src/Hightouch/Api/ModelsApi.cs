using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models;
using Hightouch.Models.AnyOf;
using Hightouch.Requests.ModelsApi;

namespace Hightouch.Api;

public sealed class ModelsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ModelsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new model
    /// </remarks>
    public Task<ModelsResponse1> CreateModel(CreateModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/models"),
            [],
            [new Param("skipColumnQuery", request.SkipColumnQuery)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ModelsResponse1>(),
            CreateModelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsResponse11"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a model
    /// <para>
    /// Deletes a model based on its Hightouch ID. Any syncs that use the model are
    /// deleted as well. Deleting a parent model also deletes every audience built
    /// on it. A model that is still referenced by a journey, priority list,
    /// decision engine agent, dynamic content condition, saved chart, or identity
    /// resolution graph cannot be deleted until those references are removed.
    /// </para>
    /// </remarks>
    public Task<ModelsResponse11> DeleteModel(DeleteModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/models/{modelId}"),
            [new TemplateParam("modelId", request.ModelId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ModelsResponse11>(),
            DeleteModelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an audience size
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsSizeResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAudienceSizeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the state of an audience size job.
    /// </remarks>
    public Task<ModelsSizeResponse1> GetAudienceSize(GetAudienceSizeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/models/{modelId}/size/{jobId}"),
            [new TemplateParam("modelId", request.ModelId), new TemplateParam("jobId", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ModelsSizeResponse1>(),
            GetAudienceSizeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Model"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve models from model ID
    /// </remarks>
    public Task<Model> GetModel(GetModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/models/{modelId}"),
            [new TemplateParam("modelId", request.ModelId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Model>(),
            GetModelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Match Booster enrichment runs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsMatchBoosterRunsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEnrichmentRunsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Match Booster enrichment runs for a model, most recent first.
    /// </remarks>
    public Task<ModelsMatchBoosterRunsResponse> ListEnrichmentRuns(ListEnrichmentRunsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/models/{modelId}/match-booster/runs"),
            [new TemplateParam("modelId", request.ModelId)],
            [
                new Param("region", request.Region),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ModelsMatchBoosterRunsResponse>(),
            ListEnrichmentRunsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Models
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all the models in the current workspace including parent and related models
    /// </remarks>
    public Task<ModelsResponse> ListModel(ListModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/models"),
            [],
            [
                new Param("name", request.Name),
                new Param("slug", request.Slug),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("orderBy", request.OrderBy),
                new Param("tags", request.Tags),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ModelsResponse>(),
            ListModelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start an audience size job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsSizeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartAudienceSizeJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start a background job to compute audience size.
    /// </remarks>
    public Task<ModelsSizeResponse> StartAudienceSizeJob(StartAudienceSizeJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/models/{modelId}/size"),
            [new TemplateParam("modelId", request.ModelId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ModelsSizeResponse>(),
            StartAudienceSizeJobError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger Match Booster enrichment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsMatchBoosterTriggerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerEnrichmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger a Match Booster enrichment run for a model. The model must have
    /// Match Booster enabled.
    /// </remarks>
    public Task<ModelsMatchBoosterTriggerResponse> TriggerEnrichment(TriggerEnrichmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/models/{modelId}/match-booster/trigger"),
            [new TemplateParam("modelId", request.ModelId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ModelsMatchBoosterTriggerResponse>(),
            TriggerEnrichmentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing model
    /// <para>
    /// Patch a model based on its Hightouch ID
    /// </para>
    /// </remarks>
    public Task<ModelsResponse1> UpdateModel(UpdateModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/models/{modelId}"),
            [new TemplateParam("modelId", request.ModelId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ModelsResponse1>(),
            UpdateModelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
