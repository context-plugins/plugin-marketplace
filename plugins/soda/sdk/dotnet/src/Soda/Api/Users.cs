using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Exceptions;
using Soda.Core.Models;
using Soda.Core.Request;
using Soda.Core.Response;
using Soda.Errors;
using Soda.Models;
using Soda.Requests.Users;

namespace Soda.Api;

/// <summary>
/// Soda Cloud API Users Endpoints
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
    /// Delete user group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1UserGroupsUserGroupIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to delete an existing user group from your organization's Soda Cloud account.
    /// <para>
    /// In case of success, the response returns a <c>200</c> (OK) response.
    /// </para>
    /// <para>
    /// In case user group is not found, the response returns a <c>404</c> (Not found) response.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage organization settings</b> permission can update user groups.<b>See Manage global roles for more information.</b>
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Users</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<object> DeleteApiV1UserGroupsUserGroupId(DeleteApiV1UserGroupsUserGroupIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/userGroups/{userGroupId}"),
            [new TemplateParam("userGroupId", request.UserGroupId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteApiV1UserGroupsUserGroupIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get user groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiUserGroupsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1UserGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather information about the user groups in your organization's Soda Cloud account, including lists of members.
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>search</c>: Optionally, use this parameter to perform a fuzzy search on the user group name.</description></item>
    /// </list>
    /// <para>
    /// If not specified, the query gathers information for all user groups in the account and sorts the results by user group name in ascending order.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Any Soda Cloud user in your organization may execute this query.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Users</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiUserGroupsResponse> GetApiV1UserGroups(GetApiV1UserGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/userGroups"),
            [],
            [new Param("page", request.Page), new Param("search", request.Search), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiUserGroupsResponse>(),
            GetApiV1UserGroupsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get user group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserGroupContentDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1UserGroupsUserGroupIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather information about a single user group in your organization's Soda Cloud account, including lists of members.
    /// <para>
    /// This GET is a non-paginated API that returns a single organization based on its ID.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Any Soda Cloud user in your organization may execute this query.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Users</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<UserGroupContentDto> GetApiV1UserGroupsUserGroupId(GetApiV1UserGroupsUserGroupIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/userGroups/{userGroupId}"),
            [new TemplateParam("userGroupId", request.UserGroupId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UserGroupContentDto>(),
            GetApiV1UserGroupsUserGroupIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiUsersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1UsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to gather information about the users in your organization's Soda Cloud account.
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 1 and 1000, inclusive. The default value is 1000.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>search</c>: Optionally, use this parameter to perform a fuzzy search on the user first name, last name, or email address.</description></item>
    /// </list>
    /// <para>
    /// If not specified, the query gathers information for all users in the account and sorts the results by user name in ascending order.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Any Soda Cloud user in your organization may execute this query.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Users</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiUsersResponse> GetApiV1Users(GetApiV1UsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/users"),
            [],
            [new Param("page", request.Page), new Param("search", request.Search), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiUsersResponse>(),
            GetApiV1UsersError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create user group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1UserGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to create a new user group in your organization's Soda Cloud account.
    /// <para>
    /// The Response of this call, when successful, is <c>201</c> and contains headers <c>Location</c> which is a reference to the newly created User Group.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage organization settings</b> permission can update user groups.<b>See Manage global roles for more information.</b>
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Users</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1UserGroups(PostApiV1UserGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/userGroups"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostApiV1UserGroupsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update user group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserGroupContentDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1UserGroupsUserGroupIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to update an existing user group in your organization's Soda Cloud account.
    /// <para>
    /// The Response of this call, when successful, is <c>200</c> and contains updated User Group details.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage organization settings</b> permission can update user groups.<b>See Manage global roles for more information.</b>
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Users</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<UserGroupContentDto> PostApiV1UserGroupsUserGroupId(PostApiV1UserGroupsUserGroupIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/userGroups/{userGroupId}"),
            [new TemplateParam("userGroupId", request.UserGroupId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UserGroupContentDto>(),
            PostApiV1UserGroupsUserGroupIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Invite users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiInviteUserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1UsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint enables you to invite users to your organization's Soda Cloud account.
    /// <para>
    /// Invited users will receive an email with a link to set their password and join your organization in Soda Cloud. Once they complete the setup, they will have access to Soda Cloud based on the roles and permissions you assign.
    /// </para>
    /// <para>
    /// If your organization is using SSO, invited users will receive an invitation email with a link to Soda Cloud. When they log in using SSO, they are immediately added to the Soda Cloud organization.
    /// </para>
    /// <para>
    /// You can invite up to 10 users per request. The response contains lists of successful and failed invitations.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Users</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiInviteUserResponse> PostApiV1Users(PostApiV1UsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/users"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiInviteUserResponse>(),
            PostApiV1UsersError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disable user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1UsersUserIdDisableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint disables a user in your organization's Soda Cloud account.
    /// <para>
    /// Disabling a user deactivates their membership in the organization. The user is not deleted and can be reactivated later.
    /// </para>
    /// <para>
    /// Users in SSO-enabled organizations cannot be disabled via this endpoint, as they are managed by the identity provider.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Users</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<object> PostApiV1UsersUserIdDisable(PostApiV1UsersUserIdDisableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/users/{userId}/disable"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            PostApiV1UsersUserIdDisableError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);
}
