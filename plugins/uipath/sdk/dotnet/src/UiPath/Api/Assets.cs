using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.Assets;

namespace UiPath.Api;

/// <summary>
/// Manage shared assets such as credentials, text values, integers, and boolean values
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
    /// UiPath Create an Asset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Asset"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAssetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new asset in the current folder. The asset type determines the kind of value stored: Text, Integer, Bool, or Credential. Credential assets store username and password pairs securely.
    /// </remarks>
    public Task<Asset> CreateAsset(CreateAssetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Assets"),
            [],
            [],
            [
                new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Asset>(),
            CreateAssetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Delete an Asset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAssetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes an asset from the current folder by its unique integer identifier. This action cannot be undone. Processes that reference this asset will fail until the asset is recreated.
    /// </remarks>
    public Task DeleteAsset(DeleteAssetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Assets({key})"),
            [new TemplateParam("key", request.Key)],
            [],
            [
                new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAssetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Get an Asset by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Asset"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAssetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single asset by its unique integer identifier. Returns the full asset definition including type, value, and folder scope.
    /// </remarks>
    public Task<Asset> GetAsset(GetAssetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Assets({key})"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Asset>(),
            GetAssetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Assets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataAssetCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAssetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of assets defined in the current folder. Assets store shared values such as credentials, text, integers, and booleans that can be consumed by automation processes. Supports OData filtering and pagination.
    /// </remarks>
    public Task<ODataAssetCollection> ListAssets(ListAssetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Assets"),
            [],
            [new Param("$filter", request.Filter), new Param("$top", request.Top), new Param("$skip", request.Skip)],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataAssetCollection>(),
            ListAssetsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Update an Asset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Asset"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAssetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing asset by its unique integer identifier. The full asset object must be provided in the request body with the updated values.
    /// </remarks>
    public Task<Asset> UpdateAsset(UpdateAssetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Assets({key})"),
            [new TemplateParam("key", request.Key)],
            [],
            [
                new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Asset>(),
            UpdateAssetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
