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
using DoiT.Requests.Roles;

namespace DoiT.Api;

/// <summary>
/// Manage user permissions and access levels in your organization.
/// </summary>
public sealed class Roles
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Roles(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RoleDoiTRolesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRoleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a custom role in the authenticated customer with the given permission IDs. Permission IDs are the <c>permissions</c> values returned by <c>GET /iam/v1/roles</c>. A service account of a parent tenant can create the role in a descendant tenant by setting <c>X-Tenant-Id</c> to that tenant's customer ID. Requires the <c>Idempotency-Key</c> header so a retried request does not create a second role.
    /// </remarks>
    public Task<RoleDoiTRolesApi> CreateRole(CreateRoleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/roles"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RoleDoiTRolesApi>(),
            CreateRoleError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRoleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a custom role. Preset roles cannot be deleted, and a role still assigned to users or groups must be unassigned first. A service account of a parent tenant can delete a descendant tenant's role by setting <c>X-Tenant-Id</c> to that tenant's customer ID.
    /// </remarks>
    public Task DeleteRole(DeleteRoleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/roles/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRoleError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RoleDoiTRolesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRoleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single role by ID. Preset roles are visible to every customer; a custom role is returned only to the customer that owns it. A service account of a parent tenant can read a descendant tenant's role by setting <c>X-Tenant-Id</c> to that tenant's customer ID.
    /// </remarks>
    public Task<RoleDoiTRolesApi> GetRole(GetRoleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/roles/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RoleDoiTRolesApi>(),
            GetRoleError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List roles
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IamV1RolesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRolesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of roles.
    /// </remarks>
    public Task<IamV1RolesResponse> ListRoles(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/roles"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IamV1RolesResponse>(),
            ListRolesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RoleDoiTRolesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRoleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the <c>name</c>, <c>description</c> and/or <c>permissions</c> of a custom role. Only the fields present in the body change; <c>permissions</c> replaces the full list when present. Preset roles cannot be modified. A service account of a parent tenant can update a descendant tenant's role by setting <c>X-Tenant-Id</c> to that tenant's customer ID.
    /// </remarks>
    public Task<RoleDoiTRolesApi> UpdateRole(UpdateRoleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/roles/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RoleDoiTRolesApi>(),
            UpdateRoleError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
