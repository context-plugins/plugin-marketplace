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
using Hud.Requests.EnvVars;

namespace Hud.Api;

public sealed class EnvVars
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal EnvVars(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Batch Replace Env Vars
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RegistryEnvVarBatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchReplaceEnvVarsV2EnvVarsBatchPutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replace a registry's full env var set with the given variables.
    /// </remarks>
    public Task<RegistryEnvVarBatchResponse> BatchReplaceEnvVarsV2EnvVarsBatchPut(BatchReplaceEnvVarsV2EnvVarsBatchPutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/env-vars/batch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RegistryEnvVarBatchResponse>(),
            BatchReplaceEnvVarsV2EnvVarsBatchPutError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check Env Var Completeness
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RegistryEnvVarCheckResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckEnvVarCompletenessV2EnvVarsCheckPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check whether each registry has all env vars its manifest requires.
    /// </remarks>
    public Task<RegistryEnvVarCheckResponse> CheckEnvVarCompletenessV2EnvVarsCheckPost(CheckEnvVarCompletenessV2EnvVarsCheckPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/env-vars/check"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RegistryEnvVarCheckResponse>(),
            CheckEnvVarCompletenessV2EnvVarsCheckPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Env Var
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RegistryEnvVarItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEnvVarV2EnvVarsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set a registry env var, creating it or updating an existing one by name.
    /// </remarks>
    public Task<RegistryEnvVarItem> CreateEnvVarV2EnvVarsPost(CreateEnvVarV2EnvVarsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/env-vars"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RegistryEnvVarItem>(),
            CreateEnvVarV2EnvVarsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Env Var
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEnvVarV2EnvVarsVarIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a registry env var.
    /// </remarks>
    public Task DeleteEnvVarV2EnvVarsVarIdDelete(DeleteEnvVarV2EnvVarsVarIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/env-vars/{var_id}"),
            [new TemplateParam("var_id", request.VarId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEnvVarV2EnvVarsVarIdDeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Env Vars
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RegistryEnvVarsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEnvVarsV2EnvVarsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List a registry's runtime env vars with masked values.
    /// </remarks>
    public Task<RegistryEnvVarsListResponse> ListEnvVarsV2EnvVarsGet(ListEnvVarsV2EnvVarsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/env-vars"),
            [],
            [new Param("registry_id", request.RegistryId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RegistryEnvVarsListResponse>(),
            ListEnvVarsV2EnvVarsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Env Var
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RegistryEnvVarItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateEnvVarV2EnvVarsVarIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a registry env var's value.
    /// </remarks>
    public Task<RegistryEnvVarItem> UpdateEnvVarV2EnvVarsVarIdPatch(UpdateEnvVarV2EnvVarsVarIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/env-vars/{var_id}"),
            [new TemplateParam("var_id", request.VarId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RegistryEnvVarItem>(),
            UpdateEnvVarV2EnvVarsVarIdPatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
