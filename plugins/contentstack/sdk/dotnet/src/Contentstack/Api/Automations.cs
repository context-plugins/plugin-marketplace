using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.Automations;

namespace Contentstack.Api;

/// <summary>
/// Automations are individual workflow definitions that connect triggers (such as Contentstack content events) to actions (such as sending notifications or updating external systems).
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
    /// Activate an automation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Automation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ActivateAutomationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enables an automation so that it will execute when its configured trigger conditions are met. Only automations in a valid, configured state can be activated.
    /// </remarks>
    public Task<Automation> ActivateAutomation(ActivateAutomationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAutomateManagementAccountsApi(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/activate"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
                new TemplateParam("automation_uid", request.AutomationUid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<Automation>(),
            ActivateAutomationError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Deactivate an automation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Automation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeactivateAutomationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disables an active automation, preventing it from executing when its trigger conditions are met. Existing in-progress executions will complete before the automation is fully deactivated.
    /// </remarks>
    public Task<Automation> DeactivateAutomation(DeactivateAutomationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAutomateManagementAccountsApi(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/deactivate"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
                new TemplateParam("automation_uid", request.AutomationUid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<Automation>(),
            DeactivateAutomationError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all automations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllAutomationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all automation workflow definitions within a specific project, including their trigger configurations, steps, and activation status.
    /// </remarks>
    public Task<AutomationList> GetAllAutomations(GetAllAutomationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAutomateManagementAccountsApi(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutomationList>(),
            GetAllAutomationsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an automation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Automation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAutomationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the full configuration of a specific automation including trigger settings, action steps, error handling, and activation status.
    /// </remarks>
    public Task<Automation> GetAutomation(GetAutomationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAutomateManagementAccountsApi(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
                new TemplateParam("automation_uid", request.AutomationUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Automation>(),
            GetAutomationError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
