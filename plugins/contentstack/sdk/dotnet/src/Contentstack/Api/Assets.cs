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
using Contentstack.Requests.Assets;

namespace Contentstack.Api;

/// <summary>
/// Assets are media files such as images, videos, and documents stored in the Contentstack asset library.
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
    /// Get all assets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AssetList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllAssetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches a list of all published assets in the stack including images, videos, and documents. Supports pagination, filtering, and field selection.
    /// </remarks>
    public Task<AssetList> GetAllAssets(GetAllAssetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/assets"),
            [],
            [
                new Param("skip", request.Skip),
                new Param("limit", request.Limit),
                new Param("include_count", request.IncludeCount),
            ],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AssetList>(),
            GetAllAssetsError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a single asset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Asset"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSingleAssetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a specific asset by its UID, returning all metadata including file URL, dimensions, file size, and content type.
    /// </remarks>
    public Task<Asset> GetSingleAsset(GetSingleAssetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/assets/{asset_uid}"),
            [new TemplateParam("asset_uid", request.AssetUid)],
            [],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Asset>(),
            GetSingleAssetError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload an asset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Asset2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadAssetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uploads a new asset file to the stack. Supports multipart form data for the file upload along with metadata such as title, description, and tags.
    /// </remarks>
    public Task<Asset2> UploadAsset(UploadAssetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/assets"),
            [],
            [],
            [
                new HeaderParam("api_key", request.ApiKey),
                new HeaderParam("authtoken", request.Authtoken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("asset[upload]", request.AssetUpload),
                new MultipartParam("asset[title]", request.AssetTitle),
                new MultipartParam("asset[description]", request.AssetDescription)),
            JsonResponse.Create<Asset2>(),
            UploadAssetError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);
}
