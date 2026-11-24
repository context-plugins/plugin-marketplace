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
using CircleCi.Requests.WorkflowApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for retrieving workflow details, managing workflow status, and rerunning workflows.
/// </summary>
public sealed class WorkflowApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WorkflowApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Approve a workflow job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApproveWorkflowJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Approves a pending approval job in a workflow, allowing the workflow to continue execution.
    /// </remarks>
    public Task<MessageResponse> ApproveWorkflowJob(ApproveWorkflowJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/workflow/{id}/approve/{approval_request_id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("approval_request_id", request.ApprovalRequestId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            ApproveWorkflowJobError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel a workflow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelWorkflowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels a running workflow and all of its running jobs.
    /// </remarks>
    public Task<MessageResponse> CancelWorkflow(CancelWorkflowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/workflow/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            CancelWorkflowError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a workflow by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Workflow"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkflowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a workflow by its unique identifier, including its status, pipeline ID, and timing information.
    /// </remarks>
    public Task<Workflow> GetWorkflow(GetWorkflowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/workflow/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Workflow>(),
            GetWorkflowError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List jobs for a workflow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkflowJobList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWorkflowJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of jobs associated with a given workflow.
    /// </remarks>
    public Task<WorkflowJobList> ListWorkflowJobs(ListWorkflowJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/workflow/{id}/job"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkflowJobList>(),
            ListWorkflowJobsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rerun a workflow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RerunWorkflowResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RerunWorkflowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reruns a workflow. Optionally, specific jobs can be selected for rerun, and SSH access can be enabled for debugging.
    /// </remarks>
    public Task<RerunWorkflowResponse> RerunWorkflow(RerunWorkflowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/workflow/{id}/rerun"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RerunWorkflowResponse>(),
            RerunWorkflowError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
