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
using Contentstack.Requests.EntryVariants;

namespace Contentstack.Api;

/// <summary>
/// Entry variants are customized versions of an entry created for personalization or A/B testing purposes.
/// </summary>
public sealed class EntryVariants
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal EntryVariants(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get all entry variants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntryVariantList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllEntryVariantsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all personalization variants of a specific entry, including their variant UIDs and customized field values.
    /// </remarks>
    public Task<EntryVariantList> GetAllEntryVariants(GetAllEntryVariantsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}/entries/{entry_uid}/variants"),
            [
                new TemplateParam("content_type_uid", request.ContentTypeUid),
                new TemplateParam("entry_uid", request.EntryUid),
            ],
            [],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntryVariantList>(),
            GetAllEntryVariantsError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a single entry variant
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntryVariant"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSingleEntryVariantError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a specific variant of an entry identified by the variant UID. Returns the customized field values for that variant.
    /// </remarks>
    public Task<EntryVariant> GetSingleEntryVariant(GetSingleEntryVariantRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi(
                "/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}"),
            [
                new TemplateParam("content_type_uid", request.ContentTypeUid),
                new TemplateParam("entry_uid", request.EntryUid),
                new TemplateParam("variant_uid", request.VariantUid),
            ],
            [],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntryVariant>(),
            GetSingleEntryVariantError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);
}
