using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.AuthLinks;

namespace Basiq.Api;

public sealed class AuthLinks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AuthLinks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete an auth_link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAuthLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Note that this action cannot be undone.
    /// <para>
    /// The auth_link is a URL that directs a User to Basiq's hosted consent workflow to link banks and securely share data. When the user selects 'I have disclosed all my accounts' the auth_link is automatically deleted.
    /// </para>
    /// <para>
    /// Returns an empty body if the delete succeeded. Otherwise, this call returns an error in the event of a failure.
    /// </para>
    /// </remarks>
    public Task DeleteAuthLink(DeleteAuthLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/auth_link"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAuthLinkError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve an auth_link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersAuthLinkResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAuthLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the latest/last auth_link generated for the specified user. Returns an error otherwise.
    /// </remarks>
    public Task<UsersAuthLinkResponse1> GetAuthLink(GetAuthLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/auth_link"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersAuthLinkResponse1>(),
            GetAuthLinkError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an auth_link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersAuthLinkResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostAuthLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new auth_link object by making a POST request to the auth_link endpoint. The new auth_link will effectively delete previous auth_link for that user, rendering the previous URL(s) invalid.
    /// <para>
    /// The 'mobile' attribute is used for 2FA SMS verification and is conditionally required. If it is not specified, we will look up the mobile on the user object; if that is not specified either, you will get an error. If both are specified, the mobile number on the auth_link will take precedence.
    /// </para>
    /// </remarks>
    public Task<UsersAuthLinkResponse> PostAuthLink(PostAuthLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/auth_link"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UsersAuthLinkResponse>(),
            PostAuthLinkError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
