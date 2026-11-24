using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.Users;

namespace Contentstack.Api;

/// <summary>
/// Endpoints for managing Contentstack user accounts including profile updates, password resets, and account activation.
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
    /// Get current user
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the account details of the currently authenticated user, including profile information and organization memberships.
    /// </remarks>
    public Task<User> GetUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/user"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<User>(),
            GetUserError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update current user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates profile information for the currently authenticated user, including first name, last name, and other account attributes.
    /// </remarks>
    public Task<User> UpdateUser(UpdateUserOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/user"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<User>(),
            UpdateUserError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);
}
