using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CodeQr.Core;
using CodeQr.Core.Exceptions;
using CodeQr.Core.Models;
using CodeQr.Core.Request;
using CodeQr.Core.Response;
using CodeQr.Errors;
using CodeQr.Models;
using CodeQr.Requests.Projects;

namespace CodeQr.Api;

public sealed class Projects
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Projects(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a project for the authenticated user.
    /// </remarks>
    public Task<Project> GetProject(GetProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{projectSlug}"),
            [new TemplateParam("projectSlug", request.ProjectSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Project>(),
            GetProjectError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a list of projects
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of projects for the authenticated user.
    /// </remarks>
    public Task<IReadOnlyList<Project>> GetProjects(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Project>>(),
            GetProjectsError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);
}
