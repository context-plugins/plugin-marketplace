using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.ScimUsers;

namespace Contentstack.Api;

/// <summary>
/// SCIM user endpoints enable Identity Providers to provision, update, and deprovision user accounts within a Contentstack organization following the SCIM 2.0 User schema.
/// </summary>
public sealed class ScimUsers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ScimUsers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a SCIM user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimUser"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateScimUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provisions a new user in the Contentstack organization via SCIM. The user is created with the attributes provided in the SCIM User resource and assigned to the organization's default role unless group mappings specify otherwise.
    /// </remarks>
    public Task<ScimUser> CreateScimUser(CreateScimUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi("/scim/v2.0/organizations/{organization_uid}/Users"),
            [new TemplateParam("organization_uid", request.OrganizationUid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScimUser>(),
            CreateScimUserError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a SCIM user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimUser"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScimUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the SCIM User resource for a specific user by their SCIM user ID within the organization.
    /// </remarks>
    public Task<ScimUser> GetScimUser(GetScimUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi("/scim/v2.0/organizations/{organization_uid}/Users/{user_id}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("user_id", request.UserId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScimUser>(),
            GetScimUserError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List SCIM users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListScimUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all users in the organization following the SCIM 2.0 ListResponse format. Supports filtering by userName (email address) using the filter query parameter for user lookup during IdP sync operations.
    /// </remarks>
    public Task<ScimListResponse> ListScimUsers(ListScimUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi("/scim/v2.0/organizations/{organization_uid}/Users"),
            [new TemplateParam("organization_uid", request.OrganizationUid)],
            [new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScimListResponse>(),
            ListScimUsersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a SCIM user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimUser"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceScimUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fully replaces a SCIM user resource with the provided attributes. All attributes not included in the request will be cleared or reset to defaults following SCIM 2.0 PUT semantics.
    /// </remarks>
    public Task<ScimUser> ReplaceScimUser(ReplaceScimUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi("/scim/v2.0/organizations/{organization_uid}/Users/{user_id}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("user_id", request.UserId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScimUser>(),
            ReplaceScimUserError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a SCIM user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimUser"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateScimUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially updates a SCIM user resource using SCIM 2.0 PATCH operations. Commonly used to activate or deactivate users by setting the active attribute, or to update specific profile attributes without replacing the entire resource.
    /// </remarks>
    public Task<ScimUser> UpdateScimUser(UpdateScimUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi("/scim/v2.0/organizations/{organization_uid}/Users/{user_id}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("user_id", request.UserId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScimUser>(),
            UpdateScimUserError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
