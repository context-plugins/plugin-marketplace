using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BundleSocial.Core;
using BundleSocial.Core.Exceptions;
using BundleSocial.Core.Models;
using BundleSocial.Core.Request;
using BundleSocial.Core.Response;
using BundleSocial.Errors;
using BundleSocial.Models;
using BundleSocial.Requests.TeamApi;

namespace BundleSocial.Api;

public sealed class TeamApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TeamApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create new team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TeamResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TeamCreateTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new team in your organization. Create one team per brand, client, or workspace you want to keep separate, then connect social accounts to it.
    /// </remarks>
    public Task<ApiV1TeamResponse1> TeamCreateTeam(TeamCreateTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/team/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1TeamResponse1>(),
            TeamCreateTeamError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TeamResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TeamDeleteTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a team along with its connected social accounts, posts, and uploads. This cannot be undone.
    /// </remarks>
    public Task<ApiV1TeamResponse1> TeamDeleteTeam(TeamDeleteTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/team/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TeamResponse1>(),
            TeamDeleteTeamError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of teams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TeamResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TeamGetListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the teams in your organization with pagination. Use this to discover team IDs, which are required by most publishing and analytics endpoints.
    /// </remarks>
    public Task<ApiV1TeamResponse3> TeamGetList(TeamGetListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/team/"),
            [],
            [
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("search", request.Search),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TeamResponse3>(),
            TeamGetListError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TeamResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TeamGetTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single team with its connected social accounts and settings. Teams are the container that social accounts, posts, and uploads belong to.
    /// </remarks>
    public Task<ApiV1TeamResponse> TeamGetTeam(TeamGetTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/team/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TeamResponse>(),
            TeamGetTeamError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TeamResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TeamUpdateTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a team's name, avatar, time zone, or other settings. Only the fields you send are changed.
    /// </remarks>
    public Task<ApiV1TeamResponse1> TeamUpdateTeam(TeamUpdateTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/team/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1TeamResponse1>(),
            TeamUpdateTeamError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
