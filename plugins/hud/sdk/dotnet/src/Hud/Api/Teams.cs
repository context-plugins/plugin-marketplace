using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Requests.Teams;

namespace Hud.Api;

public sealed class Teams
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Teams(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Invite Team Members
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamInviteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InviteTeamMembersV2TeamInvitationsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Invite email addresses to the caller's team; admin only.
    /// </remarks>
    public Task<TeamInviteResponse> InviteTeamMembersV2TeamInvitationsPost(InviteTeamMembersV2TeamInvitationsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/team/invitations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TeamInviteResponse>(),
            InviteTeamMembersV2TeamInvitationsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Team Invitations
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamInvitationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTeamInvitationsV2TeamInvitationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the caller team's pending invitations; admin only.
    /// </remarks>
    public Task<TeamInvitationsResponse> ListTeamInvitationsV2TeamInvitationsGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/team/invitations"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TeamInvitationsResponse>(),
            ListTeamInvitationsV2TeamInvitationsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Team Members
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamMembersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTeamMembersV2TeamMembersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the members of the caller's team.
    /// </remarks>
    public Task<TeamMembersResponse> ListTeamMembersV2TeamMembersGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/team/members"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TeamMembersResponse>(),
            ListTeamMembersV2TeamMembersGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Team Members
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamMemberBatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveTeamMembersV2TeamMembersBatchRemovePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove other members from the caller's team and revoke their API keys; admin only.
    /// </remarks>
    public Task<TeamMemberBatchResponse> RemoveTeamMembersV2TeamMembersBatchRemovePost(RemoveTeamMembersV2TeamMembersBatchRemovePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/team/members/batch-remove"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TeamMemberBatchResponse>(),
            RemoveTeamMembersV2TeamMembersBatchRemovePostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revoke Team Invitations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamInvitationRevokeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Revoke pending invitations to the caller's team; admin only.
    /// </remarks>
    public Task<TeamInvitationRevokeResponse> RevokeTeamInvitationsV2TeamInvitationsBatchRevokePost(RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/team/invitations/batch-revoke"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TeamInvitationRevokeResponse>(),
            RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Team Member Roles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TeamMemberBatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTeamMemberRolesV2TeamMembersBatchRolePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set the role of other members of the caller's team; admin only.
    /// </remarks>
    public Task<TeamMemberBatchResponse> UpdateTeamMemberRolesV2TeamMembersBatchRolePost(UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/team/members/batch-role"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TeamMemberBatchResponse>(),
            UpdateTeamMemberRolesV2TeamMembersBatchRolePostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
