using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Requests.ModelsApi;

namespace Hud.Api;

public sealed class ModelsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ModelsApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Fork Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ForkModelV2ModelsForkPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an owned trainable model derived from a source trainable model.
    /// </remarks>
    public Task<ModelResponse> ForkModelV2ModelsForkPost(ForkModelV2ModelsForkPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models/fork"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ModelResponse>(),
            ForkModelV2ModelsForkPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetModelV2ModelsModelIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a catalog model by id.
    /// </remarks>
    public Task<ModelResponse> GetModelV2ModelsModelIdGet(GetModelV2ModelsModelIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models/{model_id}"),
            [new TemplateParam("model_id", request.ModelId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ModelResponse>(),
            GetModelV2ModelsModelIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Checkpoint Traces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CheckpointTraceRow"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List recent traces produced by a specific model checkpoint.
    /// </remarks>
    public Task<IReadOnlyList<CheckpointTraceRow>> ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet(ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models/{model_id}/checkpoints/{checkpoint_id}/traces"),
            [new TemplateParam("model_id", request.ModelId), new TemplateParam("checkpoint_id", request.CheckpointId)],
            [new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CheckpointTraceRow>>(),
            ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Model Checkpoints
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CheckpointResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListModelCheckpointsV2ModelsModelIdCheckpointsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List a trainable model's checkpoint tree.
    /// </remarks>
    public Task<IReadOnlyList<CheckpointResponse>> ListModelCheckpointsV2ModelsModelIdCheckpointsGet(ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models/{model_id}/checkpoints"),
            [new TemplateParam("model_id", request.ModelId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CheckpointResponse>>(),
            ListModelCheckpointsV2ModelsModelIdCheckpointsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Model Inference Logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedResponseModelInferenceLogEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListModelInferenceLogsV2ModelsModelIdLogsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the caller team's gateway inference logs for a model, excluding QA analysis calls.
    /// </remarks>
    public Task<PaginatedResponseModelInferenceLogEntry> ListModelInferenceLogsV2ModelsModelIdLogsGet(ListModelInferenceLogsV2ModelsModelIdLogsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models/{model_id}/logs"),
            [new TemplateParam("model_id", request.ModelId)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedResponseModelInferenceLogEntry>(),
            ListModelInferenceLogsV2ModelsModelIdLogsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Models
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedResponseModelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListModelsV2ModelsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List catalog models visible to the caller.
    /// </remarks>
    public Task<PaginatedResponseModelResponse> ListModelsV2ModelsGet(ListModelsV2ModelsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("scope", request.Scope),
                new Param("search", request.Search),
                new Param("trainable", request.Trainable),
                new Param("include_deprecated", request.IncludeDeprecated),
                new Param("sort", request.Sort),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedResponseModelResponse>(),
            ListModelsV2ModelsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Model Results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelResultsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ModelResultsV2ModelsModelIdResultsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get per-taskset evaluation results for a model's checkpoints.
    /// </remarks>
    public Task<ModelResultsResponse> ModelResultsV2ModelsModelIdResultsGet(ModelResultsV2ModelsModelIdResultsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models/{model_id}/results"),
            [new TemplateParam("model_id", request.ModelId)],
            [new Param("checkpoint_ids", request.CheckpointIds), new Param("purpose", request.Purpose)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ModelResultsResponse>(),
            ModelResultsV2ModelsModelIdResultsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Model Suggested Tasksets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuggestedTasksetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Suggest tasksets to evaluate or train a model on.
    /// </remarks>
    public Task<SuggestedTasksetsResponse> ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet(ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models/{model_id}/suggested-tasksets"),
            [new TemplateParam("model_id", request.ModelId)],
            [
                new Param("exclude", request.Exclude),
                new Param("search", request.Search),
                new Param("limit", request.Limit),
                new Param("purpose", request.Purpose),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SuggestedTasksetsResponse>(),
            ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resolve Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResolveModelV2ModelsResolveGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve a model string (slug or id) to its catalog record.
    /// <para>
    /// General slug→id lookup: any client holding a model string (e.g. a trainable
    /// model's gateway slug) can map it to the id and metadata. Declared before
    /// ``/{model_id}`` so the literal ``resolve`` path is not parsed as an id; a
    /// query param (not a path segment) so slugs with ``/`` or ``:`` need no
    /// encoding. Team-scoping still hides other teams' private fine-tunes.
    /// </para>
    /// </remarks>
    public Task<ModelResponse> ResolveModelV2ModelsResolveGet(ResolveModelV2ModelsResolveGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models/resolve"),
            [],
            [new Param("model", request.Model)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ModelResponse>(),
            ResolveModelV2ModelsResolveGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set Model Head
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetModelHeadV2ModelsModelIdHeadPutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Point the model's active checkpoint (head) at one of its checkpoint nodes.
    /// </remarks>
    public Task<ModelResponse> SetModelHeadV2ModelsModelIdHeadPut(SetModelHeadV2ModelsModelIdHeadPutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models/{model_id}/head"),
            [new TemplateParam("model_id", request.ModelId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ModelResponse>(),
            SetModelHeadV2ModelsModelIdHeadPutError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateModelV2ModelsModelIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a model's catalog fields, such as name or visibility.
    /// </remarks>
    public Task<ModelResponse> UpdateModelV2ModelsModelIdPatch(UpdateModelV2ModelsModelIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/models/{model_id}"),
            [new TemplateParam("model_id", request.ModelId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ModelResponse>(),
            UpdateModelV2ModelsModelIdPatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
