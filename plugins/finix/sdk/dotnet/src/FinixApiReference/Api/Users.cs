using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.Users;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>User</c> resource represents a pair of API keys which are used to perform authenticated requests against the Finix API. When making authenticated requests via HTTP basic access authentication the ID of a <c>User</c> resource maps to the username, while the <c>password</c> corresponds to the password (i.e. secret key).
/// <para>
/// The password field for a <c>User</c> resource is only returned during the initial creation. Any following GET requests to the resource returns the <c>password</c> field as <b>null</b> for security purposes.
/// </para>
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/additional-resources/developers/resources-and-payment-flows/key-resources#account-structure">Account Structure</see>
/// </para>
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
    /// Fetch a User by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>User</c>.
    /// </remarks>
    public Task<User> GetUser(GetUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_id}"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<User>(),
            GetUserError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListUsers"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>User</c> resources.
    /// </remarks>
    public Task<ListUsers> ListUsers(ListUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users"),
            [],
            [
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListUsers>(),
            ListUsersError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a <c>User</c> with new tags or disable the <c>User</c> and their credentials.
    /// </remarks>
    public Task<User> UpdateUser(UpdateUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_id}"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<User>(),
            UpdateUserError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
