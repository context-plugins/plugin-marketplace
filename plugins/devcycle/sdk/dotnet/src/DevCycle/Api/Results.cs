using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Models;
using DevCycle.Requests.Results;

namespace DevCycle.Api;

public sealed class Results
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Results(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Project Variable Evaluations (unique user)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResultProjectEvaluationsByHourDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResultsControllerGetEvaluationsPerHourByProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch unique user variable evaluations per hour for a project
    /// </remarks>
    public Task<ResultProjectEvaluationsByHourDto> ResultsControllerGetEvaluationsPerHourByProject(ResultsControllerGetEvaluationsPerHourByProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/results/evaluations"),
            [new TemplateParam("project", request.Project)],
            [
                new Param("startDate", request.StartDate),
                new Param("endDate", request.EndDate),
                new Param("environment", request.Environment),
                new Param("period", request.Period),
                new Param("sdkType", request.SdkType),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResultProjectEvaluationsByHourDto>(),
            ResultsControllerGetEvaluationsPerHourByProjectError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Feature Variable Evaluations (total)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResultEvaluationsByHourDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResultsControllerGetTotalEvaluationsPerHourByFeatureError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch total variable evaluations per hour for a feature
    /// </remarks>
    public Task<ResultEvaluationsByHourDto> ResultsControllerGetTotalEvaluationsPerHourByFeature(ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/results/total-evaluations"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [
                new Param("startDate", request.StartDate),
                new Param("endDate", request.EndDate),
                new Param("platform", request.Platform),
                new Param("variable", request.Variable),
                new Param("environment", request.Environment),
                new Param("period", request.Period),
                new Param("sdkType", request.SdkType),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResultEvaluationsByHourDto>(),
            ResultsControllerGetTotalEvaluationsPerHourByFeatureError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Project Variable Evaluations (total)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResultProjectEvaluationsByHourDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResultsControllerGetTotalEvaluationsPerHourByProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch total variable evaluations per hour for a project
    /// </remarks>
    public Task<ResultProjectEvaluationsByHourDto> ResultsControllerGetTotalEvaluationsPerHourByProject(ResultsControllerGetTotalEvaluationsPerHourByProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/results/total-evaluations"),
            [new TemplateParam("project", request.Project)],
            [
                new Param("startDate", request.StartDate),
                new Param("endDate", request.EndDate),
                new Param("environment", request.Environment),
                new Param("period", request.Period),
                new Param("sdkType", request.SdkType),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResultProjectEvaluationsByHourDto>(),
            ResultsControllerGetTotalEvaluationsPerHourByProjectError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
