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
using Hud.Requests.LimitsApi;

namespace Hud.Api;

public sealed class LimitsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal LimitsApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Spend Limit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SpendLimitItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSpendLimitV2LimitsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a team, member, or API-key limit, or a team percentage alert.
    /// </remarks>
    public Task<SpendLimitItem> CreateSpendLimitV2LimitsPost(CreateSpendLimitV2LimitsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/limits"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SpendLimitItem>(),
            CreateSpendLimitV2LimitsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Spend Limit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSpendLimitV2LimitsLimitIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a spend limit.
    /// </remarks>
    public Task DeleteSpendLimitV2LimitsLimitIdDelete(DeleteSpendLimitV2LimitsLimitIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/limits/{limit_id}"),
            [new TemplateParam("limit_id", request.LimitId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSpendLimitV2LimitsLimitIdDeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Spend Limits
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SpendLimitListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSpendLimitsV2LimitsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the spend limits visible to the caller with current-period spend.
    /// </remarks>
    public Task<SpendLimitListResponse> ListSpendLimitsV2LimitsGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/limits"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SpendLimitListResponse>(),
            ListSpendLimitsV2LimitsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reset Spend Limit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SpendLimitItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResetSpendLimitV2LimitsLimitIdResetPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start a new spend window on a blocking limit. Ledger rows are unchanged.
    /// </remarks>
    public Task<SpendLimitItem> ResetSpendLimitV2LimitsLimitIdResetPost(ResetSpendLimitV2LimitsLimitIdResetPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/limits/{limit_id}/reset"),
            [new TemplateParam("limit_id", request.LimitId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<SpendLimitItem>(),
            ResetSpendLimitV2LimitsLimitIdResetPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Spend Limit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SpendLimitItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSpendLimitV2LimitsLimitIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an absolute amount, percentage threshold, or enabled state.
    /// </remarks>
    public Task<SpendLimitItem> UpdateSpendLimitV2LimitsLimitIdPatch(UpdateSpendLimitV2LimitsLimitIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/limits/{limit_id}"),
            [new TemplateParam("limit_id", request.LimitId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SpendLimitItem>(),
            UpdateSpendLimitV2LimitsLimitIdPatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
