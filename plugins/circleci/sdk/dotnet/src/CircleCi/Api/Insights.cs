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
using CircleCi.Requests.Insights;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for retrieving workflow and job metrics, summary data, and test performance insights.
/// </summary>
public sealed class Insights
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Insights(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get project workflow metrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightsWorkflowMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectWorkflowMetricsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns summary metrics for the workflows of a given project, including success rates, duration metrics, and throughput.
    /// </remarks>
    public Task<InsightsWorkflowMetrics> GetProjectWorkflowMetrics(GetProjectWorkflowMetricsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/insights/{project-slug}/workflows"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [
                new Param("branch", request.Branch),
                new Param("reporting-window", request.ReportingWindow),
                new Param("page-token", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightsWorkflowMetrics>(),
            GetProjectWorkflowMetricsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get workflow job metrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightsJobMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkflowJobMetricsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns summary metrics for the jobs within a named workflow, including success rates and duration metrics.
    /// </remarks>
    public Task<InsightsJobMetrics> GetWorkflowJobMetrics(GetWorkflowJobMetricsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/insights/{project-slug}/workflows/{workflow-name}/jobs"),
            [
                new TemplateParam("project-slug", request.ProjectSlug),
                new TemplateParam("workflow-name", request.WorkflowName),
            ],
            [
                new Param("branch", request.Branch),
                new Param("reporting-window", request.ReportingWindow),
                new Param("page-token", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightsJobMetrics>(),
            GetWorkflowJobMetricsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get recent runs of a workflow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightsWorkflowRuns"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkflowRunsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns recent runs of a named workflow, containing status, duration, and credits consumed.
    /// </remarks>
    public Task<InsightsWorkflowRuns> GetWorkflowRuns(GetWorkflowRunsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/insights/{project-slug}/workflows/{workflow-name}"),
            [
                new TemplateParam("project-slug", request.ProjectSlug),
                new TemplateParam("workflow-name", request.WorkflowName),
            ],
            [new Param("branch", request.Branch), new Param("page-token", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightsWorkflowRuns>(),
            GetWorkflowRunsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get test metrics for a workflow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightsTestMetrics"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkflowTestMetricsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns test metrics for a named workflow, including most frequently failing tests and slowest tests.
    /// </remarks>
    public Task<InsightsTestMetrics> GetWorkflowTestMetrics(GetWorkflowTestMetricsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi(
                "/insights/{project-slug}/workflows/{workflow-name}/test-metrics"),
            [
                new TemplateParam("project-slug", request.ProjectSlug),
                new TemplateParam("workflow-name", request.WorkflowName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightsTestMetrics>(),
            GetWorkflowTestMetricsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
