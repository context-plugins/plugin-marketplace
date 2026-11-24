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
using Hud.Requests.MemberSecrets;

namespace Hud.Api;

public sealed class MemberSecrets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal MemberSecrets(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Member Secret
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MemberSecretItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMemberSecretV2MemberSecretsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set a personal secret, creating it or updating an existing one by name.
    /// </remarks>
    public Task<MemberSecretItem> CreateMemberSecretV2MemberSecretsPost(CreateMemberSecretV2MemberSecretsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/member-secrets"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MemberSecretItem>(),
            CreateMemberSecretV2MemberSecretsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Member Secret
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteMemberSecretV2MemberSecretsSecretIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a personal secret.
    /// </remarks>
    public Task DeleteMemberSecretV2MemberSecretsSecretIdDelete(DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/member-secrets/{secret_id}"),
            [new TemplateParam("secret_id", request.SecretId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteMemberSecretV2MemberSecretsSecretIdDeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Member Secrets
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MemberSecretsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMemberSecretsV2MemberSecretsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the caller's personal secrets with masked values.
    /// </remarks>
    public Task<MemberSecretsListResponse> ListMemberSecretsV2MemberSecretsGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/member-secrets"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MemberSecretsListResponse>(),
            ListMemberSecretsV2MemberSecretsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Member Secret
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MemberSecretItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMemberSecretV2MemberSecretsSecretIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a personal secret's value.
    /// </remarks>
    public Task<MemberSecretItem> UpdateMemberSecretV2MemberSecretsSecretIdPatch(UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/member-secrets/{secret_id}"),
            [new TemplateParam("secret_id", request.SecretId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MemberSecretItem>(),
            UpdateMemberSecretV2MemberSecretsSecretIdPatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
