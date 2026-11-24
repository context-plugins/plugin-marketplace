using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.Users;

namespace UiPath.Api;

/// <summary>
/// Manage users and their roles within Automation Hub
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
    /// UiPath Add a User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a new user to Automation Hub. The user must already exist in the UiPath identity directory. This endpoint assigns the user a role within Automation Hub and makes them available for collaboration and idea submission.
    /// </remarks>
    public Task<User> AddUser(AddUserOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/adduser"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<User>(),
            AddUserError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Create a User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new user account in the UiPath organization. The user will receive an invitation email to set up their credentials. The request must include the user's email address, display name, and the tenants or roles to initially assign. Requires the PM.Users OAuth scope.
    /// </remarks>
    public Task<User2> CreateUser(CreateUserOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/{organizationName}/identity_/api/User"),
            [new TemplateParam("organizationName", request.OrganizationName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<User2>(),
            CreateUserError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Delete a User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a user account from the organization by their unique identifier. This action removes the user from all tenants and revokes their access to UiPath Automation Cloud. This action cannot be undone. Requires the PM.Users OAuth scope.
    /// </remarks>
    public Task DeleteUser(DeleteUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/{organizationName}/identity_/api/User/{userId}"),
            [
                new TemplateParam("organizationName", request.OrganizationName),
                new TemplateParam("userId", request.UserId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteUserError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Edit a User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EditUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing user's properties in Automation Hub, such as their assigned role or active status. The user is identified by their unique ID in the request body.
    /// </remarks>
    public Task<User> EditUser(EditUserOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/edituser"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<User>(),
            EditUserError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataUserCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOdataUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of users registered in Orchestrator. Each user has associated roles, robot configurations, and folder memberships. Supports OData filtering and pagination.
    /// </remarks>
    public Task<ODataUserCollection> GetOdataUsers(GetOdataUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/odata/Users"),
            [],
            [new Param("$filter", request.Filter), new Param("$top", request.Top), new Param("$skip", request.Skip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataUserCollection>(),
            GetOdataUsersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Get a User by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves user account information by the user's unique identifier. Returns user properties including name, email address, active status, and authentication configuration. Requires the PM.Users or PM.Users.Read OAuth scope.
    /// </remarks>
    public Task<User2> GetUser(GetUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/{organizationName}/identity_/api/User/{userId}"),
            [
                new TemplateParam("organizationName", request.OrganizationName),
                new TemplateParam("userId", request.UserId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<User2>(),
            GetUserError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Roles
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RolesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRoles2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the list of roles available in Automation Hub. Each role defines a set of permissions controlling what a user can view and perform within the platform. Roles are assigned when adding or editing users.
    /// </remarks>
    public Task<RolesResponse> ListRoles2(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/roles"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RolesResponse>(),
            ListRoles2Error.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of users registered in Automation Hub. Returns user identifiers, names, email addresses, and assigned roles. Used by administrators to manage user assignments and role configurations.
    /// </remarks>
    public Task<UserListResponse> ListUsers(ListUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathAutomationHubAppInventoryApi("/users"),
            [],
            [new Param("page", request.Page), new Param("pageSize", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UserListResponse>(),
            ListUsersError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
