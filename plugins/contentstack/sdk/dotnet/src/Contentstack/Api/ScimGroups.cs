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
using Contentstack.Requests.ScimGroups;

namespace Contentstack.Api;

/// <summary>
/// SCIM group endpoints allow Identity Providers to manage group memberships in Contentstack, which map to role-based access control within the CMS.
/// </summary>
public sealed class ScimGroups
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ScimGroups(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a SCIM group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateScimGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new group in the Contentstack organization via SCIM. Groups can be mapped to specific roles and stacks in Contentstack to control member access permissions.
    /// </remarks>
    public Task<ScimGroup> CreateScimGroup(CreateScimGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi("/scim/v2.0/organizations/{organization_uid}/Groups"),
            [new TemplateParam("organization_uid", request.OrganizationUid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScimGroup>(),
            CreateScimGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a SCIM group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteScimGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a SCIM group from the Contentstack organization. Members of the group retain their individual user accounts but lose the role permissions granted by the group mapping.
    /// </remarks>
    public Task DeleteScimGroup(DeleteScimGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("group_id", request.GroupId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteScimGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a SCIM group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScimGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the SCIM Group resource for a specific group by its SCIM group ID within the organization.
    /// </remarks>
    public Task<ScimGroup> GetScimGroup(GetScimGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("group_id", request.GroupId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScimGroup>(),
            GetScimGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List SCIM groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListScimGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all groups in the organization following the SCIM 2.0 ListResponse format. Supports filtering by displayName for group lookup during IdP sync operations.
    /// </remarks>
    public Task<ScimListResponse> ListScimGroups(ListScimGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi("/scim/v2.0/organizations/{organization_uid}/Groups"),
            [new TemplateParam("organization_uid", request.OrganizationUid)],
            [new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScimListResponse>(),
            ListScimGroupsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a SCIM group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceScimGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fully replaces a SCIM group resource including all member assignments. Use this to synchronize the complete group membership from the IdP.
    /// </remarks>
    public Task<ScimGroup> ReplaceScimGroup(ReplaceScimGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("group_id", request.GroupId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScimGroup>(),
            ReplaceScimGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a SCIM group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateScimGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially updates a SCIM group using SCIM 2.0 PATCH operations. Commonly used to add or remove individual members from the group without replacing the entire membership list.
    /// </remarks>
    public Task<ScimGroup> UpdateScimGroup(UpdateScimGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("group_id", request.GroupId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScimGroup>(),
            UpdateScimGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
