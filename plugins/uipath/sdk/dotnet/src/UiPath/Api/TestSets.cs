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
using UiPath.Requests.TestSets;

namespace UiPath.Api;

/// <summary>
/// Manage test sets that group test cases for execution
/// </summary>
public sealed class TestSets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TestSets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Create a Test Set
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestSet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTestSetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new test set within a project. The test set can include test cases and be configured to execute against specific Orchestrator environments. Requires the TM.TestSets OAuth scope.
    /// </remarks>
    public Task<TestSet> CreateTestSet(CreateTestSetOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects/{projectId}/testsets"),
            [new TemplateParam("projectId", request.ProjectId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestSet>(),
            CreateTestSetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Test Sets in a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestSetListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTestSetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all test sets within a specific test project. Test sets group test cases for coordinated execution runs and can be linked to Orchestrator processes to trigger automated execution.
    /// </remarks>
    public Task<TestSetListResponse> ListTestSets(ListTestSetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects/{projectId}/testsets"),
            [new TemplateParam("projectId", request.ProjectId)],
            [new Param("page", request.Page), new Param("pageSize", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TestSetListResponse>(),
            ListTestSetsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
