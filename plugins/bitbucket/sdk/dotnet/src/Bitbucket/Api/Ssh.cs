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
using Bitbucket.Requests.Ssh;

namespace Bitbucket.Api;

/// <summary>
/// The SSH resource allows you to manage SSH keys.
/// </summary>
public sealed class Ssh
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Ssh(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a SSH key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteUsersBySelectedUserSshKeysByKeyIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific SSH public key from a user's account.
    /// </remarks>
    public Task DeleteUsersBySelectedUserSshKeysByKeyId(DeleteUsersBySelectedUserSshKeysByKeyIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/ssh-keys/{key_id}"),
            [new TemplateParam("key_id", request.KeyId), new TemplateParam("selected_user", request.SelectedUser)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteUsersBySelectedUserSshKeysByKeyIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List SSH keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedSshUserKeys"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersBySelectedUserSshKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of the user's SSH public keys.
    /// </remarks>
    public Task<PaginatedSshUserKeys> GetUsersBySelectedUserSshKeys(GetUsersBySelectedUserSshKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/ssh-keys"),
            [new TemplateParam("selected_user", request.SelectedUser)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedSshUserKeys>(),
            GetUsersBySelectedUserSshKeysError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a SSH key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SshAccountKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersBySelectedUserSshKeysByKeyIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a specific SSH public key belonging to a user.
    /// </remarks>
    public Task<SshAccountKey> GetUsersBySelectedUserSshKeysByKeyId(GetUsersBySelectedUserSshKeysByKeyIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/ssh-keys/{key_id}"),
            [new TemplateParam("key_id", request.KeyId), new TemplateParam("selected_user", request.SelectedUser)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SshAccountKey>(),
            GetUsersBySelectedUserSshKeysByKeyIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a new SSH key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SshAccountKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostUsersBySelectedUserSshKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a new SSH public key to the specified user account and returns the resulting key.
    /// <para>
    /// Example:
    /// </para>
    /// <code>
    /// $ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
    /// </code>
    /// </remarks>
    public Task<SshAccountKey> PostUsersBySelectedUserSshKeys(PostUsersBySelectedUserSshKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/ssh-keys"),
            [new TemplateParam("selected_user", request.SelectedUser)],
            [new Param("expires_on", request.ExpiresOn)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SshAccountKey>(),
            PostUsersBySelectedUserSshKeysError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a SSH key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SshAccountKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutUsersBySelectedUserSshKeysByKeyIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a specific SSH public key on a user's account
    /// <para>
    /// Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.
    /// </para>
    /// <para>
    /// Example:
    /// </para>
    /// <code>
    /// $ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
    /// </code>
    /// </remarks>
    public Task<SshAccountKey> PutUsersBySelectedUserSshKeysByKeyId(PutUsersBySelectedUserSshKeysByKeyIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/ssh-keys/{key_id}"),
            [new TemplateParam("key_id", request.KeyId), new TemplateParam("selected_user", request.SelectedUser)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SshAccountKey>(),
            PutUsersBySelectedUserSshKeysByKeyIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
