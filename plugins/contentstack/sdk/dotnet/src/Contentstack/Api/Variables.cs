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
using Contentstack.Requests.Variables;

namespace Contentstack.Api;

/// <summary>
/// Project variables are reusable key-value pairs that can be referenced across multiple automations within a project.
/// </summary>
public sealed class Variables
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Variables(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a variable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Variable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new project variable that can be referenced in automation configurations. Variables can store API keys, URLs, or other configuration values that are used across multiple automations.
    /// </remarks>
    public Task<Variable> CreateVariable(CreateVariableOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAutomateManagementAccountsApi(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/variables"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Variable>(),
            CreateVariableError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all variables
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VariableList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllVariablesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all project variables defined for the automation project. Variables are reusable key-value pairs that can be referenced across automation configurations.
    /// </remarks>
    public Task<VariableList> GetAllVariables(GetAllVariablesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAutomateManagementAccountsApi(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/variables"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VariableList>(),
            GetAllVariablesError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
