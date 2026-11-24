using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.Automations;

namespace UiPath.Api;

/// <summary>
/// Manage automation ideas and projects in the pipeline
/// </summary>
public sealed class Automations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Automations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Create an Automation Idea
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Automation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAutomationIdeaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new automation idea in Automation Hub. The submitted idea enters the pipeline at the Idea phase and is available for assessment and prioritization by CoE administrators. The request body must include the idea name, description, submitter information, and the estimated benefit details used in cost-benefit analysis.
    /// </remarks>
    public Task<Automation> CreateAutomationIdea(CreateAutomationIdeaOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/automations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Automation>(),
            CreateAutomationIdeaError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Delete an Automation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAutomationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes an automation record from Automation Hub by its unique identifier. This action removes the idea and all associated documents, comments, and collaborator data. This action cannot be undone.
    /// </remarks>
    public Task DeleteAutomation(DeleteAutomationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/automations/{automationId}"),
            [new TemplateParam("automationId", request.AutomationId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAutomationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Get an Automation by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Automation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAutomationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single automation record by its unique identifier. Returns full details including pipeline phase, status, cost-benefit analysis data, collaborators, documents, and tags.
    /// </remarks>
    public Task<Automation> GetAutomation(GetAutomationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/automations/{automationId}"),
            [new TemplateParam("automationId", request.AutomationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Automation>(),
            GetAutomationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Collaborators for an Automation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationsCollaboratorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAutomationCollaboratorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the list of collaborators assigned to a specific automation idea or project. Collaborators have defined roles such as subject matter expert, developer, or reviewer.
    /// </remarks>
    public Task<AutomationsCollaboratorsResponse> ListAutomationCollaborators(ListAutomationCollaboratorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/automations/{automationId}/collaborators"),
            [new TemplateParam("automationId", request.AutomationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutomationsCollaboratorsResponse>(),
            ListAutomationCollaboratorsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Automations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAutomationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of automation ideas and projects from Automation Hub. Supports filtering by phase, status, and other pipeline attributes. Returns a paginated list of automation records including metadata, cost-benefit analysis data, and submission details. Used by CoE teams to programmatically query and track the automation pipeline.
    /// </remarks>
    public Task<AutomationListResponse> ListAutomations(ListAutomationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/automations"),
            [],
            [
                new Param("phase", request.Phase),
                new Param("status", request.Status),
                new Param("page", request.Page),
                new Param("pageSize", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutomationListResponse>(),
            ListAutomationsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Remove a Collaborator from an Automation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveAutomationCollaboratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a collaborator from an automation by their user ID. The user will lose access to collaborate on the automation idea or project.
    /// </remarks>
    public Task RemoveAutomationCollaborator(RemoveAutomationCollaboratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/automations/{automationId}/collaborators"),
            [new TemplateParam("automationId", request.AutomationId)],
            [new Param("userId", request.UserId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RemoveAutomationCollaboratorError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Update an Automation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Automation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAutomationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially updates an automation record by its unique identifier. Commonly used to advance an automation through the pipeline by updating its phase and status. Only fields included in the request body are modified.
    /// </remarks>
    public Task<Automation> UpdateAutomation(UpdateAutomationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/automations/{automationId}"),
            [new TemplateParam("automationId", request.AutomationId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Automation>(),
            UpdateAutomationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
