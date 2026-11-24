using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Errors;
using Bitbucket.Models;
using Bitbucket.Models.AllOf;
using Bitbucket.Requests.Gpg;

namespace Bitbucket.Api;

/// <summary>
/// The GPG resource allows you to manage GPG keys.
/// </summary>
public sealed class Gpg
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Gpg(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a GPG key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteUsersBySelectedUserGpgKeysByFingerprintError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific GPG public key from a user's account.
    /// </remarks>
    public Task DeleteUsersBySelectedUserGpgKeysByFingerprint(DeleteUsersBySelectedUserGpgKeysByFingerprintRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/gpg-keys/{fingerprint}"),
            [
                new TemplateParam("fingerprint", request.Fingerprint),
                new TemplateParam("selected_user", request.SelectedUser),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteUsersBySelectedUserGpgKeysByFingerprintError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List GPG keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedGpgUserKeys"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersBySelectedUserGpgKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of the user's GPG public keys.
    /// The <c>key</c> and <c>subkeys</c> fields can also be requested from the endpoint.
    /// See Partial Responses for more details.
    /// </remarks>
    public Task<PaginatedGpgUserKeys> GetUsersBySelectedUserGpgKeys(GetUsersBySelectedUserGpgKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/gpg-keys"),
            [new TemplateParam("selected_user", request.SelectedUser)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedGpgUserKeys>(),
            GetUsersBySelectedUserGpgKeysError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a GPG key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GpgAccountKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersBySelectedUserGpgKeysByFingerprintError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a specific GPG public key belonging to a user.
    /// The <c>key</c> and <c>subkeys</c> fields can also be requested from the endpoint.
    /// See Partial Responses for more details.
    /// </remarks>
    public Task<GpgAccountKey> GetUsersBySelectedUserGpgKeysByFingerprint(GetUsersBySelectedUserGpgKeysByFingerprintRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/gpg-keys/{fingerprint}"),
            [
                new TemplateParam("fingerprint", request.Fingerprint),
                new TemplateParam("selected_user", request.SelectedUser),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GpgAccountKey>(),
            GetUsersBySelectedUserGpgKeysByFingerprintError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a new GPG key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GpgAccountKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostUsersBySelectedUserGpgKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a new GPG public key to the specified user account and returns the resulting key.
    /// <para>
    /// Example:
    /// </para>
    /// <code>
    /// $ curl -X POST -H "Content-Type: application/json" -d
    /// '{"key": ""}'
    /// https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys
    /// </code>
    /// </remarks>
    public Task<GpgAccountKey> PostUsersBySelectedUserGpgKeys(PostUsersBySelectedUserGpgKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/gpg-keys"),
            [new TemplateParam("selected_user", request.SelectedUser)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GpgAccountKey>(),
            PostUsersBySelectedUserGpgKeysError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
