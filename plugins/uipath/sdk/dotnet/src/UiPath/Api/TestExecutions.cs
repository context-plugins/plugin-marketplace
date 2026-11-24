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
using UiPath.Requests.TestExecutions;

namespace UiPath.Api;

/// <summary>
/// Retrieve test execution results and logs
/// </summary>
public sealed class TestExecutions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TestExecutions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Test Executions in a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestExecutionListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTestExecutionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves test execution results within a specific test project. Test executions represent runs of test sets and contain the aggregate pass/fail status across all included test cases. References to individual test case log objects are included for drill-down.
    /// </remarks>
    public Task<TestExecutionListResponse> ListTestExecutions(ListTestExecutionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects/{projectId}/testexecutions"),
            [new TemplateParam("projectId", request.ProjectId)],
            [new Param("page", request.Page), new Param("pageSize", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TestExecutionListResponse>(),
            ListTestExecutionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
