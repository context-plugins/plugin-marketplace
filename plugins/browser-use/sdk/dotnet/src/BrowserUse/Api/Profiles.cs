using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BrowserUse.Core;
using BrowserUse.Core.Exceptions;
using BrowserUse.Core.Models;
using BrowserUse.Core.Request;
using BrowserUse.Core.Response;
using BrowserUse.Errors;
using BrowserUse.Models;
using BrowserUse.Requests.Profiles;

namespace BrowserUse.Api;

public sealed class Profiles
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Profiles(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProfileView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProfileProfilesPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Profiles allow you to preserve the state of the browser between tasks.
    /// <para>
    /// They are most commonly used to allow users to preserve the log-in state in the agent between tasks.
    /// You'd normally create one profile per user and then use it for all their tasks.
    /// </para>
    /// <para>
    /// You can set a <c>user_id</c> when creating a profile to associate it with a user in your system.
    /// This allows you to later search for the profile using the GET /profiles endpoint with a query parameter.
    /// </para>
    /// </remarks>
    public Task<ProfileView> CreateProfileProfilesPost(CreateProfileProfilesPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/profiles"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProfileView>(),
            CreateProfileProfilesPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Browser Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBrowserProfileProfilesProfileIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a browser profile and its configuration.
    /// </remarks>
    public Task DeleteBrowserProfileProfilesProfileIdDelete(DeleteBrowserProfileProfilesProfileIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/profiles/{profile_id}"),
            [new TemplateParam("profile_id", request.ProfileId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteBrowserProfileProfilesProfileIdDeleteError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProfileView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProfileProfilesProfileIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get profile details.
    /// </remarks>
    public Task<ProfileView> GetProfileProfilesProfileIdGet(GetProfileProfilesProfileIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/profiles/{profile_id}"),
            [new TemplateParam("profile_id", request.ProfileId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProfileView>(),
            GetProfileProfilesProfileIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Profiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProfileListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListProfilesProfilesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get paginated list of profiles.
    /// <para>
    /// Use the <c>query</c> parameter to search profiles by name or user_id.
    /// This is useful when you have many profiles and need to find a specific user.
    /// </para>
    /// <para>
    /// Example: If you set <c>user_id</c> to your internal user identifier when creating profiles,
    /// you can later search for that user by passing their identifier as the <c>query</c> parameter.
    /// </para>
    /// </remarks>
    public Task<ProfileListResponse> ListProfilesProfilesGet(ListProfilesProfilesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/profiles"),
            [],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageNumber", request.PageNumber),
                new Param("query", request.Query),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProfileListResponse>(),
            ListProfilesProfilesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProfileView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateProfileProfilesProfileIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a browser profile's information.
    /// </remarks>
    public Task<ProfileView> UpdateProfileProfilesProfileIdPatch(UpdateProfileProfilesProfileIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/profiles/{profile_id}"),
            [new TemplateParam("profile_id", request.ProfileId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProfileView>(),
            UpdateProfileProfilesProfileIdPatchError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
