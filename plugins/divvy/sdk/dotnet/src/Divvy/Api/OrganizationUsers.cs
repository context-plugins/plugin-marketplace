using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.OrganizationUsers;

namespace Divvy.Api;

public sealed class OrganizationUsers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal OrganizationUsers(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveOrganizationUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing user. In the response, the <c>archived</c> field is set as <c>true</c>."
    /// <para>
    /// You can restore an archived user with <c>POST /v3/users/{userId}/restore</c>. There is no change when you archive an archived user.
    /// </para>
    /// </remarks>
    public Task<OrganizationUserResponseDto> ArchiveOrganizationUser(ArchiveOrganizationUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/users/{userId}/archive"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationUserResponseDto>(),
            ArchiveOrganizationUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOrganizationUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new user. The currently signed-in user must have the <c>ADMINISTRATOR</c> user role in the BILL organization to perform this operation.
    /// <para>
    /// When you create a user, BILL sends an email to the user for them to complete their sign-up. After user sign-up is complete, the user can access features in your BILL organization depending on the user role.
    /// </para>
    /// <para>
    /// See Organizations and Users in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<OrganizationUserResponseDto> CreateOrganizationUser(CreateOrganizationUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/users"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrganizationUserResponseDto>(),
            CreateOrganizationUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get user details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing user.
    /// </remarks>
    public Task<OrganizationUserResponseDto> GetOrganizationUser(GetOrganizationUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationUserResponseDto>(),
            GetOrganizationUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoOrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListOrganizationUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of user objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoOrganizationUserResponseDto> ListOrganizationUsers(ListOrganizationUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/users"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoOrganizationUserResponseDto>(),
            ListOrganizationUsersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreOrganizationUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived user. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// <para>
    /// You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.
    /// </para>
    /// </remarks>
    public Task<OrganizationUserResponseDto> RestoreOrganizationUser(RestoreOrganizationUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/users/{userId}/restore"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationUserResponseDto>(),
            RestoreOrganizationUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateOrganizationUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing user.
    /// </remarks>
    public Task<OrganizationUserResponseDto> UpdateOrganizationUser(UpdateOrganizationUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrganizationUserResponseDto>(),
            UpdateOrganizationUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
