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
using UiPath.Requests.TestCases;

namespace UiPath.Api;

/// <summary>
/// Manage test cases and their definitions
/// </summary>
public sealed class TestCases
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TestCases(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Create a Test Case
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestCase"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTestCaseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new test case within a test project. The test case can be linked to automation packages deployed in Orchestrator to enable automated test execution via test sets. Requires the TM.TestCases OAuth scope.
    /// </remarks>
    public Task<TestCase> CreateTestCase(CreateTestCaseOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects/{projectId}/testcases"),
            [new TemplateParam("projectId", request.ProjectId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestCase>(),
            CreateTestCaseError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Get a Test Case by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestCase"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTestCaseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a specific test case by its unique identifier within a project. Returns full test case details including steps, labels, custom fields, automation linkage, and preconditions.
    /// </remarks>
    public Task<TestCase> GetTestCase(GetTestCaseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects/{projectId}/testcases/{testCaseId}"),
            [new TemplateParam("projectId", request.ProjectId), new TemplateParam("testCaseId", request.TestCaseId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TestCase>(),
            GetTestCaseError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Test Cases in a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestCaseListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTestCasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all test cases defined within a specific test project. Each test case represents a single test scenario with preconditions, steps, and expected results. Supports pagination and filtering. Requires the TM.TestCases or TM.TestCases.Read OAuth scope.
    /// </remarks>
    public Task<TestCaseListResponse> ListTestCases(ListTestCasesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects/{projectId}/testcases"),
            [new TemplateParam("projectId", request.ProjectId)],
            [new Param("page", request.Page), new Param("pageSize", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TestCaseListResponse>(),
            ListTestCasesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
