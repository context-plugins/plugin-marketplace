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
using Fillo.Requests.WorkspaceApi;

namespace Fillo.Api;

public sealed class WorkspaceApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WorkspaceApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Disable identity verification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageProjectIdentityResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisableIdentityVerificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete the project identity secret. Forms that hold unverified submissions stop protecting themselves and the secret cannot be recovered, so this is destructive (Tier C): <c>confirm</c> must equal the project's slug (a value fetched from the project read, never a word the caller already knows). Forms that still require verified respondents block the change with a 409. Scope: workspace:manage; the key acts as the human who minted it.
    /// </remarks>
    public Task<ApiV1ManageProjectIdentityResponse2> DisableIdentityVerification(DisableIdentityVerificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/project/identity"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageProjectIdentityResponse2>(),
            DisableIdentityVerificationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enable identity verification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageProjectIdentityResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnableIdentityVerificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mint the project identity secret so forms can require signed identify() calls and hold unverified submissions. Outward-facing (Tier B). The plaintext is returned EXACTLY ONCE and is never retrievable again. Minting into an occupied slot is refused: verification that was already on answers <c>minted: false</c> with no <c>secret</c>, so enabling twice can never read an existing secret back. Scope: workspace:manage; the key acts as the human who minted it (403 once they are no longer an owner or admin).
    /// </remarks>
    public Task<ApiV1ManageProjectIdentityResponse1> EnableIdentityVerification(EnableIdentityVerificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/project/identity"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageProjectIdentityResponse1>(),
            EnableIdentityVerificationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the code-sync policy
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageProjectCodeSyncResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCodeSyncPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Report the code-sync policy in force for the key's project: <c>publishable_key</c> (the browser key may stage from an allowed origin) or <c>trusted_only</c> (an authenticated sync token is required). Tier A. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageProjectCodeSyncResponse> GetCodeSyncPolicy(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/project/code-sync"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageProjectCodeSyncResponse>(),
            GetCodeSyncPolicyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get identity-verification status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageProjectIdentityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIdentityVerificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Whether the project verifies respondent identities, and how many forms depend on it. Never returns the secret. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageProjectIdentityResponse> GetIdentityVerification(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/project/identity"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageProjectIdentityResponse>(),
            GetIdentityVerificationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List allowed sync origins
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageProjectOriginsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAllowedOriginsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The origins the project's publishable key may stage code-defined drafts from. An empty list means any origin. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageProjectOriginsResponse> ListAllowedOrigins(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/project/origins"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageProjectOriginsResponse>(),
            ListAllowedOriginsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rename the project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageProjectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RenameProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rename the key's project. The optional <c>project</c> selector exists for body-shape parity with the CLI and may only name the key's own project by id, slug, or name — anything else 404s, including a sibling project in the same workspace. Tier A. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageProjectResponse> RenameProject(RenameProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/project"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageProjectResponse>(),
            RenameProjectError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rename the workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageWorkspaceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RenameWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rename the billing workspace. Ids, keys, member access, and every live form URL stay exactly as they are, which keeps this routine (Tier A). Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageWorkspaceResponse> RenameWorkspace(RenameWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/workspace"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageWorkspaceResponse>(),
            RenameWorkspaceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace the allowed sync origins
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageProjectOriginsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetAllowedOriginsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replace the whole allow-list. An empty array means any origin may stage with the publishable key, which widens who can act — outward-facing (Tier B). Every entry must be a bare http(s) origin, so a path, query, or credential in the value is a 400. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageProjectOriginsResponse> SetAllowedOrigins(SetAllowedOriginsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/project/origins"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageProjectOriginsResponse>(),
            SetAllowedOriginsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set the code-sync policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageProjectCodeSyncResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetCodeSyncPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Choose who may stage code-defined schemas for this project: <c>publishable_key</c> lets the browser key stage from an allowed origin, <c>trusted_only</c> requires an authenticated sync token. This changes who can act, so it is outward-facing (Tier B). The write takes the project's code-sync lock, so it is serialized against in-flight syncs. Scope: workspace:manage.
    /// </remarks>
    public Task<ApiV1ManageProjectCodeSyncResponse> SetCodeSyncPolicy(SetCodeSyncPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/project/code-sync"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageProjectCodeSyncResponse>(),
            SetCodeSyncPolicyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
