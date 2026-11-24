using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Requests.ByokCredentials;

namespace Hud.Api;

public sealed class ByokCredentials
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ByokCredentials(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Byok Credential
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ByokCredentialItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateByokCredentialV2ByokCredentialsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create or replace a provider credential for one ownership scope.
    /// </remarks>
    public Task<ByokCredentialItem> CreateByokCredentialV2ByokCredentialsPost(CreateByokCredentialV2ByokCredentialsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/byok-credentials"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ByokCredentialItem>(),
            CreateByokCredentialV2ByokCredentialsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Byok Credential
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disable a BYOK credential and erase its encrypted value.
    /// </remarks>
    public Task DeleteByokCredentialV2ByokCredentialsCredentialIdDelete(DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/byok-credentials/{credential_id}"),
            [new TemplateParam("credential_id", request.CredentialId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Byok Credentials
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ByokCredentialsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListByokCredentialsV2ByokCredentialsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the caller's personal and team BYOK credentials with masked values.
    /// </remarks>
    public Task<ByokCredentialsListResponse> ListByokCredentialsV2ByokCredentialsGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/byok-credentials"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ByokCredentialsListResponse>(),
            ListByokCredentialsV2ByokCredentialsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Byok Credential
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ByokCredentialItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rotate a BYOK credential without exposing its plaintext value.
    /// </remarks>
    public Task<ByokCredentialItem> UpdateByokCredentialV2ByokCredentialsCredentialIdPatch(UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/byok-credentials/{credential_id}"),
            [new TemplateParam("credential_id", request.CredentialId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ByokCredentialItem>(),
            UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
