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
using Contentstack.Requests.BrandKits;

namespace Contentstack.Api;

/// <summary>
/// Brand Kits are centralized repositories for an organization's brand identity assets, guidelines, and AI configuration. They are used to ensure consistent brand voice and style across AI-generated content.
/// </summary>
public sealed class BrandKits
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BrandKits(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Brand Kit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BrandKit"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBrandKitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Brand Kit in the organization with brand identity configuration including name, description, guidelines, and associated metadata.
    /// </remarks>
    public Task<BrandKit> CreateBrandKit(CreateBrandKitOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits"),
            [],
            [],
            [
                new HeaderParam("organization_uid", request.OrganizationUid),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BrandKit>(),
            CreateBrandKitError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Brand Kit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBrandKitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently removes a Brand Kit from the organization including all associated voice profiles and knowledge vault content.
    /// </remarks>
    public Task DeleteBrandKit(DeleteBrandKitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits/{brand_kit_uid}"),
            [new TemplateParam("brand_kit_uid", request.BrandKitUid)],
            [],
            [
                new HeaderParam("organization_uid", request.OrganizationUid),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteBrandKitError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all Brand Kits
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BrandKitList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllBrandKitsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all Brand Kits in the organization with pagination support and optional filtering. Each Brand Kit contains brand identity information used for AI content generation.
    /// </remarks>
    public Task<BrandKitList> GetAllBrandKits(GetAllBrandKitsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits"),
            [],
            [new Param("skip", request.Skip), new Param("limit", request.Limit)],
            [new HeaderParam("organization_uid", request.OrganizationUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BrandKitList>(),
            GetAllBrandKitsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Brand Kit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BrandKit"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBrandKitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the full details of a specific Brand Kit including its brand identity configuration, voice profiles, and associated knowledge vault content.
    /// </remarks>
    public Task<BrandKit> GetBrandKit(GetBrandKitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits/{brand_kit_uid}"),
            [new TemplateParam("brand_kit_uid", request.BrandKitUid)],
            [],
            [new HeaderParam("organization_uid", request.OrganizationUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BrandKit>(),
            GetBrandKitError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Brand Kit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BrandKit"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBrandKitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration and brand identity information for an existing Brand Kit.
    /// </remarks>
    public Task<BrandKit> UpdateBrandKit(UpdateBrandKitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits/{brand_kit_uid}"),
            [new TemplateParam("brand_kit_uid", request.BrandKitUid)],
            [],
            [
                new HeaderParam("organization_uid", request.OrganizationUid),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BrandKit>(),
            UpdateBrandKitError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
