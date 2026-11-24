using System;
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
using DevCycle.Requests.UserProfiles;

namespace DevCycle.Api;

public sealed class UserProfiles
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal UserProfiles(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create or Update User Profile for the Current User in the specified Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectUserProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UserProfilesControllerCreateOrUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create or Update a User Profile for Overrides
    /// </remarks>
    public Task<ProjectUserProfile> UserProfilesControllerCreateOrUpdate(UserProfilesControllerCreateOrUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/userProfile/current"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectUserProfile>(),
            UserProfilesControllerCreateOrUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get User Profile for the Current User in the specified Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectUserProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UserProfilesControllerFindAllError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get User Profile for the authenticated User in the specified Project
    /// </remarks>
    public Task<ProjectUserProfile> UserProfilesControllerFindAll(UserProfilesControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/userProfile/current"),
            [new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectUserProfile>(),
            UserProfilesControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
