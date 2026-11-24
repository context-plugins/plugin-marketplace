using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fillo.Core;
using Fillo.Core.Exceptions;
using Fillo.Core.Models;
using Fillo.Core.Request;
using Fillo.Core.Response;
using Fillo.Errors;
using Fillo.Models;
using Fillo.Requests.Members;

namespace Fillo.Api;

public sealed class Members
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Members(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel an invitation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageMembersInvitesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelWorkspaceInvitationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a pending invitation. The invite link stops working immediately, and inviting the address again starts fresh, which keeps this routine (Tier A). The key acts as the human who minted it, exactly as the other member routes do, and the id is scoped to the key's workspace first, so an invitation belonging to another workspace 404s indistinguishably from an unknown one. Scope: members:manage.
    /// </remarks>
    public Task<ApiV1ManageMembersInvitesResponse1> CancelWorkspaceInvitation(CancelWorkspaceInvitationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/members/invites/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageMembersInvitesResponse1>(),
            CancelWorkspaceInvitationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Invite a member
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageMembersInvitesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InviteWorkspaceMemberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Invite someone to the workspace by email, with an optional role (defaults to member). They receive an email and can join with that role, which makes this outward-facing (Tier B). An <c>fsk_</c> key has no session, so it acts as the human who minted it: their live role is the anti-escalation ceiling — a key can never invite above what its creator could grant today — and a key whose creator was removed or demoted is refused with 403. Scope: members:manage.
    /// </remarks>
    public Task<ApiV1ManageMembersInvitesResponse> InviteWorkspaceMember(InviteWorkspaceMemberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/members/invites"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageMembersInvitesResponse>(),
            InviteWorkspaceMemberError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List workspace members
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceMembers"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWorkspaceMembersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The workspace's members and its pending, unexpired invitations, so an agent can resolve the id or email the member endpoints need. Never returns credentials. Tier A. Scope: members:manage.
    /// </remarks>
    public Task<WorkspaceMembers> ListWorkspaceMembers(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/members"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceMembers>(),
            ListWorkspaceMembersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a member
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageMembersResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveWorkspaceMemberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove someone from the workspace. They lose access to every project immediately and re-inviting them starts over, so this is destructive (Tier C): <c>confirm</c> must equal the member's email address — the one human-readable id a manager can verify. The key acts as the human who minted it, and the workspace's last owner can never be removed. Scope: members:manage.
    /// </remarks>
    public Task<ApiV1ManageMembersResponse1> RemoveWorkspaceMember(RemoveWorkspaceMemberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/members/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageMembersResponse1>(),
            RemoveWorkspaceMemberError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change a member's role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageMembersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetMemberRoleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Change a member's workspace role. Their access changes immediately across every project, which makes this outward-facing (Tier B). An <c>fsk_</c> key has no session, so it acts as the human who minted it: their live role is the anti-escalation ceiling, a key whose creator was removed or demoted is refused with 403, and the workspace's last owner can never be demoted. Scope: members:manage.
    /// </remarks>
    public Task<ApiV1ManageMembersResponse> SetMemberRole(SetMemberRoleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/members/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageMembersResponse>(),
            SetMemberRoleError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
