using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Users;

namespace DoiT.Api;

/// <summary>
/// Manage users who have access to the DoiT platform.
/// </summary>
public sealed class Users
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Users(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel invite
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CancelInviteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelInviteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Marks the invite as <c>Cancelled</c> and invalidates the invite token so any outstanding email
    /// links stop working. The invite document is retained (soft cancel) — the user row remains
    /// visible in <c>GET /iam/v1/users</c> with <c>inviteStatus: Cancelled</c>. Use <c>DELETE /iam/v1/users/{id}</c>
    /// to fully remove the record.
    /// <para>
    /// Returns <c>404</c> if no invite exists for the given ID, and <c>409</c> if the invite is already cancelled.
    /// </para>
    /// <para>
    /// Requires <c>usersManager</c> permission.
    /// </para>
    /// </remarks>
    public Task<CancelInviteResponse> CancelInvite(CancelInviteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/users/{id}/actions/cancel"),
            [new TemplateParam("id", request.Id)],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CancelInviteResponse>(),
            CancelInviteError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteUserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a user.
    /// </remarks>
    public Task<DeleteUserResponse> DeleteUser(DeleteUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/users/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<DeleteUserResponse>(),
            DeleteUserError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Invite user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InviteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InviteUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Invites a new user to the organization with specified role and organization.
    /// </remarks>
    public Task<InviteResponse> InviteUser(InviteUserOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/users/invite"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<InviteResponse>(),
            InviteUserError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListUsersResponseBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of users in the organization, including both active users and invited users.
    /// When the <c>email</c> query parameter is provided, returns only the user matching that email address.
    /// If no user is found for the given email, an empty list is returned.
    /// </remarks>
    public Task<ListUsersResponseBody> ListUsers(ListUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/users"),
            [],
            [new Param("email", request.Email)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListUsersResponseBody>(),
            ListUsersError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resend invite
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResendInviteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResendInviteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resets the invite expiry to 48 hours from now, invalidates the previous invite token (so
    /// old email links stop working), and triggers a fresh invitation email. Works on invites in
    /// any state including <c>Cancelled</c> — resending a cancelled invite reactivates it to <c>Pending</c>.
    /// <para>
    /// Returns <c>404</c> if no invite exists for the given ID (never created, or already accepted and removed).
    /// </para>
    /// <para>
    /// Requires <c>usersManager</c> permission.
    /// </para>
    /// </remarks>
    public Task<ResendInviteResponse> ResendInvite(ResendInviteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/users/{id}/actions/resend"),
            [new TemplateParam("id", request.Id)],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ResendInviteResponse>(),
            ResendInviteError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateUserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates user information, including name, job function, phone, language, and role.
    /// </remarks>
    public Task<UpdateUserResponse> UpdateUser(UpdateUserOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/users/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateUserResponse>(),
            UpdateUserError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
