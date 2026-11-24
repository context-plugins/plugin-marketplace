using System;
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
using CircleCi.Requests.PipelineApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for triggering, retrieving, and managing pipelines and their configurations.
/// </summary>
public sealed class PipelineApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PipelineApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Continue a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContinuePipelineError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Continues a pipeline from a setup workflow by providing configuration and pipeline parameters.
    /// </remarks>
    public Task<MessageResponse> ContinuePipeline(ContinuePipelineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/pipeline/continue"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MessageResponse>(),
            ContinuePipelineError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a pipeline by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineCircleCiRestApiV2PipelineApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a pipeline by its unique identifier.
    /// </remarks>
    public Task<PipelineCircleCiRestApiV2PipelineApi> GetPipeline(GetPipelineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/pipeline/{pipeline-id}"),
            [new TemplateParam("pipeline-id", request.PipelineId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineCircleCiRestApiV2PipelineApi>(),
            GetPipelineError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a pipeline's configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the configuration source for a given pipeline.
    /// </remarks>
    public Task<PipelineConfig> GetPipelineConfig(GetPipelineConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/pipeline/{pipeline-id}/config"),
            [new TemplateParam("pipeline-id", request.PipelineId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineConfig>(),
            GetPipelineConfigError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List my project pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMyProjectPipelinesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of pipelines for a project filtered to those triggered by the current user.
    /// </remarks>
    public Task<PipelineList> ListMyProjectPipelines(ListMyProjectPipelinesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/project/{project-slug}/pipeline/mine"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [new Param("page-token", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineList>(),
            ListMyProjectPipelinesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List workflows for a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkflowList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPipelineWorkflowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of workflows associated with a given pipeline.
    /// </remarks>
    public Task<WorkflowList> ListPipelineWorkflows(ListPipelineWorkflowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/pipeline/{pipeline-id}/workflow"),
            [new TemplateParam("pipeline-id", request.PipelineId)],
            [new Param("page-token", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkflowList>(),
            ListPipelineWorkflowsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPipelinesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all pipelines for the most recently built projects you follow in the organization.
    /// </remarks>
    public Task<PipelineList> ListPipelines(ListPipelinesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/pipeline"),
            [],
            [
                new Param("org-slug", request.OrgSlug),
                new Param("mine", request.Mine),
                new Param("page-token", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineList>(),
            ListPipelinesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List project pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListProjectPipelinesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of pipelines for a given project.
    /// </remarks>
    public Task<PipelineList> ListProjectPipelines(ListProjectPipelinesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/project/{project-slug}/pipeline"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [new Param("branch", request.Branch), new Param("page-token", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineList>(),
            ListProjectPipelinesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineCreation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerPipelineError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers a new pipeline on the specified project. Optionally specify a branch, tag, or revision to build. Pipeline parameters can also be provided.
    /// </remarks>
    public Task<PipelineCreation> TriggerPipeline(TriggerPipelineOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/project/{project-slug}/pipeline"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineCreation>(),
            TriggerPipelineError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
