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
using UiPath.Requests.Requirements;

namespace UiPath.Api;

/// <summary>
/// Manage requirements and their traceability links to test cases
/// </summary>
public sealed class Requirements
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Requirements(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Create a Requirement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Requirement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRequirementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new requirement within a test project. Requirements can be linked to test cases to establish traceability coverage. Requires the TM.Requirements OAuth scope.
    /// </remarks>
    public Task<Requirement> CreateRequirement(CreateRequirementOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects/{projectId}/requirements"),
            [new TemplateParam("projectId", request.ProjectId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Requirement>(),
            CreateRequirementError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Requirements in a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RequirementListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRequirementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all requirements defined within a specific test project. Requirements represent business or technical specifications that test cases are mapped to for traceability. Supports pagination. Requires the TM.Requirements or TM.Requirements.Read OAuth scope.
    /// </remarks>
    public Task<RequirementListResponse> ListRequirements(ListRequirementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects/{projectId}/requirements"),
            [new TemplateParam("projectId", request.ProjectId)],
            [new Param("page", request.Page), new Param("pageSize", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RequirementListResponse>(),
            ListRequirementsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
