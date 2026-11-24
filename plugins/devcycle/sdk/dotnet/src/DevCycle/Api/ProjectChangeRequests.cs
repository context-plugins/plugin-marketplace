using System.Collections.Generic;
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
using DevCycle.Requests.ProjectChangeRequests;

namespace DevCycle.Api;

public sealed class ProjectChangeRequests
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ProjectChangeRequests(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get a list of Feature Change Requests for a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="FeatureChangeRequestSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProjectChangeRequestsControllerGetFeatureChangeRequestsError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<FeatureChangeRequestSummary>> ProjectChangeRequestsControllerGetFeatureChangeRequests(ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{project}/change-requests"),
            [new TemplateParam("project", request.Project)],
            [
                new Param("page", request.Page),
                new Param("perPage", request.PerPage),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("createdBy", request.CreatedBy),
                new Param("status", request.Status),
                new Param("reviewer", request.Reviewer),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<FeatureChangeRequestSummary>>(),
            ProjectChangeRequestsControllerGetFeatureChangeRequestsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
