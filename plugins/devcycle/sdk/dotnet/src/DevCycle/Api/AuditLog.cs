using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Extensions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Models;
using DevCycle.Requests.AuditLog;

namespace DevCycle.Api;

public sealed class AuditLog
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AuditLog(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get Audit Log For Feature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="AuditLogEntity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AuditLogControllerFindAllError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<AuditLogEntity>> AuditLogControllerFindAll(AuditLogControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/features/{feature}/audit"),
            [new TemplateParam("feature", request.Feature), new TemplateParam("project", request.Project)],
            [
                new Param("page", request.Page),
                new Param("perPage", request.PerPage),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("environment", request.Environment),
                new Param("a0_user", request.A0User),
                new Param("startDate", request.StartDate?.ToIso8601()),
                new Param("endDate", request.EndDate?.ToIso8601()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<AuditLogEntity>>(),
            AuditLogControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
