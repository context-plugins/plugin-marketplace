using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.Users;

namespace Bill.Api;

public sealed class Users
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Users(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new user.
    /// <para>
    /// See Budgets and Users in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<UserResponseDto> CreateUser(CreateUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/users"),
            [],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UserResponseDto>(),
            CreateUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing user.
    /// </remarks>
    public Task DeleteUser(DeleteUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get current user details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCurrentUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about the current user. This is the user that generated the Spend &amp; Expense API token.
    /// </remarks>
    public Task<UserResponseDto> GetCurrentUser(GetCurrentUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/users/current"),
            [],
            [],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UserResponseDto>(),
            GetCurrentUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get user details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing user.
    /// </remarks>
    public Task<UserResponseDto> GetUser(GetUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UserResponseDto>(),
            GetUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationResponseDtoUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of user objects in the current user's company. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </remarks>
    public Task<PaginationResponseDtoUserResponseDto> ListUsers(ListUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/users"),
            [],
            [
                new Param("nextPage", request.NextPage),
                new Param("prevPage", request.PrevPage),
                new Param("max", request.Max),
                new Param("filters", request.Filters),
            ],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationResponseDtoUserResponseDto>(),
            ListUsersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing user.
    /// </remarks>
    public Task<UserResponseDto> UpdateUser(UpdateUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UserResponseDto>(),
            UpdateUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
