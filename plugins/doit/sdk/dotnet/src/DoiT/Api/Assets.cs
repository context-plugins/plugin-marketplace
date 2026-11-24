using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Assets;

namespace DoiT.Api;

/// <summary>
/// Manage cloud resources or services in your cloud environment.
/// </summary>
public sealed class Assets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Assets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an asset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AssetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAssetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new asset.
    /// </remarks>
    public Task<AssetResponse> CreateAsset(CreateAssetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/createAsset"),
            [],
            [
                new Param("type", request.Type),
                new Param("mode", request.Mode),
                new Param("accountName", request.AccountName),
                new Param("rootEmail", request.RootEmail),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<AssetResponse>(),
            CreateAssetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve an asset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AssetItemDetailed"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAssetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full details of an asset specified by the asset id.
    /// </remarks>
    public Task<AssetItemDetailed> GetAsset(GetAssetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/assets/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AssetItemDetailed>(),
            GetAssetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an asset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillingV1AssetsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IdOfAssetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing asset, such as G Suite/Workspace or Office 365 subscription, to add or remove licenses.
    /// </remarks>
    public Task<BillingV1AssetsResponse1> IdOfAsset(IdOfAssetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/assets/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BillingV1AssetsResponse1>(),
            IdOfAssetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List assets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillingV1AssetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IdOfAssetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all available customer assets, such as Google Cloud billing accounts, G Suite/Workspace subscriptions, etc.
    /// Assets are returned in reverse chronological order by default.
    /// </remarks>
    public Task<BillingV1AssetsResponse> IdOfAssets(IdOfAssetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/assets"),
            [],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("filter", request.Filter),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BillingV1AssetsResponse>(),
            IdOfAssetsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
