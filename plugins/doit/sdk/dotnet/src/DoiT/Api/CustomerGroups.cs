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
using DoiT.Requests.CustomerGroups;

namespace DoiT.Api;

/// <summary>
/// Manage explicit, named groups of downstream customers and the users scoped to them.
/// </summary>
public sealed class CustomerGroups
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CustomerGroups(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Assign a user to a customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssignCustomerGroupUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Assigns a user to a customer group owned by the authenticated tenant. Requires the UsersManager permission.
    /// </remarks>
    public Task AssignCustomerGroupUser(AssignCustomerGroupUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups/{customerGroupId}/users/{userId}"),
            [
                new TemplateParam("customerGroupId", request.CustomerGroupId),
                new TemplateParam("userId", request.UserId),
            ],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AssignCustomerGroupUserError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Assign a user group to a customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssignCustomerGroupUserGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Assigns a user group owned by the authenticated tenant to a customer group owned by that tenant. Membership changes in the user group apply without reassigning it. Requires the UsersManager permission.
    /// </remarks>
    public Task AssignCustomerGroupUserGroup(AssignCustomerGroupUserGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}"),
            [
                new TemplateParam("customerGroupId", request.CustomerGroupId),
                new TemplateParam("userGroupId", request.UserGroupId),
            ],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AssignCustomerGroupUserGroupError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a customer group owned by the authenticated tenant. Requires the UsersManager permission.
    /// </remarks>
    public Task<CustomerGroup> CreateCustomerGroup(CreateCustomerGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups"),
            [],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerGroup>(),
            CreateCustomerGroupError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomerGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a customer group owned by the authenticated tenant. Groups with assigned users or user groups cannot be deleted. Requires the UsersManager permission.
    /// </remarks>
    public Task DeleteCustomerGroup(DeleteCustomerGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups/{customerGroupId}"),
            [new TemplateParam("customerGroupId", request.CustomerGroupId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCustomerGroupError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a customer group owned by the authenticated tenant. Requires the UsersManager permission.
    /// </remarks>
    public Task<CustomerGroup> GetCustomerGroup(GetCustomerGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups/{customerGroupId}"),
            [new TemplateParam("customerGroupId", request.CustomerGroupId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerGroup>(),
            GetCustomerGroupError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List user groups assigned to a customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroupUserGroupsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomerGroupUserGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the user groups assigned to a customer group owned by the authenticated tenant, sorted by user-group ID. Requires the UsersManager permission.
    /// </remarks>
    public Task<CustomerGroupUserGroupsResponse> ListCustomerGroupUserGroups(ListCustomerGroupUserGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups/{customerGroupId}/user-groups"),
            [new TemplateParam("customerGroupId", request.CustomerGroupId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerGroupUserGroupsResponse>(),
            ListCustomerGroupUserGroupsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List users assigned to a customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroupUsersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomerGroupUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the users assigned to a customer group owned by the authenticated tenant, sorted by user ID. Requires the UsersManager permission.
    /// </remarks>
    public Task<CustomerGroupUsersResponse> ListCustomerGroupUsers(ListCustomerGroupUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups/{customerGroupId}/users"),
            [new TemplateParam("customerGroupId", request.CustomerGroupId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerGroupUsersResponse>(),
            ListCustomerGroupUsersError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List customer groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroupsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomerGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the ready customer groups owned by the authenticated tenant. Requires the UsersManager permission.
    /// </remarks>
    public Task<CustomerGroupsResponse> ListCustomerGroups(ListCustomerGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups"),
            [],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerGroupsResponse>(),
            ListCustomerGroupsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unassign a user from a customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnassignCustomerGroupUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Unassigns a user from a customer group owned by the authenticated tenant. Requires the UsersManager permission.
    /// </remarks>
    public Task UnassignCustomerGroupUser(UnassignCustomerGroupUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups/{customerGroupId}/users/{userId}"),
            [
                new TemplateParam("customerGroupId", request.CustomerGroupId),
                new TemplateParam("userId", request.UserId),
            ],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UnassignCustomerGroupUserError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unassign a user group from a customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnassignCustomerGroupUserGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Unassigns a user group from a customer group owned by the authenticated tenant. Requires the UsersManager permission.
    /// </remarks>
    public Task UnassignCustomerGroupUserGroup(UnassignCustomerGroupUserGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups/{customerGroupId}/user-groups/{userGroupId}"),
            [
                new TemplateParam("customerGroupId", request.CustomerGroupId),
                new TemplateParam("userGroupId", request.UserGroupId),
            ],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UnassignCustomerGroupUserGroupError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomerGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the name, customer membership, or both for a customer group owned by the authenticated tenant. Requires the UsersManager permission.
    /// </remarks>
    public Task<CustomerGroup> UpdateCustomerGroup(UpdateCustomerGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customer-groups/{customerGroupId}"),
            [new TemplateParam("customerGroupId", request.CustomerGroupId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerGroup>(),
            UpdateCustomerGroupError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
