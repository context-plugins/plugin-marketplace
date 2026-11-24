using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Airtable.Core;
using Airtable.Core.Exceptions;
using Airtable.Core.Models;
using Airtable.Core.Request;
using Airtable.Core.Response;
using Airtable.Errors;
using Airtable.Models;
using Airtable.Requests.Users;

namespace Airtable.Api;

/// <summary>
/// SCIM user provisioning and management
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
    /// Airtable Create a SCIM User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimUser"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateScimUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provisions a new user in Airtable through the SCIM protocol. The user will be added to the enterprise account. SSO must be configured as Airtable does not allow setting passwords through SCIM.
    /// </remarks>
    public Task<ScimUser> CreateScimUser(CreateScimUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Users"),
            [],
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
    /// Airtable Delete a SCIM User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteScimUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a SCIM user resource from the enterprise account. The user will lose access to all Airtable resources associated with the enterprise.
    /// </remarks>
    public Task DeleteScimUser(DeleteScimUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteScimUserError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Get a SCIM User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimUser"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScimUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single SCIM user resource by its unique identifier. Returns the complete user profile including name, email, and active status.
    /// </remarks>
    public Task<ScimUser> GetScimUser(GetScimUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
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
    /// Airtable List SCIM Users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimUserListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListScimUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of SCIM user resources. Supports filtering by user attributes and pagination using startIndex and count parameters per the SCIM 2.0 specification.
    /// </remarks>
    public Task<ScimUserListResponse> ListScimUsers(ListScimUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Users"),
            [],
            [
                new Param("filter", request.Filter),
                new Param("startIndex", request.StartIndex),
                new Param("count", request.Count),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScimUserListResponse>(),
            ListScimUsersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Replace a SCIM User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimUser"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceScimUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replaces a SCIM user resource entirely. All attributes are overwritten with the values in the request body. This is a full replacement, not a partial update.
    /// </remarks>
    public Task<ScimUser> ReplaceScimUser(ReplaceScimUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
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
    /// Airtable Update a SCIM User (partial)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimUser"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateScimUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially updates a SCIM user resource using SCIM PATCH operations. Supports add, replace, and remove operations on user attributes. Commonly used to activate or deactivate users.
    /// </remarks>
    public Task<ScimUser> UpdateScimUser(UpdateScimUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
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
