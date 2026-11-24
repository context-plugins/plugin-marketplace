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
using Contentstack.Requests.VoiceProfiles;

namespace Contentstack.Api;

/// <summary>
/// Voice Profiles define the writing style, tone, and persona characteristics for AI content generation within a Brand Kit. Multiple voice profiles can be created to support different content contexts or audiences.
/// </summary>
public sealed class VoiceProfiles
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal VoiceProfiles(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Voice Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VoiceProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateVoiceProfileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Voice Profile within a Brand Kit defining the writing style, tone characteristics, persona guidelines, and example content for AI generation.
    /// </remarks>
    public Task<VoiceProfile> CreateVoiceProfile(CreateVoiceProfileOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits/{brand_kit_uid}/voice-profiles"),
            [new TemplateParam("brand_kit_uid", request.BrandKitUid)],
            [],
            [
                new HeaderParam("organization_uid", request.OrganizationUid),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VoiceProfile>(),
            CreateVoiceProfileError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Voice Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteVoiceProfileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently removes a Voice Profile from the Brand Kit. This action cannot be undone.
    /// </remarks>
    public Task DeleteVoiceProfile(DeleteVoiceProfileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}"),
            [
                new TemplateParam("brand_kit_uid", request.BrandKitUid),
                new TemplateParam("profile_uid", request.ProfileUid),
            ],
            [],
            [
                new HeaderParam("organization_uid", request.OrganizationUid),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteVoiceProfileError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all Voice Profiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VoiceProfileList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllVoiceProfilesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all Voice Profiles associated with a specific Brand Kit. Voice Profiles define the writing style and tone used in AI content generation for that Brand Kit.
    /// </remarks>
    public Task<VoiceProfileList> GetAllVoiceProfiles(GetAllVoiceProfilesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi("/v1/brand-kits/{brand_kit_uid}/voice-profiles"),
            [new TemplateParam("brand_kit_uid", request.BrandKitUid)],
            [],
            [new HeaderParam("organization_uid", request.OrganizationUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VoiceProfileList>(),
            GetAllVoiceProfilesError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Voice Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VoiceProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVoiceProfileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the full configuration of a specific Voice Profile including style guidelines, tone settings, and example content.
    /// </remarks>
    public Task<VoiceProfile> GetVoiceProfile(GetVoiceProfileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}"),
            [
                new TemplateParam("brand_kit_uid", request.BrandKitUid),
                new TemplateParam("profile_uid", request.ProfileUid),
            ],
            [],
            [new HeaderParam("organization_uid", request.OrganizationUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VoiceProfile>(),
            GetVoiceProfileError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Voice Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VoiceProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateVoiceProfileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration of an existing Voice Profile including style guidelines and tone characteristics.
    /// </remarks>
    public Task<VoiceProfile> UpdateVoiceProfile(UpdateVoiceProfileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackBrandKitManagementBrandKitsApi(
                "/v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}"),
            [
                new TemplateParam("brand_kit_uid", request.BrandKitUid),
                new TemplateParam("profile_uid", request.ProfileUid),
            ],
            [],
            [
                new HeaderParam("organization_uid", request.OrganizationUid),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VoiceProfile>(),
            UpdateVoiceProfileError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
